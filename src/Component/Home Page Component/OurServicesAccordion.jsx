import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";

// Sahi folder structure ke hisab se updated imports
import custom_software from "../../assets/Services/Our Work Process/web.jpg";
import app from "../../assets/Services/Our Work Process/app.jpg";
import website from "../../assets/Services/Our Work Process/website.png";
import ui_ux from "../../assets/Services/Our Work Process/ui-ux.jpg";
import digital from "../../assets/Services/Our Work Process/digital-transformation.jpg";
import it_support from "../../assets/Services/Our Work Process/it-support.jpg";
import e_commerce from "../../assets/Services/Our Work Process/ecommerce.webp";

const megaServices = [
  {
    title: "Custom Software Development",
    subtitle: "Tailor-Made Enterprise Solutions",
    description: "We bring applications to life with passion and innovation! From scalable core architectures to complex enterprise systems, we craft immersive digital experiences. As elite software engineers, we build premium, high-quality solutions that engage and inspire!",
    tags: ["Enterprise Software", "SaaS Solutions", "Legacy Modernization", "Cloud Architecture", "Microservices", "Secure Databases"],
    link: "/service/custom-software-development",
    image: custom_software,
  },
  {
    title: "Mobile App Development",
    subtitle: "Next-Gen iOS & Android Apps",
    description: "Empower your business with high-performance mobile applications! From native iOS and Android apps to cross-platform frameworks, we build engaging mobile experiences with intuitive interfaces and seamless functionality.",
    tags: ["iOS Development", "Android Apps", "React Native", "Flutter", "Cross-Platform", "UI/UX Integration"],
    link: "/service/mobile-app-development",
    image: app,
  },
  {
    title: "Web App Development",
    subtitle: "Dynamic & Scalable Web Platforms",
    description: "Transform your online presence with robust and dynamic web solutions. We build lightning-fast web applications using modern stacks designed to handle heavy traffic and deliver exceptional user experiences.",
    tags: ["Full-Stack Dev", "Progressive Web Apps", "High Performance", "API Integration", "Responsive Design", "Cloud Hosting"],
    link: "/service/web-app-development",
    image: website,
  },
  {
    title: "UI/UX Design",
    subtitle: "Immersive & User-Centric Design",
    description: "Design that speaks volumes! We craft captivating user interfaces and frictionless user journeys that maximize conversion rates, enhance brand identity, and keep your users coming back for more.",
    tags: ["Wireframing", "Interactive Prototypes", "User Research", "Figma Design", "Design Systems", "Visual Branding"],
    link: "/service/ui-ux-design",
    image: ui_ux,
  },
  {
    title: "API Development & Integration",
    subtitle: "Seamless Connectivity Solutions",
    description: "Connect your software ecosystems seamlessly. We engineer secure, highly documented, and scalable RESTful and GraphQL APIs that ensure flawless communication across all your services.",
    tags: ["RESTful APIs", "GraphQL", "Third-party APIs", "Microservices", "Secure Gateways", "Data Sync"],
    link: "/service/api-development",
    image: digital,
  },
  {
    title: "Digital Transformation",
    subtitle: "Future-Proof Your Operations",
    description: "Accelerate your business evolution with cutting-edge digital transformation strategies. We modernize outdated legacy workflows to drive automation, minimize overhead, and scale operations rapidly.",
    tags: ["Cloud Migration", "Workflow Automation", "IT Consultation", "Digital Strategy", "Process Optimization", "AI Integration"],
    link: "/service/digital-transformation-service",
    image: digital,
  },
  {
    title: "IT Support & Maintenance",
    subtitle: "24/7 Reliable Infrastructure Support",
    description: "Never worry about system downtime again. Our dedicated IT support team provides around-the-clock infrastructure monitoring, immediate bug-fixing, security upgrades, and routine maintenance.",
    tags: ["24/7 Monitoring", "Bug Fixing", "Security Patches", "Performance Tuning", "Server Management", "Backup Systems"],
    link: "/service/it-support-maintenance",
    image: it_support,
  },
  {
    title: "E-commerce Solutions",
    subtitle: "High-Converting Online Stores",
    description: "Scale your retail business globally with feature-rich e-commerce storefronts. Integrated with secure payment gateways, smart inventory systems, and lightning-fast checkout experiences.",
    tags: ["Shopify Development", "WooCommerce", "Custom Storefronts", "Payment Gateways", "Inventory Tracking", "Cart Optimization"],
    link: "/service/e-commerce-solution",
    image: e_commerce,
  },
];

const OurServicesAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="customContainer max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[30px] sm:text-[40px] xl:text-[50px] font-nunito font-extrabold text-[#2d1b4e] mb-4 tracking-tight">
            Our Services
          </h2>
          <p className="text-[14px] sm:text-[16px] font-lato text-[#4a3575] max-w-2xl mx-auto">
            We Are A Leading Software Development Agency That Provides Development Services On Various Platforms
          </p>
        </div>

        {/* Accordion List Container */}
        <div className="flex flex-col gap-4">
          {megaServices.map((service, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveIndex(index)}
                className={`rounded-3xl transition-all duration-300 overflow-hidden ${
                  isOpen 
                    ? "bg-[#faf5ff] shadow-xl shadow-purple-900/5 py-2" 
                    : "bg-white hover:bg-[#faf5ff]/40"
                }`}
              >
                {/* Accordion Main Header Row */}
                <div 
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="px-6 sm:px-10 py-6 flex items-center justify-between cursor-pointer select-none"
                >
                  <h3 className="text-2xl sm:text-3xl xl:text-4xl font-nunito font-bold text-[#2d1b4e] capitalize tracking-tight">
                    {service.title}
                  </h3>
                  
                  <span className="text-xl sm:text-2xl font-light text-[#9333ea]/60 font-nunito">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Accordion Expandable Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 sm:px-10 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        
                        {/* Left Side: Tags, Subtitle, Description & CTA */}
                        <div className="lg:col-span-7 flex flex-col gap-6">
                          
                          {/* Tags Pills */}
                          <div className="flex flex-wrap gap-2.5 pt-2">
                            {service.tags.map((tag, tIdx) => (
                              <span 
                                key={tIdx}
                                className="text-xs sm:text-sm font-lato font-medium px-4 py-2 rounded-full bg-white text-[#4a3575] border border-[#e9d5ff] shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div>
                            <h4 className="text-[20px] sm:text-[22px] font-nunito font-bold text-[#2d1b4e] mb-3">
                              {service.subtitle}
                            </h4>
                            <p className="text-[14px] sm:text-[16px] font-lato text-[#4a3575] leading-relaxed">
                              {service.description}
                            </p>
                          </div>

                          {/* Know More Button */}
                          <div className="pt-2">
                            <Link
                              to={service.link}
                              onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                            >
                              <motion.button 
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="px-7 py-3 rounded-xl font-lato font-semibold text-white bg-gradient-to-b from-[#7e22ce] to-[#581c87] hover:from-[#581c87] hover:to-[#7e22ce] shadow-md shadow-purple-900/20 flex items-center gap-2 group transition-all"
                              >
                                <span>Know More</span>
                                <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                              </motion.button>
                            </Link>
                          </div>

                        </div>

                        {/* Right Side: Service Illustration / Image (Increased width & padding fit) */}
                        <div className="lg:col-span-5 flex justify-center">
                          <div className="w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden  p-2 sm:p-3 flex items-center justify-center">
                            <motion.img
                              src={service.image}
                              alt={service.title}
                              className="w-full h-full object-cover rounded-xl drop-shadow-md"
                              initial={{ scale: 0.9, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                            />
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurServicesAccordion;