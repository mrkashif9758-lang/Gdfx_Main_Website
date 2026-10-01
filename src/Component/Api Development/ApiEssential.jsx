
import React from "react";
import api_essential from "../../assets/Api Development/api_essential.svg";
import { FaExchangeAlt, FaExpandArrowsAlt, FaUserCog } from "react-icons/fa";
import {
  FaCoins,
  FaFulcrum,
  FaLightbulb,
  FaRobot,
  FaRocket,
} from "react-icons/fa6";

const ApiEssentialData = [
  {
    icon: <FaExchangeAlt className="text-2xl text-primaryBlue" />,
    title: "Seamless Data Exchange",
    description:
      "APIs enable real-time sharing of information between applications, ensuring smooth workflows and accurate data synchronization.",
  },
  {
    icon: <FaCoins className="text-2xl text-primaryBlue" />,
    title: "Cost-Effective Operations",
    description:
      "By automating tasks and connecting systems, APIs help save time and resources, minimizing operational costs.",
  },
  {
    icon: <FaRobot className="text-2xl text-primaryBlue" />,
    title: "Improved Efficiency",
    description:
      "Automate repetitive tasks and streamline processes, reducing manual intervention and operational inefficiencies.",
  },
  {
    icon: <FaRocket className="text-2xl text-primaryBlue" />,
    title: "Faster Time-to-Market",
    description:
      "APIs facilitate the rapid development and deployment of new applications by reusing existing components and services.",
  },
  {
    icon: <FaUserCog className="text-2xl text-primaryBlue" />,
    title: "Enhanced User Experience",
    description:
      "Deliver consistent and faster interactions across platforms, providing customers with a unified and personalized experience.",
  },
  {
    icon: <FaLightbulb className="text-2xl text-primaryBlue" />,
    title: "Support for Innovation",
    description:
      "Enable integration with emerging technologies like IoT, AI, and blockchain, driving innovation and staying competitive in the market.",
  },
  {
    icon: <FaExpandArrowsAlt className="text-2xl text-primaryBlue" />,
    title: "Scalability and Flexibility",
    description:
      "APIs allow businesses to integrate new features, tools, or services without overhauling existing systems, ensuring adaptability to growth.",
  },
  {
    icon: <FaFulcrum className="text-2xl text-primaryBlue" />,
    title: "Future-Proofing Your Business",
    description:
      "APIs provide the foundation for ongoing adaptability, ensuring your systems can evolve with technological advancements.",
  },
];

const ApiEssential = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            What Are APIs and Why Are
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              They Essential?
            </span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed ">
            APIs (Application Programming Interfaces) act as bridges that allow
            different software applications to interact and share data. Whether
            integrating a payment gateway into your e-commerce site or
            connecting your CRM to an email marketing platform, APIs are the
            backbone of seamless digital operations.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
          {/* <div className="md:w-1/2 w-full">
            <div className="relative p-5  bg-white/10  backdrop-blur-sm rounded-2xl border border-gray-500">
              <img
                src={api_essential}
                className="w-full h-[300px] object-contain"
                alt="API Essentials"
              />
              <div className="absolute -inset-2 rounded-2xl bg-dark-gradient-br -z-10 blur-md"></div>
            </div>
          </div> */}

          <div className=" w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {ApiEssentialData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded border border-gray-700 bg-dark-gradient-br hover:border-primaryBlue hover:shadow-primaryBlue/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex xs:flex-row flex-col items-start gap-4">
                    <div className="p-3 bg-primaryBlue/10 rounded-lg group-hover:bg-primaryBlue/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="H4 text-white font-bold mb-2.5">
                        {item.title}
                      </h3>
                      <p className="P text-off_white">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiEssential;
