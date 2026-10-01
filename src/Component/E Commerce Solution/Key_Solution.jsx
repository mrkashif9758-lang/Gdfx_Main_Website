import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  HiShoppingBag, 
  HiChartBarSquare, 
  HiCube, 
  HiDevicePhoneMobile, 
  HiMagnifyingGlass, 
  HiArrowTrendingUp, 
  HiShieldCheck, 
  HiWrenchScrewdriver, 
  HiUserGroup 
} from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";

// Icon mapping corresponding to each solution item for a modern UI touch
const iconList = [
  <HiShoppingBag className="text-[#00fff7] text-2xl" />,
  <HiChartBarSquare className="text-secondaryPurple text-2xl" />,
  <HiCube className="text-[#00fff7] text-2xl" />,
  <HiDevicePhoneMobile className="text-secondaryPurple text-2xl" />,
  <HiMagnifyingGlass className="text-[#00fff7] text-2xl" />,
  <HiArrowTrendingUp className="text-secondaryPurple text-2xl" />,
  <HiShieldCheck className="text-[#00fff7] text-2xl" />,
  <HiWrenchScrewdriver className="text-secondaryPurple text-2xl" />,
  <HiUserGroup className="text-secondaryPurple text-2xl" />
];

const uiux = [
  {
    heading: `Custom eCommerce Development`,
    paregraph: `Tailored platforms designed to meet your business needs, from storefront design to backend functionality, ensuring a unique and competitive online presence.`,
  },
  {
    heading: `Advanced Analytics & Reporting`,
    paregraph: `Real-time analytics and reporting to monitor key performance metrics, optimize marketing efforts, and improve decision-making.`,
  },
  {
    heading: `Inventory Management`,
    paregraph: `Robust inventory tracking and management tools that allow businesses to efficiently manage stock levels, orders, and product listings in real-time.`,
  },
  {
    heading: `Responsive Design`,
    paregraph: `Mobile-optimized and adaptive designs that provide a consistent and engaging shopping experience across all devices, increasing customer retention and conversion rates.`,
  },
  {
    heading: `Search Engine Optimization (SEO)`,
    paregraph: `Built-in SEO features to improve visibility on search engines, driving organic traffic to your online store and boosting sales.`,
  },
  {
    heading: `Scalability & Flexibility`,
    paregraph: `Solutions that grow with your business, enabling easy expansion, product additions, and integration with third-party tools as needed.`,
  },
  {
    heading: `Secure Payment Gateways`,
    paregraph: `Integration of trusted payment systems with advanced security features to ensure safe, hassle-free transactions for customers.`,
  },
  {
    heading: `Customer Support & Maintenance`,
    paregraph: `Ongoing support and maintenance services to ensure your platform remains up-to-date, secure, and optimized for performance.`,
  },
  {
    heading: `Customer Relationship Management (CRM)`,
    paregraph: `Advanced CRM tools that help track customer behavior, preferences, and purchase history to provide personalized shopping experiences and enhance customer loyalty.`,
  },
];

function Key_Solution() {
  const navigate = useNavigate();

  return (
    <section className="py-24 lg:py-32 bg-bgFirstBlue text-white relative overflow-hidden">
      
      {/* Ambient background glows matching your theme */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primaryBlue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondaryPurple/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="customContainer relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-md mb-4 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-[#00fff7] animate-pulse" />
            <span className="text-xs font-semibold tracking-wider uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#00fff7] to-secondaryPurple">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-white tracking-tight leading-[1.15]">
            Here are the key{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-[#38bdf8] to-secondaryPurple">
              solutions we offer
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-normal leading-relaxed">
            GDFX provides a range of solutions to ensure the success of your eCommerce platform, focusing on seamless functionality, scalability, and user experience.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {uiux.map((item, ind) => {
            return (
              <div
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/contact");
                }}
                key={ind}
                className="group relative p-8 rounded-3xl bg-zinc-900/60 border border-white/[0.08] hover:border-primaryBlue/40 backdrop-blur-xl cursor-pointer transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top glowing gradient line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primaryBlue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div>
                  {/* Icon & Action Arrow Top row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {iconList[ind]}
                    </div>
                    
                    <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple group-hover:border-transparent transition-all duration-300">
                      <MdArrowOutward className="text-lg rotate-[45deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Heading */}
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#00fff7] transition-colors duration-300 leading-snug">
                    {item.heading}
                  </h3>

                  {/* Paragraph */}
                  <p className="mt-3 text-sm text-zinc-400 font-normal leading-relaxed">
                    {item.paregraph}
                  </p>
                </div>

                {/* Bottom subtle glow element */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primaryBlue/5 rounded-full blur-2xl group-hover:bg-primaryBlue/15 transition-all duration-500 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Footer Summary note */}
        <div className="text-center max-w-2xl mx-auto pt-6 border-t border-white/10">
          <p className="text-sm sm:text-base text-zinc-400 font-medium leading-relaxed">
            These solutions are designed to create a smooth, efficient, and profitable eCommerce platform, helping businesses to grow, engage customers, and achieve long-term success.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Key_Solution;