import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useSelector } from "react-redux";
import { RxDragHandleDots2 } from "react-icons/rx";

const Blog = () => {
  const { blogs } = useSelector((state) => state.blogContainer);

  const swiperRef = useRef(null);

  return (
    <section className="bg-bgFirstBlue py-20 relative overflow-hidden ">
      <div className="customContainer !my-0">
        <div className="text-center flex flex-col items-center">
          <motion.p className="flex gap-2 items-center mb-3">
            <RxDragHandleDots2 className="rotate-90 text-secondaryPurple text-2xl" />
            <span className="text-secondaryPurple font-medium tracking-wider H6">
              FROM THE BLOG
            </span>
          </motion.p>
          <motion.h2 className="H2 font-bold text-white mb-3 leading-tight capitalize">
            Insights & Trends:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              The Latest in IT Solutions and Digital Transformation
            </span>
          </motion.h2>

          <motion.p className="P text-mutedGray-c1 mb-10 leading-relaxed">
            Explore GDFX’s blog for expert insights on software development,
            digital marketing, web design, and industry trends. Stay updated
            with actionable strategies and solutions that drive business growth
            and innovation.
          </motion.p>
        </div>
        {/* Swiper for Blog Posts */}
        <Swiper
          ref={swiperRef}
          spaceBetween={30}
          modules={[Pagination, Autoplay]}
          loop={true}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
          }}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1240: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {blogs &&
            blogs.map((post, index) => (
              <SwiperSlide key={index} className="rounded-lg overflow-hidden">
                <div className="w-full flex flex-col">
                  <div
                    className="w-full bg-cover bg-no-repeat bg-center h-[200px] relative overflow-hidden group"
                    style={{
                      backgroundImage: `url(${post.image1?.url})`,
                    }}
                  >
                    <div className="clippathdata">
                      <div className="P text-white font-bold text-left ps-4 bg-primary-gradient h-[60px]">
                        {new Date(post?.date).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        <br />
                        {post.month}
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-300 p-2.5 w-full flex flex-col min-h-[120px] sm:h-[150px]">
                    <h2 className="pb-2.5  text-white P flex-grow">
                      {post.title.slice(0, 50).concat("...")}
                    </h2>

                    <Link
                      key={post._id}
                      // to={`/blog/blog-details/${post.title}`}
                      to={`/blog/blog-details/${post.title
                        .replace(/[^a-zA-Z0-9]+/g, "-")
                        .replace(/^-+|-+$/g, "")
                        .toLowerCase()}`}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "instant" })
                      }
                    >
                      <button className="px-5 border py-2 justify-center rounded-lg font-medium text-white bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 flex items-center gap-2 group w-full">
                        Read More
                        <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};


export default Blog;
