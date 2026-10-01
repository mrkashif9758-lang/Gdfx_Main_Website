import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Home Page Component/styles.css";
import { Pagination, Autoplay } from "swiper/modules"; // Updated import from swiper
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const SocialHandleScreenshort = ({
  SocialHeading,
  SocialParagraph,
  SocialImages,
  FeedbackParagraph,
  ClientQuotes,
  ClientName,
  ClientCompanyORposition,
  FBImgAndVideo,
}) => {
  return (
    <div className="bg-bgFirstBlue py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H4 text-white leading-[1.25] mb-2 font-bold">
            {SocialHeading}
          </h2>
          <p className="P text-off_white">{SocialParagraph}</p>
        </div>
        <div className="mb-16">
          <Swiper
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            loop={true} // Infinite scroll enabled
            autoplay={{
              delay: 2500, // Delay between slide transitions in milliseconds
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
            {SocialImages?.map((item) => (
              <SwiperSlide key={item.id}>
                {" "}
                {/* Use item.id as key */}
                <div className="h-[250px] lg:h-[270px] w-full b">
                  <img
                    src={item.image}
                    alt={`Result ${item.id}`}
                    className="w-full h-full object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mb-10">
          <h2 className="H4 text-white leading-[1.25] mb-2 font-bold">
            Client Feedback
          </h2>
          <p className="P text-off_white">{FeedbackParagraph}</p>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700 max-w-3xl mx-auto">
          <div className="lg:w-[120px] lg:h-[120px] relative border-[3px] border-orange_main rounded-full flex items-center justify-center bg-white">
            <img
              src={FBImgAndVideo?.url}
              className=" p-3 lg:w-[120px] lg:h-[120px] w-[100px] h-[100px] rounded-full object-contain"
              alt="Client-Image"
            />
          </div>

          {/* Testimonial */}
          <div className="flex-1 text-center lg:text-left">
            <div className="relative">
              <RiDoubleQuotesL className="text-4xl text-primaryBlue absolute -top-2 -left-3" />
              <p className="H6 text-off_white italic px-6 py-2">
                {ClientQuotes ||
                  "The team delivered exceptional results beyond our expectations."}
              </p>
              <RiDoubleQuotesR className="text-4xl text-primaryBlue absolute -bottom-2 -right-3" />
            </div>

            {/* Client Info */}
            <div className="mt-2">
              <p className="text-primaryBlue H5 font-semibold">
                {ClientName || "Position, Company"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialHandleScreenshort;
