import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RxDragHandleDots2 } from "react-icons/rx";

const MakeConnection = () => {
  const { caseStudys } = useSelector((state) => state.caseStudyContainer);

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background Subtle Glow Effects for Light Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primaryBlue/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="customContainer !my-0 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center flex flex-col items-center max-w-3xl mx-auto mb-16"
        >
          <div className="flex gap-2 items-center mb-3 bg-secondaryPurple/10 px-4 py-1.5 rounded-full border border-secondaryPurple/20">
            <RxDragHandleDots2 className="rotate-90 text-secondaryPurple text-xl" />
            <span className="text-secondaryPurple font-semibold tracking-wider text-xs sm:text-sm uppercase">
              WE MAKE CONNECTION
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-slate-900 mb-6 leading-tight">
            A Showcase of Custom{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              IT Solutions Delivering Exceptional Results
            </span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore GDFX portfolio to discover how we deliver innovative, custom IT solutions that drive business growth. From scalable software development to dynamic web design, our work transforms visions into reality.
          </p>
        </motion.div>

        {/* Case Studies Grid with Hover Animations */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {caseStudys &&
            caseStudys?.slice(0, 3)?.map((item, index) => {
              const itemSlug = item?.projectTitle
                ? item.projectTitle
                    .replace(/[^a-zA-Z0-9]+/g, "-")
                    .replace(/^-+|-+$/g, "")
                    .toLowerCase()
                : item._id;

              return (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3, ease: "easeInOut" }
                  }}
                  className="group bg-white rounded-2xl border border-slate-200/80 shadow-md hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col justify-between"
                >
                  {/* Card Image Wrapper with Smooth Zoom */}
                  <div className="relative h-[220px] sm:h-[240px] overflow-hidden bg-slate-100">
                    <motion.img
                      src={item?.projectTitleImage?.url}
                      draggable={false}
                      className="w-full h-full object-cover object-center"
                      alt={item.projectTitle || "Case Study Image"}
                      loading="lazy"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    
                    {/* Subtle Overlay on Image Hover */}
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent pointer-events-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col items-start flex-grow justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 capitalize mb-2 group-hover:text-secondaryPurple transition-colors duration-300">
                        {item.projectTitle}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base mb-6 line-clamp-2">
                        {item.shortDescription || item.description || "Discover how we built this tailored IT solution."}
                      </p>
                    </div>

                    <Link
                      to={`/case-study/${itemSlug}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                      aria-label={`View ${item.projectTitle} case study`}
                      className="w-full"
                    >
                      <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-2.5 px-4 rounded-xl font-medium text-white bg-gradient-to-r from-secondaryPurple to-primaryBlue shadow-md shadow-primaryBlue/15 hover:shadow-primaryBlue/30 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                      >
                        <span>Know More</span>
                        <MdArrowOutward className="text-white text-lg transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Bottom CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <Link to={"/case-study"} onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-white shadow-lg bg-gradient-to-r from-secondaryPurple to-primaryBlue hover:shadow-primaryBlue/25 transition-all duration-300 flex items-center gap-2.5 group"
            >
              <span>View All Projects</span>
              <MdArrowOutward className="text-white text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default MakeConnection;