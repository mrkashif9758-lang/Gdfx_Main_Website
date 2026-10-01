import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const PulseGridCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Purple & Indigo Tech Palette
    const theme = {
      purplePrimary: '#a855f7',
      accentIndigo: '#6366f1',
      violetGlow: '#c084fc',
      connections: 'rgba(168, 85, 247,',
      darkBg: '#030712'
    };

    const particles = [];
    const particleCount = Math.min(80, Math.floor(window.innerWidth * window.innerHeight / 2500));

    const createCluster = (centerX, centerY, count, color) => {
      for (let i = 0; i < count; i++) {
        particles.push({
          x: centerX + (Math.random() - 0.5) * 350,
          y: centerY + (Math.random() - 0.5) * 220,
          size: Math.random() * 1.5 + 1,
          baseX: centerX + (Math.random() - 0.5) * 350,
          baseY: centerY + (Math.random() - 0.5) * 220,
          color: color,
          speed: Math.random() * 0.0015 + 0.0008,
          angle: Math.random() * Math.PI * 2,
          orbitRadius: Math.random() * 40 + 15
        });
      }
    };

    createCluster(canvas.width * 0.25, canvas.height * 0.4, particleCount * 0.3, theme.accentIndigo);
    createCluster(canvas.width * 0.75, canvas.height * 0.5, particleCount * 0.35, theme.purplePrimary);
    createCluster(canvas.width * 0.5, canvas.height * 0.65, particleCount * 0.35, theme.violetGlow);

    for (let i = 0; i < particleCount * 0.4; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1 + 0.5,
        color: theme.purplePrimary,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        isGlobal: true
      });
    }

    const drawTechGrid = () => {
      ctx.strokeStyle = `rgba(168, 85, 247, 0.03)`;
      ctx.lineWidth = 1;
      
      const gridSize = 60;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.fillStyle = theme.darkBg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      drawTechGrid();

      particles.forEach((p, i) => {
        if (p.isGlobal) {
          p.x += p.speedX;
          p.y += p.speedY;
          
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        } else {
          p.angle += p.speed;
          p.x = p.baseX + Math.cos(p.angle) * p.orbitRadius;
          p.y = p.baseY + Math.sin(p.angle) * p.orbitRadius;
        }

        if (mousePos.current.x && mousePos.current.y) {
          const dx = p.x - mousePos.current.x;
          const dy = p.y - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 180) {
            const force = (180 - dist) / 180;
            p.x += (dx / dist) * force * 2;
            p.y += (dy / dist) * force * 2;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = p.color;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        if (!p.isGlobal) {
          particles.slice(i + 1, i + 8).forEach(p2 => {
            if (!p2.isGlobal) {
              const dx = p.x - p2.x;
              const dy = p.y - p2.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              
              if (distance < 160) {
                const opacity = (1 - distance / 160) * 0.15;
                ctx.beginPath();
                ctx.strokeStyle = `${theme.connections}${opacity})`;
                ctx.lineWidth = 0.6;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          });
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: null, y: null };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    animate();
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

const ProjectHeader = () => {
  return (
    <div className="relative min-h-[460px] overflow-hidden flex items-center justify-center text-center px-4 py-28 bg-[#030712]">
      <PulseGridCanvas />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030712]/60 to-[#030712] z-0 pointer-events-none" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center gap-5"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative border border-purple-500/20 backdrop-blur-xl rounded-2xl px-8 py-7 shadow-[0_0_40px_rgba(168,85,247,0.1)] bg-slate-900/70">
          
          <span className="text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full mb-4 inline-block">
            Portfolio Showcase
          </span>

          <motion.h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Our Projects <br className="sm:hidden" /> Case Study
          </motion.h2>

          <motion.div
            className="h-[2px] mt-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ transformOrigin: "center" }}
          />
        </div>

        <motion.p
          className="text-slate-400 text-sm sm:text-base max-w-xl leading-relaxed font-normal"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Built with precision. Delivered with purpose. Every pixel, every result — a case worth studying.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProjectHeader;