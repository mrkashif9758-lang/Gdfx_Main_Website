import React, { useState, useCallback, useEffect } from "react";
import { toast } from "react-hot-toast";
import { FaPaperPlane, FaChevronLeft, FaChevronRight,} from "react-icons/fa6";

import { HiBuildingOffice2 } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { submitContactInquiry } from "../../lib/contact"; 

import india from "../../assets/Contact/india.svg";
import usa from "../../assets/Contact/usa.svg";
import phoneLogo from '../../assets/Contact/call-logo.webp';
import teamsLogo from '../../assets/Contact/microsoft-logo.webp'
import gmailLogo from  '../../assets/Contact/email-logo.webp'
import whatsappLogo from '../../assets/Contact/whatsapp-logo.webp'

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

const TESTIMONIALS = [
  {
    quote: "They were extremely responsive and delivered a high-end, custom solution. Their grasp of tech stacks and seamless execution turned our vision into reality ahead of schedule.",
    name: "Alistair S.",
    role: "Founder",
    initials: "AS"
  },
  {
    quote: "Gdfx's team transformed our digital presence completely. Their expertise in UI/UX and web development helped us scale our user engagement by leaps and bounds.",
    name: "Sarah Jenkins",
    role: "Product Head",
    initials: "SJ"
  },
  {
    quote: "Outstanding communication and top-notch technical delivery. Working with them on our custom platform was smooth, transparent, and exceptionally professional.",
    name: "Rahul Sharma",
    role: "CTO, TechVenture",
    initials: "RS"
  }
];

const LOCATIONS = [
  {
    country: "INDIA",
    address: "Gaur City Center 8Floor -O899, Gr.Noida, (Head Office)",
    phone: "+91 XXXXXXXX",
    hasFlag: true,
    flag: india,
  },
  {
    country: "UNITED STATES",
    address: "30 N Gould St, Sheridan, WY 82801, USA",
    phone: "+1 3073818900",
    hasFlag: true,
    flag: usa,
  },
  {
    country: "UNITED KINGDOM",
    address: "85 Great Portland Street, London, W1W 7LT, England",
    phone: "Available via email",
    hasFlag: false,
  },
  {
    country: "UAE",
    address: "Ontario Tower, Dubai, UAE",
    phone: "Available via email",
    hasFlag: false,
  },
  {
    country: "CANADA",
    address: "7168 179 St, Surrey, BC, V4N 0R5",
    phone: "Available via email",
    hasFlag: false,
  },
];

