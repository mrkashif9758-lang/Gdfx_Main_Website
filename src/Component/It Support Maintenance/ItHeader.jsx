import  { useEffect, useRef } from "react";
import it_header from "../../assets/It Support Maintenance/it_header.png";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const DigitalTransformationCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const colors = ["#00fff7", "#ff00ff", "#00d4ff", "#ff77ff"];
    const particleCount = 100;

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.5 + 0.2,
        speedX: Math.random() * 0.3 - 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.6 + 0.4,
        flickerSpeed: Math.random() * 0.04 + 0.01,
        trail: [],
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // 🖤 Deep Black to Futuristic Violet Gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#020202");
      gradient.addColorStop(1, "#1a0b2e");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const time = Date.now();

      particles.current.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        const flicker = 0.6 + Math.sin(time * p.flickerSpeed) * 0.4;
        const finalOpacity = p.opacity * flicker;

        // ✨ Trail effect (glow line behind particle)
        p.trail.unshift({ x: p.x, y: p.y, opacity: finalOpacity });
        if (p.trail.length > 10) p.trail.pop();

        p.trail.forEach((t, i) => {
          ctx.beginPath();
          ctx.arc(t.x, t.y, p.size * (1 - i / 10), 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${Math.floor(t.opacity * 255).toString(
            16
          )}`;
          ctx.shadowBlur = 8 - i;
          ctx.shadowColor = p.color;
          ctx.fill();
        });

        // Reset shadowBlur
        ctx.shadowBlur = 0;
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
      className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-90"
    />
  );
};
function ItHeader() {
  return (
    <section className="relative overflow-hidden">
      <DigitalTransformationCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              Reliable IT Support & Maintenance 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Services | GDFX
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Don't let IT challenges hold your business back. Partner with GDFX
              for expert IT Support & Maintenance Services that keep your
              operations running smoothly. Contact us now for a consultation and
              discover how we can optimize your IT infrastructure!
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
              src={it_header}
              draggable={false}
              className="h-full"
              alt="it-support-maintenance"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default ItHeader;
