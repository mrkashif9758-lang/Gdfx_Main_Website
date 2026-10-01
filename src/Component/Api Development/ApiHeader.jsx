import  { useEffect, useRef } from "react";
import api_header from "../../assets/Api Development/api_header.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
const StarryNightCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particleCount = 80;

    const initParticles = () => {
      particles.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        dx: Math.random() * 0.5 - 0.25,
        dy: Math.random() * 0.5 - 0.25,
        opacity: Math.random() * 0.5 + 0.3,
      }));
    };

    const draw = () => {
      // Smooth black to dark purple bg gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0b0b0f");
      gradient.addColorStop(1, "#1a1a2e");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Animate glowing particles
      particles.current.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;

        // bounce effect
        if (p.x < 0 || p.x > width) p.dx *= -1;
        if (p.y < 0 || p.y > height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "#ffffff";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};
function ApiHeader() {
  return (
    <section className="relative overflow-hidden">
      <StarryNightCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              GDFX API Development & 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
              Integration Services
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Empower your business with seamless connectivity and integration.
              GDFX specializes in API development and integration to help you
              connect diverse systems, optimize operations, and unlock new
              opportunities for growth.
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full flex justify-center items-center">
            <img
              src={api_header}
              draggable={false}
              className="h-full"
              alt="api-development"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default ApiHeader;
