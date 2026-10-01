import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import logoIcon from "/public/logo_icon.png";

const ContactPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    requirement: "",
    phone: "",
    getNdaCopy: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose();
  };

  const testimonials = [
    {
      quote:
        "GDFX understood our requirements from the beginning and delivered exactly what we needed. Communication was clear throughout the project.",
      name: "Daniel Weber",
      role: "Managing Director",
      company: "Nexa Digital GmbH",
      initials: "DW",
      rating: 5,
    },
    {
      quote:
        "Working with GDFX was a smooth experience. They improved the overall performance of our platform and suggested practical solutions.",
      name: "Sarah Mitchell",
      role: "Product Manager",
      company: "BrightLayer Solutions",
      initials: "SM",
      rating: 5,
    },
    {
      quote:
        "What impressed us most was their ability to understand the business side. The final solution was reliable and delivered on schedule.",
      name: "Michael Carter",
      role: "Operations Director",
      company: "CoreVista Technologies",
      initials: "MC",
      rating: 5,
    },
    {
      quote:
        "The team was professional, flexible, and transparent throughout the development process. Even after launch, they continued to support us.",
      name: "Emily Johnson",
      role: "Co-Founder",
      company: "ScaleBridge",
      initials: "EJ",
      rating: 5,
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeTestimonial];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Modal Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col lg:grid lg:grid-cols-12 max-h-[96vh] sm:max-h-[85vh] my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-30 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors shadow-sm"
            >
              <IoClose className="text-base sm:text-lg" />
            </button>

            {/* LEFT SIDE: Form Section (7 Columns) */}
            <div className="order-1 lg:order-1 lg:col-span-7 p-3 sm:p-6 overflow-y-auto lg:overflow-y-auto max-h-[96vh] lg:max-h-[85vh] text-left">
              <h2 className="text-sm sm:text-2xl font-extrabold text-[#2d1b4e] mb-1 leading-snug pr-6">
                Have an idea buzzing in your head? Let's make it happen!
              </h2>

              <form onSubmit={handleSubmit} className="space-y-2 mt-2 sm:mt-3">
                {/* Full Name */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                    Full name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-xs text-gray-800 bg-gray-50/50"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-xs text-gray-800 bg-gray-50/50"
                  />
                </div>

                {/* Requirement / Service */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                    Requirement <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.requirement}
                    onChange={(e) =>
                      setFormData({ ...formData, requirement: e.target.value })
                    }
                    className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-xs text-gray-700 bg-gray-50/50"
                  >
                    <option value="" disabled>
                      Choose a service required
                    </option>
                    <option value="Custom Software">
                      Custom Software Development
                    </option>
                    <option value="Mobile App">
                      Mobile Application Design & Development
                    </option>
                    <option value="Web App">
                      Web Application Design & Development
                    </option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="API Development">API Development</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-0.5">
                    Phone number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-2.5 rounded-xl border border-gray-200 bg-gray-50 text-xs font-medium text-gray-700">
                      <span>🇮🇳</span>
                      <span>+91</span>
                    </div>
                    <input
                      type="tel"
                      required
                      placeholder="Enter phone number"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3 py-1.5 sm:px-3.5 sm:py-2.5 rounded-xl border border-gray-200 focus:border-purple-600 focus:ring-2 focus:ring-purple-100 outline-none transition-all text-xs text-gray-800 bg-gray-50/50"
                    />
                  </div>
                </div>

                {/* Perks / Security points */}
                <div className="space-y-0.5 text-[10px] sm:text-[11px] text-gray-600 font-medium">
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-purple-600 shrink-0 text-xs" />
                    <span>Get a response in few minutes.</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FaCheckCircle className="text-purple-600 shrink-0 text-xs" />
                    <span>Your idea stays 100% protected under NDA.</span>
                  </div>
                </div>

                {/* Checkbox */}
                <div className="flex items-start gap-1.5">
                  <input
                    type="checkbox"
                    id="nda"
                    checked={formData.getNdaCopy}
                    onChange={(e) =>
                      setFormData({ ...formData, getNdaCopy: e.target.checked })
                    }
                    className="mt-0.5 w-3 h-3 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label
                    htmlFor="nda"
                    className="text-[10px] sm:text-[11px] text-gray-600 cursor-pointer leading-tight"
                  >
                    Receive a copy of Non-Disclosure Agreement for full security
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 sm:py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-[#7e22ce] to-[#581c87] hover:from-[#581c87] hover:to-[#7e22ce] shadow-md shadow-purple-200 transition-all text-xs uppercase tracking-wider mt-1"
                >
                  Submit Request
                </motion.button>
              </form>
            </div>

            {/* RIGHT SIDE: Branding Section (Hidden on mobile) */}
            <div className="order-2 lg:order-2 lg:col-span-5 relative p-4 sm:p-7 text-white hidden lg:flex flex-col justify-between overflow-hidden bg-[#0b1329]">
              {/* Background Logo */}
              <img
                src={logoIcon}
                alt=""
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 object-contain opacity-[0.06] pointer-events-none z-0"
              />

              {/* Soft Background Glow */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl" />

              {/* Main Content */}
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-gray-300 font-semibold">
                    Client Stories
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-1 text-white">
                  Still deciding?
                </h3>

                <p className="text-[11px] text-gray-300 leading-relaxed max-w-sm">
                  See what businesses say about working with GDFX.
                </p>

                {/* Testimonial */}
                <div
                  key={activeTestimonial}
                  className="mt-5 p-4 rounded-xl bg-black/40 border border-white/15 backdrop-blur-md relative shadow-xl"
                >
                  {/* Quote Mark */}
                  <div className="absolute top-2 right-4 text-4xl font-serif text-white/10">
                    “
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-2.5">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <span key={index} className="text-yellow-400 text-[11px]">
                        ★
                      </span>
                    ))}
                    <span className="text-[9px] text-gray-400 ml-1.5">5.0</span>
                  </div>

                  <p className="text-[11px] text-gray-100 leading-relaxed min-h-[65px]">
                    "{testimonial.quote}"
                  </p>

                  {/* Client */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center font-bold text-[10px] text-white shadow">
                        {testimonial.initials}
                      </div>

                      <div>
                        <h4 className="text-[11px] font-bold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-[9px] text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-[9px] text-gray-300 font-medium">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    {/* Verified */}
                    <div className="text-[8px] px-2 py-1 rounded-full bg-green-400/10 border border-green-400/20 text-green-300">
                      ✓ Verified
                    </div>
                  </div>
                </div>

                {/* Slider Controls */}
                <div className="flex items-center justify-between mt-3">
                  {/* Dots */}
                  <div className="flex items-center gap-1.5">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveTestimonial(index)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          activeTestimonial === index
                            ? "w-5 bg-white"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Counter */}
                  <span className="text-[9px] text-gray-400">
                    {String(activeTestimonial + 1).padStart(2, "0")} /{" "}
                    {String(testimonials.length).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Bottom Platforms */}
              <div className="relative z-10 mt-5 pt-4 border-t border-white/15">
                <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-gray-400 mb-3 text-center">
                  Recognized Across Leading Platforms
                </p>

                <div className="flex items-center justify-between gap-2 text-center text-[10px] font-semibold text-white">
                  <div className="px-2 py-2 rounded-lg bg-black/30 border border-white/10 flex-1 hover:bg-white/10 transition">
                    AppFutura
                  </div>
                  <div className="px-2 py-2 rounded-lg bg-black/30 border border-white/10 flex-1 hover:bg-white/10 transition">
                    GoodFirms
                  </div>
                  <div className="px-2 py-2 rounded-lg bg-black/30 border border-white/10 flex-1 hover:bg-white/10 transition">
                    Clutch
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;