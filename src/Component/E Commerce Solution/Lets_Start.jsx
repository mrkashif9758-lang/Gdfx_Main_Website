import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { HiCheckCircle, HiShieldCheck, HiSparkles } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/E Commerce Solution/ecommerce1.jpg";
import img2 from "../../assets/E Commerce Solution/ecommerce2.jpg";
import img3 from "../../assets/E Commerce Solution/ecommerce3.jpg";
import img4 from "../../assets/E Commerce Solution/Lets_start.png";

const initialCards = [
  { id: 1, src: img1, containerClass: "h-56 sm:h-64" },
  { id: 2, src: img2, containerClass: "h-40 sm:h-48" },
  { id: 3, src: img3, containerClass: "h-40 sm:h-48" },
  { id: 4, src: img4, containerClass: "h-56 sm:h-64" },
  
];

const Lets_Start = () => {
  const [cards, setCards] = useState(initialCards);

  useEffect(() => {
    // Increased interval time to 5 seconds for a slower, relaxed pace
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newCards = [...prevCards];
        const lastItem = newCards.pop();
        newCards.unshift(lastItem);
        return newCards;
      });
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-white text-zinc-900 relative overflow-hidden">
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-primaryBlue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="customContainer relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 mb-4 shadow-sm">
            <HiSparkles className="text-secondaryPurple text-base" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-700">
              Accelerate Growth
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-zinc-900 tracking-tight leading-[1.15]">
            Take Your Online Business to New Heights with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              GDFX E-Commerce Services
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start text-left">
            
            <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
              GDFX provides cutting-edge custom eCommerce solutions designed to help businesses succeed in the competitive online marketplace. Our eCommerce website development services offer tailored, scalable eCommerce platforms that are SEO-friendly, mobile-optimized, and built with the latest technologies.
            </p>

            <p className="text-zinc-600 text-base leading-relaxed mt-4">
              From secure payment gateway integration to advanced inventory management systems, we ensure seamless functionality and a smooth shopping experience for your customers. Whether you need a B2B e-Commerce platform, B2C online store, or multi-vendor marketplace, GDFX crafts unique solutions that drive traffic, boost sales, and maximize ROI.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 my-6 w-full">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 shadow-sm">
                <HiShieldCheck className="text-primaryBlue text-xl shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">Advanced B2B & B2C Systems</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-50 border border-zinc-200/60 shadow-sm">
                <HiCheckCircle className="text-secondaryPurple text-xl shrink-0" />
                <span className="text-sm font-semibold text-zinc-800">Conversion-Driven UI/UX</span>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-primaryBlue/[0.04] to-secondaryPurple/[0.04] border-l-4 border-primaryBlue my-2 w-full">
              <p className="text-zinc-700 italic text-sm sm:text-base leading-relaxed">
                “Partner with GDFX” for a customized eCommerce solution that boosts your <strong className="text-zinc-900 font-bold">sales</strong>, improves <strong className="text-primaryBlue font-bold">customer satisfaction</strong>, and drives business growth.
              </p>
            </div>

            <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)} className="mt-8">
              <button className="relative group px-7 py-3.5 rounded-xl font-semibold text-white shadow-xl bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:opacity-95 transition-all duration-300 inline-flex items-center gap-3 overflow-hidden text-sm">
                <span className="absolute inset-0 w-full h-full bg-white/25 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span>Let's Start</span>
                <MdArrowOutward className="text-white text-xl transition-transform duration-300 rotate-[45deg] group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>

          </div>

          {/* Right Column: Ultra-smooth, slow spring transition for position swapping */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              
              <div className="flex flex-col gap-4">
                <AnimatePresence mode="popLayout">
                  {cards.slice(0, 2).map((card, index) => (
                    <motion.div
                      key={card.id}
                      layout
                      // Adjusted stiffness and damping for a slower, buttery smooth gliding motion
                      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 1.2 }}
                      className={`relative overflow-hidden rounded-[2.5rem] shadow-xl border border-zinc-200/80 group bg-zinc-100 ${card.containerClass}`}
                    >
                      <img
                        src={card.src}
                        draggable={false}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        alt={`Grid Item ${index + 1}`}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="flex flex-col gap-4 pt-6 sm:pt-10">
                <AnimatePresence mode="popLayout">
                  {cards.slice(2, 4).map((card, index) => (
                    <motion.div
                      key={card.id}
                      layout
                      // Adjusted stiffness and damping for a slower, buttery smooth gliding motion
                      transition={{ type: "spring", stiffness: 120, damping: 22, mass: 1.2 }}
                      className={`relative overflow-hidden rounded-[2.5rem] shadow-xl border border-zinc-200/80 group bg-zinc-100 ${card.containerClass}`}
                    >
                      <img
                        src={card.src}
                        draggable={false}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        alt={`Grid Item ${index + 3}`}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Lets_Start;