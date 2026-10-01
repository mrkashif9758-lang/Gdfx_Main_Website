import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SF = [
  {
    bgColor: "bg-primaryBlue/70",
    title: "Custom API Development",
    description:
      "Every business has unique requirements, and off-the-shelf solutions often fall short. At GDFX, we create custom APIs that align perfectly with your processes and systems.",
    options: [
      "Seamless Interconnectivity: Our APIs enable different systems, applications, or platforms to communicate and exchange data effortlessly.",
      "Scalable Architecture: Designed to grow with your business, our APIs handle increasing data and functionality demands without compromising performance.",
      "Secure Solutions: We prioritize robust authentication and encryption protocols to safeguard your data during communication.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "Third-Party API Integration",
    description:
      "Incorporate powerful third-party tools into your existing systems to enhance efficiency and expand capabilities.",
    options: [
      "Payment Gateway Integration: Simplify transactions with platforms like PayPal, Stripe, and Razorpay.",
      "CRM and ERP Integration: Optimize operations by connecting Salesforce, HubSpot, SAP, or other enterprise tools.",
      "Social Media Integration: Enhance marketing efforts with APIs for Facebook, Twitter, Instagram, and LinkedIn.",
      "E-Commerce Enablement: Streamline inventory, order tracking, and logistics with APIs from Amazon, Shopify, or eBay.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "API Modernization",
    description:
      "Outdated APIs can slow down operations and pose security risks. We modernize existing APIs to improve compatibility, performance, and security.",
    options: [
      "Optimization: Enhance speed, reliability, and functionality.",
      "Upgraded Security: Implement modern authentication and encryption protocols.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "RESTful and SOAP APIs",
    description:
      "Our team excels in creating APIs based on industry standards, ensuring compatibility and performance.",
    options: [
      "RESTful APIs: Lightweight, scalable, and ideal for modern web and mobile applications.",
      "SOAP APIs: Robust, highly secure, and suitable for enterprise-level integrations that demand reliability.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "API Testing and Maintenance",
    description:
      "Ensure flawless operation with comprehensive testing and ongoing support.",
    options: [
      "Functional Testing: Validate API performance under various conditions.",
      "Load Testing: Ensure APIs handle high-traffic scenarios efficiently.",
      "Continuous Monitoring: Proactively identify and resolve potential issues.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "Advanced Integrations",
    description:
      "Embrace emerging technologies with our specialized API services.",
    options: [
      "IoT Integrations: Connect devices for smarter operations and real-time data analytics.",
      "AI and Machine Learning APIs: Enhance decision-making with advanced predictive models and automation tools.",
      "Blockchain APIs: Enable secure, transparent transactions with distributed ledger technology.",
    ],
  },
];

function ApiDevelopmentIntegration() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              API Development & Integration Services
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2  gap-5">
          {SF.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate("/contact")}
                className={`p-5  ${item.bgColor} !cursor-pointer`}
              >
                <h4 className="H4 font-bold text-white mb-2">{item.title}</h4>
                <p className="P text-white/90 mb-2.5">{item.description}</p>

                <ul className="space-y-1.5 flex flex-col">
                  {item.options.map((opt, ind) => {
                    return (
                      <li
                        key={ind}
                        className="SP text-off_white inline-flex items-start gap-2"
                      >
                        <span className="text-white mt-1 text-lg">
                          <MdArrowOutward />
                        </span>
                        <span>{opt}</span>
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

export default ApiDevelopmentIntegration;
