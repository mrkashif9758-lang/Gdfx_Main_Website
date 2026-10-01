import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingBag,
  FaHeartbeat,
  FaGlobeAsia,
  FaGraduationCap,
  FaUtensils,
  FaBicycle,
  FaAmbulance,
  FaUniversity,
  FaHome,
} from "react-icons/fa";

const demandMobileData = [
  {
    icon: <FaShoppingBag size={22} />,
    title: "E-commerce & Retail",
    des: "Shopping apps, grocery delivery, and online marketplaces allow customers to shop seamlessly with convenient payment and delivery options.",
  },
  {
    icon: <FaHeartbeat size={22} />,
    title: "Healthcare",
    des: "Apps for telemedicine, appointment scheduling, fitness tracking, and health monitoring make healthcare more accessible and efficient for patients and providers.",
  },
  {
    icon: <FaGlobeAsia size={22} />,
    title: "Travel & Tourism",
    des: "Apps for flight and hotel booking, itinerary planning, and navigation enhance travel experiences and streamline trip management.",
  },
  {
    icon: <FaGraduationCap size={22} />,
    title: "Education",
    des: "E-learning apps, virtual classrooms, and exam preparation platforms make learning flexible, interactive, and accessible to students of all ages.",
  },
  {
    icon: <FaUtensils size={22} />,
    title: "Food & Beverage",
    des: "Online food delivery, restaurant booking, and recipe apps cater to busy consumers seeking quick and convenient dining solutions.",
  },
  {
    icon: <FaBicycle size={22} />,
    title: "Fitness & Wellness",
    des: "Fitness tracking, meditation, and personal training apps empower users to maintain a healthy lifestyle anytime, anywhere.",
  },
  {
    icon: <FaAmbulance size={22} />,
    title: "Transportation",
    des: "Ride-hailing apps, delivery tracking tools, and fleet management systems simplify mobility, deliveries, and supply chain operations.",
  },
  {
    icon: <FaUniversity size={22} />,
    title: "Finance & FinTech",
    des: "Mobile banking, digital wallets, investment platforms, and loan management apps help users manage money securely and efficiently.",
  },
  {
    icon: <FaHome size={22} />,
    title: "Real Estate",
    des: "Property listing apps, virtual tours, and mortgage calculators make buying, selling, and renting properties more efficient and user-friendly.",
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

const DemandMobile = () => {
  return (
    <section className="bg-bgFirstBlue py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto !my-0 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1 rounded-full bg-primaryBlue/10 text-primaryBlue text-xs font-semibold tracking-wider uppercase mb-4 border border-primaryBlue/20">
            High-Growth Sectors
          </span>
          <h2 className="H2 font-bold capitalize text-white leading-tight mb-4">
            Sectors in Demand for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Mobile Apps
            </span>
          </h2>
          <p className="P text-off_white leading-relaxed">
            Discover industries where mobile applications are transforming operations and customer experiences. From healthcare to e-commerce, these sectors are rapidly adopting mobile solutions to stay competitive and drive growth.
          </p>
        </div>

        {/* Grid Container */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {demandMobileData.map((item, index) => (
            <motion.div key={index} variants={cardVariant}>
              <div className="h-full p-8 rounded-2xl bg-slate-900/40 backdrop-blur-md hover:bg-slate-900/70 border border-slate-800 hover:border-primaryBlue/40 hover:shadow-xl hover:shadow-primaryBlue/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer">
                <div>
                  {/* Icon Wrapper */}
                  <div className="w-12 h-12 rounded-xl bg-primaryBlue/10 text-primaryBlue flex items-center justify-center mb-6 group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple group-hover:text-white transition-all duration-300 shadow-sm border border-primaryBlue/20">
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="H4 font-bold text-white mb-3 group-hover:text-primaryBlue transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="P text-off_white/80 text-sm leading-relaxed">
                    {item.des}
                  </p>
                </div>

                {/* Bottom decorative accent line */}
                <div className="w-full h-[2px] bg-slate-800 mt-6 group-hover:bg-gradient-to-r group-hover:from-primaryBlue group-hover:to-secondaryPurple transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default DemandMobile;