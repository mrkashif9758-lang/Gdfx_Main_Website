import  { useEffect, useRef } from "react";
import ui_ux_hero from "../../assets/UI UX Design/ui_ux_hero.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const StarrySunlightCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 100;

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.2,
        speed: 0,
        opacity: Math.random() * 0.8 + 0.2,
        flickerSpeed: Math.random() * 0.03 + 0.01,
        baseOpacity: Math.random() * 0.5 + 0.3,
        color: `hsl(${Math.random() * 60 + 30}, ${Math.random() * 30 + 60}%, ${
          Math.random() * 20 + 80
        }%)`, // Warmer colors
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Gradient background (darker for contrast)
      const bgGradient = ctx.createLinearGradient(0, 0, 0, height);
      bgGradient.addColorStop(0, "#080808");
      bgGradient.addColorStop(1, "#0a0a0a");
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Draw particles with warmer colors
      const time = Date.now();
      particles.current.forEach((p) => {
        p.opacity =
          p.baseOpacity * (0.5 + Math.sin(time * p.flickerSpeed) * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`).replace("hsl", "hsla");
        ctx.fill();

        if (p.size > 1) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color.replace(")", `, ${p.opacity * 0.5})`).replace("hsl", "hsla");
          ctx.fill();
          ctx.shadowBlur = 0;
        }
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
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-95"
    />
  );
};

function DesignHero() {
  return (
    <section className="relative overflow-hidden">
      <StarrySunlightCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              UI/UX Design
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-off_white mt-3 mb-4 P leading-relaxed">
              GDFX redefines UI/UX by creating designs that are visually
              stunning, functional, and user-centric. We craft intuitive
              interfaces that engage users and drive conversions. Our
              human-centered approach ensures every pixel serves a purpose.
            </p>
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full flex justify-center items-center">
            <img
              src={ui_ux_hero}
              draggable={false}
              className="h-full "
              alt="ui-ux-design"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignHero;