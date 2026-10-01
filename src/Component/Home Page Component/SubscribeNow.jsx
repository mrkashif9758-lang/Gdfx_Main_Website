import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MdArrowOutward } from "react-icons/md";

const SubscribeNow = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden bg-white py-20"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* Navbar Aligned Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative  p-8 sm:p-14  text-center flex flex-col items-center overflow-hidden"
        >
          {/* Subtle background glow element */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-purple-200/50 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-200/40 rounded-full blur-[80px] pointer-events-none -z-10"></div>

          <motion.h2
            className="H2 font-bold capitalize text-[#2d1b4e] mb-4 leading-tight max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            Subscribe for the latest news{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
              updates, and expert growth tips.
            </span>
          </motion.h2>

          <motion.p
            className="P text-[#4a3575] mb-8 leading-relaxed max-w-3xl text-sm sm:text-base"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Don’t miss out on the latest digital trends, innovations, and
            exclusive insights that can transform the way you work and stay
            connected. Stay informed and get an edge in your industry by
            joining our community of forward-thinkers. Subscribe now to
            explore the future of digital success.
          </motion.p>

          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="group"
          >
            <button className="px-8 py-3.5 rounded-full font-medium text-white shadow-lg bg-gradient-to-r from-purple-700 to-purple-900 hover:shadow-xl hover:shadow-purple-700/25 transition-all duration-300 flex items-center gap-2 group cursor-pointer text-sm sm:text-base">
              Contact Now
              <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5 group-hover:-translate-y-0.5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SubscribeNow;