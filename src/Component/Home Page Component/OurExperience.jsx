import {
  motion,
  useInView,
  stagger,
  animate,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useEffect } from "react";
import exp_video from "../../assets/Home/exp_video.mp4";
import { FiCheckCircle } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";

const LeftSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const featureRef = useRef(null);

  const featureItems = [
    "Custom Software Development",
    "Web design & UI/UX Design",
    "IT Consulting & Strategy",
    "API Development & Integration",
    "Product Development & Prototyping",
    "Digital transformation & IT Solutions",
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
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <motion.div
        className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 shadow-sm mb-4 w-max"
        initial={{ opacity: 0, y: -10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <RxDragHandleDots2 className="rotate-90 text-purple-600 text-lg" />
        <span className="text-purple-700 font-semibold tracking-wider text-xs sm:text-sm uppercase font-lato">
          OUR EXPERIENCE
        </span>
      </motion.div>

      <motion.h2
        className="H2 font-bold capitalize text-[#2d1b4e] mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        Digital Transformation Services for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
          Business Modernization
        </span>
      </motion.h2>

      <motion.p
        className="P text-[#4a3575] mb-8 leading-relaxed text-sm sm:text-base"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        GDFX excels in delivering innovative IT solutions with expertise in
        custom software development, mobile app development, web design, digital
        marketing, and more. Our skilled team specializes in creating scalable,
        secure, and user-friendly solutions across various industries to drive
        growth and digital transformation.
      </motion.p>

      {/* Features Grid */}
      <div ref={featureRef} className="grid sm:grid-cols-2 gap-4">
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
            <span className="text-[#4a3575] hover:text-[#2d1b4e] P font-medium text-sm sm:text-base">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const OurExperience = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 150,
    damping: 25,
  });
  const springY = useSpring(mouseY, {
    stiffness: 150,
    damping: 25,
  });

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(event.clientX - rect.left);
      mouseY.set(event.clientY - rect.top);
    }
  };

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden py-24 bg-white"
    >
      {/* Subtle background glow accents */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-100/60 rounded-full blur-[100px] pointer-events-none -z-10"></div>
      
      {/* Interactive Cursor Follower */}
      <motion.div
        className="absolute size-48 rounded-full bg-purple-200/40 blur-[60px] pointer-events-none -z-10 hidden lg:block"
        style={{
          x: springX,
          y: springY,
          translateX: "-50px",
          translateY: "-50px",
        }}
      ></motion.div>

      {/* Navbar Aligned Container Width */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <LeftSection />
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="rounded-2xl overflow-hidden  bg-purple-50/50"
          >
            <video
              src={exp_video}
              className="w-full object-cover rounded-2xl"
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>

        {/* Bottom Idea Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-50/80 via-white to-purple-50/50 border border-purple-100 p-8 sm:p-10 rounded-2xl shadow-sm">
          <motion.h3 className="H3 font-bold text-[#2d1b4e] mb-3 leading-tight">
            Do you have an idea?{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
              We have an expert team
            </span>
          </motion.h3>

          <motion.p className="P text-[#4a3575] leading-relaxed text-sm sm:text-base max-w-4xl">
            At GDFX, we have a team of experts dedicated to delivering top-tier
            IT solutions. Our skilled professionals specialize in software
            development, mobile app development, web design, digital marketing,
            and more. With years of experience and a passion for innovation, our
            team works collaboratively to create customized solutions that meet
            your unique business needs and drive lasting success.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default OurExperience;