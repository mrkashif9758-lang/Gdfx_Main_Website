import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion,
  useInView,
  animate,
  stagger,
} from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { submitContactInquiry } from "../../lib/contact"; // Ensure path is correct

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

const BookYourConsultains = () => {
  // ===================== LEFT SECTION =====================
  const leftRef = useRef(null);
  const isInView = useInView(leftRef, { once: true, margin: "-100px" });
  const featureRef = useRef(null);

  const featureItems = [
    "Book Your Consultation Now",
    "Get Expert Advice Today",
    "Reserve Your Consultation Slot",
    "Schedule Your Free Consultation",
    "Consult with Our Experts",
    "Plan Your Strategy Session",
  ];

  useEffect(() => {
    if (isInView && featureRef.current) {
      const items = featureRef.current.querySelectorAll(".feature-item");
      animate(
        items,
        { opacity: 1, x: 0 },
        { delay: stagger(0.15), duration: 0.5 }
      );
    }
  }, [isInView]);

  // ===================== RIGHT FORM SECTION =====================
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirement: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = useCallback(() => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "10-digit phone number is required";
    if (!formData.requirement)
      newErrors.requirement = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await submitContactInquiry(formData);
      toast.success("Consultation request sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirement: "",
        message: "",
      });
    } catch (err) {
      toast.error(err.message || "Failed to submit request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="customContainer max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ===================== LEFT SIDE ===================== */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 flex flex-col gap-6"
          >
            <motion.div
              className="inline-flex gap-2 items-center self-start bg-[#faf5ff] px-4 py-1.5 rounded-full border border-[#e9d5ff]"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <RxDragHandleDots2 className="rotate-90 text-[#9333ea] text-xl" />
              <span className="text-[#9333ea] font-semibold text-xs sm:text-sm tracking-wider uppercase font-lato">
                CONNECT WITH US
              </span>
            </motion.div>

            <motion.h2
              className="text-[30px] sm:text-[40px] xl:text-[46px] font-nunito font-extrabold text-[#2d1b4e] leading-tight capitalize tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              Schedule Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7e22ce] to-[#581c87]">
                Consultation Today
              </span>
            </motion.h2>

            <motion.p
              className="text-[14px] sm:text-[16px] font-lato text-[#4a3575] leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Book your consultation to explore tailored solutions and expert
              insights today. Let's build something exceptional together.
            </motion.p>

            <div ref={featureRef} className="grid sm:grid-cols-2 gap-4 pt-2">
              {featureItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="feature-item cursor-default flex items-center gap-3 opacity-0 -translate-x-2 bg-[#faf5ff]/60 p-3.5 rounded-2xl border border-[#e9d5ff]/50"
                  whileHover={{ x: 5, backgroundColor: "#faf5ff" }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-[#9333ea] text-xl flex-shrink-0">
                    <FiCheckCircle />
                  </div>
                  <span className="text-[#4a3575] font-lato font-medium text-xs sm:text-sm">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                className="group inline-block"
              >
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl font-lato font-semibold text-white bg-gradient-to-b from-[#7e22ce] to-[#581c87] hover:from-[#581c87] hover:to-[#7e22ce] shadow-md shadow-purple-900/20 flex items-center gap-2 group transition-all"
                >
                  <span>Contact Now</span>
                  <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* ===================== RIGHT FORM ===================== */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 rounded-3xl bg-[#faf5ff] border border-[#e9d5ff]/80 p-6 sm:p-10 shadow-xl shadow-purple-900/5 relative"
          >
            <div className="mb-6">
              <h3 className="font-nunito font-bold text-[#2d1b4e] text-xl sm:text-2xl mb-1">
                Book a Slot
              </h3>
              <p className="font-lato text-xs sm:text-sm text-[#4a3575]">
                Fill out the form below and our experts will get back to you shortly.
              </p>
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
              {/* Name */}
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`px-4 py-3.5 bg-white rounded-xl placeholder:text-[#4a3575]/50 text-[#2d1b4e] font-lato text-sm outline-none w-full transition-all focus:ring-2 focus:ring-[#9333ea] border ${errors.name ? "border-red-500" : "border-[#e9d5ff]"}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-lato font-medium">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`px-4 py-3.5 bg-white rounded-xl placeholder:text-[#4a3575]/50 text-[#2d1b4e] font-lato text-sm outline-none w-full transition-all focus:ring-2 focus:ring-[#9333ea] border ${errors.email ? "border-red-500" : "border-[#e9d5ff]"}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-lato font-medium">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div className="w-full">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className={`px-4 py-3.5 bg-white rounded-xl placeholder:text-[#4a3575]/50 text-[#2d1b4e] font-lato text-sm outline-none w-full transition-all focus:ring-2 focus:ring-[#9333ea] border ${errors.phone ? "border-red-500" : "border-[#e9d5ff]"}`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-lato font-medium">{errors.phone}</p>
                )}
              </div>

              {/* Requirement Select */}
              <div className="w-full relative">
                <select
                  name="requirement"
                  value={formData.requirement}
                  onChange={handleChange}
                  className={`px-4 py-3.5 bg-white rounded-xl outline-none w-full font-lato text-sm transition-all focus:ring-2 focus:ring-[#9333ea] appearance-none border cursor-pointer ${
                    errors.requirement
                      ? "border-red-500"
                      : "border-[#e9d5ff]"
                  } ${formData.requirement === "" ? "text-[#4a3575]/50" : "text-[#2d1b4e]"}`}
                  style={{
                    backgroundImage:
                      "linear-gradient(45deg, transparent 50%, #7e22ce 50%), linear-gradient(135deg, #7e22ce 50%, transparent 50%)",
                    backgroundPosition:
                      "calc(100% - 20px) calc(1em + 6px), calc(100% - 15px) calc(1em + 6px)",
                    backgroundSize: "6px 6px, 6px 6px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <option value="" disabled className="text-gray-400">
                    Select Requirement / Service
                  </option>
                  {SERVICES.map((service) => (
                    <option
                      key={service}
                      value={service}
                      className="bg-white text-[#2d1b4e] py-2"
                    >
                      {service}
                    </option>
                  ))}
                </select>
                {errors.requirement && (
                  <p className="text-red-500 text-xs mt-1 font-lato font-medium">{errors.requirement}</p>
                )}
              </div>

              {/* Message */}
              <div className="w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write a Message..."
                  className={`px-4 py-3.5 bg-white rounded-xl placeholder:text-[#4a3575]/50 text-[#2d1b4e] font-lato text-sm outline-none w-full focus:ring-2 focus:ring-[#9333ea] resize-none border ${errors.message ? "border-red-500" : "border-[#e9d5ff]"}`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1 font-lato font-medium">{errors.message}</p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl font-lato font-semibold text-white bg-gradient-to-b from-[#7e22ce] to-[#581c87] hover:from-[#581c87] hover:to-[#7e22ce] shadow-md shadow-purple-900/20 transition-all mt-2 disabled:opacity-60 cursor-pointer"
              >
                {loading ? "Submitting..." : "Send a Message"}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BookYourConsultains;