import React, { useEffect, useRef } from "react";
import e_commerce_header from "../../assets/E Commerce Solution/e-commerce-header.png";
import { MdArrowOutward } from "react-icons/md";
import { HiCheckCircle, HiShieldCheck, HiSparkles, HiChartBar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const DigitalTransformationCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particleCount = 100;
    const colors = ["#00fff7", "#a855f7", "#38bdf8", "#8b5cf6"];

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.4,
        speedX: Math.random() * 0.15 - 0.075,
        speedY: Math.random() * 0.15 - 0.075,
        color: colors[Math.floor(Math.random() * colors.length)],
        flickerSpeed: Math.random() * 0.04 + 0.01,
      }));
    }

    let animationFrameId;

    function draw() {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#030305");
      gradient.addColorStop(0.5, "#09090b");
      gradient.addColorStop(1, "#110c2e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const time = Date.now();

      particles.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const opacity = 0.5 + Math.sin(time * p.flickerSpeed) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${hexToRgb(p.color)}, ${opacity})`;
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(draw);
    }

    const hexToRgb = (hex) => {
      hex = hex.replace("#", "");
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `${r}, ${g}, ${b}`;
    };

    initParticles();
    draw();

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-90"
    />
  );
};

const E_Commerce_Header = () => {
  return (
    <section className="relative overflow-hidden bg-bgFirstBlue text-white">
      <DigitalTransformationCanvas />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-primaryBlue/15 to-secondaryPurple/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="customContainer relative z-10 min-h-[90vh] flex items-center pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-6 shadow-inner">
              <HiSparkles className="text-secondaryPurple animate-pulse text-base" />
              <span className="text-xs font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#00fff7] to-secondaryPurple">
                Next-Gen Commerce Architecture
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight capitalize text-white leading-[1.15]">
              High-Performance e-Commerce Solutions by{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-[#38bdf8] to-secondaryPurple drop-shadow-sm">
                GDFX
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              Transform your digital storefront with custom ecosystems, lightning-fast scalable architectures, 
              enterprise-grade secure payment rails, and conversion-optimized experiences built to scale multi-fold revenue.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-8 w-full max-w-xl">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <HiShieldCheck className="text-[#00fff7] text-xl shrink-0" />
                <span className="text-sm font-medium text-zinc-200">Secure Payment Gateways</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 backdrop-blur-sm">
                <HiChartBar className="text-secondaryPurple text-xl shrink-0" />
                <span className="text-sm font-medium text-zinc-200">Conversion-Optimized UX</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 w-full pt-2">
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <button className="relative group px-7 py-3.5 rounded-xl font-semibold text-white shadow-xl bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:opacity-95 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden">
                  <span className="absolute inset-0 w-full h-full bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span>Build Your Store</span>
                  <MdArrowOutward className="text-white text-xl transition-transform duration-300 rotate-[45deg] group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </Link>

              {/* <Link to="/portfolio" onClick={() => window.scrollTo(0, 0)}>
                <button className="px-6 py-3.5 rounded-xl font-semibold text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-300">
                  Explore Case Studies
                </button>
              </Link> */}
            </div>


          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="absolute w-72 h-72 bg-gradient-to-br from-primaryBlue/30 to-secondaryPurple/30 rounded-full blur-3xl -z-10 animate-pulse" />

            <div className="relative w-full max-w-md lg:max-w-none flex justify-center items-center group">
              <img
                src={e_commerce_header}
                draggable={false}
                className="w-full h-auto max-h-[520px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.7)] transition-transform duration-500 group-hover:scale-[1.02]"
                alt="E-Commerce Solutions by GDFX"
              />

              <div className="absolute -bottom-6 -left-4 sm:left-4 p-4 rounded-2xl bg-zinc-900/80 border border-white/15 backdrop-blur-xl shadow-2xl flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primaryBlue to-secondaryPurple flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  🚀
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-medium">Average ROI Boost</p>
                  <p className="text-sm sm:text-base font-bold text-white">+145% Sales Growth</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default E_Commerce_Header;