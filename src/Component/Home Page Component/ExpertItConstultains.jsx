import React from "react";

import Expert_Consulting from "../../assets/newImg/Expert_Consulting.png";
import Digital_transformation from "../../assets/newImg/Digital_transformation.png";
import Tech_solutions from "../../assets/newImg/Tech_solutions.png";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { MdArrowOutward } from "react-icons/md";

const services = [
  {
    id: 1,
    title: "Expert IT Consultants Available",
    description: "Get strategic guidance from seasoned IT experts to steer your projects towards success.",
    icon: <FaUsers size={32} className="text-white" />,
    img: Expert_Consulting,
    link: "/about-it-consulting",
    alt: "Expert Consulting",
  },
  {
    id: 2,
    title: "Digital Transformation Available",
    description: "Modernize legacy systems and elevate your business operations with advanced digital frameworks.",
    icon: <GrAnnounce size={32} className="text-white" />,
    img: Digital_transformation,
    link: "/service/digital-transformation-service",
    alt: "Digital Transformation",
  },
  {
    id: 3,
    title: "Tech Solutions Available",
    description: "Custom-built, scalable, and high-performance engineering solutions tailored precisely to your vision.",
    icon: <FaLaptopCode size={32} className="text-white" />,
    img: Tech_solutions,
    link: "/service/custom-software-development",
    alt: "Tech Solutions",
  },
];

const ExpertItConstultains = () => {
  // Duplicate array for infinite seamless looping effect
  const marqueeItems = [...services, ...services, ...services];

  return (
    <section className="bg-white relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[#faf5ff]/40 -z-10"></div>

      <div className="customContainer !my-0 overflow-hidden">
        {/* Marquee Wrapper with Pause on Hover */}
        <div className="flex w-full overflow-x-hidden relative py-4 group">
          {/* Gradient fade edges for smooth look */}
          <div className="absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-6 animate-marquee group-hover:[animation-play-state:paused] w-max">
            {marqueeItems.map((service, index) => (
              <div
                key={`${service.id}-${index}`}
                className="group/card bg-white rounded-2xl p-6 border border-purple-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between w-[320px] sm:w-[350px] h-[370px] flex-shrink-0"
              >
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl customGradient flex items-center justify-center shadow-md transform group-hover/card:scale-105 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold text-purple-600/50 tracking-wider">0{service.id}</span>
                  </div>

                  <h3 className="H4 font-bold text-[#2d1b4e] mb-2 leading-snug line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="P line-clamp-2 text-xs sm:text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Center Image */}
                <div className="my-2 h-20 flex items-center justify-center">
                  <img
                    src={service.img}
                    alt={service.alt}
                    className="max-h-full object-contain filter drop-shadow-sm group-hover/card:scale-105 transition-all duration-300"
                    draggable={false}
                  />
                </div>

                {/* Action Button - Text color fixed on hover */}
                <div className="pt-3 border-t border-purple-50">
                  <Link
                    to={service.link}
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  >
                    <button className="w-full py-2.5 px-4 rounded-xl font-medium text-[#2d1b4e] bg-purple-50 hover:bg-gradient-to-b hover:from-[#7e22ce] hover:to-[#581c87] hover:text-white transition-all duration-300 flex items-center justify-between shadow-sm text-sm group/btn">
                      <span className="text-[#2d1b4e] group-hover/btn:text-white transition-colors duration-300">
                        Find Your Solution
                      </span>
                      <MdArrowOutward className="text-lg rotate-[45deg] text-[#2d1b4e] group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all duration-300" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertItConstultains;