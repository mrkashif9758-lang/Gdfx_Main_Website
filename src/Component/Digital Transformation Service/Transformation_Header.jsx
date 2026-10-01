import  { useEffect, useRef } from "react";
import transformation_header from "../../assets/Digital Transformation Service/transformation_header.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const DigitalTransformationCanvas = () => {
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const particleCount = 120;

    function initParticles() {
      particles.current = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.5 + 0.5,
        speedY: Math.random() * 0.3 + 0.1,
        speedX: Math.random() * 0.2 - 0.1,
        opacity: Math.random() * 0.8 + 0.2,
        flickerSpeed: Math.random() * 0.05 + 0.01,
        baseOpacity: Math.random() * 0.6 + 0.3,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // 🔲 Deep Black to Bluish Black Gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, height);
      gradient.addColorStop(0, "#050505"); // Almost pure black
      gradient.addColorStop(1, "#0d1b2a"); // Deep bluish black
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      const time = Date.now();
      particles.current.forEach((p) => {
        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < 0) p.y = height;
        if (p.x > width) p.x = 0;
        if (p.x < 0) p.x = width;

        p.opacity =
          p.baseOpacity * (0.7 + Math.sin(time * p.flickerSpeed) * 0.3);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();

        // 💫 Glow for some particles
        if (Math.random() > 0.8) {
          ctx.shadowBlur = 6;
          ctx.shadowColor = `rgba(255, 255, 255, ${p.opacity})`;
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
const Transformation_Header = () => {
  return (
    <section className="relative overflow-hidden">
      <DigitalTransformationCanvas />
      <div className="sm:min-h-[500px] min-h-[400px]">
        <div className="customContainer !mb-0 h-full pt-32 pb-10 flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center lg:pt-[150px]">
          <div className="lg:basis-1/2 basis-full">
            <h2 className="H2 font-bold capitalize text-white leading-tight">
              Elevate Your Digital Presence with GDFX: 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Comprehensive Marketing Solutions
              </span>
            </h2>
            <p className="text-white/90 mt-3 mb-4 P leading-relaxed">
              Elevate your brand's online presence with GDFX's cutting-edge
              digital marketing services. From SEO and PPC to social media
              marketing and content strategies, we craft tailored solutions to
              boost visibility, engage audiences, and maximize ROI. Partner
              with us to transform your digital landscape, stay ahead of
              competitors, and achieve measurable results. Let's create
              success together—your growth is our mission!
            </p>
            <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="lg:basis-1/2 basis-full self-center flex justify-center items-center">
            <img
              src={transformation_header}
              draggable={false}
              className="h-full"
              alt="digital-transformation-service"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation_Header;
