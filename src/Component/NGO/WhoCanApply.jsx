import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MdSchool,
  MdLocalHospital,
  MdNaturePeople,
  MdAgriculture,
  MdFamilyRestroom,
  MdArrowOutward,
} from "react-icons/md";

const canApplyData = [
  {
    icon: <MdSchool size={48} />,
    title: "Education sector",
  },
  {
    icon: <MdLocalHospital size={48} />,
    title: "Health & sanitation",
  },
  {
    icon: <MdNaturePeople size={48} />,
    title: "Environment & Wildlife",
  },
  {
    icon: <MdAgriculture size={48} />,
    title: "Rural Development",
  },
  {
    icon: <MdFamilyRestroom size={48} />,
    title: "Women & child Welfare",
  },
];

// animation variants
const containerV = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const itemV = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const WhoCanApply = () => {
  return (
    <section className="py-20 bg-bgFirstBlue ">
      <div className="customContainer !mb-0">
        <div className="flex flex-col mb-3">
          <div className="flex justify-center">
            <button className="px-2 py-1 rounded cursor-text bg-text_primary text-white_main SP">
              Who Can Apply
            </button>
          </div>

          <h2 className="H2 font-bold capitalize text-white leading-tight text-center mt-3">
            This program is
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              available for
            </span>
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 mb-3">
            <button className="px-4 py-2 rounded-full P font-medium bg-white">
              Registered NGOs or charitable organizations
            </button>
            <button className="px-4 py-2 rounded-full P font-medium bg-white">
              Non-profit initiatives with valid registration documents
            </button>
          </div>

          <motion.div
            className="mt-10 grid lg:grid-cols-5 md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-4 mb-10"
            variants={containerV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            {canApplyData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemV}
                className="p-5 bg-primaryBlue rounded flex flex-col items-center gap-3"
              >
                <div className="text-white">{item.icon}</div>
                <h5 className="text-off_white H6 font-semibold text-center">
                  {item.title}
                </h5>
              </motion.div>
            ))}
          </motion.div>

          <div className="flex justify-center">
            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
              <button className="px-8 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 flex items-center gap-2 group">
                Contact Us Today
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
