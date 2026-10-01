import React from "react";
import { motion } from "framer-motion";
import { DiAndroid } from "react-icons/di";
import { FaApple, FaDesktop } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const platforms = [
  {
    icon: <DiAndroid />,
    title: "Android",
    description: "Intuitive Android experiences designed for performance, usability, and seamless interaction across devices.",
    iconColor: "text-green-400",
    glow: "group-hover:bg-green-400/10",
  },
  {
    icon: <FaApple />,
    title: "iOS",
    description: "Refined and user-focused interfaces crafted to feel natural, consistent, and effortless across Apple devices.",
    iconColor: "text-white",
    glow: "group-hover:bg-white/10",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop",
    description: "Responsive desktop experiences built for clarity, accessibility, and consistent performance across modern browsers.",
    iconColor: "text-blue-400",
    glow: "group-hover:bg-blue-400/10",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const MobileCreateDesign = () => {
  return (
    <section className="relative py-20 lg:py-18 bg-bgFirstBlue overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 left-1/4 w-[450px] h-[450px] rounded-full bg-primaryBlue/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 right-0 w-[450px] h-[450px] rounded-full bg-secondaryPurple/10 blur-[140px] pointer-events-none" />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px] pointer-events-none" />

      <div className="max-w-7xl mx-auto !my-0 relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-14">

          {/* Label */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md mb-5">
            <span className="w-2 h-2 rounded-full bg-primaryBlue" />
            <span className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">Cross-Platform Design</span>
          </div>

          {/* Heading */}
          <h2 className="H2 font-bold text-white leading-tight">
            Designed for Every Screen,
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-blue-400 to-secondaryPurple">Built for Every Experience.</span>
          </h2>

          {/* Description */}
          <p className="P text-white/50 leading-relaxed max-w-2xl mx-auto mt-5">
            We create consistent, intuitive, and high-performing digital experiences that feel natural across mobile, desktop, and modern operating systems.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {platforms.map((platform, index) => (
            <motion.div key={platform.title} variants={cardVariants} whileHover={{ y: -8 }} className="group relative min-h-[300px] rounded-2xl bg-white/[0.05] backdrop-blur-xl p-7 lg:p-8 overflow-hidden transition-all duration-500 hover:bg-white/[0.085]">

              {/* Hover Glow */}
              <div className={`absolute -top-20 -right-20 w-48 h-48 rounded-full blur-[70px] bg-transparent ${platform.glow} transition-all duration-700 pointer-events-none`} />

              {/* Number */}
              <span className="absolute top-7 right-7 text-[11px] font-medium tracking-[0.2em] text-white/20">
                0{index + 1}
              </span>

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col">

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-white/[0.06] flex items-center justify-center text-[30px] ${platform.iconColor} transition-all duration-500 group-hover:scale-105 group-hover:bg-white/[0.1]`}>
                  {platform.icon}
                </div>

                {/* Text */}
                <div className="mt-9">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {platform.title}
                  </h3>

                  <p className="text-sm sm:text-[15px] text-white/50 leading-7">
                    {platform.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-auto pt-8 flex items-center gap-3">

                  <span className="h-[2px] w-7 rounded-full bg-primaryBlue transition-all duration-500 group-hover:w-12" />

                  <MdArrowOutward className="text-primaryBlue text-lg opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-[2px]" />

                </div>
              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primaryBlue/0 to-transparent transition-all duration-500 group-hover:via-primaryBlue/70 group-hover:w-3/4" />

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default MobileCreateDesign;