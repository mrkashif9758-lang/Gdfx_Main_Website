import React from "react";
import trangle_img from "../../assets/Home/Blog/trangle.webp";
import { Link } from "react-router-dom";
const SubscribeLetter = () => {
  return (
    <div className="customContainer customGradient md:py-10 py-5  relative">
      <div className="max-w-[1100px] mx-auto  flex justify-between items-center gap-2">
        <h2 className="text-white text-sm  xs:text-base  sm:text-start text-center">
        Contact <span className="text-orange_main">" GDFX "</span> for Custom IT Solutions  and Expert Technology Services
        </h2>
        <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
          <button className=" md:px-7 md:py-3 px-10 py-2 bg-[#FF6B00] lg:w-[200px] hover:bg-orange-600 text-white rounded-sm xss:w-auto w-full text-nowrap ">
            Get In Touch
          </button>
        </Link>
      </div>
      <div className="absolute top-5 left-5 xl:block hidden">
        <img src={trangle_img} className="w-[90px]" alt="Get-In-Touch" />
      </div>
    </div>
  );
};

export default SubscribeLetter;
