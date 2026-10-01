import React from "react";
import "./MobileHeader.css";
import MarqueeSlidingText from "../Common/MarqueeSlidingText";
const tickerItems = [
  { name: "E-commerce & Retail", link: "#" },
  { name: "Education", link: "#" },
  { name: "Transportation", link: "#" },
  { name: "Finance & FinTech", link: "#" },
  { name: "Food & Beverage", link: "#" },
  { name: "Healthcare", link: "#" },
  { name: "Travel & Tourism", link: "#" },
  { name: "Fitness & Wellness", link: "#" },
  { name: "Real Estate", link: "#" },
  { name: "Cost Effective", link: "#" },
];
const MobileApplicationTech = () => {
  return (
    <div className="w-full mb-[30px]">
      {" "}
      {/* Updated inline color with class */}
      <div className=" bg-[#FFD1AF] py-4">
        <MarqueeSlidingText tickerItems={tickerItems} />
      </div>
      <div
        className="py-10"
        style={{ backgroundColor: "rgba(226, 225, 255, 1)" }}
      >
        <div className="customContainer !-mb-0">
          <h2 className="text text-heading_color text-center">
            "GDFX specializes in mobile app development, offering custom iOS,
            Android, and cross-platform solutions. Our expert team designs
            high-performance, user-friendly apps tailored to your business
            needs. Boost customer engagement, streamline operations, and drive
            growth with innovative, secure, and scalable mobile applications.
            Partner with GDFX for successful app development solutions."
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MobileApplicationTech;
