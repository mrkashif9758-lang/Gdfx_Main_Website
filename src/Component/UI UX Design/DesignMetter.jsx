import React from "react";
import { motion } from "framer-motion";
import {
  FaRegSmile,             // Satisfaction
  FaUsers,                // Engagement
  FaShoppingCart,         // Conversions
  FaShieldAlt,            // Trust
  FaMobileAlt,            // Mobile-friendly
  FaMoneyCheckAlt,        // Cost savings
  FaSearchDollar,         // SEO
} from "react-icons/fa";

const ui = [
  {
    icon: <FaUsers size={22} />,
    subicon: `1. Improves User Engagement`,
    paregraph: `Intuitive UI/UX design keeps users engaged, reducing bounce rates. Clear navigation and attractive interfaces encourage users to stay longer, interact more, and increase conversions effectively.`,
  },
  {
    icon: <FaRegSmile size={22} />,
    subicon: `2. Enhances Customer Satisfaction`,
    paregraph: `A seamless and user-friendly design enhances satisfaction, minimizing frustration. By focusing on simplicity and efficiency, GDFX ensures your users have an enjoyable and memorable experience.`,
  },
  {
    icon: <FaShoppingCart size={22} />,
    subicon: `3. Boosts Conversions and Sales`,
    paregraph: `Effective UI/UX guides users effortlessly through the purchase process, driving conversions. Clear calls to action, smooth navigation, and attractive visuals lead to higher sales.`,
  },
  {
    icon: <FaShieldAlt size={22} />,
    subicon: `4. Builds Trust and Credibility`,
    paregraph: `A well-designed interface builds trust with users. At GDFX, we create professional designs that establish credibility, leading to increased customer confidence and long-term loyalty.`,
  },
  {
    icon: <FaMobileAlt size={22} />,
    subicon: `5. Improves Mobile and Cross-Platform Experience`,
    paregraph: `Responsive design ensures a consistent experience across devices. GDFX specializes in creating mobile-first, cross-platform designs for a flawless experience on desktops, tablets, and smartphones.`,
  },
  {
    icon: <FaMoneyCheckAlt size={22} />,
    subicon: `6. Reduces Development Costs in the Long Run`,
    paregraph: `Investing in UI/UX design early prevents costly redesigns later. GDFX ensures your design is well-planned, saving future development costs by minimizing revisions and errors.`,
  },
  {
    icon: <FaSearchDollar size={22} />,
    subicon: `7. Improves SEO Performance`,
    paregraph: `UI/UX design improves user experience and boosts SEO rankings. GDFX focuses on optimizing speed, navigation, and responsiveness, increasing your site’s visibility and organic traffic.`,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function DesignMetter() {
  return (
    <section className="bg-bgFirstBlue py-24 relative overflow-hidden">
      <div className="customContainer !my-0 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-primaryBlue/10 text-primaryBlue text-xs font-semibold tracking-wider uppercase mb-4 border border-primaryBlue/20">
            UI/UX Excellence
          </span>
          <h2 className="H2 font-bold capitalize text-white mb-4 leading-tight">
            Why UI/UX Design{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Matters at GDFX
            </span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed">
            UI/UX design plays a crucial role in shaping the user experience and driving business success. At GDFX, we prioritize creating user-friendly, visually appealing, and functional designs that not only enhance engagement but also achieve measurable results.
          </p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {ui.map((item, ind) => (
            <motion.div key={ind} variants={cardVariant}>
              <div className="h-full p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md hover:bg-slate-900/70 border border-slate-800 hover:border-primaryBlue/40 hover:shadow-xl hover:shadow-primaryBlue/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-primaryBlue/10 text-primaryBlue flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple group-hover:text-white transition-all duration-300 shadow-sm border border-primaryBlue/20">
                    {item.icon}
                  </div>

                  {/* Subicon / Title */}
                  <h3 className="H4 font-bold text-white mb-3 group-hover:text-primaryBlue transition-colors duration-300">
                    {item.subicon}
                  </h3>

                  {/* Paragraph */}
                  <p className="P text-off_white/80 text-sm leading-relaxed">
                    {item.paregraph}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="w-full h-[2px] bg-slate-800 mt-6 group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Conclusion Box */}
        {/* <div className="mt-16 p-8 rounded-2xl bg-slate-900/50 backdrop-blur-md border border-slate-800 text-center max-w-4xl mx-auto">
          <p className="P text-off_white leading-relaxed">
            At GDFX, we understand that UI/UX design is not just about aesthetics but about creating an experience that adds value to your business. Whether you need custom website design, mobile app development, or a complete redesign, we deliver intuitive, responsive, and user-focused designs that ensure a lasting impact on your audience.
          </p>
        </div> */}

      </div>
    </section>
  );
}

export default DesignMetter;