import React from "react";
import { FaCheckCircle, FaCogs, FaChartPie, FaClipboardList } from "react-icons/fa";

const gdfxAdvertisement = [
  {
    icon: <FaCheckCircle className="text-white text-2xl" />,
    title: "Expert Campaign Management",
    description:
      "Our PPC specialists have extensive experience managing successful campaigns across various platforms, including Google Ads, Bing Ads, and social media networks.",
  },
  {
    icon: <FaCogs className="text-white text-2xl" />,
    title: "Customized Strategies",
    description:
      "We tailor our PPC strategies to align with your business goals, industry trends, and target audience.",
  },
  {
    icon: <FaChartPie className="text-white text-2xl" />,
    title: "Data-Driven Insights",
    description:
      "Using advanced analytics, we continuously monitor and optimize your campaigns to ensure maximum ROI.",
  },
  {
    icon: <FaClipboardList className="text-white text-2xl" />,
    title: "Transparent Reporting",
    description:
      "Stay informed with detailed performance reports and insights on every campaign.",
  },
];

const ChooseGdfxAdvertisement = () => {
  return (
  <section className="py-20 bg-bgFirstBlue">
        <div className="customContainer !my-0">
        <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            GDFX for PPC Advertising?
          </span>
        </h2>
        <p className="P text-off_white mt-1.5 mb-10 text-center">
          Your PPC success is our priority. Here's why clients trust GDFX to deliver real ROI.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gdfxAdvertisement.map((item, index) => (
            <div
              key={index}
              className="bg-navy-bottom-gradient border border-gray-700 hover:border-secondaryPurple backdrop-blur-xl rounded p-5 hover:-translate-y-1 transition-all duration-300 group hover:shadow-xl hover:shadow-secondaryPurple/30"
            >
              <div className="size-12 mb-4 flex items-center justify-center rounded-full bg-danger-gradient group-hover:scale-105 transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="H5 font-bold text-white mb-2 leading-[1.3]">{item.title}</h3>
              <p className="P text-off_white line-clamp-4">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseGdfxAdvertisement;
