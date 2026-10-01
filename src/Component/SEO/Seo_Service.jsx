import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardArrowDown } from "react-icons/md";

const seo_service_data = [
  {
    bgColor: "bg-primaryBlue/70",
    title: "On-Page SEO Optimization",
    description:
      "Our on-page SEO services include optimizing titles, meta descriptions, headers, and content to make your website user-friendly and search-engine friendly.",
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "Technical SEO Services",
    description:
      "From improving website loading speed to fixing crawl errors and ensuring mobile responsiveness, our technical SEO expertise ensures your site is in top shape for search engines",
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "Quality Content Creation and Optimization",
    description:
      "Content is king in the world of SEO. Our team of skilled writers creates high-quality, keyword-rich content that not only ranks but also engages and converts your audience.",
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "Local SEO for Small Businesses",
    description:
      "Looking to dominate local searches? We optimize your Google My Business profile, create location-specific pages, and implement local SEO strategies to help you connect with nearby customers.",
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "Link Building and Off-Page SEO",
    description:
      "For e-commerce businesses, we optimize product descriptions, categories, and URLs to attract shoppers and drive sales through organic search.",
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "E-Commerce SEO",
    description:
      "We build high-authority backlinks from reputable sites to improve your domain authority and establish your credibility in your industry Industries We Serve",
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "Advanced Keyword Research and Targeting",
    description:
      "We perform in-depth keyword research to identify long-tail keywords and high-volume search terms relevant to your business. By targeting these keywords, we ensure your website ranks for phrases your audience is actively searching for.",
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "Analytics and Reporting",
    description:
      "Our SEO services come with transparent reporting, including: Monthly performance reports, Insights on traffic growth, keyword rankings, and user engagement, Recommendations for continuous improvement based on analytics",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Seo_Service = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            GDFX SEO Services –{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              Unlock the Power of Online Visibility
            </span>
          </h2>
          <p className="P text-off_white mt-1.5 max-w-3xl mx-auto">
            Welcome to GDFX (Global Digitals FX), your trusted partner for
            comprehensive and result-driven SEO services. We specialize in
            helping businesses of all sizes increase their online visibility,
            drive organic traffic, and achieve top rankings on search engines.
            Whether you're a startup or an established brand, our expert SEO
            strategies are tailored to meet your unique business needs.
          </p>
        </div>

        <div>
          {/* <h3 className="H3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary mb-10 text-center">
            Our Full Range of SEO Services at GDFX
          </h3> */}

          {/* Hover Reveal Grid Container */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 grid-cols-1 gap-5"
          >
            {seo_service_data.map((item, index) => {
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="group cursor-pointer h-full"
                >
                  <div
                    className={`h-full flex flex-col justify-between sm:py-5 py-4 sm:px-6 px-4 rounded-xl shadow-lg transition-all duration-500 border border-white/10 backdrop-blur-sm ${
                      item?.bgColor
                    } ${
                      isHovered ? "scale-[1.02] shadow-2xl ring-2 ring-white/30" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-white/70 px-2.5 py-1 rounded-md bg-black/20">
                          0{index + 1}
                        </span>
                        <h4 className="H4 font-bold text-white mb-0 transition-colors duration-300">
                          {item.title}
                        </h4>
                      </div>

                      {/* Dropdown Indicator Icon */}
                      <div
                        className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 transition-transform duration-300 ${
                          isHovered ? "rotate-180 bg-white/20" : ""
                        }`}
                      >
                        <MdKeyboardArrowDown className="text-xl" />
                      </div>
                    </div>

                    {/* Expandable Description Area on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="pt-4 mt-4 border-t border-white/20">
                            <p className="P text-off_white leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Seo_Service;