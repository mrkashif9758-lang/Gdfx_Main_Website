import React from "react";
import keyword from "../../assets/Digital Transformation Service/keyword.svg";
import SquareButtonBgTransparent from "../Common/SquareButtonBgTransparent";
const Keyword_Header = () => {
  return (
    <div className="sm:h-[500px] h-auto customGradient ">
      <div className="customContainer h-full sm:py-[100px] py-[90px] flex md:flex-row flex-col gap-4 md:justify-between md:items-center lg:pt-[150px] !mb-0">
        <div className="md:basis-[60%] basis-full ">
          <h2
            className="headerHeading text-white  sm:mb-4 mb-2"
          >
            "Comprehensive Keyword Research for Every Business Niche"
          </h2>
          <p className="cardHeading text-white mb-3">
            Whether local or global, we identify profitable keywords tailored to
            your specific business goals and audience.
          </p>
          <SquareButtonBgTransparent
            link={"/contact"}
            title={"Let’s connect"}
          />
        </div>
        <div className="md:basis-[40%] basis-full md:flex justify-end">
          <img src={keyword} draggable={false} className="h-full " alt="service-Digital-keyword" />
        </div>
      </div>
    </div>
  );
};

export default Keyword_Header;
