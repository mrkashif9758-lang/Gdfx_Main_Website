import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
const Ui_Ux_talk = ({ title, img }) => {
  return (
    <section
      className=" min-h-[300px] flex items-center mb-[40px]"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        //   backgroundPosition:'top right'
      }}
    >
      <div className="px-3 sm:px-5 lg:px-8 2xl:px-12 ">
        <h4 className="mainHeading text-white">{title}</h4>
        <Link to={'/contact'}>
          <button className="text-lg px-7 py-3 rounded-md text-white border mt-5 border-[#fff] inline-flex items-center gap-1.5 group transition duration-300  hover:border-orange_main  hover:bg-text_primary ">
            Contact Us Today
            <GoArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Ui_Ux_talk;
