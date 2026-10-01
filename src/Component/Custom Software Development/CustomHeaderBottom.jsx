import React from "react";
import { motion } from "framer-motion";
import bulb_development from "../../assets/Custom Software Development/Custom Header/bulb_development.webp";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function CustomHeaderBottom() {
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  return (
    <section className="py-20 bg-bgFirstBlue overflow-hidden">
      <div className="max-w-7xl mx-auto !my-0">
        <motion.h2
          className="H2 font-bold capitalize text-white mb-4 leading-tight text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Custom Software Development by GDFX:
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
            {" "}
            Build the Future of Your Business
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center">
          <motion.div
            className="order-2 lg:order-1"
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="P text-off_white mt-5">
              At{" "}
              <span className="H6 font-semibold text-secondaryPurple">
                GDFX{" "}
              </span>
              we provide top-notch custom software development services
              tailored to your business needs. <br />
              From CRMs and ERPs to industry-specific systems like hospital,
              school, or hotel management software — we build scalable, secure,
              and high-performing solutions. Our expert team handles everything
              from planning and design to deployment and maintenance, ensuring
              smooth integration with your workflows. <br /> We serve industries
              like healthcare, education, logistics, retail, and more — boosting
              efficiency, productivity, and ROI. <br /> Partner with GDFX to
              bring your custom software vision to life. Let’s build something
              great together!
            </p>
            <p className="italic SP text-off_white mt-5">
              Our skilled team leverages advanced technologies to deliver
              scalable, secure, and high-performing custom software solutions.
              From concept development and design to deployment and maintenance,
              we adopt a user-centric approach to ensure seamless integration
              with your workflows.
            </p>
            <Link
              to={"/contact"}
              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            >
              <button className="mt-10 px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </motion.div>

          <motion.div
            className="order-1 lg:order-2 md:flex justify-center"
            variants={imageVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={bulb_development}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="lg:w-auto"
              alt="Service-Custom-Software"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CustomHeaderBottom;
