import { NavLink, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import custom_software from "../../assets/Services/Our Work Process/custom_software.svg";
import app from "../../assets/Services/Our Work Process/app.svg";
import api from "../../assets/Services/Our Work Process/api.svg";
import digital from "../../assets/Services/Our Work Process/digital.svg";
import e_commerce from "../../assets/Services/Our Work Process/e_commerce.svg";
import it_support from "../../assets/Services/Our Work Process/it_support.svg";
import ui_ux from "../../assets/Services/Our Work Process/ui_ux.svg";
import website from "../../assets/Services/Our Work Process/website.svg";
import astrosoul from "../../assets/case-studyNav-image/img1.png";
import mypg from "../../assets/case-studyNav-image/image2.webp"
import tejpratap from "../../assets/case-studyNav-image/image4.webp"
import smartProperty from "../../assets/case-studyNav-image/image3.webp"
import consultancy from "../../assets/case-studyNav-image/image5.webp"
import quickbill from "../../assets/case-studyNav-image/image6.webp"
import theniralatrio from "../../assets/case-studyNav-image/image7.webp"
import koshika from "../../assets/case-studyNav-image/image8.webp"
import { throttle } from "../../utils/throttle";
import {
  FaBullseye,
  FaMoneyBillWave,
  FaChartLine,
  FaMobileAlt,
  FaPenNib,
  FaChartPie,
} from "react-icons/fa";

const megaServices = [
  {
    text: "Custom Software Development Services",
    link: "/service/custom-software-development",
    image: custom_software,
  },
  {
    text: "Mobile Application Design & Development",
    link: "/service/mobile-app-development",
    image: api,
  },
  {
    text: "Web Application Design & Development",
    link: "/service/web-app-development",
    image: website,
  },
  {
    text: "UI/UX Design",
    link: "/service/ui-ux-design",
    image: ui_ux,
  },
  {
    text: "API Development",
    link: "/service/api-development",
    image: app,
  },
  {
    text: "Digital Transformation Services",
    link: "/service/digital-transformation-service",
    image: digital,
  },
  {
    text: "IT Support & Maintenance",
    link: "/service/it-support-maintenance",
    image: it_support,
  },
  {
    text: "E-commerce Solution",
    link: "/service/e-commerce-solution",
    image: e_commerce,
  },
];

const digitalMarketingServices = [
  {
    icon: <FaBullseye size={18} />,
    text: "Search Engine Optimization",
    link: "/service/digital-transformation-service/seo",
  },
  {
    icon: <FaMoneyBillWave size={18} />,
    text: "Pay-Per-Click Advertising",
    link: "/service/digital-transformation-service/ppc",
  },
  {
    icon: <FaChartLine size={18} />,
    text: "Conversion Rate Optimization",
    link: "/service/digital-transformation-service/conversion-rate-optimization",
  },
  {
    icon: <FaMobileAlt size={18} />,
    text: "Social Media Marketing",
    link: "/service/digital-transformation-service/social-media-marketing",
  },
  {
    icon: <FaPenNib size={18} />,
    text: "Content Marketing",
    link: "/service/digital-transformation-service/content-marketing",
  },
  {
    icon: <FaChartPie size={18} />,
    text: "Analytics and Reporting",
    link: "/service/digital-transformation-service/analytics-reporting",
  },
];

// --- Case Studies Projects Data ---
const caseStudiesData = [
  {
    id: 1,
    title: "AstroSoull",
    category: "AstroSoull",
    description: "At AstroSoull, we offer personalized astrology consultations to help you understand your birth chart and navigate life’s challenges.",
    image: astrosoul,
    link: "/case-study/astrosoull",
  },
  {
    id: 2,
    title: "My PG World",
    category: "My PG World",
    description: "At My PG World, we offer a seamless experience not only for learning but also for managing your bookings, expenses, properties, and payments. Our platform makes it easy to.",
    image: mypg,
    link: "/case-study/my-pg-world",
  },
  {
    id: 3,
    title: "Tej Pratap Singh",
    category: "Tej Pratap Singh",
    description: "Explore the key areas where we have made significant progress under the leadership of Tej Pratap. From transforming governance through transparency and accountability to revolutionizing education and healthcare, we are committed to uplifting the lives of citizens",
    image: tejpratap,
    link: "/case-study/tej-pratap-singh",
  },
  {
    id: 4,
    title: "Smart property",
    category: "Smart property",
    description: "Discover this beautifully designed 3BHK apartment listed on Smart Property Hub, perfect for families seeking a luxurious yet comfortable home. The dining area stands out with its stylish wallpaper, elegant furniture, and warm lighting, offering a cozy space for family meals and gatherings.",
    image: smartProperty,
    link: "/case-study/smart-property",
  },
  {
    id: 5,
    title: "The Mint Consultancy",
    category: "The Mint Consultancy",
    description: "Through strategic development and innovative solutions, Mint Consultancy successfully transformed the business formation process into a seamless, user-friendly platform. By addressing key challenges related to registration complexity, IRS integration, security, and user experience.",
    image: consultancy,
    link: "/case-study/the-mint-consultancy",
  },
  {
    id: 6,
    title: "Quickbill.ai",
    category: "Quickbill.ai",
    description: "QuickBill AI simplifies invoicing with GST-compliant templates, customizable branding, and real-time tracking. Businesses can generate invoices in multiple formats while ensuring tax compliance and seamless cash flow management.",
    image: quickbill,
    link: "/case-study/quickbill-ai",
  },
  {
    id: 7,
    title: "theniralatrio",
    category: "theniralatrio",
    description: "Designed for comfort and elegance, the project features premium interiors, high-speed connectivity, and world-class lifestyle facilities. With its strategic location near metro stations, expressways, and IT hubs, Nirala Trio ensures seamless accessibility for homebuyers and investors alike.",
    image: theniralatrio,
    link: "/case-study/theniralatrio",
  },
  {
    id: 8,
    title: "koshika",
    category: "koshika",
    description: "Designed for comfort and elegance, the project features premium interiors, high-speed connectivity, and world-class lifestyle facilities. With its strategic location near metro stations, expressways, and IT hubs, Nirala Trio ensures seamless accessibility for homebuyers and investors alike.",
    image: koshika,
    link: "/case-study/koshika",
  }
];

const ServicesDropdown = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ left: "50%", x: "-50%" }}
          className="
    fixed top-20 lg:top-24
    w-[94vw] max-w-5xl
    bg-white/95 backdrop-blur-xl
    shadow-[0_20px_50px_rgba(45,27,78,0.15)]
    rounded-3xl
    border border-purple-100/80
    z-[99999]
    p-4 sm:p-5 lg:p-6
  "
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between border-b border-purple-100 pb-3 mb-4">
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1b4e] flex items-center gap-2">
                <span className="w-2 h-5 sm:h-6 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></span>
                Software & IT Services
              </h4>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 bg-purple-100/60 text-purple-700 rounded-full">
                  Core Solutions
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-purple-100/70 hover:bg-purple-200 text-purple-900 transition-colors"
                  aria-label="Close dropdown"
                >
                  <IoMdClose size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {megaServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-gradient-to-br from-purple-50/50 to-white hover:from-purple-100/60 hover:to-purple-50 p-3 sm:p-3.5 rounded-2xl transition-all duration-300 border border-purple-100/60 shadow-sm hover:shadow-md hover:border-purple-300 flex gap-3.5 items-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative bg-gradient-to-br from-purple-600 to-purple-900 rounded-xl min-w-10 h-10 flex items-center justify-center shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform">
                      <span className="absolute -top-1 -right-1 flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-300"></span>
                      </span>
                      <img
                        src={service.image}
                        alt={service.text}
                        className="w-4 h-4 object-contain brightness-0 invert"
                      />
                    </div>

                    <span className="font-semibold text-xs sm:text-sm text-[#2d1b4e] group-hover:text-purple-700 transition-colors line-clamp-2">
                      {service.text}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="flex items-center justify-between border-b border-purple-100 pb-3 mt-6 sm:mt-8 mb-4">
              <h4 className="text-base sm:text-lg font-extrabold text-[#2d1b4e] flex items-center gap-2">
                <span className="w-2 h-5 sm:h-6 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></span>
                Digital Marketing Services
              </h4>
              <span className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1 bg-purple-100/60 text-purple-700 rounded-full">
                Growth & SEO
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              {digitalMarketingServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.link}
                  onClick={onClose}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.02, duration: 0.2 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative bg-gradient-to-br from-purple-50/50 to-white hover:from-purple-100/60 hover:to-purple-50 p-3 sm:p-3.5 rounded-2xl transition-all duration-300 border border-purple-100/60 shadow-sm hover:shadow-md hover:border-purple-300 flex gap-3.5 items-center overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="relative bg-gradient-to-br from-purple-600 to-purple-900 text-white p-2.5 rounded-xl shadow-md shadow-purple-600/20 group-hover:scale-105 transition-transform">
                      {service.icon}
                    </div>

                    <span className="font-semibold text-xs sm:text-sm text-[#2d1b4e] group-hover:text-purple-700 transition-colors line-clamp-2">
                      {service.text}
                    </span>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

// --- Case Study Dropdown Component ---
const CaseStudyDropdown = ({ isOpen, onClose }) => {
  const [selectedProject, setSelectedProject] = useState(caseStudiesData[0]);
useEffect(() => {
  if (!isOpen) return;

  // Current scroll position save karo
  const scrollY = window.scrollY;

  // Background page completely freeze
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";

  return () => {
    // Body restore
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    // Same position par wapas rakho
    window.scrollTo(0, scrollY);
  };
}, [isOpen]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ left: "50%", x: "-50%" }}
          className="fixed top-20 lg:top-24 w-[94vw] max-w-6xl bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(45,27,78,0.18)] rounded-3xl border border-purple-100 z-[99999] p-4 sm:p-6 lg:p-8 max-h-[82vh] overflow-y-auto lg:overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-6 border-b border-purple-100 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#2d1b4e] flex items-center gap-2">
                <span className="w-2.5 h-6 sm:h-7 bg-gradient-to-b from-purple-600 to-indigo-600 rounded-full"></span>
                Case Studies
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Explore how brands create impact with immersive experiences.
              </p>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              <Link
                to="/astrosoull"
                onClick={onClose}
                className="text-[11px] sm:text-xs font-semibold px-3.5 sm:px-4 py-2 bg-purple-100/70 text-purple-800 rounded-full hover:bg-purple-200 transition-colors"
              >
                View All Case Studies ↗
              </Link>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-purple-100/70 hover:bg-purple-200 text-purple-900 transition-colors"
                aria-label="Close dropdown"
              >
                <IoMdClose size={20} />
              </button>
            </div>
          </div>

          {/* Content Layout: Responsive Grid (Stack on mobile, 12 cols on lg) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Side: Projects Grid List */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-visible">
              {caseStudiesData.map((project) => {
                const isSelected = selectedProject.id === project.id;
                return (
                  <div
                    key={project.id}
                    onMouseEnter={() => setSelectedProject(project)}
                    onClick={() => setSelectedProject(project)}
                    className={`cursor-pointer p-3 rounded-2xl transition-all duration-300 border flex flex-col items-center text-center gap-2 ${isSelected
                        ? "bg-gradient-to-br from-purple-900 to-[#2d1b4e] text-white shadow-lg shadow-purple-900/25 border-purple-900 scale-[1.02]"
                        : "bg-purple-50/50 hover:bg-purple-100/60 text-[#2d1b4e] border-purple-100"
                      }`}
                  >
                    <div className="w-11 h-11 rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-white border border-purple-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="font-semibold text-xs line-clamp-1 tracking-tight">
                      {project.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Dynamic Project Showcase Preview Box */}
            <div className="lg:col-span-5 bg-purple-50/40 border border-purple-100/80 rounded-2xl p-4 sm:p-5 flex flex-col justify-between shadow-inner">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative h-36 sm:h-44 rounded-xl overflow-hidden shadow-md mb-4 border border-purple-100">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-bold px-2.5 py-1 bg-black/60 backdrop-blur-md text-white rounded-full">
                    {selectedProject.category}
                  </span>
                </div>

                <h4 className="text-sm sm:text-base font-extrabold text-[#2d1b4e] mb-1.5">
                  {selectedProject.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
              </motion.div>

              <div className="flex items-center gap-3">
                <Link
                  to={selectedProject.link}
                  onClick={onClose}
                  className="flex-1 text-center py-2.5 px-4 bg-[#2d1b4e] hover:bg-purple-900 text-white text-xs font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
                >
                  <span>View Case Study</span>
                  <span>↗</span>
                </Link>
                <Link
                  to="/case-study"
                  onClick={onClose}
                  className="py-2.5 px-4 bg-white border border-purple-200 hover:bg-purple-50 text-[#2d1b4e] text-xs font-semibold rounded-xl transition-all"
                >
                  All Studies
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

const NavlinkItem = ({
  path,
  label,
  isDropdown,
  isServicesOpen,
  setIsServicesOpen,
  toggleMenu,
  isCaseStudyDropdown,
}) => {
  const servicesDropdownRef = useRef(null);
  const location = useLocation();
  const isActive =
    location.pathname === path ||
    (isDropdown &&
      location.pathname
        .split("/")
        .includes(isCaseStudyDropdown ? "case-study" : "service"));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current &&
        !servicesDropdownRef.current?.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        // Optional screen resize handling if needed
      }
    };

    const throttledResize = throttle(handleResize, 200);

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", throttledResize);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", throttledResize);
    };
  }, [isServicesOpen]);

  return (
    <>
      {isDropdown ? (
        <li className="relative" ref={servicesDropdownRef}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="font-semibold capitalize tracking-wider px-4 py-2.5 inline-flex items-center gap-2 transition-all duration-300 rounded-full text-[#2d1b4e] hover:text-purple-700 hover:bg-purple-50/50"
            onClick={() => setIsServicesOpen((prev) => !prev)}
            aria-expanded={isServicesOpen}
            aria-haspopup="menu"
          >
            <span>{label}</span>
            <span className="mt-px">
              <IoIosArrowDown
                className={`duration-300 text-purple-700 ${isServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
              />
            </span>
          </motion.button>

          {/* Conditional Dropdown Rendering based on isCaseStudyDropdown flag */}
          {isServicesOpen &&
            (isCaseStudyDropdown ? (
              <CaseStudyDropdown
                isOpen={isServicesOpen}
                onClose={() => {
                  setIsServicesOpen(false);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              />
            ) : (
              <ServicesDropdown
                isOpen={isServicesOpen}
                onClose={() => {
                  setIsServicesOpen(false);
                  window.scrollTo({ top: 0, behavior: "instant" });
                }}
              />
            ))}

          {isActive && (
            <motion.div
              layoutId="navIndicator"
              className="absolute inset-x-3 bottom-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 30,
              }}
            />
          )}
        </li>
      ) : (
        <li className="relative">
          <NavLink
            to={path}
            className="font-semibold capitalize tracking-wider px-4 py-2.5 inline-block transition-all duration-300 rounded-full relative text-[#2d1b4e] hover:text-purple-700 hover:bg-purple-50/50"
            onClick={toggleMenu}
          >
            {({ isActive: linkActive }) => (
              <>
                {label}
                {linkActive && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute inset-x-3 bottom-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-[0_0_10px_rgba(147,51,234,0.5)]"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </>
            )}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavlinkItem;