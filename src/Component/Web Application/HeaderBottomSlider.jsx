import React from "react";
import MarqueeSlidingText from "../Common/MarqueeSlidingText";
const tickerItems = [
  { name: "Website Design", link: "#" },
  { name: "UX Design", link: "#" },
  { name: "User Interface", link: "#" },
  { name: "Mobile App Development", link: "#" },
  { name: "eCommernce website Design", link: "#" },
  { name: "Logo & Branding Design", link: "#" },
  { name: "Landing Page Design", link: "#" },
  { name: "Corporate Presentation", link: "#" },
  { name: "Packing Design", link: "#" },
  { name: "Print Design", link: "#" },
];
const HeaderBottomSlider = () => {
  return (
    <div
      className="py-5 mb-[30px]"
      style={{ backgroundColor: "rgba(228, 239, 255, 1)" }}
    >
      <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  );
};

export default HeaderBottomSlider;
