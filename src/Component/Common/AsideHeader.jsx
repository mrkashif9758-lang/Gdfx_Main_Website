import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMdClose, IoIosArrowDown } from "react-icons/io";
import custom_software from "../../assets/Services/Our Work Process/custom_software.svg";
import app from "../../assets/Services/Our Work Process/app.svg";
import api from "../../assets/Services/Our Work Process/api.svg";
import digital from "../../assets/Services/Our Work Process/digital.svg";
import e_commerce from "../../assets/Services/Our Work Process/e_commerce.svg";
import it_support from "../../assets/Services/Our Work Process/it_support.svg";
import ui_ux from "../../assets/Services/Our Work Process/ui_ux.svg";
import website from "../../assets/Services/Our Work Process/website.svg";

// --- Case Studies Projects Data ---
import astrosoul from "../../assets/case-studyNav-image/img1.png";
import mypg from "../../assets/case-studyNav-image/image2.webp";
import tejpratap from "../../assets/case-studyNav-image/image4.webp";
import smartProperty from "../../assets/case-studyNav-image/image3.webp";
import consultancy from "../../assets/case-studyNav-image/image5.webp";
import quickbill from "../../assets/case-studyNav-image/image6.webp";
import theniralatrio from "../../assets/case-studyNav-image/image7.webp";
import koshika from "../../assets/case-studyNav-image/image8.webp";

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
    icon: "🎯",
    text: "Search Engine Optimization",
    link: "/service/digital-transformation-service/seo",
  },
  {
    icon: "💰",
    text: "Pay-Per-Click Advertising",
    link: "/service/digital-transformation-service/ppc",
  },
  {
    icon: "📈",
    text: "Conversion Rate Optimization",
    link: "/service/digital-transformation-service/conversion-rate-optimization",
  },
  {
    icon: "📱",
    text: "Social Media Marketing",
    link: "/service/digital-transformation-service/social-media-marketing",
  },
  {
    icon: "✍️",
    text: "Content Marketing",
    link: "/service/digital-transformation-service/content-marketing",
  },
  {
    icon: "📊",
    text: "Analytics and Reporting",
    link: "/service/digital-transformation-service/analytics-reporting",
  },
];

const caseStudiesData = [
  { id: 1, title: "AstroSoull", link: "/case-study/astrosoull", image: astrosoul },
  { id: 2, title: "My PG World", link: "/case-study/my-pg-world", image: mypg },
  { id: 3, title: "Tej Pratap Singh", link: "/case-study/tej-pratap-singh", image: tejpratap },
  { id: 4, title: "Smart property", link: "/case-study/smart-property", image: smartProperty },
  { id: 5, title: "The Mint Consultancy", link: "/case-study/the-mint-consultancy", image: consultancy },
  { id: 6, title: "Quickbill.ai", link: "/case-study/quickbill-ai", image: quickbill },
  { id: 7, title: "theniralatrio", link: "/case-study/theniralatrio", image: theniralatrio },
  { id: 8, title: "koshika", link: "/case-study/koshika", image: koshika }
];

