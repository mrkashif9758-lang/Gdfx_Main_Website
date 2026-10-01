import React from "react";
import { motion } from "framer-motion";

const GdfxInformation = ({ CROInfo }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
        >
          {CROInfo.map(({ title, content }, index) => (
            <motion.div
              key={index}
              className={`${index % 2 === 0 ? "bg-primaryBlue/70" : "bg-secondaryPurple/70"} rounded p-5`}
              variants={cardVariants}
              whileHover="hover"
            >
              <h3 className="H4 font-bold text-white leading-[1.2] mb-5">{title}</h3>

              <div className="space-y-4">
                {content.map(({ subtitle, text }, idx) => (
                  <motion.div
                    key={idx}
                    className="pl-4 border-l-2 border-white"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index + 0.05 * idx }}
                    viewport={{ once: true }}
                  >
                    <h4 className="H6 font-bold text-white/90">
                      {subtitle}
                    </h4>
                    <p className="mt-0.5 text SP text-off_white">{text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GdfxInformation;
