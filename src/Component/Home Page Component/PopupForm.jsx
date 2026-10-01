import React, { useState, useEffect, useRef, useCallback } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactInquiry } from "../../lib/contact"; // Adjust path as per your folder structure

const SERVICES = [
  "Web Application Development",
  "Search Engine Optimization (SEO)",
  "Meta Ads Management",
  "Google Ads / PPC",
  "E-commerce Solution",
  "Mobile App Development",
  "UI/UX Design",
  "Other"
];

const PopupForm = () => {
  const popupRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000); // Trigger after 10 seconds

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email";
    if (!/^[0-9]{10}$/.test(formData.phone)) newErrors.phone = "10 digits required";
    if (!formData.requirement) newErrors.requirement = "Select one";
    if (!formData.message.trim()) newErrors.message = "Message required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitContactInquiry(formData);
      toast.success("Inquiry sent successfully!");
      setFormData({ name: "", email: "", phone: "", requirement: "", message: "" });
      setShowPopup(false);
    } catch (error) {
      toast.error(error.message || "Failed to send inquiry!");
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => setShowPopup(false);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex justify-center items-center z-[9999] p-3"
        >
          <motion.div
            ref={popupRef}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl shadow-2xl overflow-hidden w-full max-w-2xl relative border border-white/10"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute cursor-pointer right-4 top-4 z-20 text-gray-400 hover:text-white transition-colors"
            >
              <RxCross2 className="text-xl sm:text-2xl" />
            </button>

            {/* Background Decorative Circles */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl"></div>

            <div className="relative z-10 p-5 sm:p-8">
              {/* Header */}
              <div className="text-center mb-5 sm:mb-6">
                <motion.h4
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-amber-500 text-xs sm:text-sm font-bold uppercase tracking-widest leading-tight"
                >
                  Share your project idea, and our experts will craft innovative solutions.
                </motion.h4>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Name */}
                  <div className="flex flex-col">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`w-full text-sm p-2.5 sm:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-white placeholder:text-gray-400 ${
                        errors.name ? "border-red-400" : "border-white/10"
                      }`}
                    />
                    {errors.name && <span className="text-[10px] text-red-400 mt-0.5 ml-1">{errors.name}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full text-sm p-2.5 sm:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-white placeholder:text-gray-400 ${
                        errors.phone ? "border-red-400" : "border-white/10"
                      }`}
                    />
                    {errors.phone && <span className="text-[10px] text-red-400 mt-0.5 ml-1">{errors.phone}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {/* Email */}
                  <div className="flex flex-col">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full text-sm p-2.5 sm:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-white placeholder:text-gray-400 ${
                        errors.email ? "border-red-400" : "border-white/10"
                      }`}
                    />
                    {errors.email && <span className="text-[10px] text-red-400 mt-0.5 ml-1">{errors.email}</span>}
                  </div>

                  {/* Requirement */}
                  <div className="flex flex-col relative">
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className={`w-full text-sm p-2.5 sm:p-3 bg-white/5 border rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all ${
                        errors.requirement ? "border-red-400" : "border-white/10"
                      } ${formData.requirement === "" ? "text-gray-400" : "text-white"}`}
                    >
                      <option value="" className="bg-indigo-900">Requirement</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s} className="bg-indigo-900 text-white">{s}</option>
                      ))}
                    </select>
                    {/* Custom Arrow for Select */}
                    <div className="absolute right-3 top-[14px] sm:top-[18px] pointer-events-none opacity-50">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    {errors.requirement && <span className="text-[10px] text-red-400 mt-0.5 ml-1">{errors.requirement}</span>}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Briefly describe your project..."
                    className={`w-full text-sm p-2.5 sm:p-3 bg-white/5 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 transition-all text-white placeholder:text-gray-400 resize-none ${
                      errors.message ? "border-red-400" : "border-white/10"
                    }`}
                  ></textarea>
                  {errors.message && <span className="text-[10px] text-red-400 mt-0.5 ml-1">{errors.message}</span>}
                </div>

                {/* Submit */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 py-3 bg-amber-500 hover:bg-amber-600 text-indigo-900 font-bold rounded-lg text-sm sm:text-base shadow-lg transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-indigo-900/30 border-t-indigo-900 rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </div>
                  ) : (
                    "Submit Now"
                  )}
                </motion.button>
              </form>

              <p className="text-center text-[10px] sm:text-xs text-gray-400 mt-4 italic">
                We value your privacy. Your information is secure.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;