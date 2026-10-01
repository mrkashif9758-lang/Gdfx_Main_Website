import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./styles.css";
import html from "../../assets/Services/Technology/html.svg";
import css from "../../assets/Services/Technology/css.svg";
import tailwind from "../../assets/Services/Technology/tailwind.svg";
import bootstrap from "../../assets/Services/Technology/bootstrap.svg";
import wordpress from "../../assets/Services/Technology/wordpress.svg";
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
import astro from "../../assets/newImg/astro.png";
import koshika from "../../assets/newImg/koshikaicon.png";

const testimonials = [
  {
    text: "We at AstroSoull were really pleased with GDFX’s services. The platform is easy to navigate, and the customer support team is always ready to help. With useful tools and educational resources, GDFX is a great choice for anyone wanting to improve their trading experience. Definitely worth checking out!",
    name: "Astrosoull",
    location: "Uttar pradesh,Delhi",
    image: astro,
  },
  {
    text: "GlobalDigitalsfx created a great website for Koshika! It’s clean, simple to navigate, and explains our services like LLC filing, business banking, and bookkeeping. They worked quickly and made the whole process stress-free. We’re very happy with their work!",
    name: "Koshika",
    location: "New Mexico 87111, USA",
    image: koshika,
  },
];

const technologies = [
  { src: html, name: "HTML" },
  { src: css, name: "CSS" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: bootstrap, name: "Bootstrap" },
  { src: wordpress, name: "WordPress" },
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
  { src: adobe, name: "Adobe XD" },
  { src: sketch, name: "Sketch" },
  { src: adobe_illustrator, name: "Adobe Illustrator" },
  { src: photoshop, name: "Photoshop" },
];

const technologiesReversed = [
  { src: photoshop, name: "Photoshop" },
  { src: adobe_illustrator, name: "Adobe Illustrator" },
  { src: sketch, name: "Sketch" },
  { src: adobe, name: "Adobe XD" },
  { src: figma, name: "Figma" },
  { src: git, name: "Git" },
  { src: flutter, name: "Flutter" },
  { src: reactnative, name: "React Native" },
  { src: mongodb, name: "MongoDB" },
  { src: mysql, name: "MySQL" },
  { src: express, name: "Express.js" },
  { src: php, name: "PHP" },
  { src: nodejs, name: "Node.js" },
  { src: laravel, name: "Laravel" },
  { src: angular, name: "Angular" },
  { src: next, name: "Next.js" },
  { src: react, name: "React" },
  { src: js, name: "JavaScript" },
  { src: jquery, name: "jQuery" },
  { src: shophify, name: "Shopify" },
  { src: wordpress, name: "WordPress" },
  { src: bootstrap, name: "Bootstrap" },
  { src: tailwind, name: "Tailwind CSS" },
  { src: css, name: "CSS" },
  { src: html, name: "HTML" },
];

const OurClient = () => {
  return (
    <div className="w-full relative bg-black">
      <div className="md:pt-[200px] pt-20 customContainer !my-0 mb-5 text-center">
        <h3 className="H2 font-bold capitalize text-white mb-2 leading-tight">
          We’re Dedicated to Serve you
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-text_primary">
            {" "}
            All Time
          </span>
        </h3>
        <p className="P text-mutedGray-c1 leading-relaxed">
          At GDFX, we make it our mission to provide top-tier service at any
          hour. Your satisfaction is our promise, and we’re always just a call
          away, ready to deliver solutions that meet your needs whenever they
          arise.
        </p>
      </div>

      {/* sliding images */}
      <div className="w-full pb-20 overflow-hidden customContainer !my-0">
        <div className="wrapper">
          {/* Left section */}
          {technologies.map((tech, index) => (
            <div key={index} className={`itemLeft item${index + 1}`}>
              <TechnologyItem src={tech.src} name={tech.name} />
            </div>
          ))}
        </div>
        <div className="wrapper">
          {/* Right section */}
          {technologiesReversed.map((tech, index) => (
            <div key={index} className={`itemRight item${index + 1}`}>
              <TechnologyItem src={tech.src} name={tech.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechnologyItem = ({ src, name }) => {
  return (
    <div className="flex flex-col gap-1 items-center justify-center py-2 bg-secondaryPurple/15 border border-secondaryPurple/30 shadow-[0_0_15px_rgba(112,0,255,0.25)] rounded-md w-full h-full text-white">
      <img className="w-[50px] h-[50px]" src={src} alt={name} />
      <h2 className="text-center text-sm">{name}</h2>
    </div>
  );
};

export default OurClient;