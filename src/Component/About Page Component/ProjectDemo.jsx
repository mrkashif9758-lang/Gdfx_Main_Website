import { motion } from "framer-motion";
import CountUp from "react-countup";

const ProjectDemo = () => {
  return (
    <section className="py-24 bg-bgSecondBlue relative overflow-hidden">
      <div className="customContainer !my-0">
        
        {/* Header Title & Description */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-white H2 font-black tracking-wider uppercase mb-6"
          >
            Scoreboard of <span className="font-light italic text-gray-400">Success</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="P text-gray-300 leading-relaxed font-medium"
          >
            Tech nerds and proud of it! With global reach, hundreds of successful projects, and a reputation for innovation our studio have come a long way. We're a team that loves pushing boundaries and never stops working hard to continue to be awesome in tech.
          </motion.p>
        </div>

        {/* Stats Grid with Dividers */}
        <div className="max-w-[1100px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mx-auto items-center">
          
          {/* Stat 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:border-r border-white/10 last:border-none"
          >
            <h2 className="text-primaryBlue H2 font-extrabold text-5xl lg:text-6xl mb-3">
              <CountUp end={7} enableScrollSpy />+
            </h2>
            <span className="text-white text-sm lg:text-base font-bold tracking-wider uppercase leading-snug">
              Years of <br /> Experience
            </span>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:border-r border-white/10 last:border-none"
          >
            <h2 className="text-primaryBlue H2 font-extrabold text-5xl lg:text-6xl mb-3">
              <CountUp end={100} enableScrollSpy />+
            </h2>
            <span className="text-white text-sm lg:text-base font-bold tracking-wider uppercase leading-snug">
              Team <br /> Members
            </span>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left px-4 md:border-r border-white/10 last:border-none"
          >
            <h2 className="text-primaryBlue H2 font-extrabold text-5xl lg:text-6xl mb-3">
              <CountUp end={70} enableScrollSpy />%
            </h2>
            <span className="text-white text-sm lg:text-base font-bold tracking-wider uppercase leading-snug">
              Repeated <br /> Clients
            </span>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start text-center md:text-left px-4"
          >
            <h2 className="text-primaryBlue H2 font-extrabold text-5xl lg:text-6xl mb-3">
              <CountUp end={600} enableScrollSpy />+
            </h2>
            <span className="text-white text-sm lg:text-base font-bold tracking-wider uppercase leading-snug">
              Successful <br /> Projects
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProjectDemo;