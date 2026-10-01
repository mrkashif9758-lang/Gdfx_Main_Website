import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const cardVariants = {
  hidden: { opacity: 0, y: 30, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.01,
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 98, 255, 0.2)",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  normal: { scale: 1, filter: "brightness(100%)" },
  hover: {
    scale: 1.05,
    filter: "brightness(100%) blur(1px)",
    transition: {
      duration: 0.8,
      ease: "linear",
    },
  },
};

const overlayVariants = {
  hidden: {
    opacity: 0,
    background:
      "linear-gradient(to right, #acb2ca, #893cc1)",
  },
  hover: {
    opacity: 1,
    background:
      "linear-gradient(to right, #acb2ca, #b44dff)",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  hover: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1 + 0.2,
      duration: 0.5,
      ease: "backOut",
    },
  }),
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  hover: {
    scale: 1.01,
    opacity: 1,
    
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
    },
  },
};

const arrowVariants = {
  normal: { rotate: 0, x: 0 },
  hover: {
    rotate: 45,
    x: 4,
    y: -4,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 10,
    },
  },
};

const DesignGrid = ({ designs, visibleProjects }) => (
  <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
    {designs?.slice(0, visibleProjects)?.map((item, index) => (
      <motion.div
        key={index}
        className="card relative rounded-xl overflow-hidden shadow-lg"
        initial="hidden"
        animate="visible"
        whileHover="hover"
        variants={cardVariants}
        viewport={{ once: true, }}
      >
        {/* Image with parallax effect */}
        <motion.div className="h-64 w-full bg-primaryBlue/40 flex items-center justify-center" variants={imageVariants}>
          <img
            src={item.img}
            className=" w-[90%] h-[90%] object-contain"
            alt={`Design ${index + 1}`}
          />
        </motion.div>

        {/* Animated overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white"
          variants={overlayVariants}
        >
          <AnimatePresence>
            <motion.div className="text-center space-y-2">
              <motion.h3
                className="H5 font-bold"
                variants={textVariants}
                custom={0}
              >
                {item.title}
              </motion.h3>

              <motion.p
                className="text-white/90 P"
                variants={textVariants}
                custom={1}
              >
                {item.text}
              </motion.p>

              <motion.div variants={textVariants} custom={2}>
                <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                  <motion.button
                    className="px-6 py-2 SP mx-auto rounded-full font-medium text-white bg-dangerRed flex items-center justify-center gap-2 mt-4"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                    <motion.span variants={arrowVariants}>
                      <MdArrowOutward className="text-white text-xl mt-1" />
                    </motion.span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    ))}
  </div>
);
export default DesignGrid;
