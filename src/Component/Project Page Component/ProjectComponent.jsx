import React, { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GetAllCaseStudyApi } from "../../redux/actions/caseStudyAction";
import { MdArrowOutward } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ProjectComponent = () => {
  const { caseStudys, loading } = useSelector(
    (state) => state.caseStudyContainer
  );
  const dispatch = useDispatch();

  const getInitialProjectCount = useCallback(() => {
    return window.innerWidth > 768 ? 8 : 4;
  }, []);

  const [visibleProjects, setVisibleProjects] = useState(
    getInitialProjectCount()
  );
  const [isLoadMoreVisible, setIsLoadMoreVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Refs for GSAP animations & Slider
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const handleLoadMore = useCallback(() => {
    const newCount = visibleProjects + (window.innerWidth > 768 ? 6 : 4);
    setVisibleProjects(newCount);
  }, [visibleProjects]);

  // Scroll left/right functions for slider arrows
  const scrollSlider = (direction) => {
    if (cardsContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      cardsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    setIsLoadMoreVisible(caseStudys?.length > visibleProjects);
  }, [visibleProjects, caseStudys]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleProjects(getInitialProjectCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getInitialProjectCount]);

  useEffect(() => {
    dispatch(GetAllCaseStudyApi());
  }, [dispatch]);

  // GSAP ScrollTrigger Animation for Cards Entry
  useEffect(() => {
    if (loading || !caseStudys || caseStudys.length === 0) return;

    const ctx = gsap.context(() => {
      const cards = cardsContainerRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsContainerRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [loading, caseStudys, visibleProjects]);

  const ProjectPlaceholder = () => (
    <div className="relative overflow-hidden rounded-3xl w-[260px] sm:w-[280px] lg:w-[300px] h-[450px] bg-slate-200 animate-pulse shadow-sm flex-shrink-0"></div>
  );

  return (
    <section ref={sectionRef} className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div>
          {/* Header Section with Navigation Arrows */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-bold uppercase tracking-widest bg-purple-100 text-purple-800 px-3.5 py-1.5 rounded-full mb-4">
                Our Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-slate-900 mb-4 tracking-tight leading-tight">
                Innovative IT Projects Built for{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
                  Your Success
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Our IT projects turn client goals into innovative solutions. Tackle unique challenges and explore our feature-rich applications.
              </p>
            </div>

            {/* Slider Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => scrollSlider("left")}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Scroll left"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={() => scrollSlider("right")}
                className="w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 hover:bg-purple-700 hover:text-white hover:border-purple-700 transition-all duration-300 shadow-sm cursor-pointer"
                aria-label="Scroll right"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex gap-5 overflow-hidden">
              {[...Array(4)].map((_, index) => (
                <ProjectPlaceholder key={`placeholder-${index}`} />
              ))}
            </div>
          ) : (
            <>
              {/* Expanding Horizontal Slider Container */}
              <div
                ref={cardsContainerRef}
                className="flex items-center gap-5 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {caseStudys?.slice(0, visibleProjects)?.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const isAnyHovered = hoveredIndex !== null;

                  // Screenshot jaisa exact dynamic width logic: 
                  // Normal state mein sabhi compact rahenge, hover karne par wala card bada ho jayega.
                  let cardWidthStyle = "w-[260px] sm:w-[280px] lg:w-[300px]";
                  if (isAnyHovered) {
                    cardWidthStyle = isHovered
                      ? "w-[360px] sm:w-[420px] lg:w-[480px]"
                      : "w-[210px] sm:w-[230px] lg:w-[250px]";
                  }

                  return (
                    <div
                      key={item._id}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      className={`relative overflow-hidden group rounded-3xl h-[440px] lg:h-[480px] shadow-lg bg-slate-900 border border-slate-200/50 opacity-0 cursor-pointer flex-shrink-0 snap-start transition-all duration-500 ease-out ${cardWidthStyle}`}
                    >
                      {/* Project Image */}
                      <div className="absolute inset-0 overflow-hidden bg-slate-900">
                        <img
                          src={item?.projectTitleImage?.url}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                          alt={item.projectTitle}
                          loading="lazy"
                        />
                      </div>

                      {/* Dark Gradient Overlay for text visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-95 transition-all duration-300 flex flex-col justify-end p-6 sm:p-7">
                        
                        <span className="self-start text-[11px] font-semibold px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white mb-3">
                          Web App
                        </span>

                        <h3 className="text-xl sm:text-2xl font-bold text-white capitalize mb-2 transition-transform duration-300">
                          {item.projectTitle}
                        </h3>

                        <p className="text-slate-300 text-xs sm:text-sm mb-5 line-clamp-2 font-normal">
                          {item.shortDescription || item.projectTitle}
                        </p>

                        <Link
                          to={`/case-study/${item.projectTitle
                            .replace(/[^a-zA-Z0-9]+/g, "-")
                            .replace(/^-+|-+$/g, "")
                            .toLowerCase()}`}
                          onClick={() =>
                            window.scrollTo({ top: 0, behavior: "instant" })
                          }
                          className="self-start"
                          aria-label={`View ${item.projectTitle} case study`}
                        >
                          <button className="px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-700 to-indigo-700 shadow-md hover:shadow-purple-900/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 group/item cursor-pointer">
                            <span>View Case Study</span>
                            <MdArrowOutward className="text-white text-base transition-transform duration-300 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Load More Button */}
              {isLoadMoreVisible && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-purple-700 to-indigo-700 shadow-lg shadow-purple-700/20 hover:shadow-xl hover:shadow-purple-700/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                    aria-label="Load more projects"
                  >
                    <span>Load More Projects</span>
                    <MdArrowOutward className="text-white text-lg transition-transform duration-300 hover:rotate-45" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectComponent;