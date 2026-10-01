import React from "react";
import { motion } from "framer-motion";
import html from "../../assets/Services/Technology/html.svg";
import css from "../../assets/Services/Technology/css.svg";
import tailwind from "../../assets/Services/Technology/tailwind.svg";
import bootstrap from "../../assets/Services/Technology/bootstrap.svg";
import shophify from "../../assets/Services/Technology/shophify.svg";
import jquery from "../../assets/Services/Technology/jquery.svg";
import js from "../../assets/Services/Technology/js.svg";
import react from "../../assets/Services/Technology/react.svg";
import next from "../../assets/Services/Technology/next.svg";
import angular from "../../assets/Services/Technology/angular.svg";
import laravel from "../../assets/Services/Technology/laravel.svg";
import nodejs from "../../assets/Services/Technology/nodejs.svg";
import php from "../../assets/Services/Technology/php.svg";
import express from "../../assets/Services/Technology/express.svg";
import mysql from "../../assets/Services/Technology/mysql.svg";
import mongodb from "../../assets/Services/Technology/mongodb.svg";
import reactnative from "../../assets/Services/Technology/reactnative.svg";
import flutter from "../../assets/Services/Technology/flutter.svg";
import git from "../../assets/Services/Technology/git.svg";
import figma from "../../assets/Services/Technology/figma.svg";
import adobe from "../../assets/Services/Technology/adobe.svg";
import sketch from "../../assets/Services/Technology/sketch.svg";
import adobe_illustrator from "../../assets/Services/Technology/adobe_illustrator.svg";
import photoshop from "../../assets/Services/Technology/photoshop.svg";
import { RxDragHandleDots2 } from "react-icons/rx";

const technologies = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: bootstrap, name: "Bootstrap" },
  { src: shophify, name: "Shopify" },
  { src: jquery, name: "jQuery" },
  { src: js, name: "JavaScript" },
  { src: react, name: "React" },
  { src: next, name: "Next.js" },
  { src: angular, name: "Angular" },
  { src: laravel, name: "Laravel" },
  { src: nodejs, name: "Node.js" },
  { src: php, name: "PHP" },
  { src: express, name: "Express.js" },
  { src: mysql, name: "MySQL" },
  { src: mongodb, name: "MongoDB" },
  { src: reactnative, name: "React Native" },
  { src: flutter, name: "Flutter" },
  { src: git, name: "Git" },
  { src: figma, name: "Figma" },
  { src: adobe, name: "Adobe" },
  { src: sketch, name: "Sketch" },
  { src: adobe_illustrator, name: "Adobe Illustrator" },
  { src: photoshop, name: "Photoshop" },
];

const Technology = () => {
  const midIndex = Math.ceil(technologies.length / 2);
  const firstColumn = technologies.slice(0, midIndex);
  const secondColumn = technologies.slice(midIndex);

  return (
    <section className="bg-bgFirstBlue py-24 overflow-hidden">
      
      {/* Inline styles for guaranteed smooth marquee movement */}
      <style>{`
        @keyframes scrollUp {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scrollDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0%); }
        }
        .marquee-col-up {
          display: flex;
          flex-direction: column;
          animation: scrollUp 5s linear infinite;
        }
        .marquee-col-down {
          display: flex;
          flex-direction: column;
          animation: scrollDown 5s linear infinite;
        }
        .marquee-col-up:hover, .marquee-col-down:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className=" max-w-7xl mx-auto !my-0">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Section Header */}
          <motion.div
            className="lg:col-span-5 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex gap-2 items-center justify-start mb-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
              <RxDragHandleDots2 className="rotate-90 text-primaryBlue text-xl" />
              <span className="text-primaryBlue font-semibold tracking-wider H6 uppercase">
                OUR Technologies
              </span>
            </div>

            <h2 className="H2 font-extrabold capitalize text-white mb-4 tracking-tight leading-tight">
              Our Technology Stack –{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                Building Your Future
              </span>
            </h2>

            <p className="P text-mutedGray-c1 leading-relaxed">
              At GDFX, we specialize in building dynamic, scalable, and
              user-friendly websites and mobile applications. Our team uses the
              latest technologies to create seamless and engaging digital
              experiences across multiple platforms.
            </p>
          </motion.div>

          {/* Right Side: Vertical Marquee Container */}
          <div className="lg:col-span-7 relative h-[500px] overflow-hidden flex gap-5 justify-center">
            
            {/* Top & Bottom Gradient Fade Mask */}
            {/* <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0b1329] to-transparent z-10 pointer-events-none" /> */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0b1329] to-transparent z-10 pointer-events-none" /> */}

            {/* Column 1 (Scroll Up) */}
            <div className="w-[300px] marquee-col-up gap-5">
              {[...firstColumn, ...firstColumn].map((item, index) => (
                <div
                  key={`col1-${index}`}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white border border-white/10 shadow-xl hover:shadow-white/20 transition-all duration-300 cursor-pointer group min-h-[105px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img
                      src={item.src}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                      alt={`Service-Technologies ${item.name}`}
                    />
                  </div>
                  <h3 className="P font-bold text-heading_color tracking-wide">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Column 2 (Scroll Down - Opposite flow) */}
            <div className="w-[300px] marquee-col-down gap-5">
              {[...secondColumn, ...secondColumn].map((item, index) => (
                <div
                  key={`col2-${index}`}
                  className="flex items-center gap-4 p-6 rounded-xl bg-white border border-white/10 shadow-xl hover:shadow-white/20 transition-all duration-300 cursor-pointer group min-h-[105px]"
                >
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img
                      src={item.src}
                      className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-500"
                      alt={`Service-Technologies ${item.name}`}
                    />
                  </div>
                  <h3 className="P font-bold text-heading_color tracking-wide">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Technology;