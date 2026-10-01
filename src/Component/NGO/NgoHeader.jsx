import { useEffect, useRef } from "react";
import ngoHeader from "../../assets/NGO/ngo-header.svg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

/* const SunnyCanvas  = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 100;

    // ☀️ Particle Sparkles
    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: Math.random() * 0.3 - 0.15,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    }

    // 🔁 Animation Loop
    function draw() {
      ctx.clearRect(0, 0, width, height);

      // ☀️ Sky background gradient
      const sky = ctx.createLinearGradient(0, 0, 0, height);
      sky.addColorStop(0, "#87CEEB"); // top - sky blue
      sky.addColorStop(1, "#fff1b5"); // bottom - warm tone
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, width, height);

      // 🌞 Draw sun
      const sunX = width * 0.8;
      const sunY = height * 0.2;
      const sunRadius = 80;

      const gradient = ctx.createRadialGradient(
        sunX,
        sunY,
        10,
        sunX,
        sunY,
        sunRadius
      );
      gradient.addColorStop(0, "rgba(255,255,204,1)");
      gradient.addColorStop(1, "rgba(255,204,0,0)");

      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // 🔥 Heatwave distortion lines
      for (let i = 0; i < 20; i++) {
        const y = height * 0.6 + i * 5 + Math.sin(Date.now() / 400 + i) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // ✨ Sparkling particles
      particles.current.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
      });

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
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}; */

const StarrySunlightCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 150; // Increased for more star-like particles

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.2 + 0.3,
        speedY: Math.random() * 0.2 + 0.05,
        speedX: Math.random() * 0.1 - 0.05,
        opacity: Math.random() * 0.7 + 0.3,
        flickerSpeed: Math.random() * 0.05 + 0.01,
        baseOpacity: Math.random() * 0.5 + 0.3,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Dark blue gradient background (#0d1220 to #1a1f33)
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#0d1220");
      bgGradient.addColorStop(1, "#1a1f33");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw subtle starfield in the background
      for (let i = 0; i < 200; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height * 0.7;
        const size = Math.random() * 0.8;
        const opacity = Math.random() * 0.4 + 0.1;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      // 🌞 Draw sun (smaller and more golden)
      const sunX = width * 0.8;
      const sunY = height * 0.2;
      const sunRadius = 60;

      const gradient = ctx.createRadialGradient(
        sunX,
        sunY,
        10,
        sunX,
        sunY,
        sunRadius
      );
      gradient.addColorStop(0, "rgba(255, 215, 140, 0.9)"); // Warm gold
      gradient.addColorStop(0.7, "rgba(255, 190, 80, 0.5)");
      gradient.addColorStop(1, "rgba(255, 150, 50, 0)");

      ctx.beginPath();
      ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // ✨ Sparkling particles with flickering effect
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
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Add glow to some particles
        if (Math.random() > 0.7) {
          ctx.shadowBlur = 5;
          ctx.shadowColor = `rgba(255, 215, 140, ${p.opacity * 0.7})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // Sun rays effect
      ctx.save();
      ctx.translate(sunX, sunY);
      for (let i = 0; i < 12; i++) {
        ctx.rotate((Math.PI * 2) / 12);
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(sunRadius * 1.5, 0);
        ctx.strokeStyle = `rgba(255, 215, 140, ${
          0.2 + Math.sin(Date.now() / 800) * 0.1
        })`;
        ctx.lineWidth = 2;
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
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

function NgoHeader() {
  return (
    <section className="relative overflow-hidden">
      <StarrySunlightCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 flex lg:flex-row flex-col gap-4 lg:justify-between lg:items-center lg:pt-[150px]">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:basis-1/2 basis-full"
          >
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              Empowering Non-Profits with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Free Websites
              </span>
            </h2>
            <p className="text-white/90 mb-5 H6 leading-relaxed max-w-2xl">
              “We support changemakers. If you are a registered NGO or
              non-profit organization, we will build a professional website for
              you — absolutely free.”
            </p>
            <Link to={"/contact"} onclick={() => window.scrollTo(0, 0)}>
              {" "}
              <button className="px-8 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 flex items-center gap-2 group">
                Let's Connect
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className=" lg:basis-1/2 basis-full flex lg:justify-end justify-center"
          >
            <img
              src={ngoHeader}
              draggable={false}
              className="h-full w-auto object-contain"
              alt="Digital collaboration interface showing website creation for non-profit organizations"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default NgoHeader;
