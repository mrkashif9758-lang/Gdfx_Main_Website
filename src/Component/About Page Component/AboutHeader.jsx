import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import logoImage from "/logo_icon.png";

/* =========================
    BACKGROUND CANVAS
========================= */
const NoiseTerrainCanvas = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  const mousePos = useRef({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const theme = {
      primary: "#9333ea",
      secondary: "#c084fc",
      gridColor: "rgba(147, 51, 234, 0.08)",
    };

    let particles = [];

    const createParticles = () => {
      const particleCount = Math.min(
        320,
        Math.floor((window.innerWidth * window.innerHeight) / 2000)
      );

      particles = Array.from({ length: particleCount }, () => ({
        x: (Math.random() - 0.5) * canvas.width * 1.5,
        y: (Math.random() - 0.5) * canvas.height * 1.5,
        z: Math.random() * 500,
        size: Math.random() * 2 + 0.6,
        color: Math.random() > 0.4 ? theme.primary : theme.secondary,
        alpha: Math.random() * 0.6 + 0.2,
      }));
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      createParticles();
    };

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;

      mousePos.current.targetX = x * 40;
      mousePos.current.targetY = y * 40;
    };

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      mousePos.current.x +=
        (mousePos.current.targetX - mousePos.current.x) * 0.05;

      mousePos.current.y +=
        (mousePos.current.targetY - mousePos.current.y) * 0.05;

      /* Clean White Background */
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      /* =========================
          DYNAMIC GRID
      ========================= */
      ctx.strokeStyle = theme.gridColor;
      ctx.lineWidth = 1;

      const gridSpacing = 60;
      const offsetX = mousePos.current.x * 0.3;
      const offsetY = mousePos.current.y * 0.3;

      ctx.beginPath();

      for (
        let x = -gridSpacing;
        x <= width + gridSpacing;
        x += gridSpacing
      ) {
        ctx.moveTo(x + offsetX, 0);
        ctx.lineTo(x + offsetX, height);
      }

      for (
        let y = -gridSpacing;
        y <= height + gridSpacing;
        y += gridSpacing
      ) {
        ctx.moveTo(0, y + offsetY);
        ctx.lineTo(width, y + offsetY);
      }

      ctx.stroke();

      /* =========================
          PARTICLES
      ========================= */
      const cx = width / 2 + mousePos.current.x;
      const cy = height / 2 + mousePos.current.y;

      particles.forEach((particle) => {
        particle.z -= 0.5;

        if (particle.z <= 0) {
          particle.z = 500;
        }

        const scale = 300 / (300 + particle.z);

        const x2d = cx + particle.x * scale;
        const y2d = cy + particle.y * scale;

        if (
          x2d >= 0 &&
          x2d <= width &&
          y2d >= 0 &&
          y2d <= height
        ) {
          ctx.beginPath();
          ctx.globalAlpha = particle.alpha * scale;
          ctx.fillStyle = particle.color;

          ctx.arc(
            x2d,
            y2d,
            Math.max(0.6, particle.size * scale * 2.2),
            0,
            Math.PI * 2
          );

          ctx.fill();
        }
      });

      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

/* =========================
    ABOUT HEADER
========================= */

const AboutHeader = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        flex
        flex-col
        justify-center
        pt-24
        sm:pt-28
        lg:pt-32
        pb-14
        sm:pb-16
      "
    >
      {/* Background Canvas */}
      <div className="absolute inset-0 z-0">
        <NoiseTerrainCanvas />
      </div>

      {/* =========================
          PURPLE AMBIENT GLOWS
      ========================= */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/4
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          sm:w-[650px]
          sm:h-[650px]
          rounded-full
          bg-purple-400
          blur-[160px]
          pointer-events-none
          z-[1]
        "
      />

      {/* =========================
          WATERMARK LOGO
      ========================= */}
      {logoImage && (
        <motion.img
          src={logoImage}
          alt=""
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.03, 0.06, 0.03],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[280px]
            sm:w-[420px]
            lg:w-[580px]
            h-auto
            object-contain
            pointer-events-none
            select-none
            z-[2]
          "
        />
      )}

      {/* =========================
          MAIN CONTENT CONTAINER
      ========================= */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-10
        "
      >
        {/* TOP HEADER ALIGNMENT */}
        <div className="flex flex-col items-center text-center">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              inline-flex
              items-center
              gap-2.5
              px-4
              py-2
              mb-6
              rounded-full
              bg-white/80
              backdrop-blur-md
              border
              border-purple-200/80
              text-purple-700
              text-xs
              sm:text-sm
              font-semibold
              tracking-wide
              shadow-lg
              shadow-purple-500/5
            "
          >
            <span className="relative flex w-2.5 h-2.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-purple-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-purple-600" />
            </span>
            <Sparkles className="w-4 h-4 text-purple-600" />
            Next-Gen Ecosystem & Platforms
          </motion.div>

          {/* Main Headline (Fixed line height & padding to prevent 'g' cutoff) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="
              font-black
              tracking-[-0.03em]
              text-gray-950
              text-[42px]
              sm:text-[64px]
              md:text-[78px]
              lg:text-[92px]
              xl:text-[102px]
              pb-2
            "
          >
            <span className="block leading-[1.05]">Inside Global</span>
            <span
              className="
                block
                mt-2
                leading-[1.1]
                bg-gradient-to-r
                from-[#581c87]
                via-[#9333ea]
                to-[#d8b4fe]
                bg-clip-text
                text-transparent
                filter
                drop-shadow-sm
              "
            >
              DigitalsFx
            </span>
          </motion.h1>
        </div>

        {/* =========================
            GRID SECTION (BENTO STYLE)
        ========================= */}
        <div
          className="
            mt-12
            sm:mt-14
            grid
            grid-cols-1
            lg:grid-cols-12
            gap-6
            items-center
          "
        >
          {/* LEFT CONTENT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="
              lg:col-span-7
              p-6
              sm:p-8
              rounded-3xl
              bg-white/60
              backdrop-blur-xl
              border
              border-purple-100
              shadow-2xl
              shadow-purple-900/5
              relative
            "
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-600 to-purple-400 rounded-l-3xl" />
            
            <h4
              className="
                text-xl
                sm:text-2xl
                font-extrabold
                text-purple-950
                tracking-tight
                leading-tight
              "
            >
              Pioneering Digital Transformation
            </h4>

            <p
              className="
                mt-3
                text-gray-600
                text-sm
                sm:text-base
                leading-relaxed
                font-medium
              "
            >
              We combine cutting-edge technology, creative vision, and rigorous strategy to build scalable platforms that redefine industry standards and drive lasting user engagement.
            </p>

            {/* Action Button */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  px-6
                  py-3
                  rounded-xl
                  bg-purple-600
                  hover:bg-purple-700
                  text-white
                  font-bold
                  text-sm
                  shadow-lg
                  shadow-purple-600/30
                  transition-all
                  cursor-pointer
                "
              >
                Explore Ecosystem
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 py-2">
                <Globe className="w-4 h-4 text-purple-600 animate-spin" />
                Global Standards
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE FEATURE BENTO CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="
              lg:col-span-5
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-1
              gap-3
            "
          >
            {/* Feature 1 */}
            <div
              className="
                p-4
                rounded-2xl
                bg-purple-50/50
                backdrop-blur-md
                border
                border-purple-100/80
                flex
                items-center
                gap-3.5
                shadow-sm
              "
            >
              <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/20">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm sm:text-base">Lightning Fast</h5>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Optimized performance for scale</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div
              className="
                p-4
                rounded-2xl
                bg-purple-50/50
                backdrop-blur-md
                border
                border-purple-100/80
                flex
                items-center
                gap-3.5
                shadow-sm
              "
            >
              <div className="p-2.5 rounded-xl bg-purple-600 text-white shadow-md shadow-purple-500/20">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-gray-900 text-sm sm:text-base">Enterprise Security</h5>
                <p className="text-xs text-gray-500 font-medium mt-0.5">Built with bulletproof protocols</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM TAGLINE DECORATION */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-6 border-t border-purple-100/60 flex items-center justify-center gap-4 text-center"
        >
          <span className="w-12 sm:w-16 h-[1px] bg-purple-200" />
          <span className="text-xs uppercase tracking-[0.3em] text-purple-900/60 font-bold">
            Think &middot; Build &middot; Scale
          </span>
          <span className="w-12 sm:w-16 h-[1px] bg-purple-200" />
        </motion.div>
      </div>

      {/* Bottom Smooth Fade */}
      <div
        className="
          absolute
          bottom-0
          left-0
          w-full
          h-16
          bg-gradient-to-t
          from-white
          to-transparent
          pointer-events-none
          z-[5]
        "
      />
    </section>
  );
};

export default AboutHeader;