import React, { useState, useEffect } from "react";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { motion, AnimatePresence } from "framer-motion";
import { RxDragHandleDots2 } from "react-icons/rx";

const ServiceFaq = ({ faqs, faqName }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeIndexes, setActiveIndexes] = useState({});
  const [isMounted, setIsMounted] = useState(false);

  // Initialize active indexes
  useEffect(() => {
    const initialIndexes = {};
    faqs.forEach((_, index) => {
      initialIndexes[index + 1] = null;
    });
    setActiveIndexes(initialIndexes);
    setIsMounted(true);
  }, [faqs]);

  const toggleAnswer = (tab, index) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [tab]: prev[tab] === index ? null : index,
    }));
  };

  if (!isMounted) return null;

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex gap-2 items-center mb-4 justify-center bg-purple-100 text-purple-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          >
            <RxDragHandleDots2 className="rotate-90 text-purple-700 text-lg" />
            <span>Frequently Asked Questions</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-slate-900 mb-5 tracking-tight leading-tight"
          >
            What are the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-indigo-600">
              most asked questions
            </span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Clients commend Globaldigitalsfx for our innovative solutions and
            exceptional service. They appreciate our expertise, dedication to
            quality, and timely delivery.
          </motion.p>
        </div>

        {/* Tabs Selection */}
        <div className="flex justify-center sm:flex-nowrap flex-wrap gap-3 mb-12">
          {faqName.map((tabLabel, tabIndex) => (
            <motion.button
              key={tabIndex}
              onClick={() => setActiveTab(tabIndex + 1)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 sm:px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === tabIndex + 1
                  ? "bg-gradient-to-r from-purple-700 to-indigo-700 text-white shadow-lg shadow-purple-700/25"
                  : "bg-white border border-slate-200 text-slate-600 hover:border-purple-300 hover:bg-purple-50/50"
              }`}
            >
              {tabLabel}
            </motion.button>
          ))}
        </div>

        {/* FAQ Items Accordion */}
        <div className="space-y-4">
          {faqs[activeTab - 1]?.map((faq, index) => {
            const isOpen = activeIndexes[activeTab] === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl transition-all duration-300 bg-white border ${
                  isOpen
                    ? "border-purple-500 shadow-xl shadow-purple-900/5 ring-1 ring-purple-500/20"
                    : "border-slate-200/80 shadow-sm hover:border-slate-300"
                } overflow-hidden`}
              >
                <button
                  onClick={() => toggleAnswer(activeTab, index)}
                  className="w-full flex justify-between items-center p-5 sm:p-6 text-left focus:outline-none cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base sm:text-lg font-bold transition-colors duration-200 ${
                      isOpen ? "text-purple-700" : "text-slate-800 group-hover:text-purple-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div className={`ml-4 p-2 rounded-full transition-colors duration-200 ${
                    isOpen ? "bg-purple-100 text-purple-700" : "bg-slate-100 text-slate-600 group-hover:bg-purple-50 group-hover:text-purple-700"
                  }`}>
                    {isOpen ? <FiMinus className="text-lg" /> : <GoPlus className="text-lg" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 sm:px-6 sm:pb-7 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                        <p>{faq.answer}</p>
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

export default ServiceFaq;