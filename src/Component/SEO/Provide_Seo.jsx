import React from "react";
import Seo_Slider from "./Seo_Slider";

const Provide_Seo = () => {
  return (
    <div className="mb-[50px]">
      <div className="customContainer !mb-5">
        <div className="">
          <h2 className=" mainHeading md:text-center text-left  mb-3  text-heading_color ">
            GDFX provides SEO services for a wide range of industries,
            including:
          </h2>
          <p className="text-text_color text mb-2 md:text-center text-left">
            GDFX offers expert SEO services for industries including technology,
            e-commerce, healthcare, real estate, education, finance, and
            hospitality, ensuring tailored strategies for maximum online
            visibility and growth.
          </p>
        </div>
      </div>
      <div className="py-5" style={{backgroundColor:'rgba(108, 164, 249, 1)'}}>
        <Seo_Slider/>
      </div>
    </div>
  );
};

export default Provide_Seo;
