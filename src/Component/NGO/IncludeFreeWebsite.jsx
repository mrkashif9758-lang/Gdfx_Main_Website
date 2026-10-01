import React from "react";
import { motion } from "framer-motion";
import { RxDragHandleDots2 } from "react-icons/rx";
import {
  MdDevices,
  MdLocationOn,
  MdDesignServices,
  MdSearch,
  MdArticle,
  MdVolunteerActivism,
  MdBrush,
  MdShare,
  MdSchool,
} from "react-icons/md";

const freeWebsiteData = [
  {
    icon: <MdDevices size={50} />,
    title: "Mobile-friendly, responsive design",
  },
  {
    icon: <MdLocationOn size={50} />,
    title: "Contact form & Google Maps integration",
  },
  {
    icon: <MdDesignServices size={50} />,
    title: "5–6 custom-designed pages",
  },
  {
    icon: <MdSearch size={50} />,
    title: "Basic SEO setup",
  },
  {
    icon: <MdArticle size={50} />,
    title: "Blog or news section (optional)",
  },
  {
    icon: <MdVolunteerActivism size={50} />,
    title: "Donation link (UPI/PayPal) integration",
  },
  {
    icon: <MdBrush size={50} />,
    title: "Basic logo design (if required)",
  },
  {
    icon: <MdShare size={50} />,
    title: "Social media integration",
  },
  {
    icon: <MdSchool size={50} />,
    title: "Basic training or documentation for website management",
  },
];

const IncludeFreeWebsite = () => {
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
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-20 bg-bgFirstBlue overflow-hidden relative">
      <div className="customContainer !my-0 relative z-10">
        <motion.div className="text-center mb-10">
          <div className="flex justify-center">
            <button className="px-2 py-1 rounded cursor-text bg-text_primary text-white_main SP">
              What You'll Get
            </button>
          </div>

          <h2 className="H2 font-bold capitalize text-white leading-tight text-center mt-3">
            What's Included in
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Your Free Website
            </span>
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-4 xl:grid-cols-5 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-6"
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "linear" }}
        >
          {freeWebsiteData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="bg-dark-gradient-br p-6 rounded border border-slate-700 hover:border-primaryBlue/50 hover:shadow-primaryBlue/20 transition-all duration-300 flex flex-col gap-4 items-center text-center hover:shadow-xl"
            >
              <div className="text-primaryBlue">{item.icon}</div>
              <h3 className="P font-medium text-white">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IncludeFreeWebsite;
