import React from "react";
import {
  FaDollarSign,
  FaShieldAlt,
  FaHeadset,
  FaFlask,
  FaCogs,
  FaUserCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: <FaDollarSign className="text-5xl" />,
    title: "Cost-Effective",
    description: "Budget-friendly solutions with top notch quality assurance",
    color: "text-green-500",
    bgColor: "hover:border-green-500 hover:shadow-2xl hover:shadow-green-500/50",
  },
  {
    icon: <FaShieldAlt className="text-5xl" />,
    title: "Scalable & Secure",
    description: "Apps built for growth with robust security measures",
    color: "text-blue-500",
    bgColor:  "hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/50",
  },
  {
    icon: <FaHeadset className="text-5xl" />,
    title: "End-to-End Support",
    description: "From ideation to post-launch support",
    color: "text-purple-500",
    bgColor:  "hover:border-purple-500 hover:shadow-2xl hover:shadow-purple-500/50",
  },
  {
    icon: <FaFlask className="text-5xl" />,
    title: "Latest Technologies",
    description: "Cutting-edge tools for top-notch performance",
    color: "text-orange-500",
    bgColor:  "hover:border-orange-500 hover:shadow-2xl hover:orange-pink-500/50",
  },
  {
    icon: <FaCogs className="text-5xl" />,
    title: "Custom Solutions",
    description: "Tailor-made apps for your business needs",
    color: "text-indigo-500",
    bgColor: "hover:border-indigo-500 hover:shadow-2xl hover:shadow-indigo-500/50",
  },
  {
    icon: <FaUserCircle className="text-5xl" />,
    title: "User-Centric Design",
    description: "Intuitive and engaging UI/UX experiences",
    color: "text-pink-500",
    bgColor: "hover:border-pink-500 hover:shadow-2xl hover:shadow-pink-500/50",
  },
];

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ChooseUs = () => {
  return (
    <section className="bg-bgFirstBlue py-20">
      <div className="max-w-7xl mx-auto !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
            Why Choose Us for
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Mobile App Development?
            </span>
          </h2>
          <p className="P text-off_white text-center">
            Choose us for mobile app development to get custom, scalable
            solutions with a focus on user experience and cutting-edge
            technologies like AI and Flutter. We ensure cost-effective,
            high-performance apps delivered on time with exceptional support for
            your business growth.
          </p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.4, ease: "linear" }}
              className={`bg-dark-gradient-br border ${benefit.bgColor} border-gray-700 rounded p-5 shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className={`${benefit.color} mb-5`}>{benefit.icon}</div>
              <h3 className="H4 text-white font-bold mb-2">
                {benefit.title}
              </h3>
              <p className="P text-white/90">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ChooseUs;
