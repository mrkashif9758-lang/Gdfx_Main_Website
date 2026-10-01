import { RxDragHandleDots2 } from "react-icons/rx";
import aboutKnow from "../../assets/About/About Header/aboutKnow.png";
import { motion, useInView, animate, stagger } from "framer-motion";
import { GrTrophy } from "react-icons/gr";
import { FaAward } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FiCheckCircle } from "react-icons/fi";
import { useEffect, useRef } from "react";

const RightSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const featureRef = useRef(null);

  const featureItems = [
    "Tailored IT solutions",
    "Comprehensive support",
    "Cutting-edge technology",
    "Robust cybersecurity",
    "Scalable cloud services",
    "Continuous maintenance",
  ];

  // Animate feature items sequentially
  useEffect(() => {
    if (isInView && featureRef.current) {
      const items = featureRef.current.querySelectorAll(".feature-item");
      animate(
        items,
        { opacity: 1, x: 0 },
        { delay: stagger(0.15), duration: 0.5 }
      );
    }
  }, [isInView]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <motion.div
        className="inline-flex gap-2 items-center px-4 py-1.5 rounded-full bg-purple-200/60 border border-purple-300 text-[#7e22ce] font-bold text-xs mb-6 w-max shadow-sm"
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2 }}
      >
        <RxDragHandleDots2 className="rotate-90 text-primaryBlue text-base" />
        <span>Expertise & Value</span>
      </motion.div>

      <motion.h2
        className="H2 font-extrabold capitalize text-gray-900 mb-4 leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        We Know to provide
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
          {" "}
          exceptional Solution
        </span>
      </motion.h2>

      <motion.p
        className="P text-gray-700 mb-8 leading-relaxed font-medium"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        What makes us stand out? We focus on working closely with you, keeping
        everything clear and transparent, and making sure you’re satisfied with
        the results. We listen to your goals and deliver solutions designed just
        for you. We’re always looking ahead, staying updated with the latest
        tech and industry trends, so you get the best tools to grow your
        business. For us, your success is our success. Let’s work together to
        bring your digital ideas to life and help your business reach new
        heights. Partner with GlobalDigitalSFX today and see the difference we
        can make!
      </motion.p>

      {/* Features Grid */}
      <div ref={featureRef} className="grid sm:grid-cols-2 gap-4 mb-10">
        {featureItems.map((item, index) => (
          <motion.div
            key={index}
            className="feature-item cursor-default flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-purple-200/80 shadow-[0_4px_20px_rgba(147,51,234,0.06)] opacity-0 translate-x-[-10px]"
            whileHover={{ 
              x: 5, 
              backgroundColor: "rgba(243, 232, 255, 0.9)",
              borderColor: "rgba(147, 51, 234, 0.4)",
              boxShadow: "0_8px_25px_rgba(147,51,234,0.12)"
            }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-primaryBlue text-xl flex-shrink-0 bg-purple-100 p-2 rounded-xl">
              <FiCheckCircle />
            </div>
            <span className="text-gray-800 font-bold text-sm sm:text-base">
              {item}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

function AboutUsIntroduction() {
  return (
    <>
      {/* SECTION 1: Dark Mode Immersive Theme with Glowing Orbs */}
      <section className=" bg-gradient-to-br from-gray-950 via-[#11071f] to-gray-900 py-24 relative overflow-hidden">
        {/* Background Glowing 3D Ambient Orbs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[130px] pointer-events-none animate-pulse" />

        <div className="customContainer !my-0 relative z-10">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-2 items-center mb-4 px-4 py-1.5 rounded-full bg-purple-900/60 border border-purple-700/50 w-max shadow-lg backdrop-blur-md">
              <RxDragHandleDots2 className="rotate-90 text-primaryBlue text-xl" />
              <span className="text-purple-300 font-bold tracking-wider text-xs sm:text-sm">
                About Us
              </span>
            </div>

            <motion.h2 
              className="H2 font-extrabold capitalize text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Welcome to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-fuchsia-400 to-secondaryPurple">
                {" "}
                Global Digitals FX
              </span>
            </motion.h2>

            <motion.p 
              className="P text-gray-300 leading-relaxed font-medium max-w-4xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <strong className="text-purple-400 H5 font-extrabold block mb-2">
                Empowering Businesses Through Innovative IT Solutions.
              </strong>
              Welcome to GDFX – your trusted partner in driving digital
              transformation and delivering impactful IT solutions. Since our
              inception in 2022, we have been at the forefront of providing
              businesses worldwide with customized software development,
              creative web design, dynamic digital marketing strategies, and
              advanced mobile app solutions. At GDFX, we harness the power of
              cutting-edge technology and a client-centric approach to help
              businesses unlock their true potential.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 mt-14"
          >
            <motion.div
              className="bg-white/[0.04] backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-primaryBlue/70 hover:bg-white/[0.07] transition-all group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-purple-900/40 border border-purple-500/30 group-hover:bg-primaryBlue/20 transition-colors">
                <FaAward size={45} className="text-purple-300 group-hover:text-primaryBlue duration-300" />
              </div>
              <h3 className="text-white H5 font-bold mb-3">
                Top Software Development Agency
              </h3>
              <p className="text-gray-400 P font-medium leading-relaxed">
                Recognizes leading software agencies based on client feedback,
                expertise, and proven track records.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/[0.04] backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-primaryBlue/70 hover:bg-white/[0.07] transition-all group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-purple-900/40 border border-purple-500/30 group-hover:bg-primaryBlue/20 transition-colors">
                <GrTrophy size={45} className="text-purple-300 group-hover:text-primaryBlue duration-300" />
              </div>
              <h3 className="text-white H5 font-bold mb-3">
                The Webby Awards - Best Software
              </h3>
              <p className="text-gray-400 P font-medium leading-relaxed">
                Honors excellence in software and app development, celebrating
                user experience and innovation.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/[0.04] backdrop-blur-xl p-8 rounded-3xl border border-purple-500/20 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:border-primaryBlue/70 hover:bg-white/[0.07] transition-all group"
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="mb-6 inline-block p-4 rounded-2xl bg-purple-900/40 border border-purple-500/30 group-hover:bg-primaryBlue/20 transition-colors">
                <GoGoal size={45} className="text-purple-300 group-hover:text-primaryBlue duration-300" />
              </div>
              <h3 className="text-white H5 font-bold mb-3">
                Frost & Sullivan Practices and Award
              </h3>
              <p className="text-gray-400 P font-medium leading-relaxed">
                Recognizes software companies for outstanding innovation and
                customer satisfaction in the IT sector.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Soft Modern Purple Tinted Background for "We Know to provide" */}
      <section className="customContainer py-24 relative overflow-hidden">
        <div className="customContainer !my-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <RightSection />
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-8 rounded-[3rem] group overflow-hidden"
            >
              <div className="absolute inset-0  rounded-[3rem] blur-2xl group-hover:scale-105 transition-transform duration-700" />
              
              <motion.img 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                src={aboutKnow} 
                className="relative z-10 w-full h-auto rounded-[2rem] object-cover " 
                alt="About GDFX Know" 
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUsIntroduction;