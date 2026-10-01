import React from "react";

function GdfxMarkiting({ title, GDFXForCRO }) {
  return (
    <section className="customContainer">
      <h2 className="text-xl sm:text-2xl font-semibold text-center">{title}</h2>

      <div className="md:py-14 py-5 max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-12 relative divide-y-reverse divide-y-2 divide-black sm:divide-y-0 ">
        <div className="hidden sm:block absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 border border-black"></div>
        <div className="hidden sm:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  h-[92%] border border-black"></div>
        {GDFXForCRO.map(({ heading, paragraph, shadowClass }, ind) => {
          return (
            <div key={ind} className="pb-4 sm:pb-0 grid ">
              <div
                className={`customGradient text-[#D9D9D9] p-[18px] text-center min-h-[200px]  sm:min-h-[250px] lg:min-h-[200px]  ${shadowClass}`}
              >
                <h4 className="cardHeading text-white">{heading}</h4>
                <p className="text text-white mt-2.5 ">{paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GdfxMarkiting;
