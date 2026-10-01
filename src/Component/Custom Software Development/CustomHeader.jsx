import { useEffect, useRef } from "react";
import customHeader from "../../assets/Custom Software Development/Custom Header/header.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const StarrySunlightCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 140; // Dense particle count for rich effect

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.6, // Slightly larger particles
        speedY: Math.random() * 0.2 + 0.05,
        speedX: Math.random() * 0.1 - 0.05,
        opacity: Math.random() * 0.6 + 0.4, // Higher initial opacity for darker look
        flickerSpeed: Math.random() * 0.05 + 0.01,
        baseOpacity: Math.random() * 0.5 + 0.4,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Clean white canvas background
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.fillRect(0, 0, width, height);

      // Draw subtle dark background particles/stars
      for (let i = 0; i < 120; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.85;
        const size = Math.random() * 1.2;
        const opacity = Math.random() * 0.4 + 0.15; // Darker and more visible

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${opacity})`; // Very dark slate-black color
        ctx.fill();
      }

      // 🌞 Draw soft warm sun element on the top right
      const sunX = width * 0.85;
      const sunY = height * 0.25;
      const sunRadius = 130;

      const gradient = ctx.createRadialGradient(
        sunX,
        sunY,
        10,
        sunX,
        sunY,
        sunRadius
      );
      gradient.addColorStop(0, "rgba(245, 158, 11, 0.2)"); 
      gradient.addColorStop(0.6, "rgba(251, 191, 36, 0.08)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // ✨ Darker sparkling particles with flickering effect
      const time = Date.now();
      particles.current.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        // Wrap around screen edges
        if (p.y < 0) p.y = height;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        // Flickering effect
        p.opacity =
          p.baseOpacity * (0.7 + Math.sin(time * p.flickerSpeed) * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(15, 23, 42, ${p.opacity})`; // Dark charcoal/black color for particles
        ctx.fill();

        // Add subtle amber/gold touch on select particles
        if (Math.random() > 0.75) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(217, 119, 6, ${p.opacity * 0.6})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Elegant sunlight rays effect
      ctx.save();
      ctx.translate(sunX, sunY);
      for (let i = 0; i < 12; i++) {
        ctx.rotate((Math.PI * 2) / 12);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(sunRadius * 1.3, 0);
        ctx.strokeStyle = `rgba(245, 158, 11, ${
          0.1 + Math.sin(Date.now() / 800) * 0.05
        })`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      ctx.restore();

      requestAnimationFrame(draw);
    }

    initParticles();
    draw();

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-0 pointer-events-none opacity-95"
    />
  );
};

function CustomHeader() {
  return (
    <section className="relative overflow-hidden bg-white">
      <StarrySunlightCanvas />
      <div className="sm:min-h-[500px] min-h-[400px] relative z-10">
        <div className="max-w-7xl mx-auto px-5 !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:basis-1/2 basis-full"
          >
            <h2 className="H2 font-bold capitalize text-gray-900 leading-tight">
              Custom
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Software Development
              </span>
            </h2>
            <p className="text-gray-600 mt-3 mb-4 P leading-relaxed">
              Custom software development tailors technology solutions to your
              specific needs, enhancing efficiency, scalability, and innovation.
              From ideation to deployment, we deliver software designed to
              optimize operations and drive business success.
            </p>

            <Link
              to={"/contact"}
              onClick={() => window.scrollTo(0, 0)}
              className="inline-block"
            >
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:basis-1/2 basis-full self-center flex justify-center"
          >
            <img
              src={customHeader}
              draggable={false}
              className="h-full max-h-[450px] object-contain drop-shadow-md"
              alt="Service-Custom-Software"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CustomHeader;