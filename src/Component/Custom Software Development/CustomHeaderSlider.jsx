import React from "react";
import MarqueeSlidingText from "../Common/MarqueeSlidingText";
const tickerItems = [
  { name: " Finance ", link: "#" },
  { name: "Accounting", link: "#" },
  { name: "Healthcare", link: "#" },
  { name: "Logistics & Supply Chain", link: "#" },
  { name: "Hospitality ", link: "#" },
  { name: "Education", link: "#" },
  { name: "Real Estate", link: "#" },
  { name: "Telecommunication", link: "#" },
  { name: "Transportation & Aviation", link: "#" },
  { name: "IT Services", link: "#" },
];
const CustomHeaderSlider = () => {
  return (
    <div
      className="py-5 mb-[30px]"
      style={{ backgroundColor: "rgba(228, 239, 255, 1)" }}
    >
      <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  );
};

export default CustomHeaderSlider;
