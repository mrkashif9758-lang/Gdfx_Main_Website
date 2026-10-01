import React from "react";
import { motion } from "framer-motion";
import { FaBuilding, FaGlobeAmericas, FaLandmark, FaRegBuilding, FaRegFileAlt } from "react-icons/fa";
import companyLogo from '../../assets/Team/gdfx-footer-img.png'

const locations = [
  {
    country: "INDIA",
    address: "301, Syadwad Business Park, H32, Sector 63, Noida.",
    tag: "(Head Office)",
    icon: <FaBuilding className="text-4xl sm:text-5xl text-white mb-2" />,
  },
  {
    country: "UNITED STATES",
    address: "711 S Glendora Ave, West Covina, CA",
    tag: "",
    icon: <FaLandmark className="text-4xl sm:text-5xl text-white mb-2" />,
  },
  {
    country: "UNITED KINGDOM",
    address: "86-90, Paul Street, London, EC2A 4NE, England",
    tag: "",
    icon: <FaGlobeAmericas className="text-4xl sm:text-5xl text-white mb-2" />,
  },
  {
    country: "UAE",
    address: "Ontario Tower, Dubai, UAE",
    tag: "",
    icon: <FaRegFileAlt className="text-4xl sm:text-5xl text-white mb-2" />,
  },
  {
    country: "CANADA",
    address: "7168 179 St, Surrey BC, V3S 8C5",
    tag: "",
    icon: <FaRegBuilding className="text-4xl sm:text-5xl text-white mb-2" />,
  },
];

const GlobalPresence = () => {
  return (
    <section className="bg-bgSecondBlue py-24 relative overflow-hidden text-white border-t border-b border-purple-900/30">
      <div className="customContainer !my-0 text-center">
        
        {/* Giant Company Name Header */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mb-4 flex flex-col items-center justify-center w-full"
>
  <div className="w-full h-[90px] sm:h-[110px] lg:h-[130px] flex items-center justify-center overflow-visible">
    <img
      src={companyLogo}
      alt="GlobaldigitalsFx"
      className="
        w-[90vw]
        max-w-[1100px]
        h-auto
        object-contain
        scale-[1.2]
      "
    />
  </div>

  <p className="text-primaryBlue text-xs sm:text-sm font-extrabold tracking-[0.3em] uppercase mt-1">
    OUR GLOBAL PRESENCE
  </p>
</motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
          {locations.map((loc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="relative p-6  backdrop-blur-md flex flex-col items-center justify-between group hover:border-purple-500/40  transition-all duration-300 shadow-xl"
            >
              {/* Divider line like screenshot between columns (on desktop) */}
              {idx !== locations.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-purple-700 to-transparent" />
              )}

              {/* Icon / Landmark */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                {loc.icon}
              </div>

              {/* Text Info */}
              <div>
                <h4 className="text-base sm:text-lg font-extrabold text-white tracking-wide mb-2">
                  {loc.country}
                </h4>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3">
                  {loc.address}
                </p>
                {loc.tag && (
                  <span className="inline-block text-[11px] font-bold text-secondaryPurple bg-purple-950/60 px-3 py-1 rounded-full border border-purple-500/20">
                    {loc.tag}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GlobalPresence;