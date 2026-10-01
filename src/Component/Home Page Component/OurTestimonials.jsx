import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { RxDragHandleDots2 } from "react-icons/rx";
import { getActiveTestimonials } from "../../lib/Testimonials"; // Ensure path is correct
import "swiper/css";
import "swiper/css/pagination";

const OurTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasFetched, setHasFetched] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  // Intersection Observer to fetch only when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (entry.isIntersecting && !hasFetched) {
          setHasFetched(true);
          try {
            const res = await getActiveTestimonials();
            if (res.success) {
              setTestimonials(res.testimonials);
            }
          } catch (err) {
            console.error("API Error:", err);
          } finally {
            setLoading(false);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasFetched]);

  // Pause/Resume functions
  const handleMouseEnter = () => swiperRef.current?.swiper.autoplay.stop();
  const handleMouseLeave = () => swiperRef.current?.swiper.autoplay.start();

  return (
    <section ref={sectionRef} className="bg-white py-24 relative overflow-hidden">
      <div className="customContainer max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-2 items-center mb-3 bg-[#faf5ff] px-4 py-1.5 rounded-full border border-[#e9d5ff]"
          >
            <RxDragHandleDots2 className="rotate-90 text-[#9333ea] text-xl" />
            <span className="text-[#9333ea] font-semibold text-xs sm:text-sm tracking-wider uppercase font-lato">
              OUR TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[30px] sm:text-[40px] xl:text-[50px] font-nunito font-extrabold text-[#2d1b4e] mb-4 tracking-tight capitalize"
          >
            Why Businesses Trust GDFX for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] to-[#581c87]">
              Digital Transformation
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[14px] sm:text-[16px] font-lato text-[#4a3575] max-w-2xl mx-auto leading-relaxed"
          >
            Explore client feedback on our IT services. Our testimonials
            highlight innovative solutions, exceptional support, and our
            commitment to providing reliable, efficient, and transformative
            technology.
          </motion.p>
        </div>

        {/* Testimonials Swiper Container */}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {loading ? (
            // Skeleton Loader matching card layout
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-[340px] bg-[#faf5ff] animate-pulse rounded-3xl border border-[#e9d5ff]/60" />
              ))}
            </div>
          ) : (
            <Swiper
              ref={swiperRef}
              spaceBetween={30}
              modules={[Pagination, Autoplay]}
              loop={testimonials.length > 4}
              speed={1500}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              className="mySwiper pb-12"
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 15 },
                640: { slidesPerView: 2, spaceBetween: 20 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 30 },
                1240: { slidesPerView: 4, spaceBetween: 30 },
              }}
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item._id} className="h-auto py-2">
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col justify-between bg-[#faf5ff] rounded-3xl border border-[#e9d5ff]/60 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:bg-white hover:border-[#9333ea]/30 transition-all duration-300 min-h-[360px]">
                    
                    {/* Top Content: Message & Quote */}
                    <div className="flex flex-col gap-4">
                      <div className="text-[#7e22ce] text-3xl font-serif leading-none">“</div>
                      <p className="text-[#4a3575] font-lato text-sm sm:text-base italic line-clamp-5 leading-relaxed">
                        {item.message}
                      </p>
                    </div>

                    {/* Bottom Content: Client Profile Info */}
                    <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[#e9d5ff]/60">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-[#7e22ce] to-[#d8b4fe]">
                          <img
                            src={item.image?.url || "https://via.placeholder.com/150"}
                            className="w-full h-full rounded-full object-cover bg-white"
                            alt={item.name}
                          />
                        </div>
                      </div>

                      <div className="flex flex-col overflow-hidden">
                        <h4 className="font-nunito font-bold text-[#2d1b4e] text-base truncate capitalize tracking-tight">
                          {item.name}
                        </h4>
                        <p className="font-lato text-xs text-[#9333ea] font-medium truncate">
                          {item.position}
                        </p>
                      </div>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

      </div>
    </section>
  );
};

export default OurTestimonials;