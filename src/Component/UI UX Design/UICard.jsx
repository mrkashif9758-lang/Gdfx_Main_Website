import { motion } from "framer-motion";

function UICard({ icon, subicon, paragraph }) {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <motion.div
      variants={item}
      className="bg-white p-6 rounded shadow hover:shadow-lg transition-all group hover:bg-primary-gradient duration-500"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 flex items-center justify-center group-hover:bg-white bg-primaryBlue  duration-500 rounded-full mb-4">
          {/* <img src={icon} alt={subicon} className="w-8 h-8" /> */}
          <span className=" group-hover:text-primaryBlue text-white">{icon}</span>
        </div>
        <h3 className="H5 font-bold text-heading_color group-hover:text-white duration-500 mb-2 leading-[1.2]">
          {subicon}
        </h3>
        <p className="SP text-text_color group-hover:text-white/90 duration-500">
          {paragraph}
        </p>
      </div>
    </motion.div>
  );
}

export default UICard;
