import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { RxDragHandleDots2 } from "react-icons/rx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: "Custom Web Development",
    description: `GDFX provides custom software development, designing solutions that align with your goals. From concept to deployment, we ensure high-performance software tailored to your exact needs.`,
    link: "/service/custom-software-development",
  },
  {
    id: 2,
    name: "Mobile Application Design & Development",
    description: `GDFX offers mobile app development for Android, iOS, and cross-platform environments, creating user-friendly, high-performing, secure, and intuitive apps.`,
    link: "/service/mobile-app-development",
  },
  {
    id: 3,
    name: "Web Application Design & Development",
    description: `GDFX provides cutting-edge web development and design services, creating responsive, high-performance websites that are visually engaging and user-friendly.`,
    link: "/service/web-app-development",
  },
  {
    id: 4,
    name: "UI/UX Design",
    description: `GDFX’s UI/UX design services create engaging, intuitive, and visually appealing interfaces, ensuring users enjoy functional and seamless interactions.`,
    link: "/service/ui-ux-design",
  },
  {
    id: 5,
    name: "API Development",
    description: `GDFX offers expert API integration and development, ensuring seamless communication between systems, automating workflows, and enhancing functionality.`,
    link: "/service/api-development",
  },
  {
    id: 6,
    name: "Digital Transformation Services",
    description: `GDFX offers digital transformation consulting, helping businesses integrate technology to improve efficiency, reduce costs, and enhance customer experiences.`,
    link: "/service/digital-transformation-service",
  },
  {
    id: 7,
    name: "IT Support & Maintenance",
    description: `GDFX offers reliable IT support and maintenance services, providing continuous monitoring, troubleshooting, and updates to ensure smooth performance.`,
    link: "/service/it-support-maintenance",
  },
  {
    id: 8,
    name: "E-commerce Solution",
    description: `GDFX develops custom e-commerce platforms, creating secure, optimized online stores for efficient sales, secure payments, and an exceptional experience.`,
    link: "/service/e-commerce-solution",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h3 className="H4 font-bold text-[#2d1b4e] mb-2">{project.name}</h3>
        <p className="P text-[#4a3575] mt-1 mb-6 line-clamp-3">{project.description}</p>
      </div>

      <div>
        <Link
          to={project.link}
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <button className="px-6 py-2.5 rounded-lg font-medium text-white shadow-md customGradient HovercustomGradient transition-all duration-300 flex items-center gap-2 group text-sm">
            Explore More
            <MdArrowOutward className="text-white text-lg transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
          </button>
        </Link>
      </div>
    </div>
  );
};

const LeftSection = () => {
  const leftContentRef = useRef(null);

  useEffect(() => {
    const el = leftContentRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={leftContentRef} className="lg:sticky lg:top-28 pr-0 xl:pr-6">
      <div className="flex gap-2 items-center mb-3">
        <RxDragHandleDots2 className="rotate-90 text-purple-600 text-2xl" />
        <span className="text-purple-700 font-semibold tracking-wider H6">
          SERVICE
        </span>
      </div>

      <h2 className="H2 font-bold capitalize text-[#2d1b4e] mb-4 leading-tight">
        Services We're Providing to{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          Our Customers
        </span>
      </h2>

      <p className="P text-[#4a3575] leading-relaxed">
        At Globaldigitalsfx, we offer a comprehensive range of IT services
        designed to meet the diverse needs of businesses in today's digital
        landscape. Our expert team is committed to delivering innovative
        solutions that drive efficiency, enhance security, and foster growth.
        Here's a detailed look at our key services:
      </p>
    </div>
  );
};

const RightSection = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    const el = rightRef.current;
    
    gsap.fromTo(
      el,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 45%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <div ref={rightRef} className="relative">
      {/* Desktop Vertical Slider with Mousewheel Control */}
      <div className="lg:block hidden relative h-[700px] xl:h-[620px]">
        <Swiper
          direction={"vertical"}
          loop={true}
          speed={600}
          modules={[Navigation, Pagination, Mousewheel]}
          spaceBetween={20}
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
          }}
          pagination={false}
          navigation={false}
          slidesPerView={2}
          className="h-full cursor-grab active:cursor-grabbing"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id} className="h-auto">
              <div className="h-full transition-all duration-300 bg-white p-6 rounded-xl border border-purple-200 shadow-md hover:shadow-xl hover:border-purple-400">
                <ProjectCard project={project} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Stacked Cards */}
      <div className="lg:hidden gap-6 flex flex-col">
        {projects.map((project, ind) => (
          <div
            key={ind}
            className="transition-all duration-300 bg-white p-6 rounded-xl border border-purple-200 shadow-md hover:shadow-xl hover:border-purple-400"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

const Service_Providing = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 200,
    damping: 20,
  });
  const springY = useSpring(mouseY, {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="overflow-hidden relative bg-white py-20"
    >
      <div className="absolute inset-0 bg-[#faf5ff]/50 -z-10"></div>
      <motion.div
        className="absolute size-40 rounded-full bg-purple-300/30 -z-20"
        style={{
          x: springX,
          y: springY,
          translateX: "-80px",
          translateY: "-80px",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      ></motion.div>

      <div className=" max-w-7xl mx-auto px-4 !my-0 relative z-10">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-12 items-start">
          <div className="lg:col-span-5">
            <LeftSection />
          </div>
          <div className="lg:col-span-7">
            <RightSection />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_Providing;