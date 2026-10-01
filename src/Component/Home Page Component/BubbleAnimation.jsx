import React, { useEffect, useState, useRef } from "react";
import "./BubbleAnimation.css";

const BubbleAnimation = () => {
  const [bubbles, setBubbles] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    const generateBubbles = () => {
      const bubbleCount = 20;
      const bubblesArray = [];

      if (divRef.current) {
        const containerWidth = divRef.current.clientWidth;
        const containerHeight = divRef.current.clientHeight;

        for (let i = 0; i < bubbleCount; i++) {
          const size = Math.random() * (60 - 30) + 30; // Random size between 30px and 60px
          const delay = Math.random() * 3; // Random delay
          const left = Math.random() * (containerWidth - size); // Random horizontal position
          const bottom = Math.random() * (containerHeight - size); // Random vertical position
          const animationDuration = Math.random() * 3 + 4; // Random animation duration between 4s and 7s

          bubblesArray.push({ size, delay, left, bottom, animationDuration });
        }

        setBubbles(bubblesArray);
      }
    };

    generateBubbles();
    const interval = setInterval(generateBubbles, 4000); // Regenerate bubbles every 5 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  return (
    <div
      ref={divRef}
      className="h-full absolute top-[-100px] left-0 w-full   overflow-hidden"
    >
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className="absolute  bg-[#075dde] opacity-75 animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.left}px`,
            bottom: `${bubble.bottom}px`,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.animationDuration}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BubbleAnimation;
