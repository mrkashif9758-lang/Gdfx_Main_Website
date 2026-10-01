import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function GdfxProvide({ mainHeading, subHeading, CROServices = [] }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-bgFirstBlue text-white relative overflow-hidden">
      
      {/* Background Decorative Accent Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryBlue/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryPurple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="customContainer relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-4 shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-primaryBlue animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
              Our Offerings
            </span>
          </div>

          <h2 className="H2 font-bold capitalize text-white leading-tight tracking-tight">
            {mainHeading}{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {subHeading}
            </span>
          </h2>
        </div>

        {/* Cards Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto items-stretch"
        >
          {CROServices.map(({ heading, paragraph, bgColor }, ind) => {
            const isHovered = hoveredIndex === ind;

            return (
              <motion.div
                key={ind}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(ind)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group h-full"
              >
                <div
                  className={`relative h-full flex flex-col rounded-[28px] border transition-all duration-500 p-7 sm:p-8 backdrop-blur-md ${
                    isHovered
                      ? "bg-[#0E1324] border-primaryBlue/40 shadow-[0_30px_70px_rgba(0,0,0,0.4)] scale-[1.02]"
                      : "bg-white/5 border-white/10 hover:border-primaryBlue/30 shadow-lg"
                  } ${bgColor || ""}`}
                >
                  {/* Top Header inside Card */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-start flex-1 gap-3.5">
                      <span
                        className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 shadow-sm ${
                          isHovered
                            ? "bg-gradient-to-r from-primaryBlue to-secondaryPurple text-white"
                            : "bg-white/10 text-white border border-white/15 group-hover:bg-primaryBlue group-hover:text-white"
                        }`}
                      >
                        0{ind + 1}
                      </span>
                      <h4
                        className={`H5 font-bold tracking-tight transition-colors duration-300 pt-1 ${
                          isHovered ? "text-white" : "text-white group-hover:text-primaryBlue"
                        }`}
                      >
                        {heading}
                      </h4>
                    </div>

                    {/* Arrow Icon Indicator */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isHovered ? "bg-white/10 text-white rotate-180" : "bg-white/10 text-white/70"
                      }`}
                    >
                      <MdKeyboardArrowDown className="text-lg" />
                    </div>
                  </div>

                  {/* Description Section with Hover Expansion */}
                  <div className="mt-2">
                    <p
                      className={`P leading-relaxed transition-all duration-300 ${
                        isHovered ? "text-zinc-300" : "text-white/80 line-clamp-2"
                      }`}
                    >
                      {paragraph}
                    </p>
                  </div>

                  {/* Bottom indicator hint */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-medium text-white/50">
                    <span>{isHovered ? "Full Details Visible" : "Hover to read full details"}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isHovered ? "bg-primaryBlue" : "bg-white/30"
                      }`}
                    />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}

export default GdfxProvide;