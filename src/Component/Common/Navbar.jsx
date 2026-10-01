import { useCallback, useEffect, useState } from "react";
import logo from "../../assets/logo/globalBlack-logo.png";
import NavlinkItem from "./NavlinkItem.jsx";
import { throttle } from "../../utils/throttle.js";
import { FaBars } from "react-icons/fa6";
import AsideHeader from "./AsideHeader.jsx";
import { Link } from "react-router-dom";
import GetInTouchForm from "./GenInTouchForm.jsx";

function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false); // <-- Case Study Dropdown State Added
  const [bgIsActive, setBgIsActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false); // Popup State

  const toggleMenu = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // Prevent background scroll when menu OR form is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen || isFormOpen);
  }, [isMenuOpen, isFormOpen]);

  useEffect(() => {
    const throttledScroll = throttle(() => {
      setBgIsActive(window.scrollY > 20);
    }, 200);

    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    const throttledResize = throttle(handleResize, 200);
    window.addEventListener("resize", throttledResize);
    return () => {
      window.removeEventListener("resize", throttledResize);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-[50000] px-3 sm:px-6 md:px-8 pt-3 sm:pt-4 transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Floating Capsule Navbar with Glassmorphism / White Style & Optimized Left/Right Spacing */}
        <nav
          className={`flex justify-between items-center px-3 sm:px-6 md:px-8 py-2.5 rounded-full transition-all duration-300 ${bgIsActive
              ? "bg-white/60 backdrop-blur-md shadow-sm border border-white/40"
              : "bg-white/60 backdrop-blur-md shadow-sm border border-white/40"
            }`}
        >
          {/* LOGO with optimized left alignment and forced clear dimensions */}
          <Link
            to="/"
            className="shrink-0 flex items-center w-[70px] h-[50px] overflow-visible"
          >
            <img
              src={logo}
              alt="Global Digital SFX"
              className="
                w-[60px]
                sm:w-[50px]
                md:w-[70px]
                lg:w-[60px]
                h-auto
                object-contain
                scale-[1.8]
                origin-left
              "
            />
          </Link>

          {/* DESKTOP MENU ITEMS */}
          <ul className="lg:flex items-center gap-1 xl:gap-2 hidden">
            <NavlinkItem path="/" label="Home" toggleMenu={toggleMenu} />
            <NavlinkItem path="/about" label="About" toggleMenu={toggleMenu} />
            <NavlinkItem
              path="/service"
              label="Service"
              isDropdown
              isServicesOpen={isServicesOpen}
              setIsServicesOpen={setIsServicesOpen}
              toggleMenu={toggleMenu}
            />
            <NavlinkItem
              path="/case-study"
              label="case study"
              isDropdown
              isServicesOpen={isCaseStudyOpen}
              setIsServicesOpen={setIsCaseStudyOpen}
              toggleMenu={toggleMenu}
              isCaseStudyDropdown={true} // <-- Identifier flag for Case Study Mega Menu
            />
            <NavlinkItem path="/blog" label="blog" toggleMenu={toggleMenu} />
            <NavlinkItem
              path="/contact"
              label="contact"
              toggleMenu={toggleMenu}
            />
          </ul>

          {/* RIGHT ACTION BUTTON */}
          <div className="hidden lg:block">
            <div
              onClick={() =>
                window.open(
                  "https://calendly.com/kashif-zyntrixptvltd/30min",
                  "_blank"
                )
              }
              className="font-semibold tracking-wider cursor-pointer bg-gradient-to-r from-purple-700 to-purple-900 text-white px-5 py-2.5 hover:opacity-95 transition-all rounded-full shadow-sm text-sm flex items-center gap-2 group"
            >
              <span>Start a project</span>
              <span className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </div>
          </div>

          {/* MOBILE HAMBURGER */}
          <div
            className="lg:hidden cursor-pointer bg-purple-800 text-white p-2 rounded-full shadow-sm"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Open Menu"
          >
            <FaBars size={18} />
          </div>
        </nav>
      </div>

      <AsideHeader isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      {/* FORM POPUP COMPONENT */}
      <GetInTouchForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </header>
  );
}

export default Navbar;