function AsideHeader({ isMenuOpen, setIsMenuOpen }) {
  const asideRef = useRef(null);
  const [openService, setOpenService] = useState(false);
  const [openCaseStudy, setOpenCaseStudy] = useState(false);

  // Body Scroll Lock Effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (asideRef.current && !asideRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);

  const handleNavClick = () => {
    setIsMenuOpen(false);
    setOpenService(false);
    setOpenCaseStudy(false);
  };

  const toggleServices = () => {
    setOpenService(!openService);
  };

  const toggleCaseStudy = () => {
    setOpenCaseStudy(!openCaseStudy);
  };

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <>
          {/* Glassmorphism Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60000]"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Smooth Glassmorphism Sidebar */}
          <motion.aside
            ref={asideRef}
            className="fixed top-0 bottom-0 left-0 w-85 max-w-[90vw] bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-r border-white/20 shadow-2xl z-[70000] overflow-y-auto"
            initial={{ x: -350 }}
            animate={{ x: 0 }}
            exit={{ x: -350 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            <div className="p-5 flex flex-col h-full">
              {/* Header with Close Button */}
              <div className="flex justify-between items-center mb-6 border-b border-slate-200/60 dark:border-slate-700/60 pb-4">
                <h2 className="H4 font-bold text-slate-800 dark:text-white tracking-wide">Menu</h2>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-purple-100/60 dark:hover:bg-slate-800 transition-all duration-200 text-slate-700 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 shadow-sm"
                  aria-label="Close menu"
                >
                  <IoMdClose className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="space-y-2.5">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-xl P font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-primaryBlue text-white shadow-md shadow-purple-500/20"
                            : "text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue"
                        }`
                      }
                      onClick={handleNavClick}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-xl P font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-primaryBlue text-white shadow-md shadow-purple-500/20"
                            : "text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue"
                        }`
                      }
                      onClick={handleNavClick}
                    >
                      About
                    </NavLink>
                  </li>

                  {/* Services Dropdown */}
                  <li>
                    <button
                      onClick={toggleServices}
                      className="w-full flex justify-between items-center px-4 py-2.5 rounded-xl P font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue transition-all duration-200"
                    >
                      <span>Services</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${
                          openService ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openService && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pl-3 pt-2 space-y-2">
                            <h4 className="font-bold text-slate-900 dark:text-white underline H6 mt-1 px-1">
                              Software & IT Services
                            </h4>
                            {megaServices.map((service, index) => (
                              <Link
                                key={`mega-${index}`}
                                to={service.link}
                                onClick={handleNavClick}
                                className="p-2.5 text-slate-700 dark:text-slate-300 SP hover:bg-white dark:hover:bg-slate-800 hover:text-primaryBlue bg-slate-200/30 dark:bg-slate-800/30 rounded-lg transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                              >
                                <span>{service.text}</span>
                              </Link>
                            ))}

                            <h4 className="font-bold text-slate-900 dark:text-white underline H6 mt-3 px-1">
                              Digital Marketing Services
                            </h4>
                            {digitalMarketingServices.map((service, index) => (
                              <Link
                                key={`digital-${index}`}
                                to={service.link}
                                onClick={handleNavClick}
                                className="p-2.5 text-slate-700 dark:text-slate-300 SP hover:bg-white dark:hover:bg-slate-800 hover:text-primaryBlue bg-slate-200/30 dark:bg-slate-800/30 rounded-lg transition-all duration-200 flex items-center gap-2.5 shadow-sm"
                              >
                                <span>{service.text}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  {/* Case Studies Dropdown - Mobile Grid Layout */}
                  <li>
                    <button
                      onClick={toggleCaseStudy}
                      className="w-full flex justify-between items-center px-4 py-2.5 rounded-xl P font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue transition-all duration-200"
                    >
                      <span>Case Studies</span>
                      <IoIosArrowDown
                        className={`transition-transform duration-300 ${
                          openCaseStudy ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openCaseStudy && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-3 pb-2 space-y-3">
                            {/* 3-Column Grid for Compact Cards */}
                            <div className="grid grid-cols-3 gap-2 px-1">
                              {caseStudiesData.map((project) => (
                                <Link
                                  key={`case-${project.id}`}
                                  to={project.link}
                                  onClick={handleNavClick}
                                  className="group flex flex-col items-center p-2 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm hover:shadow-md hover:border-primaryBlue hover:text-primaryBlue transition-all duration-200 text-center"
                                >
                                  <div className="w-10 h-10 mb-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center p-1.5 overflow-hidden group-hover:scale-105 transition-transform">
                                    <img
                                      src={project.image}
                                      alt={project.title}
                                      className="w-full h-full object-contain"
                                    />
                                  </div>
                                  <span className="text-[10px] font-medium leading-tight text-slate-700 dark:text-slate-300 group-hover:text-primaryBlue transition-colors line-clamp-2">
                                    {project.title}
                                  </span>
                                </Link>
                              ))}
                            </div>

                            {/* View All Case Study Button at the Bottom */}
                            <div className="pt-1 px-1">
                              <Link
                                to="/case-study"
                                onClick={handleNavClick}
                                className="w-full py-2.5 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-semibold rounded-xl text-center block shadow-md shadow-purple-500/20 hover:opacity-95 hover:bg-purple-700 transition-all"
                              >
                                View All Case Studies ↗
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>

                  <li>
                    <NavLink
                      to="/blog"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-xl P font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-primaryBlue text-white shadow-md shadow-purple-500/20"
                            : "text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue"
                        }`
                      }
                      onClick={handleNavClick}
                    >
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        `block px-4 py-2.5 mb-3 rounded-xl P font-semibold transition-all duration-200 ${
                          isActive
                            ? "bg-primaryBlue text-white shadow-md shadow-purple-500/20"
                            : "text-slate-700 dark:text-slate-200 hover:bg-purple-100/50 dark:hover:bg-slate-800/60 hover:text-primaryBlue"
                        }`
                      }
                      onClick={handleNavClick}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>

              {/* Footer CTA / Contact Button */}
              <div className="mt-auto py-4 border-t border-slate-200/60 dark:border-slate-700/60">
                <a
                  href="tel:+18887259885"
                  className="P font-semibold tracking-wider cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-3 rounded-xl block text-center shadow-lg shadow-purple-500/20 hover:opacity-95 transition-opacity"
                >
                  Call Us: +1 877-466-7021
                </a>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default AsideHeader;