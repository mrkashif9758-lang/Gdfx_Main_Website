import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "../Home Page Component/styles.css";

import { Pagination, Autoplay } from "swiper/modules";
import { GiTechnoHeart } from "react-icons/gi";
import { FaAward, FaTrophy } from "react-icons/fa6";
const AboutBestPrice = () => {
  const swiperRef = useRef(null);
  const handleMouseEnter = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop(); // Pause autoplay
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start(); // Restart autoplay
    }
  };
  return (
    <div className=" mb-10">
      <Swiper
        ref={swiperRef}
        spaceBetween={30}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onMouseEnter={handleMouseEnter} // Pause on hover
        onMouseLeave={handleMouseLeave} // Resume after hover
      >
        <SwiperSlide>
          <div className="bg-light_gray flex px-2 py-2 items-center gap-3 rounded-md">
            <FaAward className="h-[100px] w-[100px] text-orange_main" />
            <div className="">
              <h2 className="text-heading_color cardHeading text-start">
                Top Software Development Agency
              </h2>
              <p className="text-text_color text-start sm:text-base text-xs xss:text-sm ">
                Recognizes leading software agencies based on client feedback,
                expertise, and proven track records.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-light_gray flex px-2 py-2 items-center gap-3 rounded-md ">
            <FaTrophy className="h-[100px] w-[100px] text-orange_main" />
            <div className="">
              <h2 className="text-heading_color cardHeading text-start">
                The Webby Awards - Best Software
              </h2>
              <p className="text-text_color text-start sm:text-base text-xs xss:text-sm">
                Honors excellence in software and app development, celebrating
                user experience and innovation.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-light_gray flex px-2 py-2 items-center gap-3 rounded-md ">
            <GiTechnoHeart className="h-[100px] w-[100px] text-orange_main" />
            <div className="">
              <h2 className="text-heading_color cardHeading text-start">
                Frost & Sullivan Practices and Award
              </h2>
              <p className="text-text_color text-start sm:text-base text-xs xss:text-sm">
                Recognizes software companies for outstanding innovation and
                customer satisfaction in the IT sector.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutBestPrice;
