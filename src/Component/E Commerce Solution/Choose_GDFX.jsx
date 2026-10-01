import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdSettings,
  MdCode,
  MdDesignServices,
  MdExtension,
  MdTrendingUp,
  MdIntegrationInstructions,
  MdSecurity,
  MdSupportAgent,
  MdVerified,
  MdBarChart,
  MdKeyboardArrowDown,
} from "react-icons/md";

const chooseData = [
  {
    id: 1,
    title: "Tailored Solutions for Your Business",
    description:
      "We understand that every business is unique, and our eCommerce solutions are customized to meet your specific goals. Whether you're looking for a B2B, B2C, or multi-vendor platform, GDFX designs solutions that align with your vision and growth strategies.",
    icon: <MdSettings className="text-3xl" />,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    title: "Expertise in eCommerce Development",
    description:
      "GDFX has a team of experienced professionals skilled in building high-performing, scalable eCommerce platforms. From complex integrations to intuitive UI/UX design, we have the expertise to bring your ideas to life with cutting-edge technologies.",
    icon: <MdCode className="text-3xl" />,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    id: 3,
    title: "User-Centric Design",
    description:
      "We prioritize creating seamless and engaging user experiences. Our responsive, mobile-friendly designs ensure that customers can shop easily across all devices, boosting customer satisfaction and increasing conversions.",
    icon: <MdDesignServices className="text-3xl" />,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    title: "Comprehensive Functionality",
    description:
      "Our eCommerce solutions come with robust features like secure payment gateways, inventory management, CRM integration, and advanced analytics. This ensures that your platform operates smoothly and efficiently while giving you the tools to manage and grow your business.",
    icon: <MdExtension className="text-3xl" />,
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-50 to-red-50",
  },
  {
    id: 5,
    title: "Scalability & Flexibility",
    description:
      "As your business grows, so should your eCommerce platform. GDFX designs scalable systems that can handle increased traffic, products, and transactions without compromising performance, allowing your platform to evolve alongside your business.",
    icon: <MdTrendingUp className="text-3xl" />,
    gradient: "from-indigo-500 to-purple-500",
    bgGradient: "from-indigo-50 to-purple-50",
  },
  {
    id: 6,
    title: "Seamless Integrations",
    description:
      "We integrate a wide range of third-party tools and services such as payment gateways, shipping providers, CRM, ERP systems, and more. This streamlines your operations and ensures your platform works harmoniously with other business systems.",
    icon: <MdIntegrationInstructions className="text-3xl" />,
    gradient: "from-teal-500 to-green-500",
    bgGradient: "from-teal-50 to-green-50",
  },
  {
    id: 7,
    title: "Focus on Security",
    description:
      "At GDFX, security is a top priority. We implement robust security measures to protect customer data, secure transactions, and prevent vulnerabilities. With us, your platform and your customers can feel safe at all times.",
    icon: <MdSecurity className="text-3xl" />,
    gradient: "from-red-500 to-pink-500",
    bgGradient: "from-red-50 to-pink-50",
  },
  {
    id: 8,
    title: "Continuous Support & Maintenance",
    description:
      "Our partnership doesn't end after the platform is launched. We provide ongoing support, maintenance, and updates to ensure that your site runs smoothly and remains up-to-date with the latest technologies and market trends.",
    icon: <MdSupportAgent className="text-3xl" />,
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
  },
  {
    id: 9,
    title: "Proven Track Record",
    description:
      "GDFX has a strong track record of delivering successful eCommerce solutions across various industries. Our portfolio demonstrates our ability to create powerful, user-friendly platforms that drive sales and enhance brand visibility.",
    icon: <MdVerified className="text-3xl" />,
    gradient: "from-cyan-500 to-blue-500",
    bgGradient: "from-cyan-50 to-blue-50",
  },
  {
    id: 10,
    title: "Results-Driven Approach",
    description:
      "We focus on delivering measurable results. From improving site performance and customer experience to optimizing for search engines, our solutions are designed to help you achieve long-term success and a solid return on investment.",
    icon: <MdBarChart className="text-3xl" />,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Choose_GDFX = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Why
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Choose GDFX For e-Commerce
            </span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed">
            Choosing GDFX for your eCommerce platform comes with a range of
            benefits that ensure your online business thrives
          </p>
        </div>

        {/* Accordion / Hover Reveal List Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {chooseData.map((item, index) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group cursor-pointer"
              >
                <div
                  className={`bg-gradient-to-r ${item.bgGradient} rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 backdrop-blur-sm ${
                    isHovered ? "scale-[1.01] ring-2 ring-primaryBlue/30" : ""
                  }`}
                >
                  <div className="flex sm:flex-row flex-col items-start sm:items-center justify-between gap-6">
                    
                    {/* Left: Icon, Index & Title */}
                    <div className="flex sm:flex-row flex-col items-start sm:items-center gap-5 flex-grow">
                      <motion.div
                        className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}
                      >
                        {item.icon}
                      </motion.div>

                      <div>
                        <h3 className="H5 font-bold text-black transition-colors duration-300 sm:text-2xl text-xl leading-snug">
                          {index + 1}. {item.title.replace(/^\d+\.\s*/, "")}
                        </h3>
                      </div>
                    </div>

                    {/* Right Arrow/Indicator */}
                    <div className={`w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black shrink-0 transition-transform duration-300 ${isHovered ? "rotate-180 bg-black/10" : ""}`}>
                      <MdKeyboardArrowDown className="text-2xl" />
                    </div>

                  </div>

                  {/* Expandable Description Section on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                      >
                        <div className="pt-5 mt-5 border-t border-black/10">
                          <p className="P text-heading_color leading-relaxed max-w-4xl text-base sm:text-lg">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Choose_GDFX;