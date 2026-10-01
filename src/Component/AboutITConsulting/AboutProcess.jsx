import {
  FaSearch,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaTrophy,
} from "react-icons/fa";

const AboutProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: FaSearch,
      title: "Discovery & Consultation",
      description:
        "Understand your business goals, challenges, and current IT setup through in-depth consultation and assessment.",
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      borderColor: "border-blue-500",
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Planning & Strategy",
      description:
        "We create a tailored roadmap and plan to achieve your objectives using the right technologies.",
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      borderColor: "border-purple-500",
    },
    {
      id: 3,
      icon: FaCogs,
      title: "Implementation",
      description:
        "Deploying the chosen solution with a focus on performance, scalability, and security.",
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      borderColor: "border-orange-500",
    },
    {
      id: 4,
      icon: FaChartLine,
      title: "Optimization & Support",
      description:
        "Continuous support, ensuring the system works smoothly and efficiently as your needs evolve.",
      color: "bg-green-500",
      lightColor: "bg-green-50",
      borderColor: "border-green-500",
    },
    {
      id: 5,
      icon: FaTrophy,
      title: "Success & Impact",
      description:
        "Measuring the success of the project and its impact on your business growth.",
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      borderColor: "border-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Our Process:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              From Insight to Impact
            </span>
          </h2>
          <p className="P text-off_white mt-1.5">
            At GDFX, we follow a structured yet flexible process designed to
            turn your business challenges into growth opportunities. From the
            initial discovery phase to strategic planning, seamless
            implementation, and ongoing optimization — every step is focused on
            delivering measurable impact and lasting value.
          </p>
        </div>

        <div className="hidden xl:block">
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary-gradient transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-5 gap-5 relative z-10">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.id}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className={`size-14 ${step.lightColor} ${step.borderColor} border-2 rounded-full flex items-center justify-center mb-6 transition-all duration-300  group-hover:shadow-lg bg-white`}
                    >
                      <IconComponent
                        className={`size-5 text-${step.borderColor.replace(
                          "border-",
                          ""
                        )} group-hover:text-${step.color.replace(
                          "bg-",
                          ""
                        )} transition-colors duration-300`}
                      />
                    </div>

                    <div
                      className={`w-8 h-8 ${step.color} rounded-full flex items-center justify-center mb-4 text-white SP font-bold shadow-md`}
                    >
                      {step.id}
                    </div>

                    <div
                      className={`bg-dark-gradient-br border min-h-52 ${
                        step.borderColor
                      } rounded p-5 text-center transition-all duration-300`}
                    >
                      <h3 className="H6 font-bold text-white">{step.title}</h3>
                      <p className="SP text-off_white mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="xl:hidden">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            const isLast = index === processSteps.length - 1;

            return (
              <div key={step.id} className="relative">
                <div className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div
                      className={`size-10 ${step.lightColor} ${step.borderColor} border rounded-full flex items-center justify-center shadow-md bg-white`}
                    >
                      <IconComponent
                        className={`size-4 text-${step.borderColor.replace(
                          "border-",
                          ""
                        )}`}
                      />
                    </div>
                    {!isLast && (
                      <div className="w-0.5 h-16 bg-primary-gradient my-2"></div>
                    )}
                  </div>

                  <div
                    className={`bg-dark-gradient-br border ${step.borderColor} rounded p-2.5 mb-3 flex-1`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 ${step.color} rounded-full flex items-center justify-center text-white text-xs font-bold mr-3 shadow-sm`}
                      >
                        {step.id}
                      </div>
                    </div>
                    <div
                      className={`mt-2 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1`}
                    >
                      <h3 className="H6 font-bold text-white">{step.title}</h3>
                      <p className="SP text-off_white mt-2">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutProcess;
