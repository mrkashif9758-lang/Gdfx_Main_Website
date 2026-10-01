import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTrendingUp } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const choose_gdfx = [
  {
    title: 40,
    decimals: 0,
    suffix: "%",
    label: "Mobile Engagement",
    description: "Increase in engagement through responsive, mobile-first web experiences.",
    accent: "from-primaryBlue/20 to-primaryBlue/[0.03]",
    iconBg: "bg-primaryBlue/10",
    iconColor: "text-primaryBlue",
  },
  {
    title: 60,
    decimals: 0,
    suffix: "%",
    label: "Faster Loading",
    description: "Optimized performance designed to reduce bounce rates and improve retention.",
    accent: "from-secondaryPurple/20 to-secondaryPurple/[0.03]",
    iconBg: "bg-secondaryPurple/10",
    iconColor: "text-secondaryPurple",
  },
  {
    title: 95,
    decimals: 0,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Custom web solutions carefully aligned with individual business requirements.",
    accent: "from-primaryBlue/20 to-primaryBlue/[0.03]",
    iconBg: "bg-primaryBlue/10",
    iconColor: "text-primaryBlue",
  },
  {
    title: 100,
    decimals: 0,
    suffix: "%",
    label: "SEO Focused",
    description: "Search-friendly development practices built to strengthen online visibility.",
    accent: "from-secondaryPurple/20 to-secondaryPurple/[0.03]",
    iconBg: "bg-secondaryPurple/10",
    iconColor: "text-secondaryPurple",
  },
  {
    title: 25,
    decimals: 0,
    suffix: "%",
    label: "Online Sales Growth",
    description: "Conversion-focused e-commerce experiences designed to support business growth.",
    accent: "from-primaryBlue/20 to-primaryBlue/[0.03]",
    iconBg: "bg-primaryBlue/10",
    iconColor: "text-primaryBlue",
  },
  {
    title: 99.9,
    decimals: 1,
    suffix: "%",
    label: "Reliable Performance",
    description: "Secure and performance-focused development for dependable digital experiences.",
    accent: "from-secondaryPurple/20 to-secondaryPurple/[0.03]",
    iconBg: "bg-secondaryPurple/10",
    iconColor: "text-secondaryPurple",
  },
];

const FEATURES = [
  "Responsive Web Design for seamless user experience",
  "SEO-Optimized Websites for higher search visibility",
  "Custom Web Development tailored to your business",
  "Fast Loading Speeds for better user retention",
  "E-commerce Development for online business growth",
  "Scalable and Secure Websites built for the future",
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Choose_GDFX = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-bgFirstBlue overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute -top-[200px] -left-[180px] w-[500px] h-[500px] rounded-full bg-primaryBlue/[0.08] blur-[150px] pointer-events-none" />

      <div className="absolute -bottom-[200px] -right-[180px] w-[500px] h-[500px] rounded-full bg-secondaryPurple/[0.08] blur-[150px] pointer-events-none" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px] pointer-events-none" />

      {/* Decorative Circle */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute -right-[150px] top-[120px] w-[350px] h-[350px] rounded-full border border-dashed border-white/[0.04] pointer-events-none">
        <span className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-primaryBlue/50" />
        <span className="absolute bottom-8 right-12 w-2 h-2 rounded-full bg-secondaryPurple/50" />
      </motion.div>

      <div className="customContainer !my-0 relative z-10">

        {/* ================= HEADING ================= */}

        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center mb-12">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.055] backdrop-blur-md mb-5">
            <FiTrendingUp className="text-primaryBlue" />
            <span className="text-xs sm:text-sm text-white/60 font-medium tracking-wide">Built for Measurable Growth</span>
          </div>

          <h2 className="H2 font-bold text-white leading-tight">
            Why Businesses Choose
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple via-purple-400 to-primaryBlue"> GDFX</span>
          </h2>

          <p className="P text-white/50 leading-relaxed max-w-3xl mx-auto mt-5">
            We combine thoughtful design, modern technology, performance, and scalability to create digital experiences that help businesses build a stronger online presence.
          </p>

        </motion.div>

        {/* ================= FEATURES ================= */}

        <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">

          {FEATURES.map((feature, index) => (
            <motion.div key={feature} variants={cardVariants} whileHover={{ x: 4 }} className="group flex items-center gap-3 px-4 py-3.5 rounded-xl bg-white/[0.035] backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.08]">

              <div className="w-8 h-8 rounded-lg bg-primaryBlue/10 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-primaryBlue group-hover:scale-105">
                <FiCheckCircle className="text-primaryBlue text-base transition-colors duration-300 group-hover:text-white" />
              </div>

              <span className="text-sm text-white/55 leading-5 transition-colors duration-300 group-hover:text-white/85">
                {feature}
              </span>

            </motion.div>
          ))}

        </motion.div>

        {/* ================= STAT CARDS ================= */}

   {/* ================= COMPACT STAT CARDS ================= */}

<motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">

  {choose_gdfx.map((item) => (
    <motion.div key={item.label} variants={cardVariants} whileHover={{ y: -5 }} className="group relative rounded-2xl bg-white/[0.045] backdrop-blur-xl px-4 py-6 text-center overflow-hidden transition-all duration-300 hover:bg-white/[0.12]">

      {/* Subtle Hover Glow */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-primaryBlue/0 blur-[35px] transition-all duration-500 group-hover:bg-primaryBlue/15" />

      {/* Counter */}
      <div className="relative z-10 flex items-end justify-center">

        <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          <CountUp start={0} end={item.title} decimals={item.decimals} duration={2} enableScrollSpy scrollSpyOnce />
        </h3>

        <span className={`text-lg font-semibold ${item.iconColor} ml-0.5 mb-0.5`}>
          {item.suffix}
        </span>

      </div>

      {/* Label */}
      <p className="relative z-10 text-xs sm:text-sm font-medium text-white/55 mt-2 leading-5 transition-colors duration-300 group-hover:text-white/80">
        {item.label}
      </p>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primaryBlue to-transparent transition-all duration-500 group-hover:w-1/2" />

    </motion.div>
  ))}

</motion.div>

      </div>
    </section>
  );
};

export default Choose_GDFX;