import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";

// Import your slide assets here (make sure paths are correct or add more images)
import ppc from "../../assets/Digital Transformation Service/ppc.svg";
import seo from "../../assets/Digital Transformation Service/seo.svg";

const slidesData = [
  {
    id: 1,
    title: "Drive Instant Traffic with Targeted PPC Campaigns",
    description:
      "Boost your online visibility and attract high-quality leads with expertly crafted PPC strategies tailored to your business needs.",
    image: ppc,
    badge: "PPC Advertising",
  },
  {
    id: 2,
    title: "Maximize ROI with Data-Driven Ad Strategies",
    description:
      "Turn clicks into customers through precise audience targeting, conversion rate optimization, and continuous campaign refinement.",
    image: seo, // You can replace with another image variable if available
    badge: "Performance Marketing",
  },
  {
    id: 3,
    title: "Scale Your Brand Growth Faster",
    description:
      "Dominate search engine results and social channels instantly with high-converting paid search and display campaigns.",
    image: ppc, // You can replace with another image variable if available
    badge: "Growth & Scale",
  },
];

const Ppc_header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slidesData.length);
  };

  const currentSlide = slidesData[currentIndex];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      
      {/* Background Decorative Gradient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryBlue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryPurple/20 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:min-h-[700px] min-h-[500px] flex items-center relative z-10">
        <div className="customContainer !mb-0 w-full pt-32 pb-16">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center"
            >
              
              {/* Left Content Area */}
              <div className="lg:basis-1/2 basis-full space-y-6">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primaryBlue animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Title with Slide Animation */}
                <h2 className="H2 font-bold capitalize text-white leading-tight">
                  {currentSlide.title.split("with")[0]} with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                    {currentSlide.title.split("with")[1] || currentSlide.title}
                  </span>
                </h2>

                {/* Description */}
                <p className="text-white/80 P leading-relaxed max-w-xl">
                  {currentSlide.description}
                </p>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-2">
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="px-6 py-3.5 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:opacity-95 hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group text-sm">
                      Contact Us Today
                      <MdArrowOutward className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </Link>
                </div>

              </div>

              {/* Right Image Slider Area */}
              <div className="lg:basis-1/2 basis-full flex justify-center relative">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative max-w-lg w-full flex items-center justify-center p-6  backdrop-blur-xl shadow-2xl"
                >
                  <img
                    src={currentSlide.image}
                    draggable={false}
                    className="max-h-[380px] w-auto object-contain drop-shadow-2xl"
                    alt="PPC campaign slide"
                  />
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Controls & Indicators */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t border-black">
            
            {/* Dots Indicator */}
            {/* <div className="flex items-center gap-2.5">
              {slidesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-gradient-to-r from-primaryBlue to-secondaryPurple"
                      : "w-2.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div> */}

            {/* Arrow Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                aria-label="Previous Slide"
              >
                <MdChevronLeft className="text-2xl" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                aria-label="Next Slide"
              >
                <MdChevronRight className="text-2xl" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Ppc_header;