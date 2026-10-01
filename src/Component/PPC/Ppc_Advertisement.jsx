import React, { useState } from "react";
import { motion } from "framer-motion";
import { MdArrowForward } from "react-icons/md";

const ppcAdvertisement = [
  {
    title: "Google Ads Management",
    description:
      "Leverage the world’s most popular search engine with Google Ads campaigns that drive targeted traffic to your website. From keyword research to ad creation and bidding strategies, we handle it all.",
  },
  {
    title: "Remarketing Campaigns",
    description:
      "Reconnect with potential customers who’ve visited your site but haven’t converted. Our remarketing strategies bring them back with tailored ads that match their interests.",
  },
  {
    title: "Social Media Advertising",
    description:
      "Engage your audience where they spend most of their time. Our team creates compelling ads for platforms like Facebook, Instagram, LinkedIn, and Twitter to increase brand visibility and drive conversions.",
  },
  {
    title: "E-Commerce PPC Campaigns",
    description:
      "Boost your online store's sales with highly targeted campaigns on platforms like Google Shopping and Amazon Ads.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "Maximize your PPC investment with optimized landing pages designed to increase click-through rates and conversions.",
  },
];

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

const Ppc_Advertisement = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-white text-zinc-950 relative overflow-hidden">
      
      {/* Subtle Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="customContainer relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primaryBlue" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-700">
              Paid Search & Social
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-primary tracking-tight leading-[1.15]">
            GDFX{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Pay-Per-Click Advertising (PPC) Services
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            At GDFX, we understand the power of targeted advertising and its
            ability to transform businesses in the digital age. Our
            Pay-Per-Click (PPC) advertising services are designed to help you
            reach your audience faster, generate quality leads, and achieve
            measurable results.
          </p>

          {/* <p className="mt-3 text-sm sm:text-base font-semibold text-primaryBlue">
            Drive Instant Traffic and Boost Your ROI with GDFX PPC Advertising
          </p> */}
        </div>

        {/* <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 mb-12 text-center tracking-tight">
          Our PPC Advertising Services Include
        </h3> */}

        {/* Grid Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-7 max-w-7xl mx-auto items-stretch"
        >
          {ppcAdvertisement.map((item, index) => {
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group h-full"
              >
                <div
                  className={`relative h-full flex flex-col rounded-[28px] border overflow-hidden transition-all duration-500 p-7 sm:p-8 ${
                    isHovered
                      ? "bg-[#0E1324] border-[#2A5CFF]/30 shadow-[0_30px_70px_rgba(0,0,0,0.18)] scale-[1.01]"
                      : "bg-white border-zinc-200 hover:border-primaryBlue shadow-lg"
                  }`}
                >
                  {/* Top Header inside Card */}
                  <div className="flex items-start justify-between gap-5 mb-4">
                    <div className="flex items-start flex-1 gap-4">
                      <span
                        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-sm shrink-0 transition-all duration-300 shadow-sm ${
                          isHovered
                            ? "bg-gradient-to-r from-primaryBlue to-secondaryPurple text-white"
                            : "bg-white text-primaryBlue border border-zinc-200 group-hover:bg-primaryBlue group-hover:text-white"
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <h4
                        className={`text-xl sm:text-2xl font-bold tracking-tight transition-colors duration-300 ${
                          isHovered ? "text-white" : "text-zinc-900 group-hover:text-primaryBlue"
                        }`}
                      >
                        {item.title}
                      </h4>
                    </div>

                    {/* Arrow / Icon Indicator */}
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isHovered ? "bg-white/10 text-white rotate-45" : "bg-zinc-100 text-zinc-600"
                      }`}
                    >
                      <MdArrowForward className="text-xl" />
                    </div>
                  </div>

                  {/* Description Section */}
                  <div className="mt-2">
                    {/* Default preview state: clamped/truncated */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed transition-all duration-300 ${
                        isHovered ? "text-zinc-300" : "text-zinc-600 line-clamp-2"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom indicator hint */}
                  <div
                    className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium transition-colors duration-300 ${
                      isHovered ? "border-white/10 text-zinc-400" : "border-zinc-100 text-zinc-400"
                    }`}
                  >
                    <span>{isHovered ? "Full Details Visible" : "Hover to read full details"}</span>
                    <span
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isHovered ? "bg-primaryBlue" : "bg-zinc-300"
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
};

export default Ppc_Advertisement;