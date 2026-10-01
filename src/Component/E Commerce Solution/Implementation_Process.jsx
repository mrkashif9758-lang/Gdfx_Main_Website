import React from "react";
import { motion } from "framer-motion";
import { MdCheckCircle, MdArrowForward } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const implementationProcess = [
  {
    id: 1,
    title: "Discovery & Requirement Analysis",
    headingFirst: "Understand the client's business goals, target audience, and specific requirements.",
    list: [
      "Conducting in-depth meetings with stakeholders to gather detailed requirements",
      "Analyzing competitors, industry trends, and customer needs",
      "Defining the project scope, features, and timeline",
    ],
    headingSecond: "Clear project roadmap and feature set tailored to business needs.",
  },
  {
    id: 2,
    title: "Planning & Strategy",
    headingFirst: "Develop a strategy for the eCommerce platform that includes design, technology stack, and scalability.",
    list: [
      "Creating wireframes and mockups to visualize the user experience",
      "Deciding on the technology stack (platform choice, integrations, etc.)",
      "Defining project milestones and timelines",
    ],
    headingSecond: "A strategic plan that guides development and ensures all stakeholders are aligned.",
  },
  {
    id: 3,
    title: "Design & User Experience (UX)",
    headingFirst: "Create an engaging and intuitive user interface (UI) to enhance the shopping experience.",
    list: [
      "Designing custom, responsive layouts based on brand identity",
      "Optimizing for both desktop and mobile devices",
      "Focusing on ease of navigation, product discovery, and checkout flow",
    ],
    headingSecond: "Visually appealing and user-friendly design that increases customer engagement.",
  },
  {
    id: 4,
    title: "Development & Integration",
    headingFirst: "Build the eCommerce platform with advanced functionality and integration of various systems.",
    list: [
      "Developing custom features like product catalog, shopping cart, and payment gateway",
      "Integrating third-party tools for CRM, ERP, analytics, and marketing",
      "Implementing secure and scalable backend solutions for inventory management",
    ],
    headingSecond: "A robust, scalable platform with seamless integrations and advanced functionality.",
  },
  {
    id: 5,
    title: "Testing & Quality Assurance",
    headingFirst: "Ensure the platform is bug-free, secure, and performs optimally.",
    list: [
      "Conducting functional, usability, and security testing",
      "Testing on multiple devices and browsers for compatibility",
      "Conducting load testing to ensure the platform can handle high traffic",
    ],
    headingSecond: "A polished, bug-free, and secure platform that delivers a seamless experience.",
  },
  {
    id: 6,
    title: "Launch & Deployment",
    headingFirst: "Deploy the eCommerce platform to a live environment and ensure a smooth transition.",
    list: [
      "Launching the platform on the chosen hosting infrastructure",
      "Monitoring the initial performance and traffic during launch",
      "Configuring domain, SSL certificates, and finalizing all integrations",
    ],
    headingSecond: "A live eCommerce platform available to customers worldwide.",
  },
  {
    id: 7,
    title: "Post-Launch Support & Maintenance",
    headingFirst: "Provide ongoing support to ensure optimal performance and continual improvement.",
    list: [
      "Offering bug fixes, security patches, and platform updates",
      "Monitoring website traffic, sales data, and customer feedback",
      "Providing additional features based on evolving business needs",
    ],
    headingSecond: "Continuous improvement and long-term platform success with proactive support.",
  },
  {
    id: 8,
    title: "Marketing & Growth Strategy",
    headingFirst: "Drive traffic and increase conversions post-launch.",
    list: [
      "Implementing SEO strategies for organic traffic growth",
      "Running targeted marketing campaigns through email, social media, and paid ads",
      "Providing analytics to track performance and fine-tune strategies",
    ],
    headingSecond: "Increased sales, customer engagement, and brand visibility.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Implementation_Process = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-white text-zinc-950 relative overflow-hidden">
      
      {/* Background Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="customContainer relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primaryBlue" />
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-700">
              Step-by-Step Workflow
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-zinc-900 tracking-tight leading-[1.15]">
            The{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Implementation Process
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
            The implementation process at GDFX for an eCommerce solution is structured, collaborative, and user-centric, ensuring that every stage aligns with your business goals.
          </p>
        </div>

        {/* Grid Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {implementationProcess.map((item, index) => (
            <motion.div 
              key={item.id} 
              variants={itemVariants} 
              className="group h-full"
            >
              <div className="h-full flex flex-col justify-between p-8 rounded-3xl bg-zinc-50 border border-zinc-200/80 hover:border-primaryBlue/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                
                {/* Top Subtle Hover Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primaryBlue to-secondaryPurple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Step Number & Title */}
                  <div className="flex items-center gap-4 mb-5">
                    <span className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-primaryBlue font-bold text-lg shadow-sm shrink-0 group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple group-hover:text-white transition-all duration-500">
                      0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  {/* Main Description */}
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mb-6 font-normal">
                    {item.headingFirst}
                  </p>

                  {/* Key Activities Box with Smooth Reveal Effect */}
                  <div className="mb-6 p-5 rounded-2xl bg-white border border-zinc-200/60 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:border-primaryBlue/20">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3 group-hover:text-primaryBlue transition-colors duration-300">
                      Key Activities
                    </h4>
                    <ul className="space-y-3">
                      {item.list.map((listItem, ind) => (
                        <li key={ind} className="flex items-start gap-3 transform group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${ind * 50}ms` }}>
                          <MdCheckCircle className="text-lg text-primaryBlue shrink-0 mt-0.5" />
                          <span className="text-sm text-zinc-700 font-medium leading-relaxed">
                            {listItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Outcome Footer Box with Scale & Lift Animation */}
                <div className="p-4 rounded-xl bg-primaryBlue/[0.04] border border-primaryBlue/10 transition-all duration-500 group-hover:bg-primaryBlue/[0.08] group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-secondaryPurple">
                      Expected Outcome
                    </span>
                  </div>
                  <p className="text-sm text-zinc-800 font-medium leading-relaxed">
                    {item.headingSecond}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Call to Action banner */}
        <div className="mt-16 text-center">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/contact");
            }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-primaryBlue to-secondaryPurple shadow-lg hover:opacity-95 transition-all duration-300 text-sm group"
          >
            <span>Start Your Project With Us</span>
            <MdArrowForward className="text-lg group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Implementation_Process;