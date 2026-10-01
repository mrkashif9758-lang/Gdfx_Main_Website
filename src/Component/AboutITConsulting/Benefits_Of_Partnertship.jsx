import React from "react";

import { motion } from "framer-motion";
import { FaChartLine, FaShieldAlt } from "react-icons/fa";
import { MdDevices, MdFlashOn } from "react-icons/md";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import UICard from "../UI UX Design/UICard";

const benefits_of_data = [
  {
    icon: <FaChartLine size={25}  />,
    title: "Achieve Better ROI",
    description: "Optimize your technology investments for maximum impact.",
  },
  {
    icon: <MdDevices size={25}  />,
    title: "Improve Scalability",
    description: "Build IT infrastructure that grows with your business.",
  },
  {
    icon: <HiOutlineChartSquareBar size={25}  />,
    title: "Boost Efficiency",
    description:
      "Streamline workflows and eliminate redundancies with optimized IT systems.",
  },
  {
    icon: <MdFlashOn size={25}  />,
    title: "Drive Innovation",
    description:
      "Leverage cutting-edge technology to stay competitive in a rapidly evolving market",
  },
  {
    icon: <FaShieldAlt size={25}  />,
    title: "Enhance Security",
    description:
      "Protect your business from cyber threats with proactive measures.",
  },
];

const Benefits_Of_Partnertship = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="bg-bgFirstBlue py-20">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
            Benefits of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Partnering with GDFX
            </span>
          </h2>
          <p className="P text-off_white text-center">
            Partnering with GDFX means gaining a strategic IT ally dedicated to
            your long-term success. From enhancing operational efficiency to
            driving innovation and strengthening cybersecurity, our solutions
            are designed to deliver tangible results across every stage of your
            digital transformation journey.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {benefits_of_data.map((item, ind) => (
            <UICard
              key={ind}
              icon={item.icon}
              subicon={item.title}
              paragraph={item.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits_Of_Partnertship;
