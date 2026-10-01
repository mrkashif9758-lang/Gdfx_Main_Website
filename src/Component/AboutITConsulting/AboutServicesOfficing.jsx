import { MdOutlineArrowOutward } from "react-icons/md";

const SF = [
  {
    bgColor: "#FFF6D4",
    title: "Digital Transformation",
    options: [
      "Customer Relationship Managment",
      "Multi-Channel Commerce",
      "Customer Experience Managment",
      "Digital Marketing",
      "Agile Activity",
      "Innovative Business Model",
    ],
  },
  {
    bgColor: "#D3E5FF",
    title: "Strategy and Architechture",
    options: [
      "Customer Relationship Managment",
      "IT Operations",
      "Technical Architectures",
      "Application Optimization",
      "Infrastructure Optimization",
    ],
  },
  {
    bgColor: "#f7c8f7",
    title: "Enterprise Processes",
    options: [
      "Business Process Optimization",
      "Supply chain and Operations Process",
      "Finance and Controlling Process",
      "HR Process",
    ],
  },
  {
    bgColor: "#FFE8E8",
    title: "Enterprise Application",
    options: [
      "Template Design and Implemantation",
      "Operational Excellence",
      "Technical Services",
      "Implementation",
    ],
  },
  {
    bgColor: "#D1FFD6",
    title: "Insights and analytics",
    options: [
      "Insights and analytics",
      "Master Data Managment",
      "Big Data & Business Analytics",
      "Content Management",
    ],
  },
  {
    bgColor: "#DDC3FF",
    title: "Change and Learning",
    options: ["Tactical Change", "Change Enablement", "Learning"],
  },
];

function AboutServicesOfficing() {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            GDFX
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Service Offerings
            </span>
          </h2>
          <p className="P text-off_white mt-1.5">
            GDFX Consulting Services: Empowering businesses with tailored IT
            strategies, digital transformation solutions, cloud integration, and
            cybersecurity. Optimize operations, enhance efficiency, and achieve
            growth with our expert guidance and innovative technology solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5">
          {SF.map((item, index) => {
            return (
              <div
                key={index}
                className={`p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                style={{
                  backgroundColor: `${item.bgColor}`,
                }}
              >
                <h4 className="H4 font-bold mb-3 text-gray-800">
                  {item.title}
                </h4>

                <ul className="space-y-2">
                  {item.options.map((opt, ind) => {
                    return (
                      <li
                        key={ind}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-blue-600 mt-1">
                          <MdOutlineArrowOutward className="w-5 h-5" />
                        </span>
                        <span className="text-heading_color P font-medium">{opt}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutServicesOfficing;
