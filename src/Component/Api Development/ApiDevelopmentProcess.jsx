import React from "react";
import { motion } from "framer-motion";

const apiDevelopmentProcess = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We begin by understanding your business needs, technical environment, and integration goals to craft a clear project roadmap.",
  },
  {
    step: "02",
    title: "API Design",
    description:
      "Our team designs APIs with a focus on usability, scalability, and security, ensuring optimal performance.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Using the latest tools and technologies, we build robust APIs that align with your objectives.",
  },
  {
    step: "04",
    title: "Integration",
    description:
      "Seamlessly integrate APIs into your systems or with third-party applications, ensuring smooth data flow and functionality.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Conduct rigorous testing to ensure the APIs perform reliably under various conditions, addressing issues promptly.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    description:
      "Launch the APIs with minimal disruption to your operations, backed by ongoing monitoring and maintenance.",
  },
];

const ApiDevelopmentProcess = () => {
  return (
    <section className="py-20 bg-white overflow-hidden" aria-labelledby="process-heading">
      <div className="customContainer !my-0 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* SEO Optimized Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest uppercase text-primaryBlue bg-primaryBlue/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Workflow & Methodology
          </motion.span>
          <motion.h2
            id="process-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold capitalize text-gray-900 leading-tight"
          >
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              API Development Process
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mt-3 text-sm sm:text-base max-w-xl mx-auto"
          >
            A step-by-step framework engineered for seamless integration, high security, and performance.
          </motion.p>
        </div>

        {/* Process Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {apiDevelopmentProcess.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Glowing / Gradient Border Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primaryBlue to-secondaryPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                <div>
                  {/* Step Number & Flow Indicator */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-extrabold tracking-widest text-primaryBlue bg-primaryBlue/10 px-3 py-1 rounded-full">
                      STEP {item.step}
                    </span>
                    <span className="text-xs font-bold text-gray-300 group-hover:text-secondaryPurple transition-colors duration-300">
                      0{index + 1} / 06
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primaryBlue transition-colors duration-200">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Line Sequence Marker */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-gray-400 group-hover:text-secondaryPurple transition-colors">
                  <span>Phase Process</span>
                  <span>→</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApiDevelopmentProcess;