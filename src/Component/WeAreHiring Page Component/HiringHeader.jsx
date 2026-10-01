import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import HiringForm from "./HiringForm";
import { FiClock, FiUsers, FiCalendar } from "react-icons/fi";

const HiringHeader = () => {
  const { jobId } = useParams();
  const decodedJobId = decodeURIComponent(jobId);
  const { jobs } = useSelector((state) => state.jobContainer);
  const [showPopup, setShowPopup] = useState(false);

  const singleJob = jobs?.find(
    (item) =>
      item?.title
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase() === jobId
  );
  
  const currentDate = new Date();
  const lastDate = new Date(singleJob?.lastDate);
  const isExpired = lastDate <= currentDate;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
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

  return (
    <section className="relative min-h-[500px] bg-black py-20 flex items-center justify-center overflow-hidden">
      <div className="customContainer !mb-0 relative z-10">
        <motion.div
          className="flex flex-col items-center text-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h2
            variants={item}
            className="H2 font-bold capitalize text-white leading-tight mb-7"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {singleJob?.title || "Join Our Team"}
            </span>
          </motion.h2>

          <motion.div
            variants={item}
            className="flex flex-wrap justify-center gap-6 mb-5"
          >
            <div className="flex items-center gap-2 border border-gray-700 bg-gray-800 px-4 py-2 rounded-full">
              <FiClock className="text-blue-400" />
              <span className="text-white SP">Full Time</span>
            </div>

            <div className="flex items-center gap-2 border border-gray-700 bg-gray-800 px-4 py-2 rounded-full">
              <FiUsers className="text-blue-400" />
              <span className="text-white SP">
                {singleJob?.noOfVacency || 1} Position(s) Available
              </span>
            </div>

            <div className="flex items-center gap-2 border border-gray-700 bg-gray-800 px-4 py-2 rounded-full">
              <FiCalendar
                className={isExpired ? "text-red-400" : "text-blue-400"}
              />
              <span className={isExpired ? "text-red-300 SP" : "text-white SP"}>
                {isExpired
                  ? "Closed"
                  : `Apply by ${lastDate.toLocaleDateString()}`}
              </span>
            </div>
          </motion.div>

          <motion.div variants={item} className="mt-4">
            {!isExpired ? (
              <motion.button
                onClick={() => setShowPopup(true)}
                className="px-5 py-2 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            ) : (
              <motion.button
                disabled
                className="px-5 py-2 bg-danger-gradient text-off_white P rounded-lg font-medium cursor-not-allowed"
              >
                Expire
              </motion.button>
            )}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <HiringForm showPopup={showPopup} setShowPopup={setShowPopup} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HiringHeader;
