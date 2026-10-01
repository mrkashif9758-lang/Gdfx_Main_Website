import React from "react";
const strategy_Development_Approach = [
  {
    bgColor: "#f9d6ff",
    title: "Customized SEO Strategies",
    description: "We design strategies tailored to your niche and goals.",
  },
  {
    bgColor: "#ffd6b2",
    title: "Content Optimization",
    description:
      "Get content that seamlessly integrates target keywords, enhancing user engagement and search engine ranking.",
  },
  {
    bgColor:'#ffd4d4',
    title: "Performance Tracking",
    description:
      "Our team monitors and adjusts strategies using real-time analytics to ensure continuous improvement.",
  },
];
const Keyword_Research_Services = [
  {
    bgColor: "rgba(242, 245, 255, 1)",
    title: "Expert Team",
    description:
      " Our SEO specialists bring years of experience to deliver top-notch results.",
  },
  {
    bgColor: "rgba(255, 248, 242, 1)",
    title: "Data-Driven Insights",
    description:
      " We leverage cutting-edge tools and analytics for precise keyword recommendations.",
  },
  {
    bgColor: "rgba(242, 245, 255, 1)",
    title: "Proven Results",
    description:
      "From small businesses to enterprises, we’ve helped clients achieve measurable growth.",
  },
  {
    bgColor: "rgba(255, 248, 242, 1)",
    title: "Affordable Packages",
    description: "Get premium services at competitive rates.",
  },
];
const Keyword_Research_Service = () => {
  return (
    <div className="customContainer">
      <div className="mb-7">
        <h2 className="mainHeading  mb-5 lg:text-center  text-left text-heading_color ">
          Our Full Range of SEO Services at GDFX
        </h2>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
          {strategy_Development_Approach.map((item, index) => (
            <div style={{
              backgroundColor: `${item.bgColor}`,
            }}
              className=" border  sm:py-3 py-2 sm:px-4 px-2 shadow-lg"
              key={index}
            >
              <h2 className="cardHeading text-heading_color  xs:mb-2 mb-1">
                {item.title}
              </h2>
              <p className="text-text_color text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-7">
        <h2 className="mainHeading  mb-5 lg:text-center  text-left text-heading_color ">
          Why Choose GDFX for Keyword Research Services?
        </h2>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {Keyword_Research_Services.map((item, index) => (
            <div style={{
              backgroundColor: `${item.bgColor}`,
            }}
              className="sm:py-3 py-2 sm:px-4 px-2 shadow-lg"
              key={index}
            >
              <h2 className="cardHeading text-heading_color  xs:mb-2 mb-1">
                {item.title}
              </h2>
              <p className="text-text_color text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Keyword_Research_Service;
