import React from "react";
const choose_seo_data = [
  {
    title: "Expert Team:",
    description:
      "Our SEO professionals are experienced in optimizing websites across industries and staying updated with the latest trends.",
  },
  {
    title: "Tailored Strategies",
    description:
      "No cookie-cutter approaches here. We create personalized SEO plans designed to achieve measurable results.",
  },
  {
    title: "Data-Driven Results",
    description:
      "Transparent reporting and in-depth analytics ensure you stay informed every step of the way.",
  },
];
const Choose_Gdfx_Seo = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Why Choose
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              GDFX for SEO Services?
            </span>
          </h2>
          <p className="P text-off_white mt-1.5">
            At GDFX, we understand that SEO is more than just ranking high on
            Google—it’s about connecting with your target audience and turning
            visitors into loyal customers. Here’s why businesses trust us:
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5">
          {choose_seo_data.map((item, index) => (
            <div
              className="border border-gray-700 p-5 rounded bg-dark-gradient-br hover:border-primaryBlue/50 hover:shadow-xl hover:shadow-primaryBlue/30 duration-500 transition-all"
              key={index}
            >
              <h2 className="H4 font-bold text-white mb-2">
                {item.title}
              </h2>
              <p className="P text-off_white">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose_Gdfx_Seo;
