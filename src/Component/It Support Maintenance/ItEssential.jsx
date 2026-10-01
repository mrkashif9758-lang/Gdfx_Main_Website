import React from "react";

import { 
  FaShieldAlt, 
  FaTachometerAlt, 
  FaMoneyBillWave, 
  FaClock,
  FaBusinessTime,
  FaPlug 
} from "react-icons/fa";

const ItEssentialData = [
  {
    icon: <FaPlug className="text-2xl text-primaryBlue" />,
    title: "Reduced Downtime",
    description: "Prevent disruptions with real-time monitoring and prompt resolution of technical issues.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-primaryBlue" />,
    title: "Enhanced Security",
    description: "Protect your systems with advanced security measures, including firewalls, antivirus, and regular vulnerability assessments.",
  },
  {
    icon: <FaTachometerAlt className="text-2xl text-primaryBlue" />,
    title: "Optimized Performance",
    description: "Ensure your systems run smoothly with routine maintenance and updates for software and hardware.",
  },
  {
    icon: <FaMoneyBillWave className="text-2xl text-primaryBlue" />,
    title: "Cost-Effective Operations",
    description: "Save costs by avoiding expensive repairs and downtime-related revenue losses.",
  },
  {
    icon: <FaClock className="text-2xl text-primaryBlue" />,
    title: "24/7 Support",
    description: "Get round-the-clock assistance for any IT concerns, ensuring uninterrupted operations.",
  },
  {
    icon: <FaBusinessTime className="text-2xl text-primaryBlue" />,
    title: "Business Continuity",
    description: "Reliable IT systems ensure consistent operations, even during unforeseen disruptions.",
  },
];

const ItEssential = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            About Our IT Support & 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}Maintenance Services
            </span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed">
            At GDFX, we understand that reliable IT infrastructure is the backbone
            of any successful business. Our comprehensive IT support and maintenance
            services ensure your systems run efficiently, securely, and without
            interruptions.
          </p>
        </div>

        <div className="flex flex-col gap-10 items-center">
      

          <div className="w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
              {ItEssentialData.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded border border-gray-700 bg-dark-gradient-br hover:border-primaryBlue hover:shadow-primaryBlue/30 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex xs:flex-row flex-col items-start gap-4">
                    <div className="p-3 bg-primaryBlue/10 rounded-lg group-hover:bg-primaryBlue/20 transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="H4 text-white font-bold mb-2.5">{item.title}</h3>
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

export default ItEssential;