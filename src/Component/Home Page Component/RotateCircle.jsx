import React from "react";
import gola from "../../assets/Home/WhyChooseUs/gola.svg";
import content_creation from "../../assets/Home/WhyChooseUs/content creation.webp";
import design from "../../assets/Home/WhyChooseUs/design.webp";
import development from "../../assets/Home/WhyChooseUs/development.webp";
import launch from "../../assets/Home/WhyChooseUs/launch.webp";
import maintinance from "../../assets/Home/WhyChooseUs/maintinance.webp";
import planing from "../../assets/Home/WhyChooseUs/planing.webp";
import testing from "../../assets/Home/WhyChooseUs/testing.webp";
import './RotateCircle.css'

function RotateCircle() {
  return (
      <div className="relative w-[500px] h-[600px]  sm:block hidden  sm:top-[-120px] xl:top-[-50px] overflow-hidden">
        {/* <div className="absolute  w-full h-full"> */}
          <div className="w-[80%]  ro360 ">
            <div className=" w-full h-full ">
              <img src={gola} alt="" className="w-full h-full " />
              <img
                src={planing}
                alt="Home-planing"
                className="size-5 xs:size-7 sm:size-24 absolute left-[0%] top-[13%] fb360"
              />
              <img
                src={design}
                alt="Home-design"
                className="size-5 xs:size-7 sm:size-24 absolute top-[-9%] right-[45%] fb360"
              />
              <img
                src={development}
                alt="Home-development"
                className="size-5 xs:size-7 sm:size-24 absolute right-[6%] top-[7%] fb360"
              />
              <img
                src={content_creation}
                alt="Home-content_creation"
                className="size-5 xs:size-7 sm:size-24 absolute right-[-7%] bottom-[37%] fb360"
              />
              <img
                src={testing}
                alt="Home-testing"
                className="size-5 xs:size-7 sm:size-24 absolute right-[10%] bottom-[0%] fb360 "
              />
              <img
                src={launch}
                alt="Home-launch"
                className="size-5 xs:size-7 sm:size-24 absolute left-[23%] bottom-[-5%] fb360"
              />
              <img
                src={maintinance}
                alt="Home-maintinance"
                className="size-5 xs:size-7 sm:size-24 absolute left-[-7%] bottom-[25%] fb360"
              />
            </div>
          {/* </div> */}
        </div>
      </div>
  );
}

export default RotateCircle;
