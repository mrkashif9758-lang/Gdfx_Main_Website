import React from "react";
import { motion } from "framer-motion";

const BlogDetailsSkeleton = () => {
  // Shimmer animation profile
  const shimmer = {
    initial: { x: "-100%" },
    animate: {
      x: "100%",
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: "linear",
      },
    },
  };

  return (
    <section className="pb-20 pt-24 bg-bgFirstBlue min-h-screen">
      <div className="customContainer !my-0">
        
        {/* 1. Main Banner Image Skeleton */}
        <div className="relative w-full mb-8 rounded-xl overflow-hidden bg-white/5 h-[300px] md:h-[500px]">
          <motion.div 
            variants={shimmer}
            initial="initial"
            animate="animate"
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />
        </div>

        {/* 2. Meta Info (Logo, Date, Category) Skeletons */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="relative h-6 w-24 bg-white/5 rounded overflow-hidden">
             <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          
          <div className="relative h-10 w-40 bg-white/5 rounded-full overflow-hidden">
             <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>

          <div className="relative h-10 w-32 bg-white/5 rounded-full overflow-hidden">
             <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* 3. Title Skeleton (Two lines) */}
        <div className="mb-8 space-y-3">
          <div className="relative h-10 w-3/4 bg-white/5 rounded overflow-hidden">
            <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="relative h-10 w-1/2 bg-white/5 rounded overflow-hidden">
            <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* 4. Excerpt Skeleton */}
        <div className="mb-10 border-l-4 border-white/10 pl-4 space-y-2">
          <div className="relative h-5 w-full bg-white/5 rounded overflow-hidden">
            <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
          <div className="relative h-5 w-full bg-white/5 rounded overflow-hidden">
            <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div>
        </div>

        {/* 5. Main Content Paragraphs Skeletons */}
        <div className="space-y-6">
          {[1, 2, 3].map((index) => (
            <div key={index} className="space-y-3">
              <div className="relative h-4 w-full bg-white/5 rounded overflow-hidden">
                <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="relative h-4 w-[95%] bg-white/5 rounded overflow-hidden">
                <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
              <div className="relative h-4 w-[90%] bg-white/5 rounded overflow-hidden">
                <motion.div variants={shimmer} initial="initial" animate="animate" className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogDetailsSkeleton;