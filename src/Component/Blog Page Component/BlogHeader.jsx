import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const NetworkCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const mousePos = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Handle high-DPI displays for sharp rendering
    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();

    // Modern Tech Color Theme
    const theme = {
      primary: "#00f0ff",   // Neon Cyan
      secondary: "#7000ff", // Electric Violet
      accent: "#38bdf8",    // Sky Blue
      darkBg: "#030712",    // Deep Modern Slate/Black
    };

    // Create particles with organic motion
    const particles = [];
    const particleCount = Math.min(90, Math.floor((window.innerWidth * window.innerHeight) / 20000));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        orbitX: window.innerWidth * 0.5 + (Math.random() - 0.5) * window.innerWidth * 0.6,
        orbitY: window.innerHeight * 0.5 + (Math.random() - 0.5) * window.innerHeight * 0.6,
        orbitRadius: Math.random() * 200 + 60,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.0015 + 0.0008,
        color: Math.random() > 0.4 ? theme.primary : theme.secondary,
      });
    }

    // Draw tech grid background
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(56, 189, 248, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 60;

      for (let x = 0; x < window.innerWidth; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }

      for (let y = 0; y < window.innerHeight; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }
    };

    // Animation Loop
    const animate = () => {
      ctx.fillStyle = theme.darkBg;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      drawGrid();

      particles.forEach((p, i) => {
        // Update orbital positions
        p.angle += p.speed;
        const baseX = p.orbitX + Math.cos(p.angle) * p.orbitRadius;
        const baseY = p.orbitY + Math.sin(p.angle) * p.orbitRadius;

        // Interactive mouse response
        if (mousePos.current.x !== null && mousePos.current.y !== null) {
          const dx = baseX - mousePos.current.x;
          const dy = baseY - mousePos.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            p.x = baseX + (dx / dist) * (180 - dist) * 0.3;
            p.y = baseY + (dy / dist) * (180 - dist) * 0.3;
          } else {
            p.x += (baseX - p.x) * 0.04;
            p.y += (baseY - p.y) * 0.04;
          }
        } else {
          p.x += (baseX - p.x) * 0.04;
          p.y += (baseY - p.y) * 0.04;
        }

        // Draw particle glow node
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        gradient.addColorStop(0, p.color);
        gradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 240, 255, ${0.22 * (1 - distance / 130)})`;
            ctx.lineWidth = 0.7;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mousePos.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mousePos.current = { x: null, y: null };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%" }}
      className="absolute top-0 left-0 -z-10 pointer-events-none"
    />
  );
};



const BlogHeader = () => {
  return (
    <section className="relative min-h-[480px] overflow-hidden px-4 py-32  flex items-center justify-center">
      <NetworkCanvas />

      <div className="relative z-10  px-4 w-full text-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative   border border-[#6a8cff30] backdrop-blur-md rounded-xl px-8 py-6 shadow-[0_0_20px_rgba(106,140,255,0.2)] bg-black/50 inline-block">
   <motion.h2
            className="text-white text-4xl sm:text-6xl font-black tracking-wider uppercase leading-none drop-shadow-[0_0_25px_rgba(0,240,255,0.4)]"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#00f0ff] via-[#a855f7] to-[#38bdf8]"
              whileHover={{ scale: 1.03, filter: "brightness(1.2)" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
             Think. Build. Evolve.
            </motion.span>
          </motion.h2>

            {/* Animated signal line */}
            <motion.div
              className="h-[2px] mt-5 bg-gradient-to-r from-[#6a8cff] via-[#b44dff] to-[#6a8cff] w-full animate-pulse"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              style={{ transformOrigin: "left" }}
            />
          </div>

       {/*    <motion.p
            className="P text-gray-300 max-w-[900px] mx-auto mt-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            No fluff. Just practical guides, powerful ideas, and development
            strategies that help you build better software.
          </motion.p> */}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHeader;
