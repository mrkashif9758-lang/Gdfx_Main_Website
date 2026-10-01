import React from "react";

import { motion } from "framer-motion";
import {
  FaChessKnight,
  FaUserTie,
  FaComments,
  FaChartLine,
  FaHandshake,
  FaBullseye,
  FaTools,
  FaLayerGroup,
} from "react-icons/fa";

const chooseDigitalMarketing = [
  {
    icon: <FaChessKnight className="text-3xl" />,
    title: "Tailored Strategies",
    description:
      "Unique, goal-driven plans ensure maximum ROI for your business.",
  },
  {
    icon: <FaUserTie className="text-3xl" />,
    title: "Expert Team",
    description:
      "Professionals with years of experience across diverse industries.",
  },
  {
    icon: <FaComments className="text-3xl" />,
    title: "Transparent Communication",
    description: "Regular updates and detailed reports keep you informed",
  },
  {
    icon: <FaChartLine className="text-3xl" />,
    title: "Proven Success",
    description: "Data-driven campaigns that deliver significant growth",
  },
  {
    icon: <FaHandshake className="text-3xl" />,
    title: "End-to-End Support",
    description:
      "From planning to execution and optimization, we're with you at every step.",
  },
  {
    icon: <FaBullseye className="text-3xl" />,
    title: "Focus on Results",
    description:
      "Focused on driving measurable outcomes like traffic and engagement",
  },
  {
    icon: <FaTools className="text-3xl" />,
    title: "Cutting-Edge Tools",
    description: "We use the latest technologies for optimal results.",
  },
  {
    icon: <FaLayerGroup className="text-3xl" />,
    title: "Comprehensive Services",
    description: "Covering all aspects of digital marketing from SEO to PPC.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const itemVarient = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

const Choose_Digital_Marketing = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold text-white mb-1">
            Why Choose GDFX for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Digital Marketing?
            </span>
          </h2>
          <p className="P text-off_white">
            Partner with GDFX to unlock the full potential of your digital
            marketing strategy. Contact us today to start transforming your
            online presence and achieving your business goals!
          </p>
        </div>

        <motion.div
          className="grid xs:grid-cols-2 md:grid-cols-3  xl:grid-cols-4 gap-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
        >
          {chooseDigitalMarketing.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVarient}
              className="p-5 bg-white/5 backdrop-blur-sm rounded border border-white/10 hover:border-primaryBlue/50 transition-all duration-300 group hover:scale-[1.01]"
            >
              <div className="flex flex-col items-center text-center gap-4">
                <div className="p-4 bg-primaryBlue/10 rounded-full group-hover:bg-primaryBlue/20 transition-all text-primaryBlue">
                  {item.icon}
                </div>
                <h3 className="H5 text-white font-bold leading-[1.2]">
                  {item.title}
                </h3>
                <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primaryBlue to-transparent group-hover:via-secondaryPurple transition-all"></div>
                <p className="SP text-off_white">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Choose_Digital_Marketing;
