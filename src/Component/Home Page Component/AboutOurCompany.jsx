import image_2 from "../../assets/Home/About Our Company/AboutCompany.jpg";
import { RxDragHandleDots2 } from "react-icons/rx";
import { FiCheckCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import {
  motion,
  useInView,
  stagger,
  animate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React ,{ useRef, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { LiaUsersSolid } from "react-icons/lia";

const LeftSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={containerRef}
      className="relative mb-5"
      initial={{ opacity: 0, x: -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="rounded-lg overflow-hidden shadow-xl">
        <img
          src={image_2}
          className="h-full w-full object-cover"
          draggable={false}
          alt="Team collaboration at GDFX"
          loading="lazy"
        />
      </div>

      <motion.div
        className="absolute bottom-[-45px] left-[20px] bg-white border border-purple-200 rounded-xl shadow-2xl"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="xss:w-[300px] w-[250px] min-h-[120px] px-3 py-3 flex items-center gap-4">
          <div className="h-[75px] w-[75px] customGradient rounded-full flex items-center justify-center shadow-md">
            <LiaUsersSolid size={45} className="text-white" />
          </div>
          <div>
            <h2 className="H3 font-extrabold text-[#2d1b4e]">
              <CountUp
                end={1021}
                duration={2}
                enableScrollSpy
                scrollSpyDelay={500}
              />
              +
            </h2>
            <p className="SP font-bold tracking-wider text-purple-700">HAPPY CLIENT</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const RightSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const featureRef = useRef(null);

  const featureItems = [
    "Leading IT Company",
    "All IT Solutions under one roof",
    "Honesty and Transparency",
    "Customer oriented approach",
    "Up-to-date latest tech trends",
    "Deliver top notch solution",
  ];

  // Animate feature items sequentially
  useEffect(() => {
    if (isInView && featureRef.current) {
      const items = featureRef.current.querySelectorAll(".feature-item");
      animate(
        items,
        { opacity: 1, x: 0 },
        { delay: stagger(0.15), duration: 0.5 }
      );
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <motion.div
        className="flex gap-2 items-center mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <RxDragHandleDots2 className="rotate-90 text-purple-600 text-2xl" />
        <span className="text-purple-700 font-semibold tracking-wider H6">
          ABOUT OUR COMPANY
        </span>
      </motion.div>

      <motion.h2
        className="H2 font-bold capitalize text-[#2d1b4e] mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        Building Future-Ready Businesses with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800">
          GDFX's IT Expertise
        </span>
      </motion.h2>

      <motion.p
        className="P text-[#4a3575] mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        At GDFX, we specialize in delivering innovative IT solutions that
        empower businesses to thrive in today’s competitive digital landscape.
        Since 2022, we’ve been transforming ideas into reality with cutting-edge
        software development, web and mobile application design, digital
        marketing, and creative services. Our expert team focuses on crafting
        tailored solutions that drive efficiency, scalability, and growth for
        businesses of all sizes.
      </motion.p>

      {/* Features Grid */}
      <div ref={featureRef} className="grid sm:grid-cols-2 gap-4 mb-10">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            className="feature-item cursor-default flex items-start gap-3 opacity-0 translate-x-[-10px]"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-purple-600 text-xl mt-1">
              <FiCheckCircle />
            </div>
            <span className="text-[#4a3575] font-medium P">
              {item}
            </span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          to="/about"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <button className="px-8 py-3 rounded-lg font-medium text-white shadow-lg customGradient HovercustomGradient transition-all duration-300 flex items-center gap-2 group">
            DISCOVER MORE
            <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );
};

const AboutOurCompany = () => {
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
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden bg-white w-full"
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
      
      {/* Container width matched with global navbar and other sections */}
      <div className="customContainer mx-auto px-4 sm:px-6 lg:px-8 !my-0 pt-20 pb-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20 items-center">
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutOurCompany;