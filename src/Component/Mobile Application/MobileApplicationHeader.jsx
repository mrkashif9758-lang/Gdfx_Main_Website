import { useEffect, useRef } from "react";
import mobile_screen from "../../assets/Mobile Application/mobile_screen.webp";
import "./MobileHeader.css";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const StarryNightCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 100; // Increased star count

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.2,
        speed: 0, // Stars don't move
        opacity: Math.random() * 0.8 + 0.2,
        flickerSpeed: Math.random() * 0.03 + 0.01,
        baseOpacity: Math.random() * 0.5 + 0.3,
        // Add star color variations
        color: `hsl(${Math.random() * 40 + 200}, ${Math.random() * 30 + 60}%, ${
          Math.random() * 20 + 80
        }%)`,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Deep space gradient background (#080c18 to #0a0f1a)
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#080c18");
      bgGradient.addColorStop(1, "#0a0f1a");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw starfield background (distant stars)
      for (let i = 0; i < 400; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 0.5;
        const opacity = Math.random() * 0.2 + 0.1;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      }

      // 🌙 Draw moon with subtle glow
      const moonX = width * 0.9;
      const moonY = height * 0.16;
      const moonRadius = 0;

      // Moon glow effect
      const moonGlow = ctx.createRadialGradient(
        moonX,
        moonY,
        0,
        moonX,
        moonY,
        moonRadius * 2.5
      );
      moonGlow.addColorStop(0, "rgba(200, 230, 255, 0.4)");
      moonGlow.addColorStop(1, "rgba(200, 230, 255, 0)");

      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = moonGlow;
      ctx.fill();

      // Moon body
      ctx.beginPath();
      ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
      ctx.fillStyle = "#f0f7ff";
      ctx.fill();

      // Moon craters
      ctx.fillStyle = "rgba(200, 210, 230, 0.3)";
      ctx.beginPath();
      ctx.arc(moonX - 10, moonY - 10, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moonX + 15, moonY, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(moonX + 5, moonY + 15, 6, 0, Math.PI * 2);
      ctx.fill();

      // ✨ Twinkling stars
      const time = Date.now();
      particles.current.forEach((p) => {
        // Flickering effect
        p.opacity =
          p.baseOpacity * (0.5 + Math.sin(time * p.flickerSpeed) * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // Add subtle glow to brighter stars
        if (p.size > 1) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `rgba(200, 220, 255, ${p.opacity * 0.5})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // 🌠 Shooting stars effect (occasionally)
      if (Math.random() < 0.001) {
        createShootingStar();
      }

      drawShootingStars(ctx, width, height);

      requestAnimationFrame(draw);
    }

    // Shooting stars collection
    const shootingStars = [];

    function createShootingStar() {
      shootingStars.push({
        x: Math.random() * width * 0.5,
        y: Math.random() * height * 0.3,
        length: 100 + Math.random() * 150,
        angle: Math.PI / 4 + (Math.random() * Math.PI) / 6,
        speed: 15 + Math.random() * 10,
        size: 1.5 + Math.random() * 1,
        opacity: 1,
        decay: 0.97,
      });
    }

    function drawShootingStars(ctx, width, height) {
      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const star = shootingStars[i];

        // Update position
        star.x += Math.cos(star.angle) * star.speed;
        star.y += Math.sin(star.angle) * star.speed;
        star.opacity *= star.decay;

        // Draw with glow
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x - Math.cos(star.angle) * star.length,
          star.y - Math.sin(star.angle) * star.length
        );

        ctx.lineWidth = star.size;
        ctx.strokeStyle = `rgba(200, 230, 255, ${star.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(180, 220, 255, 0.8)";
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Remove faded stars
        if (
          star.opacity < 0.05 ||
          star.x > width + 200 ||
          star.y > height + 200
        ) {
          shootingStars.splice(i, 1);
        }
      }
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
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-95"
    />
  );
};

const MobileApplicationHeader = () => {
  return (
    <section className="relative overflow-hidden ">
      <StarryNightCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="max-w-7xl mx-auto !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              Mobile Application
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Development Company
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Looking for a top-rated app development company to outsource your
              project? Global Digitals Fx is your trusted partner. Expand your
              reach, engage a broader audience, and deliver an exceptional user
              experience with our expert mobile app development services. As a
              100% white-label offshore development company, we specialize in
              crafting high-quality iOS, Android, and cross-platform
              applications tailored to your business needs. Let’s build
              innovative solutions together.
            </p>
            <Link to={"/contact"} onclick={() => window.scrollTo(0, 0)}>
              {" "}
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full self-center">
            <img
              src={mobile_screen}
              draggable={false}
              className="h-full"
              alt="mobile-app-development"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApplicationHeader;
