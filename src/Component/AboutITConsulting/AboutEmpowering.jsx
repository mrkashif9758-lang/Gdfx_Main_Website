import  { useState } from "react";
import {
  FaShoppingCart,
  FaBuilding,
  FaIndustry,
  FaHeartbeat,
  FaTruck,
  FaSeedling,
  FaGraduationCap,
  FaBed,
  FaBolt,
  FaUniversity,
  FaFilm,
  FaLandmark,
} from "react-icons/fa";
import { motion } from "framer-motion";

const AboutEmpowering = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const industries = [
    {
      id: 1,
      icon: FaShoppingCart,
      title: "E-commerce & Retail",
      description:
        "Scalable online platforms and retail solutions that drive sales and enhance customer experience.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      id: 2,
      icon: FaBuilding,
      title: "Real Estate",
      description:
        "Property management systems and real estate platforms for seamless transactions.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      icon: FaIndustry,
      title: "Manufacturing & Supply Chain",
      description:
        "Automated solutions for production optimization and supply chain management.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
    {
      id: 4,
      icon: FaHeartbeat,
      title: "Healthcare",
      description:
        "Digital health solutions, patient management systems, and telemedicine platforms.",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
    {
      id: 5,
      icon: FaTruck,
      title: "Logistics & Transportation",
      description:
        "Fleet management, route optimization, and logistics tracking solutions.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      id: 6,
      icon: FaSeedling,
      title: "Agriculture",
      description:
        "Smart farming solutions, crop monitoring, and agricultural management systems.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600",
    },
    {
      id: 7,
      icon: FaGraduationCap,
      title: "Education & E-Learning",
      description:
        "Learning management systems, virtual classrooms, and educational platforms.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      iconColor: "text-indigo-600",
    },
    {
      id: 8,
      icon: FaBed,
      title: "Hospitality & Travel",
      description:
        "Booking systems, guest management, and travel planning applications.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
    },
    {
      id: 9,
      icon: FaBolt,
      title: "Energy & Utilities",
      description:
        "Smart grid solutions, energy management, and utility monitoring systems.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
    },
    {
      id: 10,
      icon: FaUniversity,
      title: "Finance & Banking",
      description:
        "Secure financial platforms, payment gateways, and banking solutions.",
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-50",
      iconColor: "text-cyan-600",
    },
    {
      id: 11,
      icon: FaFilm,
      title: "Media & Entertainment",
      description:
        "Content management systems, streaming platforms, and digital media solutions.",
      color: "from-rose-500 to-rose-600",
      bgColor: "bg-rose-50",
      iconColor: "text-rose-600",
    },
    {
      id: 12,
      icon: FaLandmark,
      title: "Government & Public Sector",
      description:
        "Digital governance solutions, citizen services, and public administration systems.",
      color: "from-slate-500 to-slate-600",
      bgColor: "bg-slate-50",
      iconColor: "text-slate-600",
    },
  ];

  const containerVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        delayChildren: 0.5,
      },
    },
  };

  const itemVarients = {
    hidden: { opacity: 0,  },
    show: { opacity: 1,  },
  };

  return (
    <section className="bg-bgFirstBlue py-20">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
            Empowering Industries
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              with Innovative IT Solutions
            </span>
          </h2>
          <p className="P text-off_white text-center">
            At GDFX, we cater to diverse industry verticals, delivering tailored
            IT solutions that drive growth, efficiency, and digital
            transformation. From healthcare and e-commerce to education,
            finance, and beyond, our expertise ensures businesses achieve their
            goals through cutting-edge technology and seamless, scalable, and
            secure solutions designed for success.
          </p>
        </div>

        <motion.div variants={containerVarients}  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            const isHovered = hoveredCard === industry.id;

            return (
              <div
                key={industry.id}
                className={`group relative overflow-hidden rounded transition-all duration-500 cursor-pointer ${
                  isHovered
                    ? "scale-[1.01] shadow-xl"
                    : "hover:scale-105 hover:shadow-lg"
                }`}
                onMouseEnter={() => setHoveredCard(industry.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Card Content */}
                <div
                  className={`relative p-5 h-full ${industry.bgColor} group-hover:bg-transparent transition-colors duration-500 flex flex-col items-center text-center`}
                >
                  {/* Icon */}
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      isHovered
                        ? "bg-white/20 backdrop-blur-sm shadow-lg"
                        : "bg-white shadow-md"
                    }`}
                  >
                    <IconComponent
                      className={`w-10 h-10 transition-colors duration-500 ${
                        isHovered ? "text-white" : industry.iconColor
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`H5 leading-[1.2] font-bold mb-2 transition-colors duration-500 ${
                      isHovered ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`SP leading-relaxed transition-all duration-500 ${
                      isHovered
                        ? "text-off_white opacity-100"
                        : "text-heading_color"
                    }`}
                  >
                    {industry.description}
                  </p>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutEmpowering;
