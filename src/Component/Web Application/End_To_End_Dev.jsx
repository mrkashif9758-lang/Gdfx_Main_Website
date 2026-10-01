import React, { useEffect, useRef } from "react";
import end_to_end_1 from "../../assets/Web Application/End_To_End_Dev/end_to_end_1.webp";
import end_to_end_2 from "../../assets/Web Application/End_To_End_Dev/end_to_end_2.webp";
import { FiCheckCircle } from "react-icons/fi";
import { motion, useInView, animate, stagger } from "framer-motion";

const frontendFeatures = [
  "High-performance Progressive Web App (PWA) development",
  "User-focused designs for enhanced customer engagement",
  "Cross-browser compatible frontend development solutions",
  "Custom frontend development services for businesses",
  "SEO-friendly user interface design services",
  "Single-page application development using modern frameworks",
  "Accessibility-focused frontend development solutions",
];

const backendFeatures = [
  "Custom backend development for scalable web applications",
  "Secure backend solutions for business websites",
  "API development and integration services for seamless connectivity",
  "Backend development with Node.js for high-performance apps",
  "Cross-platform backend solutions for mobile and web",
  "Third-party API integration for enhanced functionality",
  "Backend development for real-time web applications",
  "E-commerce backend solutions with payment gateway integration",
  "Secure backend systems with advanced data encryption",
];

const End_To_End_Dev = () => {
  const containerRef = useRef(null);
  const featureRef = useRef(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView && featureRef.current) {
      const items = featureRef.current.querySelectorAll(".feature-item");

      animate(
        items,
        { opacity: 1, x: 0 },
        {
          delay: stagger(0.06),
          duration: 0.4,
          ease: "easeOut",
        }
      );
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-24 bg-bgFirstBlue overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-primaryBlue/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-secondaryPurple/[0.07] blur-[130px] pointer-events-none" />

      <div className="customContainer !my-0 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">

          <span className="inline-block text-xs sm:text-sm font-medium tracking-[0.15em] uppercase text-primaryBlue mb-3">
            Full-Cycle Development
          </span>

          <h2 className="H2 font-bold text-white leading-tight">
            End-to-End
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple"> Web Development Solutions</span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed max-w-2xl mx-auto mt-4">
            From intuitive frontend experiences to powerful backend systems, we build complete web solutions engineered for performance, scalability, security, and long-term growth.
          </p>

        </motion.div>

        {/* ================= DEVELOPMENT CARDS ================= */}

        <div ref={featureRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* ================= FRONTEND ================= */}

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }} className="group relative rounded-3xl bg-white/[0.045] backdrop-blur-xl p-4 sm:p-5 lg:p-6 transition-all duration-500 hover:bg-white/[0.065]">

            {/* Image */}
            <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] w-full rounded-2xl bg-primary-gradient overflow-hidden flex items-center justify-center">

              <div className="absolute inset-0 bg-gradient-to-t from-bgFirstBlue/30 via-transparent to-transparent" />

              <img src={end_to_end_1} alt="Frontend Development" draggable={false} onContextMenu={(e) => e.preventDefault()} className="relative z-10 w-full h-full object-contain p-3 sm:p-5 transition-transform duration-700 group-hover:scale-[1.03]" />

              {/* Label */}
              <div className="absolute z-20 left-5 bottom-5 px-4 py-2 rounded-full bg-bgFirstBlue/70 backdrop-blur-xl">
                <span className="text-xs font-medium text-white/80">01 · Frontend</span>
              </div>

            </div>

            {/* Content */}
            <div className="pt-6 px-1 sm:px-2">

              <div className="mb-5">
                <h3 className="H4 font-semibold text-white mb-2">Frontend Development</h3>

                <p className="text-sm text-white/45 leading-relaxed">
                  Fast, responsive, and engaging interfaces built around your users and business goals.
                </p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {frontendFeatures.map((item, idx) => (
                  <motion.li key={idx} className="feature-item group/item cursor-default flex items-start gap-3 opacity-0 -translate-x-[5px] px-3 py-2 rounded-xl transition-colors duration-300 hover:bg-white/[0.035]" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>

                    <FiCheckCircle className="text-primaryBlue text-[17px] mt-[3px] shrink-0" />

                    <span className="text-sm sm:text-[15px] text-white/55 leading-6 transition-colors duration-300 group-hover/item:text-white/80">
                      {item}
                    </span>

                  </motion.li>
                ))}
              </ul>

            </div>

          </motion.div>

          {/* ================= BACKEND ================= */}

          <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="group relative rounded-3xl bg-white/[0.045] backdrop-blur-xl p-4 sm:p-5 lg:p-6 transition-all duration-500 hover:bg-white/[0.065]">

            {/* Image */}
            <div className="relative h-[240px] sm:h-[280px] lg:h-[300px] w-full rounded-2xl bg-danger-gradient overflow-hidden flex items-center justify-center">

              <div className="absolute inset-0 bg-gradient-to-t from-bgFirstBlue/30 via-transparent to-transparent" />

              <img src={end_to_end_2} alt="Backend Development" draggable={false} onContextMenu={(e) => e.preventDefault()} className="relative z-10 w-full h-full object-contain p-3 sm:p-5 transition-transform duration-700 group-hover:scale-[1.03]" />

              {/* Label */}
              <div className="absolute z-20 left-5 bottom-5 px-4 py-2 rounded-full bg-bgFirstBlue/70 backdrop-blur-xl">
                <span className="text-xs font-medium text-white/80">02 · Backend</span>
              </div>

            </div>

            {/* Content */}
            <div className="pt-6 px-1 sm:px-2">

              <div className="mb-5">
                <h3 className="H4 font-semibold text-white mb-2">Backend Development</h3>

                <p className="text-sm text-white/45 leading-relaxed">
                  Secure and scalable backend architecture built to power reliable, high-performance applications.
                </p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {backendFeatures.map((item, idx) => (
                  <motion.li key={idx} className="feature-item group/item cursor-default flex items-start gap-3 opacity-0 -translate-x-[5px] px-3 py-2 rounded-xl transition-colors duration-300 hover:bg-white/[0.035]" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>

                    <FiCheckCircle className="text-dangerRed text-[17px] mt-[3px] shrink-0" />

                    <span className="text-sm sm:text-[15px] text-white/55 leading-6 transition-colors duration-300 group-hover/item:text-white/80">
                      {item}
                    </span>

                  </motion.li>
                ))}
              </ul>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default End_To_End_Dev;