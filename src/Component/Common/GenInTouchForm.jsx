"use client";

import React, { useState, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Zap, X } from "lucide-react";
import { submitContactInquiry } from "../../lib/contact";

const SERVICES = [
  "Web Application Development",
  "Search Engine Optimization (SEO)",
  "Meta Ads Management",
  "Google Ads / PPC",
  "E-commerce Solution",
  "Mobile App Development",
  "UI/UX Design",
  "Other",
];

const GetInTouchForm = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // --- FIX: Scroll Lock Logic ---
  useEffect(() => {
    if (isOpen) {
      // Jab form open ho, scroll band kar do
      document.body.style.overflow = "hidden";
    } else {
      // Jab form close ho, scroll wapas shuru kar do
      document.body.style.overflow = "unset";
    }

    // Cleanup function: Agar component unmount ho jaye toh scroll wapas aa jaye
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email address";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "10 digit number required";
    if (!formData.requirement)
      newErrors.requirement = "Please select a service";
    if (!formData.message.trim())
      newErrors.message = "Please enter your message";

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
      toast.success("Query sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
      onClose();
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60000]"
          />

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0,
              x: typeof window !== "undefined" && window.innerWidth < 640 ? "-50%" : "0%" 
            }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className={`
              fixed z-[60001] w-[92%] max-w-sm
              top-[12%] left-1/2 -translate-x-1/2
              sm:top-24 sm:right-6 sm:left-auto sm:translate-x-0
            `}
          >
            <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto custom-scrollbar">
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                      <Zap size={20} fill="currentColor" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">
                      Quick Inquiry
                    </h3>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-red-500"
                  >
                    <X size={22} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={`w-full px-4 py-3.5 bg-slate-50 border rounded-2xl text-sm outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${
                        errors.name ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3.5 bg-slate-50 border rounded-2xl text-sm outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${
                        errors.email ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-3.5 bg-slate-50 border rounded-2xl text-sm outline-none transition-all focus:ring-4 focus:ring-blue-500/10 ${
                        errors.phone ? "border-red-400 bg-red-50/30" : "border-slate-200 focus:border-blue-500"
                      }`}
                    />
                  </div>

                  <div>
                    <select
                      name="requirement"
                      value={formData.requirement}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 bg-slate-50 border rounded-2xl text-sm outline-none cursor-pointer transition-all ${
                        errors.requirement ? "border-red-400" : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      }`}
                    >
                      <option value="">Select Service</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm outline-none resize-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default GetInTouchForm;