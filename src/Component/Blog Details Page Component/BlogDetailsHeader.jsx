import React from "react";
import { motion } from "framer-motion";
import { CiCalendar } from "react-icons/ci";
import logo from "../../assets/logo/logo.webp";

const BlogDetailsHeader = ({ singleBlog }) => {
  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="pb-20 pt-28 bg-white text-slate-900"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="customContainer !my-0 max-w-4xl mx-auto px-4">
        {/* Meta Info: Logo, Date, Category */}
        <motion.div className="flex flex-wrap items-center gap-4 mb-8" variants={item}>
          <div className="h-7 flex items-center bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
            <img src={logo} alt="Logo" className="w-5 h-5 object-contain mr-2" />
            <span className="text-xs font-semibold text-slate-800">
              {singleBlog?.author?.name || "Admin"}
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-[#7000ff]/10 border border-[#7000ff]/20 px-4 py-2 rounded-full text-[#7000ff]">
            <CiCalendar size={18} />
            <span className="text-xs font-semibold">
              {new Date(singleBlog?.publishedAt || singleBlog?.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          {singleBlog?.categories?.[0] && (
            <div className="flex items-center gap-2 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] px-4 py-2 rounded-full text-white shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider">
                {singleBlog?.categories[0].name}
              </span>
            </div>
          )}
        </motion.div>

        {/* Title */}
        <motion.h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-8 leading-tight tracking-tight" variants={item}>
          {singleBlog?.title}
        </motion.h1>

        {/* Excerpt / First Paragraph */}
        {singleBlog?.excerpt && (
          <motion.div className="mb-10" variants={item}>
            <p className="text-lg sm:text-xl text-slate-600 font-medium italic border-l-4 border-[#7000ff] pl-5 leading-relaxed bg-purple-50/50 py-3 rounded-r-xl">
              {singleBlog?.excerpt}
            </p>
          </motion.div>
        )}

        {/* Main Banner Image */}
        <motion.div className="w-full mb-12 rounded-2xl overflow-hidden shadow-xl border border-slate-200" variants={item}>
          <img
            src={singleBlog?.image?.url}
            draggable={false}
            className="w-full h-auto max-h-[480px] object-cover"
            alt={singleBlog?.image?.alt || singleBlog?.title}
          />
        </motion.div>

        {/* Main Content (HTML Rendering) */}
        <motion.div 
          className="article-content prose prose-slate max-w-none text-slate-700 leading-relaxed font-normal"
          variants={item}
          dangerouslySetInnerHTML={{ __html: singleBlog?.content }}
        />
      </div>
    </motion.section>
  );
};

export default BlogDetailsHeader;