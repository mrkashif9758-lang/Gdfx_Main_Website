import { motion } from "framer-motion";
import service_header_img from "../../assets/Services/Service Header/service_header.png";
import "./serviceheader.css";

const ServiceHeader = () => {
  return (
    <div className="relative min-h-[520px] lg:min-h-[730px] flex items-center overflow-hidden bg-slate-950">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-20 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40 scale-105"
        >
          {/* Public folder ki video ko direct path se access karein */}
          <source src="/service-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Purple & Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-purple-950/40 z-[-1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-[-1]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 py-20 lg:py-28">
        
        {/* Left Text Section */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full mb-5">
            Enterprise Solutions
          </span>

          <motion.h2
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            GlobalDigitalsFX{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">
              Services
            </span>
          </motion.h2>

          <motion.p
            className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            GlobalDigitalsFX Services Pvt. Ltd. provides top-tier solutions in
            web & app development, SEO, digital marketing, and business scaling.
            Using modern technologies, we help brands boost traffic, dominate
            online visibility, and scale sustainably.
          </motion.p>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <motion.img
            src={service_header_img}
            alt="Services Visual"
            draggable={false}
            className="max-h-[260px] sm:max-h-[340px] object-contain drop-shadow-[0_15px_30px_rgba(168,85,247,0.15)]"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default ServiceHeader;