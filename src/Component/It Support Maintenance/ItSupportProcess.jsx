const ItSupportProcessData = [
  {
    bgColor: "bg-primaryBlue/60",
    title: "Assessment and Planning",
    description:
      "Analyze your IT infrastructure and create a tailored maintenance plan to address your specific business requirements effectively.",
  },
  {
    bgColor: "bg-secondaryPurple/50",
    title: "Proactive Monitoring",
    description:
      "Continuously monitor systems to detect and prevent potential issues, ensuring uninterrupted performance and reliability.",
  },
  {
    bgColor: "bg-secondaryPurple/50",
    title: "Regular Updates and Maintenance",
    description:
      "Perform scheduled updates, patches, and maintenance to keep your systems secure, optimized, and compliant.",
  },
  {
    bgColor: "bg-primaryBlue/60",
    title: "Issue Resolution",
    description:
      "Address and resolve technical issues promptly through expert troubleshooting and support to minimize downtime.",
  },
  {
    bgColor: "bg-primaryBlue/60",
    title: "Performance Optimization",
    description:
      "Enhance system performance with fine-tuning, resource allocation, and capacity management for smooth operations.",
  },
  {
    bgColor: "bg-secondaryPurple/50",
    title: "Reporting and Feedback",
    description:
      "Provide detailed reports on system health and gather feedback to refine processes and improve future IT support services.",
  },
];

const ItSupportProcess = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Process for IT Support and Maintenance
            </span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-5">
          {ItSupportProcessData.map((item, index) => {
            return (
              <div key={index} className={`px-3 py-4 ${item?.bgColor}`}>
                <h2 className="H4 font-bold text-white mb-2">{item.title}</h2>
                <p className="P text-white">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ItSupportProcess;
