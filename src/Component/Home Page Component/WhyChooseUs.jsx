import { useRef, useState } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import RotateCircle from "./RotateCircle"; // Ensure path is correct
import { RxDragHandleDots2 } from "react-icons/rx";

const faqs = [
  {
    question: "What makes GDFX different from other IT service providers?",
    answer:
      "GDFX combines innovative technology with personalized, client-focused solutions to deliver customized software, mobile apps, and digital marketing strategies that drive business success.",
  },
  {
    question: "Can GDFX handle complex software development needs?",
    answer:
      "Yes! We specialize in custom software development, including complex CRM systems, enterprise solutions, and business automation tools that cater to your specific requirements.",
  },
  {
    question: "How do GDFX’s web development services benefit my business?",
    answer:
      "Our web development services focus on creating responsive, user-friendly websites optimized for performance, SEO, and conversion, enhancing your digital presence and business growth.",
  },
  {
    question: "What kind of post-launch support does GDFX offer?",
    answer:
      "We offer comprehensive post-launch support, including maintenance, troubleshooting, and performance optimization, ensuring your digital solutions remain up-to-date and effective.",
  },
];

const LeftSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Badge */}
      <motion.div
        className="inline-flex gap-2 items-center mb-3 bg-[#faf5ff] px-4 py-1.5 rounded-full border border-[#e9d5ff]"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.2 }}
      >
        <RxDragHandleDots2 className="rotate-90 text-[#9333ea] text-xl" />
        <span className="text-[#9333ea] font-semibold text-xs sm:text-sm tracking-wider uppercase font-lato">
          WHY CHOOSE US
        </span>
      </motion.div>

      {/* Heading */}
      <motion.h2
        className="text-[30px] sm:text-[40px] xl:text-[46px] font-nunito font-extrabold text-[#2d1b4e] mb-4 leading-tight capitalize tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3 }}
      >
        From Concept to Completion –{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] to-[#581c87]">
          GDFX Brings Your Digital Vision to Life
        </span>
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-[14px] sm:text-[16px] font-lato text-[#4a3575] mb-8 leading-relaxed max-w-2xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 }}
      >
        GDFX delivers innovative, scalable IT solutions tailored to your
        business needs. Our team of experts specializes in software development,
        mobile apps, web design, and digital marketing. We focus on
        transparency, collaboration, and long-term success, ensuring
        cost-effective, cutting-edge solutions that drive growth. Partner with
        GDFX for results-driven IT solutions that achieve sustainable business
        success.
      </motion.p>

      {/* FAQs Accordion */}
      <motion.div className="sm:space-y-3 space-y-2 mb-5" layout>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="rounded-2xl border border-[#e9d5ff]/70 overflow-hidden bg-[#faf5ff]/40 shadow-sm transition-all" 
            layout
          >
            <motion.div
              className="flex justify-between items-center cursor-pointer text-[#2d1b4e] bg-[#faf5ff] p-4 sm:p-5 hover:bg-[#f3e8ff] transition-colors"
              onClick={() => toggleAnswer(index)}
              layout
            >
              <h6 className="font-nunito font-bold text-base sm:text-lg pr-4">
                {faq.question}
              </h6>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 text-[#9333ea] flex-shrink-0"
                animate={{
                  rotate: activeIndex === index ? 180 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M19 9l-7 7-7-7"
                />
              </motion.svg>
            </motion.div>

            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  className="bg-white overflow-hidden border-t border-[#e9d5ff]/40"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: { duration: 0.3, ease: "easeInOut" },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.2, ease: "easeInOut" },
                  }}
                  layout
                >
                  <motion.p
                    className="p-4 sm:p-5 text-[#4a3575] font-lato text-sm sm:text-base sm:text-start text-justify leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {faq.answer}
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 200,
    damping: 20,
  });
  const springY = useSpring(mouseY, {
    stiffness: 200,
    damping: 20,
  });

  const handleMouseMove = (event) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      mouseX.set(offsetX);
      mouseY.set(offsetY);
    }
  };

  return (
    <motion.section
      ref={containerRef}
      className="relative overflow-hidden bg-white py-24"
      onMouseMove={handleMouseMove}
    >
      {/* Subtle interactive mouse glow for white background */}
      <motion.div
        className="absolute size-40 rounded-full bg-purple-200/40 opacity-60 -z-10 blur-3xl"
        style={{
          x: springX,
          y: springY,
          translateX: "-80px",
          translateY: "-80px",
          pointerEvents: "none",
        }}
      ></motion.div>

      <div className=" max-w-7xl mx-auto px-4 !my-0 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
          <div className="xl:col-span-7">
            <LeftSection />
          </div>
          <div className="xl:col-span-5 xl:flex justify-end hidden">
            <RotateCircle />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;