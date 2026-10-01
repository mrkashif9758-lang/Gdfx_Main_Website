import React from "react";
import { motion } from "framer-motion";
import {
  FaCogs,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";
import {
  MdDesignServices,
  MdOutlineSecurity,
  MdSpeed,
  MdArrowOutward,
} from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { RiLightbulbFlashFill } from "react-icons/ri";

const gdfxData = [
  {
    icon: <FaCogs />,
    title: "Tailored to Perfection",
    description:
      "Solutions designed around your exact business requirements, workflows, and long-term goals.",
  },
  {
    icon: <MdDesignServices />,
    title: "End-to-End Services",
    description:
      "From strategy and validation to development, deployment, and ongoing support.",
  },
  {
    icon: <RiLightbulbFlashFill />,
    title: "Innovative Expertise",
    description:
      "Modern technologies and proven engineering practices to build powerful digital products.",
  },
  {
    icon: <MdSpeed />,
    title: "Built to Scale",
    description:
      "Flexible software architecture designed to evolve seamlessly as your business grows.",
  },
  {
    icon: <MdOutlineSecurity />,
    title: "User-Centric Design",
    description:
      "Intuitive digital experiences focused on usability, engagement, and customer satisfaction.",
  },
  {
    icon: <AiFillCheckCircle />,
    title: "Proven Delivery",
    description:
      "A reliable development process focused on quality, transparency, and measurable outcomes.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security by Design",
    description:
      "Security-first development practices that help protect your applications, users, and data.",
  },
  {
    icon: <FaUsers />,
    title: "Agile Collaboration",
    description:
      "An adaptive development approach that keeps your team involved throughout every stage.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const GdfxPerfect = () => {
  return (
    <section className="relative bg-bgFirstBlue py-20 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-primaryBlue/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full bg-secondaryPurple/10 blur-[140px]" />

      {/* Subtle Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.025]
          bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]
          bg-[size:55px_55px]
        "
      />

      <div className="max-w-7xl mx-auto !my-0 relative z-10">

        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-16">

          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-white/[0.06]
              backdrop-blur-md
              mb-6
            "
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-primaryBlue opacity-50 animate-ping" />
              <span className="relative inline-flex w-2 h-2 rounded-full bg-primaryBlue" />
            </span>

            <span className="text-xs sm:text-sm text-white/70 font-medium tracking-wide">
              Why Choose GDFX
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="H2 font-bold text-white leading-tight"
          >
            Software Built Around
            <br className="hidden sm:block" />

            <span
              className="
                bg-clip-text text-transparent
                bg-gradient-to-r
                from-primaryBlue
                via-blue-400
                to-secondaryPurple
              "
            >
              {" "}
              Your Business
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              P
              text-white/60
              text-center
              max-w-2xl
              mx-auto
              mt-5
              leading-relaxed
            "
          >
            From concept to deployment, GDFX delivers secure, scalable, and
            thoughtfully engineered software solutions built to solve real
            business challenges.
          </motion.p>
        </div>

        {/* ================= CARDS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
          "
        >
          {gdfxData.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              whileHover={{ y: -6 }}
              className="
                group
                relative
                min-h-[260px]
                rounded-2xl
                bg-white/[0.055]
                backdrop-blur-xl
                p-6
                overflow-hidden
                transition-all
                duration-500
                hover:bg-white/[0.09]
              "
            >
              {/* Hover Glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-36
                  h-36
                  rounded-full
                  bg-primaryBlue/0
                  blur-[50px]
                  transition-all
                  duration-500
                  group-hover:bg-primaryBlue/20
                "
              />

              {/* Number */}
              <span
                className="
                  absolute
                  top-5
                  right-5
                  text-xs
                  font-medium
                  tracking-widest
                  text-white/20
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="relative z-10 h-full flex flex-col">

                {/* Icon */}
                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-white/[0.08]
                    flex
                    items-center
                    justify-center
                    text-primaryBlue
                    text-[22px]
                    mb-8
                    transition-all
                    duration-500
                    group-hover:bg-primaryBlue
                    group-hover:text-white
                    group-hover:scale-105
                  "
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-white
                      mb-3
                      transition-colors
                      duration-300
                    "
                  >
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/55 leading-6">
                    {item.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mt-5 flex items-center gap-2">
                    <span
                      className="
                        h-[2px]
                        w-5
                        bg-primaryBlue
                        transition-all
                        duration-500
                        group-hover:w-10
                      "
                    />

                    <MdArrowOutward
                      className="
                        text-primaryBlue
                        opacity-0
                        -translate-x-2
                        transition-all
                        duration-300
                        group-hover:opacity-100
                        group-hover:translate-x-0
                      "
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GdfxPerfect;