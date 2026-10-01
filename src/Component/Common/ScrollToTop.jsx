import React, { useState, useEffect } from "react";
import scroll_to_top from "../../assets/Footer/bottom_to_top.webp";
import { FaCircleChevronUp } from "react-icons/fa6";

const ScrollToTop = () => {
  // State to track button visibility
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll event
  const handleScroll = () => {
    // If scrolled more than 100px from the top, show the button
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set up event listener for scroll on mount and clean up on unmount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    // Tailwind classes used for styling
    <div
      className={`fixed z-[500] bottom-5 cursor-pointer right-2 lg:right-8   transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={scrollToTop}
    >
      <FaCircleChevronUp className="sm:text-5xl text-4xl text-green-600" />
    </div>
  );
};

export default ScrollToTop;
