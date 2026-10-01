import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const StartBuildingProject = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden bg-black  py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-black" />

      <div className="relative customContainer !my-0">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" mx-auto text-center flex flex-col items-center"
        >
          <motion.h2
            className="H3 font-bold capitalize text-white mb-4 leading-tight max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Let’s Start Your
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Digital Journey
            </span>
          </motion.h2>
          <motion.p
            className="P text-mutedGray-c1 mb-8 leading-relaxed max-w-5xl"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Connect us to make your dream come true
          </motion.p>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="group"
          >
            <button className="px-8 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 flex items-center gap-2 group">
              Connect With Us
              <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StartBuildingProject;
