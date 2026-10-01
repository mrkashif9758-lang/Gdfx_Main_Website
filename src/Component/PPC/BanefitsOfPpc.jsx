import React from "react";
import {
  FaBolt,
  FaBullseye,
  FaChartLine,
  FaMoneyBillWave,
  FaSearch,
  FaUsers,
  FaCog,
  FaChartBar,
} from "react-icons/fa";

const benefitsPpc = [
  {
    icon: <FaBolt className="w-6 h-6 text-white" />,
    title: "Instant Results",
    description:
      "Unlike organic strategies, PPC drives immediate traffic to your site from day one.",
    color: "from-yellow-400 to-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: <FaBullseye className="w-6 h-6 text-white" />,
    title: "High-Quality Leads",
    description:
      "Target specific demographics, locations, and behaviors to attract ready-to-convert customers.",
    color: "from-blue-400 to-indigo-500",
    bg: "bg-blue-50",
  },
  {
    icon: <FaMoneyBillWave className="w-6 h-6 text-white" />,
    title: "Flexible Budgets",
    description:
      "Set daily or monthly budgets that work for your business, with the ability to scale as you grow.",
    color: "from-green-400 to-teal-500",
    bg: "bg-green-50",
  },
  {
    icon: <FaUsers className="w-6 h-6 text-white" />,
    title: "Enhanced Brand Awareness",
    description:
      "Appear at the top of search results and in front of your ideal audience consistently.",
    color: "from-purple-400 to-violet-500",
    bg: "bg-purple-50",
  },
];

const ppcProcess = [
  {
    icon: <FaSearch className="w-6 h-6 text-indigo-500" />,
    title: "Research & Strategy",
    description:
      "We analyze your industry, competitors, and audience to craft a winning PPC plan.",
    step: "01",
  },
  {
    icon: <FaCog className="w-6 h-6 text-pink-500" />,
    title: "Campaign Setup",
    description:
      "Create ad groups, keywords, and compelling ad copy to launch your campaign effectively.",
    step: "02",
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-amber-500" />,
    title: "Ongoing Optimization",
    description:
      "Continuously monitor and tweak campaigns for better performance and lower CPC.",
    step: "03",
  },
  {
    icon: <FaChartBar className="w-6 h-6 text-teal-500" />,
    title: "Performance Analysis",
    description:
      "Deliver transparent reports with actionable insights to refine future strategies.",
    step: "04",
  },
];

const BanefitsOfPpc = () => {
  return (
    <>
      <section className="py-20 bg-bgFirstBlue">
        <div className="customContainer !my-0">
          <div>
            <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
              The Benefits of Choosing
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}GDFX PPC Services
              </span>
            </h2>

            <p className="P text-off_white mt-1.5 mb-10 text-center">
              Maximize your advertising ROI with our data-driven PPC strategies
              that deliver measurable results.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefitsPpc.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} rounded p-5 shadow-sm hover:shadow-lg hover:shadow-white/50`}
                >
                  <div
                    className={`size-10 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="H5 font-bold text-black mb-2">{item.title}</h3>
                  <p className="P text-heading_color">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bgFirstBlue">
        <div className="customContainer !my-0">
          <div>
            <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
              Our Proven
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
                {" "}PPC Process
              </span>
            </h2>

            <p className="P text-off_white mt-1.5 mb-10 text-center">
              A systematic approach to PPC management that delivers consistent
              growth and performance.
            </p>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {ppcProcess.map((item, index) => (
                  <div
                    key={index}
                    className="relative lg:flex items-start duration-500 transition-all border border-gray-700 rounded p-2.5 bg-dark-gradient-br hover:border-primaryBlue hover:shadow-xl hover:shadow-primaryBlue/30"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center size-10 rounded-md bg-white shadow-md border border-gray-100">
                        {item.icon}
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-4">
                      <span className="SP font-semibold text-primaryBlue uppercase">
                        Step {item.step}
                      </span>
                      <h3 className="H5 font-bold text-white mt-1">
                        {item.title}
                      </h3>
                      <p className="mt-1 SP text-off_white">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default BanefitsOfPpc;