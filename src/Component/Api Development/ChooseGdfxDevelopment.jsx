import React from "react";
import gdfx_integration from "../../assets/Api Development/gdfx_integration.svg";
const chooseGdfxDevelopmentData = [
  {
    title: "1. Expertise Across Technologies",
    description:
      "Our developers are proficient in creating and integrating APIs across platforms, tools, and technologies, ensuring seamless performance.",
  },
  {
    title: "2. Tailored Solutions",
    description:
      "Every API we develop or integrate is customized to align perfectly with your business objectives and technical requirements.",
  },
  {
    title: "3. Secure and Scalable",
    description:
      "We prioritize security by adhering to best practices in encryption and authentication, while designing APIs that scale effortlessly with your growth.",
  },
  {
    title: "4. Agile Development",
    description:
      "Our agile methodology ensures rapid development and integration, reducing time-to-market while maintaining top-notch quality.",
  },
  {
    title: "5. End-to-End Support",
    description:
      "From consultation to implementation and maintenance, GDFX offers comprehensive support to ensure your APIs remain functional and future-proof.",
  },
];

const ChooseGdfxDevelopment = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Why Choose
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              GDFX for API Development and Integration?
            </span>
          </h2>
        </div>

        <div className="customContainer !my-0 grid lg:grid-cols-2 grid-cols-1 gap-5 lg:items-center !px-0">
          <div className="flex flex-col gap-y-3">
            {chooseGdfxDevelopmentData.map((item, index) => (
              <div key={index} className="">
                <h2 className="H5 font-bold text-white">
                  {item.title}
                </h2>
                <p className="SP text-off_white mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
          <div>
            <img
              src={gdfx_integration}
              className="w-full lg:w-auto"
              alt="Service-API"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseGdfxDevelopment;
