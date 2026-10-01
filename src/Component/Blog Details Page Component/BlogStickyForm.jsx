"use client";

import React, { useState, useEffect, useCallback } from "react";
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

const BlogStickyForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  // Show form after a few seconds (e.g., 4 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

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
      setIsVisible(false); // Hide on successful submission
    } catch (error) {
      toast.error(error.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="sticky top-24 w-full max-w-sm ml-auto z-50">
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 80, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded-2xl border border-slate-200 shadow-2xl shadow-purple-500/10 overflow-hidden relative"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 p-1.5 rounded-full transition-all"
              aria-label="Close Form"
            >
              <X size={16} />
            </button>

            <div className="p-6">
              <div className="flex items-center gap-2 mb-5">
                <div className="bg-[#7000ff]/10 p-1.5 rounded-lg text-[#7000ff]">
                  <Zap size={18} fill="currentColor" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  Quick Inquiry
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#7000ff]/20 focus:bg-white outline-none ${
                      errors.name
                        ? "border-red-400 bg-red-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.name && (
                    <span className="text-[11px] text-red-500 font-medium ml-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#7000ff]/20 focus:bg-white outline-none ${
                      errors.email
                        ? "border-red-400 bg-red-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-[11px] text-red-500 font-medium ml-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#7000ff]/20 focus:bg-white outline-none ${
                      errors.phone
                        ? "border-red-400 bg-red-50/30"
                        : "border-slate-200"
                    }`}
                  />
                  {errors.phone && (
                    <span className="text-[11px] text-red-500 font-medium ml-1">
                      {errors.phone}
                    </span>
                  )}
                </div>

                {/* Requirement Select */}
                <div className="space-y-1 relative">
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm appearance-none cursor-pointer outline-none transition-all focus:ring-2 focus:ring-[#7000ff]/20 focus:bg-white ${
                      errors.requirement
                        ? "border-red-400 bg-red-50/30"
                        : "border-slate-200"
                    } ${formData.requirement === "" ? "text-slate-400" : "text-slate-800 font-medium"}`}
                  >
                    <option value="">Select Service</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s} className="text-slate-800">
                        {s}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-4 pointer-events-none text-slate-400">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  {errors.requirement && (
                    <span className="text-[11px] text-red-500 font-medium ml-1">
                      {errors.requirement}
                    </span>
                  )}
                </div>

                {/* Message Box */}
                <div className="space-y-1">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Briefly describe your requirements..."
                    className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm transition-all focus:ring-2 focus:ring-[#7000ff]/20 focus:bg-white outline-none resize-none ${
                      errors.message
                        ? "border-red-400 bg-red-50/30"
                        : "border-slate-200"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-[11px] text-red-500 font-medium ml-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-[#9000ff] to-[#7000ff] hover:opacity-95 text-white font-bold rounded-xl shadow-lg shadow-[#7000ff]/25 transition-all flex items-center justify-center gap-2 group disabled:opacity-80"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send
                        size={16}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BlogStickyForm;