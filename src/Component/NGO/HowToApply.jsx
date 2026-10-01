import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import {
  MdDescription,
  MdAttachFile,
  MdMessage,
  MdPhone,
} from "react-icons/md";

const applyData = [
  {
    icon: <MdDescription size={70} />,
    title: "Fill out the short form below with your organization's details",
  },
  {
    icon: <MdAttachFile size={70} />,
    title: "Attach a valid registration certificate",
  },
  {
    icon: <MdMessage size={70} />,
    title: "Tell us briefly about your mission and website needs",
  },
  {
    icon: <MdPhone size={70} />,
    title: "We'll contact you within 5 business days",
  },
  {
    icon: <FaLaptopCode size={70} />,
    title: "If selected, we begin work on your free website",
  },
];

// Animation Variants
const containerV = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.4,
    },
  },
};

const itemV = {
  hidden: {
    opacity: 0,
    clipPath: "circle(0% at 50% 50%)",
  },
  show: {
    opacity: 1,
    clipPath: "circle(150% at 50% 50%)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const HowToApply = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !mb-0">
        <div className="flex justify-center mb-10">
          <button className="px-2 py-1 rounded cursor-text bg-text_primary text-white_main SP">
            What You’ll Get
          </button>
        </div>

        <motion.div
          className="grid xl:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5"
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {applyData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="px-5 py-5 rounded-md bg-secondaryPurple text-white flex flex-col gap-3 items-center overflow-hidden"
            >
              <div className="text-white">{item.icon}</div>
              <p className="text-off_white P font-semibold text-center">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowToApply;
