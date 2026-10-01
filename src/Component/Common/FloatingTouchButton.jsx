"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GetInTouchForm from "./GenInTouchForm";

const FloatingTouchButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      {/* Vertical Floating Button */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ x: -2 }} // Minimal slide for premium feel
        onClick={() => setIsFormOpen(true)}
        className="fixed right-0 top-1/3 -translate-y-1/2 z-[49999] cursor-pointer group"
      >
        <div 
          className="bg-primary-gradient text-white border-l border-y border-white/20 shadow-2xl rounded-l-2xl flex items-center justify-center"
          style={{ 
            minWidth: "45px", // Width fix rakhein taaki text center dikhe
            height: "160px"   // Ek fixed height taaki vertical alignment sahi ho
          }}
        >
          <span 
            className="font-bold tracking-[0.2em] uppercase text-[13px] flex items-center justify-center whitespace-nowrap"
            style={{ 
              writingMode: "vertical-rl", 
              textOrientation: "mixed",
              transform: "rotate(180deg)",
              margin: "0 auto" // Horizontal centering inside flex
            }}
          >
            Get In Touch
          </span>
        </div>
        
        {/* Subtle Glow Overlay */}
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-l-2xl" />
      </motion.div>

      {/* Form Component */}
      <GetInTouchForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </>
  );
};

export default FloatingTouchButton;