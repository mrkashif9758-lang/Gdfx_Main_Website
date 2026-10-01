import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MdArrowOutward, MdChevronLeft, MdChevronRight } from "react-icons/md";
import cro from "../../assets/Digital Transformation Service/cro.svg";
import cro2 from "../../assets/Digital Transformation Service/cro2.png";

const slidesData = [
  {
    id: 1,
    title: "Customized CRO Solutions for Every Business",
    description:
      "From startups to enterprises, our tailored CRO strategies ensure you achieve maximum returns from your digital presence.",
    image: cro,
    badge: "Conversion Rate Optimization",
  },
  {
    id: 2,
    title: "Turn More Visitors Into Loyal Customers",
    description:
      "Leverage deep user behavior analytics, A/B testing, and UX audits to maximize your website's conversion potential.",
    image: cro2,
    badge: "User Experience & Analytics",
  },
  {
    id: 3,
    title: "Scale Your Revenue Without Increasing Traffic",
    description:
      "Optimize your conversion funnels and eliminate friction points to get significantly higher ROI from existing traffic.",
    image: cro2,
    badge: "Revenue Growth",
  },
];

const Seo_header = () => {
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
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primaryBlue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondaryPurple/15 rounded-full blur-3xl pointer-events-none" />

      <div className="sm:min-h-[800px] min-h-[450px] flex items-center relative z-10">
        <div className="customContainer !mb-0 w-full pt-28 pb-14">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex lg:flex-row flex-col gap-10 lg:justify-between lg:items-center"
            >
              
              {/* Left Content Area */}
              <div className="lg:basis-1/2 basis-full space-y-5">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-primaryBlue animate-pulse" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-white/90">
                    {currentSlide.badge}
                  </span>
                </div>

                {/* Title */}
                <h2 className="H2 font-bold capitalize text-white leading-tight">
                  {currentSlide.title.includes("for") ? (
                    <>
                      {currentSlide.title.split("for")[0]} for{" "}
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                        {currentSlide.title.split("for")[1]}
                      </span>
                    </>
                  ) : (
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                      {currentSlide.title}
                    </span>
                  )}
                </h2>

                {/* Description */}
                <p className="text-white/90 P leading-relaxed max-w-xl">
                  {currentSlide.description}
                </p>

                {/* Action Button */}
                <div className="pt-2">
                  <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                    <button className="px-6 py-3.5 rounded-xl font-medium text-white shadow-lg bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:opacity-95 hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group text-sm">
                      Contact Us Today
                      <MdArrowOutward className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                  </Link>
                </div>

              </div>

              {/* Right Image Display Area */}
              <div className="lg:basis-1/2 basis-full flex justify-center relative">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative max-w-lg w-full flex items-center justify-center p-6   backdrop-blur-xl shadow-2xl"
                >
                  <img
                    src={currentSlide.image}
                    draggable={false}
                    className="max-h-[360px] w-auto object-contain drop-shadow-2xl"
                    alt="CRO service slide"
                  />
                </motion.div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider Controls & Indicators */}
          <div className="flex items-center justify-between mt-10 pt-6 border-t border-black">
            
            {/* Dots Indicator */}
            {/* <div className="flex items-center gap-2.5">
              {slidesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? "w-8 bg-gradient-to-r from-primaryBlue to-secondaryPurple"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div> */}

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                aria-label="Previous Slide"
              >
                <MdChevronLeft className="text-xl" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white transition-all duration-300 hover:scale-105"
                aria-label="Next Slide"
              >
                <MdChevronRight className="text-xl" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Seo_header;