import { motion } from "framer-motion";
import { FiUsers, FiSearch, FiMonitor, FiRefreshCw, FiCheckCircle, FiLayers } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

const uiux = [
  {
    icon: FiUsers,
    heading: "UI/UX Consulting",
    paragraph: "Strategic UI/UX consulting focused on simplifying complex experiences, improving usability, and aligning every design decision with your business goals.",
  },
  {
    icon: FiSearch,
    heading: "User Research",
    paragraph: "We uncover user needs, behaviors, and pain points through research-driven insights that help us create relevant and intuitive digital experiences.",
  },
  {
    icon: FiMonitor,
    heading: "Website & App Design",
    paragraph: "Modern, responsive, and conversion-focused interfaces crafted to deliver consistent experiences across websites, mobile apps, and digital products.",
  },
  {
    icon: FiRefreshCw,
    heading: "Website & App Redesign",
    paragraph: "We transform outdated digital products into modern, intuitive experiences with improved usability, visual consistency, and performance.",
  },
  {
    icon: FiCheckCircle,
    heading: "Usability Testing",
    paragraph: "Validate design decisions with usability testing that identifies friction points, improves user journeys, and creates smoother interactions.",
  },
  {
    icon: FiLayers,
    heading: "Design Strategy",
    paragraph: "A scalable design strategy that connects user expectations, brand identity, product requirements, and long-term business objectives.",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function UIUX() {
  return (
    <section className="relative bg-bgFirstBlue py-20 lg:py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-32 w-[450px] h-[450px] rounded-full bg-primaryBlue/[0.07] blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[450px] h-[450px] rounded-full bg-secondaryPurple/[0.07] blur-[130px] pointer-events-none" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px] pointer-events-none" />

      <div className="customContainer !my-0 relative z-10">

        {/* ================= HEADER ================= */}

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-3xl mx-auto text-center mb-12 lg:mb-14">

          <span className="inline-block text-xs sm:text-sm font-medium uppercase tracking-[0.16em] text-primaryBlue mb-3">
            UI/UX Design Services
          </span>

          <h2 className="H2 font-bold text-white leading-tight">
            Designing Digital Experiences
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-blue-400 to-secondaryPurple">
              People Love to Use
            </span>
          </h2>

          <p className="P text-white/50 leading-relaxed max-w-2xl mx-auto mt-5">
            From research and strategy to interface design and usability testing, we create intuitive digital products that balance user needs with business goals.
          </p>

        </motion.div>

        {/* ================= CARDS ================= */}

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">

          {uiux.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div key={service.heading} variants={item} whileHover={{ y: -7 }} className="group relative min-h-[300px] rounded-2xl bg-white/[0.045] backdrop-blur-xl p-6 lg:p-7 overflow-hidden transition-all duration-500 hover:bg-white/[0.11]">

                {/* Hover Glow */}
                <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-primaryBlue/0 blur-[65px] transition-all duration-700 group-hover:bg-primaryBlue/15 pointer-events-none" />

                {/* Card Number */}
                <span className="absolute top-6 right-6 text-[10px] font-semibold tracking-[0.2em] text-white/20 transition-colors duration-300 group-hover:text-white/40">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 h-full flex flex-col">

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl bg-primaryBlue/10 flex items-center justify-center mb-7 overflow-hidden transition-all duration-500 group-hover:bg-primaryBlue group-hover:scale-105">

                    <Icon className="relative z-10 text-xl text-primaryBlue transition-all duration-500 group-hover:text-white" />

                    <div className="absolute inset-0 bg-gradient-to-br from-primaryBlue to-secondaryPurple opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  </div>

                  {/* Heading */}
                  <h3 className="text-lg lg:text-xl font-semibold text-white leading-snug mb-3">
                    {service.heading}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-[15px] text-white/45 leading-6 flex-grow transition-colors duration-300 group-hover:text-white/70">
                    {service.paragraph}
                  </p>

                  {/* Bottom */}
                  <div className="flex items-center gap-2 mt-7">

                    <span className="h-[2px] w-7 rounded-full bg-primaryBlue transition-all duration-500 group-hover:w-12" />

                    <MdArrowOutward className="text-primaryBlue text-lg opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-translate-y-[2px]" />

                  </div>

                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-transparent via-primaryBlue to-transparent transition-all duration-500 group-hover:w-2/3" />

              </motion.div>
            );
          })}

        </motion.div>

      </div>
    </section>
  );
}

export default UIUX;