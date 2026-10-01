import React from "react";
import support_maintenance from "../../assets/It Support Maintenance/support.jpg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { FaCheckCircle, FaShieldAlt, FaHeadset, FaSyncAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const ItSupportService = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative" aria-labelledby="it-support-heading">
      {/* Background Soft Glow Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primaryBlue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondaryPurple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="customContainer !my-0 max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold tracking-widest uppercase text-primaryBlue bg-primaryBlue/10 px-3.5 py-1.5 rounded-full inline-block mb-3"
          >
            Reliable Infrastructure
          </motion.span>
          <motion.h2
            id="it-support-heading"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-gray-900 leading-tight"
          >
            Comprehensive IT Support &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Maintenance Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed"
          >
            Empowering your business with high-availability infrastructure, proactive monitoring, and enterprise-grade security.
          </motion.p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Modern Info & Feature Cards (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-between text-left"
          >
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              Ensure seamless business operations with GDFX's IT Support & Maintenance Services. Our expert team provides <span className="font-semibold text-gray-900">24/7 support</span>, proactive monitoring, and tailored solutions to keep your IT infrastructure secure, efficient, and future-ready.
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3.5 hover:border-primaryBlue/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-primaryBlue/10 flex items-center justify-center text-primaryBlue shrink-0 mt-0.5">
                  <FaHeadset className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">24/7 Expert Help</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Round-the-clock technical assistance & incident resolution.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex items-start gap-3.5 hover:border-secondaryPurple/30 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-secondaryPurple/10 flex items-center justify-center text-secondaryPurple shrink-0 mt-0.5">
                  <FaShieldAlt className="text-sm" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wide mb-1">Proactive Security</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">Advanced threat prevention and secure data backups.</p>
                </div>
              </div>
            </div>

            {/* Highlighted Quote Box */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-900 to-[#1e1b4b] text-white relative overflow-hidden shadow-lg mb-8">
              <div className="absolute -right-6 -bottom-6 text-7xl font-serif text-white/5 select-none pointer-events-none">
                “
              </div>
              <p className="text-xs sm:text-sm text-gray-200 italic leading-relaxed relative z-10">
                "By addressing issues promptly and preventing potential disruptions, we help you minimize downtime and maximize productivity at every scale."
              </p>
            </div>

            {/* Action CTA */}
            <div>
              <Link to={"/contact"} onClick={() => window.scrollTo(0, 0)}>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  className="px-6 py-3.5 rounded-xl font-semibold text-white shadow-md shadow-purple-200 bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:from-secondaryPurple hover:to-primaryBlue transition-all duration-300 inline-flex items-center gap-2 group text-xs uppercase tracking-wider"
                >
                  Contact With Us
                  <MdArrowOutward className="text-white text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Visual Image Showcase Card (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Backdrop Glow Card */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primaryBlue/20 to-secondaryPurple/20 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              
              {/* Main Image Container */}
              <div className="relative bg-white p-3 rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                <img
                  src={support_maintenance}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-auto object-cover rounded-2xl"
                  alt="Service-IT-Support"
                />

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-xl bg-white/90 backdrop-blur-md border border-white/20 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-600 font-bold text-xs">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-[11px] font-bold text-gray-900">System Uptime</h4>
                      <p className="text-[10px] text-gray-500">Guaranteed 99.9% reliability</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-primaryBlue/10 text-primaryBlue">
                    24/7 Active
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ItSupportService;