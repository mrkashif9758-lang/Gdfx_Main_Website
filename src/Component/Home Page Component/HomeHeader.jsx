import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import heroVideo from '/public/video3.mp4'

const HomeHeader = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#2d1b4e]">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2d1b4e]/30 z-10 pointer-events-none" />

      {/* Content - Full Width Screen */}
      <div className="w-full px-6 sm:px-12 lg:px-20 pt-28 pb-16 text-white relative z-20 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full px-2"
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.span
              className="text-[#e9d5ff] text-sm sm:text-base font-semibold px-6 py-2.5 rounded-full border border-[#d8b4fe]/40 inline-block bg-[#9333ea]/30 backdrop-blur-md shadow-md"
              whileHover={{
                backgroundColor: "rgba(147, 51, 234, 0.5)",
              }}
            >
              Transform Your Idea Into Effective Solutions
            </motion.span>
          </motion.div>

          {/* Desktop Heading - Full Width & Large */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-[6rem] xl:text-[7rem] font-nunito font-extrabold mb-8 text-white leading-[1.1] w-full text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block mb-2">We Provide</span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#a855f7]">
              <Typewriter
                options={{
                  strings: [
                    "Web Solutions",
                    "Mobile Apps",
                    "SEO & Digital",
                    "Software Dev",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 60,
                  cursor: "",
                }}
              />
            </span>
          </motion.h1>

          {/* Tablet/Mobile Heading - Full Width & Large */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-nunito font-extrabold mb-8 text-white leading-[1.1] w-full text-center hidden xs:block xl:hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="block mb-2">We Provide</span>
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#c084fc] to-[#a855f7]">
              <Typewriter
                options={{
                  strings: [
                    "Web Solutions",
                    "Mobile Apps",
                    "SEO & Digital",
                    "Software Dev",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 60,
                  cursor: "",
                }}
              />
            </span>
          </motion.h1>

          {/* Description - Expanded Width */}
          <motion.p
            className="w-full text-center text-lg sm:text-xl lg:text-2xl leading-relaxed text-gray-100 mb-10 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
          Have an idea for a website or app? We help bring your vision to life by creating engaging, user-friendly, and visually appealing digital experiences that are simple to use and built to perform.

          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center items-center gap-6 flex-col xs:flex-row w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              to="/service"
              className="px-10 py-4 rounded-full font-semibold text-base sm:text-lg text-white shadow-xl bg-gradient-to-r from-[#9333ea] to-[#7e22ce] hover:shadow-[#9333ea]/50 transition-all hover:scale-105 text-center w-full xs:w-auto"
            >
              Start a Project
            </Link>

            <Link
              to="/contact"
              className="px-10 py-4 rounded-full font-semibold text-base sm:text-lg text-white shadow-xl bg-gradient-to-r from-[#7e22ce] to-[#581c87] hover:shadow-xl hover:shadow-[#581c87]/50 transition-all hover:scale-105 text-center w-full xs:w-auto"
            >
              Book Free Consultant
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHeader;