import React from "react";
import img_1 from "../../assets/PPC/1.svg";
import img_2 from "../../assets/PPC/2.svg";
import img_3 from "../../assets/PPC/3.svg";
import img_4 from "../../assets/PPC/4.svg";
import img_5 from "../../assets/PPC/5.svg";
const Keyword_Research_Data = [
  {
    bgColor: "#f9d6ff",
    title: "Understanding Your Business Goals",
    img: img_1,
    description:
      "We begin by analyzing your business, target audience, and competitors to align our strategy with your objectives.",
  },
  {
    bgColor: "#ffd6b2",
    title: "Comprehensive Keyword Analysis",
    img: img_2,
    description:
      "Using advanced tools like SEMrush, Ahrefs, and Google Keyword Planner, we discover high-traffic, low-competition keywords that boost your online presence.",
  },
  {
    bgColor: "#e2ffd6",
    title: "Competitor Keyword Analysis",
    img: img_3,
    description:
      "Gain insights into what’s working for your competitors and identify opportunities to outperform them.",
  },
  {
    bgColor: "#ffd4d4",
    title: "Search Intent Mapping",
    img: img_4,
    description:
      "We categorize keywords based on user intent—informational, navigational, transactional—ensuring your content meets audience needs.",
  },
  {
    bgColor: "rgba(242, 245, 255, 1)",
    title: "Long-Tail Keyword Targeting",
    img: img_5,
    description:
      "Long-tail keywords like “best SEO keyword research services for small businesses” help you connect with highly specific search queries, driving qualified leads.",
  },
];
const Keyword_Research = () => {
  return (
    <div className="customContainer">
      <h2 className="mainHeading text-center   text-heading_color md:mb-8 mb-3">
      Our Keyword Research Process
      </h2>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {Keyword_Research_Data.map((item, index) => (
          <div
           style={{
            backgroundColor: `${item.bgColor}`,
          }}
            key={index}
            className=" sm:px-4 px-2 sm:py-5 py-2  rounded-lg relative"
          >
            <div className="absolute top-4 left-[-3px]">
              <img
                src={`Service-Keyword-Research-Process${item.img}`}
                className="lg:h-auto lg:w-[30px] w-[25px] "
                alt=""
              />
            </div>
            <h2 className="cardHeading mb-5 text-heading_color">
              {item.title}
            </h2>
            <p className="text-text_color text text-justify">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keyword_Research;
