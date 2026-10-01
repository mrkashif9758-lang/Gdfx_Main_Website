import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Home Page Component/styles.css";
import { Pagination, Autoplay } from "swiper/modules"; // Updated import from swiper

const SearchResult = ({ SEOHeading, SEOParagraph, seoImages }) => {
  return (
    <div className="bg-bgFirstBlue py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H4 text-white leading-[1.25] mb-2 font-bold">
            {SEOHeading}
          </h2>
          <p className="P text-off_white">
            {SEOParagraph}
          </p>
        </div>
        <div className="">
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            speed={1000}
            loop={true} 
            autoplay={{
              delay: 2000, 
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
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {seoImages?.map((item) => (
              <SwiperSlide key={item.id}>
                {" "}
                {/* Use item.id as key */}
                <div
                  className="w-full h-[240px]  lg:h-[280px]"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: '100%', 
                    height: '300px', 
                  }}
                >
                  {/* <img
                    src={item.image}
                    alt={`Result ${item.id}`}
                    className="w-full h-full object-contain"
                  /> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SearchResult;
