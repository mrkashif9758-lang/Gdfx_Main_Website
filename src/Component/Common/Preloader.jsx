import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets//logo/logo.webp"; // Apne logo ka correct path check kar lena

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Check karo ki is session me pehle preloader dikha hai ya nahi
    const hasLoadedBefore = sessionStorage.getItem("gdfx_preloader_shown");

    if (!hasLoadedBefore) {
      // Agar pehli baar aaya hai, toh preloader dikhao aur flag set kar do
      setIsLoading(true);
      sessionStorage.setItem("gdfx_preloader_shown", "true");

      // Smoothly progress badhane ke liye interval
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          const nextProgress = prev + Math.floor(Math.random() * 15) + 5;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      }, 100);

      // Jab 100% ho jaye toh thoda sa rok kar preloader hata do
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1400);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070b19] text-white px-4"
        >
          {/* Background Glow Effect */}
          <div className="absolute w-80 h-80 bg-primaryBlue/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

          <div className="relative z-10 flex flex-col items-center space-y-6 text-center max-w-2xl">
            
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt="GDFX Logo"
                className="h-14 sm:h-16 w-auto object-contain drop-shadow-lg"
              />
            </motion.div>

            {/* Welcome Message in Big Bold Gradient Text */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight uppercase"
            >
              Welcome To{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                GDFX
              </span>
            </motion.h1>

            {/* Loading Bar */}
            <div className="w-48 sm:w-60 h-1.5 bg-white/10 rounded-full overflow-hidden relative mt-2">
              <motion.div
                className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-primaryBlue to-secondaryPurple rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.2 }}
              />
            </div>

            {/* Loading Percentage Text */}
            <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
              Loading {progress}%
            </span>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;