import React from "react";
import "./Seo_Slider.css";
import { BsDot } from "react-icons/bs";
// Reusable component for individual list items
const TickerItem = ({ text, bgColor }) => (
  <li
    className="flex items-center  gap-2 sm:text-base text-xs md:px-5 px-2 md:py-2 py-1 text-white"
    style={{ backgroundColor: bgColor }}
  >
    <span>
      <BsDot size={30} />
    </span>
    <span>{text}</span>
  </li>
);

// List of categories to display in the ticker
const tickerItems = [
  { title: "On-Page SEO Optimization", bgcolor: "rgba(255, 107, 0, 1)" },
  { title: "Technical SEO Services", bgcolor: "rgba(73, 187, 231, 1)" },
  { title: "Quality Content Creation", bgcolor: "rgba(58, 180, 170, 1)" },
  { title: "Local SEO for Small Businesses", bgcolor: "rgba(25, 45, 215, 1)" },
  { title: "Link Building", bgcolor: "rgba(245, 0, 73, 1)" },
  { title: "Off-Page SEO", bgcolor: "rgba(255, 184, 0, 1)" },
  { title: "E-Commerce SEO", bgcolor: "rgba(231, 212, 212, 1)" },
];
const Seo_Slider = () => {
  return (
    <div className="tech-ticker">
      {/* Rendering the same list twice dynamically */}
      {[...Array(2)].map((_, index) => (
        <ul key={index}>
          {tickerItems.map((item, index) => (
            <TickerItem key={index} text={item.title} bgColor={item.bgcolor} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Seo_Slider;
