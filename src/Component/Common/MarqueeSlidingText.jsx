import React from "react";
import "./MarqueeSlidingText.css";
// Reusable component for individual list items
const TickerItem = ({ item }) => (
  <li className="flex items-center sm:gap-4 gap-2 text text-orange_main">
    <span>|</span>
    <span>{item.name}</span>
  </li>
);

// List of categories to display in the ticker

const MarqueeSlidingText = ({tickerItems}) => {
  return (
    <div className="tech-ticker ">
      {/* Rendering the same list twice dynamically */}
      {[...Array(2)].map((_, index) => (
        <ul key={index}>
          {tickerItems.map((item, index) => (
            <TickerItem key={index} item={item} />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default MarqueeSlidingText;
