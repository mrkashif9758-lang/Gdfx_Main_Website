import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaTools, FaChartLine, FaUsers } from "react-icons/fa";

const ChallengeSolution = ({ title, challenges }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        delay: 0.3,
      },
    },
    hover: {
      scale: 1.05,
      rotate: 5,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { x: -20, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const challengeIcons = [FaLightbulb, FaTools, FaChartLine, FaUsers];

  const colorVariants = [
    {
      bg: "bg-gradient-to-br from-blue-500 to-blue-600",
      text: "text-blue-100",
    },
    {
      bg: "bg-gradient-to-br from-purple-500 to-purple-600",
      text: "text-purple-100",
    },
    {
      bg: "bg-gradient-to-br from-teal-500 to-teal-600",
      text: "text-teal-100",
    },
    {
      bg: "bg-gradient-to-br from-orange-500 to-orange-600",
      text: "text-orange-100",
    },
  ];

  return (
    <section className="py-20 bg-bgFirstBlue overflow-hidden">
      <div className="customContainer !my-0 ">
        <div className="text-center">
          <motion.h2 className="H2 font-bold capitalize text-white mb-1 leading-tight">
            The
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Challenges & Solution
            </span>
          </motion.h2>

          <p className="P text-white mb-10 leading-relaxed">
            {title}
          </p>
        </div>
        <motion.div
          className="grid lg:grid-cols-2 grid-cols-1 gap-8 relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
  
          {challenges.map((challenge, index) => {
            const Icon = challengeIcons[index % challengeIcons.length];
            const colors = colorVariants[index % colorVariants.length];

            return (
              <motion.div
                key={index}
                variants={item}
                className="relative group"
              >
                <div
                  className={`absolute -inset-0.5 ${colors.bg.replace(
                    "bg-",
                    "bg-"
                  )} rounded-xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                ></div>

                <div className="relative h-full bg-dark-gradient-br rounded border border-gray-700 overflow-hidden">
                  <div className="p-8 h-full">
                    <div className="flex flex-col md:flex-row gap-6 h-full">
                      <motion.div
                        variants={iconVariants}
                        whileHover="hover"
                        className={`flex-shrink-0 w-20 h-20 rounded-xl ${colors.bg} flex items-center justify-center shadow-lg`}
                      >
                        <Icon size={40} className=" text-white" />
                      </motion.div>

                      <motion.div
                        variants={contentVariants}
                        className="flex-grow flex flex-col"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span
                            className={`SP font-semibold ${colors.text}`}
                          >
                            Challenge 0{index + 1}
                          </span>
                          <div className="w-8 h-px bg-primary-gradient"></div>
                        </div>
                        <h3 className="H5 leading-[1.2] font-medium text-white mb-3">
                          {challenge.title}
                        </h3>
                        <p className="text-off_white flex-grow mb-5">
                          {challenge.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-gray-700">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-3 h-3 rounded-full ${colors.bg.replace(
                                "bg-",
                                "bg-"
                              )}`}
                            ></div>
                            <span className="SP font-medium text-off_white">
                              Our Innovative Solution
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
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

export default ChallengeSolution;
