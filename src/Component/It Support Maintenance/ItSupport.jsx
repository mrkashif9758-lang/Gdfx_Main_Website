import React from "react";
import arrow_up from "../../assets/Api Development/arrow_up.svg";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SF = [
  {
    bgColor: "bg-secondaryPurple/70",
    title: "1. Proactive Monitoring and Maintenance",
    description:
      "Regular monitoring of your systems allows us to identify potential issues before they escalate into costly problems, ensuring smooth and uninterrupted business operations.",
    options: [
      "Continuous system and network monitoring.",
      "Detection of performance bottlenecks or security vulnerabilities.",
      "Immediate troubleshooting and issue resolution.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "2. Security Management",
    description:
      "We implement comprehensive security measures to protect your business data from cyber threats and attacks. Our proactive approach ensures your systems are always protected and up-to-date.",
    options: [
      "Antivirus, firewall, and intrusion detection system management.",
      "Regular security audits and vulnerability assessments.",
      "Real-time monitoring for any security breaches or threats.",
      "Implementing patches and updates for security protocols.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "3. Software Updates and Patches",
    description:
      "Stay up-to-date with the latest software versions and patches to keep your systems secure and optimized. Regular updates prevent security breaches and improve functionality.",
    options: [
      "Timely updates for operating systems, applications, and security software.",
      "Bug fixes and performance enhancements.",
      "Ensuring compatibility with new software features.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "4. Hardware Maintenance",
    description:
      "We ensure that all physical IT components are functioning efficiently, minimizing disruptions due to hardware failures.",
    options: [
      "Routine diagnostics and checks on hardware components.",
      "Preventive maintenance for servers, workstations, and peripherals.",
      "Timely hardware upgrades and replacements.",
      "Troubleshooting and repair of faulty hardware.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "5. Data Backup and Recovery",
    description:
      "Data is crucial for any business. Our backup and recovery services ensure that your business-critical data is securely stored and can be recovered quickly in the event of loss.",
    options: [
      "Regular data backups for all essential files and databases.",
      "Automated backup solutions to ensure consistency.",
      "Quick recovery from data loss scenarios.",
      "Disaster recovery planning and execution.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "6. Network Support",
    description:
      "We optimize the performance of your network infrastructure, ensuring high-speed connectivity and minimal downtime. Our network support services enhance communication, collaboration, and business operations.",
    options: [
      "Network setup, configuration, and optimization.",
      "Monitoring network performance and troubleshooting connectivity issues.",
      "Securing and managing network devices such as routers and switches.",
      "VPN setup and management for secure remote access.",
    ],
  },
  {
    bgColor: "bg-primaryBlue/70",
    title: "7. Helpdesk Support",
    description:
      "Our dedicated helpdesk team provides quick resolutions for any IT-related concerns, offering continuous support to your staff. We handle technical issues, troubleshooting, and user inquiries, so you don’t have to.",
    options: [
      "24/7 support for IT-related queries and technical issues.",
      "Remote assistance for troubleshooting and problem-solving.",
      "Quick resolution of hardware or software-related problems.",
      "User training and guidance on IT system usage.",
    ],
  },
  {
    bgColor: "bg-secondaryPurple/70",
    title: "8. Compliance and Risk Management",
    description:
      "We help your business stay compliant with industry regulations and minimize IT-related risks by implementing robust risk management strategies and adhering to necessary standards.",
    options: [
      "Assessing and mitigating IT-related risks.",
      "Ensuring compliance with industry-specific regulations (HIPAA, GDPR, etc.).",
      "Implementing necessary audits and documentation for compliance.",
      "Creating risk management plans and strategies to prevent vulnerabilities.",
    ],
  },
];

function ItSupport() {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              IT Support & Maintenance Services
            </span>
          </h2>
          <p className="P text-mutedGray-c1 leading-relaxed">
            GDFX offers a range of specialized IT support and maintenance
            services to ensure your technology systems are always running
            efficiently, securely, and optimally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {SF.map((item, index) => {
            return (
              <div
                onClick={() => navigate("/contact")}
                key={index}
                className={`p-5 !cursor-pointer ${item.bgColor}`}
              >
                <h4 className="H4 font-bold mb-2 text-white">{item.title}</h4>
                <p className="P text-white/90 mb-2.5">{item.description}</p>

                <ul className="space-y-1.5 flex flex-col">
                  {item.options.map((opt, ind) => (
                    <li
                      key={ind}
                      className="SP text-off_white inline-flex items-start gap-2"
                    >
                      <span className="text-white mt-1 text-lg">
                        <MdArrowOutward />
                      </span>
                      <span>{opt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ItSupport;
