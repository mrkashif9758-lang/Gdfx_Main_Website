import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { throttle } from "../../utils/throttle";

const FluidCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const throttledResize = throttle(resize, 100);
    window.addEventListener("resize", throttledResize);

    const waveCount = 3;
    const waves = Array.from({ length: waveCount }).map((_, i) => ({
      amplitude: 40 + Math.random() * 40,
      wavelength: 100 + Math.random() * 200,
      speed: 0.5 + Math.random(),
      offset: Math.random() * 1000,
      color: `hsla(${i * 60 + 260}, 80%, 60%, 0.25)`,
    }));

    let frame = 0;

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#0B0F19"; // Deep dark theme base
      ctx.fillRect(0, 0, width, height);

      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, height / 2);

        for (let x = 0; x <= width; x += 10) {
          const y =
            wave.amplitude *
              Math.sin(x / wave.wavelength + frame * wave.speed + wave.offset) +
            height / 2;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        ctx.fillStyle = wave.color;
        ctx.fill();
      });

      frame += 0.01;
      requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 h-full w-full z-[-1]" />
  );
};

const ContactHeader = () => {
  return (
    <div className="relative min-h-[420px] overflow-hidden px-4 py-28 text-center flex flex-col items-center justify-center bg-[#0B0F19]">
      <FluidCanvas />
      
      {/* Top Banner Tag / Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/30 backdrop-blur-md text-purple-300 text-xs sm:text-sm font-medium tracking-wide shadow-inner"
      >
        Whether it's web games, metaverse project, or digital solution — let's talk.
      </motion.div>

      {/* Main Title Matching Screenshot */}
      <motion.h1
        className="text-white text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Let’s Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 drop-shadow-[0_0_25px_rgba(168,85,247,0.4)]">Extraordinary!</span>
      </motion.h1>

      <motion.div
        className="h-[2px] mt-6 bg-gradient-to-r from-transparent via-purple-500 to-transparent w-48 mx-auto"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      />
    </div>
  );
};

export default ContactHeader;