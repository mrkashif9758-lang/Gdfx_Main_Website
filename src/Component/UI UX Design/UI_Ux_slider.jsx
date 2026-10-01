import React from "react";
import MarqueeSlidingText from "../Common/MarqueeSlidingText";
const tickerItems = [
  { name: "Business Marketing", link: "#" },
  { name: "Apps & eCommerce", link: "#" },
  { name: "User Research", link: "#" },
  { name: "Usability testing", link: "#" },
  { name: "Website & App redesign", link: "#" },
  { name: "Apps & Rich Media", link: "#" },
  { name: "P.R & Advertising", link: "#" },
  { name: "2D+3D Design", link: "#" },
  { name: "Visual Communication", link: "#" },
  { name: "UI/UX Consulting", link: "#" },
];
const UI_Ux_slider = () => {
  return (
    <div
      className="py-5 mb-[30px]"
      style={{ backgroundColor: "rgba(242, 247, 255, 1)" }}
    >
      <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  );
};

export default UI_Ux_slider;