const REASONS_LIST = [
  "You want your app built with the latest technology.",
  "You need a price quote for your project.",
  "You have questions about mobile or web development.",
  "You want a website or app to grow your business.",
  "You liked our portfolio and want to work with us.",
  "You want a website built with strong technical expertise."
];

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
    updatesConsent: true,
    termsConsent: false,
  });

  const [errors, setErrors] = useState({});

  // Automatic Testimonial Slider Effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.requirement) newErrors.requirement = "Please select a requirement";
    if (!formData.termsConsent) newErrors.termsConsent = "You must agree to terms";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }, [errors]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitContactInquiry(formData);
      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
        updatesConsent: true,
        termsConsent: false,
      });
    } catch (err) {
      toast.error(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
   
    <motion.section
      className="bg-[#0B0F19] overflow-hidden relative text-white pt-16 pb-0 px-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400">touch</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm sm:text-base max-w-xl mx-auto">
            Reach out, and let's create a universe of possibilities together!
          </p>
        </div>

        {/* Main Grid: Form Card & Testimonial Slider Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Form Box (Span 7) */}
          <div className="lg:col-span-7 bg-[#111827]/85 backdrop-blur-xl p-6 sm:p-10 rounded-2xl border border-purple-500/20 shadow-[0_0_50px_rgba(109,40,217,0.15)]">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">
              Have an idea buzzing in your head? Let's make it happen!
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mb-8">
              Fill out the details below and our team will get back to you promptly.
            </p>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              
              {/* Full Name */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">Full name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 bg-[#1F2937]/60 border rounded-xl text-white placeholder:text-slate-500 text-sm outline-none transition-all ${
                    errors.name ? "border-rose-500" : "border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                  }`}
                />
                {errors.name && <span className="text-rose-400 text-xs mt-1 block">{errors.name}</span>}
              </div>

              {/* Email & Requirement Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className={`w-full px-4 py-3 bg-[#1F2937]/60 border rounded-xl text-white placeholder:text-slate-500 text-sm outline-none transition-all ${
                      errors.email ? "border-rose-500" : "border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    }`}
                  />
                  {errors.email && <span className="text-rose-400 text-xs mt-1 block">{errors.email}</span>}
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">Requirement</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#1F2937] border rounded-xl text-white text-sm outline-none transition-all cursor-pointer ${
                      errors.requirement ? "border-rose-500" : "border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    }`}
                  >
                    <option value="" disabled>Choose your primary requirement</option>
                    {SERVICES.map((service) => (
                      <option key={service} value={service} className="bg-[#1F2937] text-white">
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.requirement && <span className="text-rose-400 text-xs mt-1 block">{errors.requirement}</span>}
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">Phone number</label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1.5 px-3 py-3 bg-[#1F2937]/80 border border-purple-500/30 rounded-xl text-sm">
                    <img src={india} alt="India Flag" className="w-5 h-4 object-contain rounded-xs" />
                    <span className="text-slate-300 font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full px-4 py-3 bg-[#1F2937]/60 border rounded-xl text-white placeholder:text-slate-500 text-sm outline-none transition-all ${
                      errors.phone ? "border-rose-500" : "border-purple-500/30 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                    }`}
                  />
                </div>
                {errors.phone && <span className="text-rose-400 text-xs mt-1 block">{errors.phone}</span>}
              </div>

              {/* Message Field Added */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-semibold mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your project..."
                  className="w-full px-4 py-3 bg-[#1F2937]/60 border border-purple-500/30 rounded-xl text-white placeholder:text-slate-500 text-sm outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-2">
                <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-slate-300 select-none">
                  <input
                    type="checkbox"
                    name="updatesConsent"
                    checked={formData.updatesConsent}
                    onChange={handleChange}
                    className="mt-0.5 accent-purple-600 w-4 h-4 rounded cursor-pointer"
                  />
                  <span>Get resources & future updates.</span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-xs sm:text-sm text-slate-300 select-none">
                  <input
                    type="checkbox"
                    name="termsConsent"
                    checked={formData.termsConsent}
                    onChange={handleChange}
                    className="mt-0.5 accent-purple-600 w-4 h-4 rounded cursor-pointer"
                  />
                  <span>I authorize use of contact details & agreement for security.</span>
                </label>
                {errors.termsConsent && <span className="text-rose-400 text-xs block">{errors.termsConsent}</span>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="mt-3 w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50"
              >
                {loading ? "Sending..." : (
                  <>
                    <span>Submit</span>
                    <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* Right Side Card: Testimonial Slider Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#111827]/85 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-purple-500/20 shadow-[0_0_50px_rgba(109,40,217,0.15)] flex flex-col justify-between h-full min-h-[440px]">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Still deciding?
                </h3>
                {/* Arrow Controls */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 hover:bg-purple-900/50 text-purple-300 transition-all cursor-pointer"
                    aria-label="Previous review"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-lg bg-purple-950/40 border border-purple-500/30 hover:bg-purple-900/50 text-purple-300 transition-all cursor-pointer"
                    aria-label="Next review"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
              <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                Discover why clients choose Abhiwan for their transformative digital solutions.
              </p>

              {/* Animated Testimonial Card */}
              <div className="relative overflow-hidden min-h-[170px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30"
                  >
                    <p className="text-xs sm:text-sm text-slate-300 italic mb-4 leading-relaxed">
                      "{TESTIMONIALS[currentTestimonial].quote}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center font-bold text-xs justify-center text-white">
                        {TESTIMONIALS[currentTestimonial].initials}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white">{TESTIMONIALS[currentTestimonial].name}</h4>
                        <p className="text-[10px] text-purple-400">{TESTIMONIALS[currentTestimonial].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Slider Dots Indicator */}
              <div className="flex justify-center items-center gap-1.5 mt-4">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentTestimonial(idx)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      currentTestimonial === idx ? "w-6 bg-purple-500" : "w-1.5 bg-slate-700"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Recognized Platforms Badges */}
            <div className="pt-6 border-t border-slate-800 mt-6">
              <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-3 text-center">
                Recognised Across Leading Platforms
              </p>
              <div className="flex items-center justify-center gap-4 opacity-75 grayscale hover:grayscale-0 transition-all">
                <span className="text-xs font-extrabold px-2 py-1 bg-slate-800 rounded text-purple-300">Clutch</span>
                <span className="text-xs font-extrabold px-2 py-1 bg-slate-800 rounded text-indigo-300">GoodFirms</span>
                <span className="text-xs font-extrabold px-2 py-1 bg-slate-800 rounded text-fuchsia-300">Upwork</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* WHERE WE OPERATE SECTION */}
       <div className="w-full bg-white text-slate-900 py-12 px-4 sm:px-6 lg:px-8 mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900">
              Where We <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Operate</span>
            </h3>
            <p className="text-slate-600 mt-2 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Global reach with localized excellence and dedicated support teams.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {LOCATIONS.map((loc, idx) => (
              <div 
                key={idx} 
                className={` p-5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-md relative ${
                  idx !== LOCATIONS.length - 1 ? "lg:after:content-[''] lg:after:absolute lg:after:right-[-12px] lg:after:top-1/4 lg:after:h-1/2 lg:after:w-[1px] lg:after:bg-purple-900" : ""
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-purple-50 border border-purple-200 flex items-center justify-center mb-4 group-hover:bg-purple-100 transition-colors">
                    {loc.hasFlag ? (
                      <img src={loc.flag} alt={loc.country} className="w-6 h-4 object-contain rounded-xs" />
                    ) : (
                      <HiBuildingOffice2 className="text-purple-600 text-lg" />
                    )}
                  </div>
                  <h4 className="text-xs font-extrabold text-purple-900 mb-1.5 tracking-wide uppercase">{loc.country}</h4>
                  <p className="text-[11px] text-slate-600 leading-relaxed mb-4 font-normal">{loc.address}</p>
                </div>
                <div className="pt-3 border-t border-slate-200">
                  <span className="text-[11px] font-bold text-purple-700 block">{loc.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* "YOU HAVE MADE THIS FAR!" SECTION */}
      <div className="w-full bg-[#0B0F19] border-t border-purple-500/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text & List Content (Span 7) */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              You have made <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-400">this far!</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              If you are looking for redesigning an existing App/website or building one from the scratch, we have the expertise to convert your dream into reality.<br />
              <span className="text-purple-400 font-semibold mt-2 inline-block">Feel Free To Contact Us if:</span>
            </p>

            <ul className="space-y-3 mb-10">
              {REASONS_LIST.map((reason, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-xs sm:text-sm">
                  <span className="text-purple-400 font-bold mt-0.5">*</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Illustration Placeholder Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#111827]/50 border border-purple-500/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-purple-950/50 border border-purple-500/30 flex items-center justify-center mb-4 text-purple-400 text-2xl">
              💻
            </div>
            <h4 className="text-sm font-bold text-white mb-2">Transformative Digital Solutions</h4>
            <p className="text-xs text-slate-400">Let's build scalable, high-performance applications tailored specifically to your business goals.</p>
          </div>

        </div>

        {/* Floating Quick Action Footer Bar */}
      <div className="mt-16 pt-12 border-t border-purple-500/20 text-center">
  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
    Get in Touch
  </h3>

  <p className="text-slate-400 text-xs sm:text-sm mb-8">
    We'd love to hear from you
  </p>

  <div className="inline-flex items-center justify-center gap-3 sm:gap-6 bg-white border border-purple-500/30 px-6 py-4 rounded-full shadow-2xl backdrop-blur-md">

    {/* Phone */}
    <a
      href="tel:+918882648039"
      className="w-11 h-11 flex items-center justify-center rounded-full
                 hover:bg-slate-100 transition-all duration-300
                 hover:scale-110"
      title="Call Us"
    >
      <img
        src={phoneLogo}
        alt="Phone"
        className="w-7 h-7 object-contain"
      />
    </a>

    {/* Microsoft Teams */}
    <a
      href="https://teams.microsoft.com"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full
                 hover:bg-slate-100 transition-all duration-300
                 hover:scale-110"
      title="Microsoft Teams"
    >
      <img
        src={teamsLogo}
        alt="Microsoft Teams"
        className="w-7 h-7 object-contain"
      />
    </a>

    {/* Gmail */}
    <a
      href="mailto:contact@abhiwan.com"
      className="w-11 h-11 flex items-center justify-center rounded-full
                 hover:bg-slate-100 transition-all duration-300
                 hover:scale-110"
      title="Gmail"
    >
      <img
        src={gmailLogo}
        alt="Gmail"
        className="w-7 h-7 object-contain"
      />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/918882648039"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full
                 hover:bg-slate-100 transition-all duration-300
                 hover:scale-110"
      title="WhatsApp"
    >
      <img
        src={whatsappLogo}
        alt="WhatsApp"
        className="w-7 h-7 object-contain"
      />
    </a>

  </div>
</div>
      </div>

    </motion.section>
  );
}

export default React.memo(ContactForm);