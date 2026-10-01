import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MdArrowOutward, MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { FiUser, FiMessageSquare, FiCheck } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { toast } from "react-hot-toast";
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

const benefits = [
  "Free project consultation",
  "Response within 24 hours",
  "No-obligation discussion",
];

const RequestCallback = () => {
  const form = useRef();
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    user_requirement: "",
    user_message: "",
  });

  const sendEmail = async (e) => {
    e.preventDefault();

    let validationErrors = {
      user_name: "",
      user_email: "",
      user_phone: "",
      user_requirement: "",
      user_message: "",
    };

    const formDataObj = new FormData(form.current);

    const userName = formDataObj.get("user_name");
    const userEmail = formDataObj.get("user_email");
    const userPhone = formDataObj.get("user_phone");
    const userRequirement = formDataObj.get("user_requirement");
    const userMessage = formDataObj.get("user_message");

    if (!userName.trim()) validationErrors.user_name = "Name is required!";

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(userEmail)) validationErrors.user_email = "Invalid email address!";

    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(userPhone)) validationErrors.user_phone = "10-digit number required!";

    if (!userRequirement) validationErrors.user_requirement = "Please select a service!";
    if (!userMessage.trim()) validationErrors.user_message = "Message is required!";

    if (Object.values(validationErrors).some((error) => error !== "")) {
      setErrors(validationErrors);
      return;
    }

    setErrors({
      user_name: "",
      user_email: "",
      user_phone: "",
      user_requirement: "",
      user_message: "",
    });

    setLoading(true);

    try {
      await submitContactInquiry({
        name: userName,
        email: userEmail,
        phone: userPhone,
        requirement: userRequirement,
        message: userMessage,
      });

      toast.success("Callback request sent successfully!");
      form.current.reset();
    } catch (error) {
      toast.error(error.message || "Failed to submit request!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section ref={containerRef} className="relative bg-bgFirstBlue py-20 lg:py-28 overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-[200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primaryBlue/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-[150px] -top-[150px] w-[500px] h-[500px] rounded-full bg-secondaryPurple/10 blur-[140px]" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:55px_55px]" />

      <div className="max-w-7xl mx-auto !my-0 relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 xl:gap-20 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] backdrop-blur-md mb-6">
            <HiOutlineSparkles className="text-primaryBlue text-lg" />
            <span className="text-xs sm:text-sm font-medium tracking-wide text-white/70">Let's Build Something Great</span>
          </div>

          <h2 className="H2 font-bold text-white leading-[1.12] mb-5">
            Have an idea? <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue via-blue-400 to-secondaryPurple">Let's Talk.</span>
          </h2>

          <p className="P text-white/55 leading-relaxed max-w-lg mb-8">
            Tell us what you're looking to build. Our team will understand your requirements and help you find the right digital solution for your business.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primaryBlue/10 flex items-center justify-center shrink-0">
                  <FiCheck className="text-primaryBlue text-sm" />
                </div>

                <span className="text-sm text-white/65">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-7">
            <p className="text-xs uppercase tracking-[0.18em] text-white/30 mb-2">Start a conversation</p>
            <p className="text-sm text-white/55">Your next great product could start right here.</p>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-[28px] bg-white/[0.055] backdrop-blur-xl p-5 sm:p-7 lg:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.18)]"
        >
          <div className="mb-7">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-primaryBlue">Get in touch</span>
                <h3 className="text-xl sm:text-2xl font-semibold text-white mt-2">Request a callback</h3>
              </div>

              <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-white/[0.05]">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-50 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
                </span>

                <span className="text-[11px] text-white/50">Available</span>
              </div>
            </div>

            <p className="text-sm text-white/40 mt-2">Fill in your details and we'll get back to you shortly.</p>
          </div>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">

            {/* Name + Email */}
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField icon={<FiUser />} type="text" name="user_name" placeholder="Your name" error={errors.user_name} />

              <InputField icon={<MdOutlineEmail />} type="email" name="user_email" placeholder="Email address" error={errors.user_email} />
            </div>

            {/* Phone + Service */}
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField icon={<MdOutlinePhone />} type="tel" name="user_phone" placeholder="Phone number" error={errors.user_phone} />

              <div className="relative">
                <div className="relative rounded-xl bg-white/[0.045] transition-all duration-300 focus-within:bg-white/[0.075]">
                  <select name="user_requirement" defaultValue="" className="w-full h-[52px] pl-4 pr-10 bg-transparent text-sm text-white/80 outline-none appearance-none cursor-pointer">
                    <option value="" disabled className="bg-[#10182a]">Select a service</option>

                    {SERVICES.map((service) => (
                      <option key={service} value={service} className="bg-[#10182a]">
                        {service}
                      </option>
                    ))}
                  </select>

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/30">
                    <svg width="11" height="7" viewBox="0 0 12 8" fill="none">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <ErrorMessage message={errors.user_requirement} />
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <div className="relative rounded-xl bg-white/[0.045] transition-all duration-300 focus-within:bg-white/[0.075]">
                <FiMessageSquare className="absolute top-[18px] left-4 text-white/25 text-lg" />

                <textarea name="user_message" rows={4} placeholder="Tell us about your project..." className="w-full pl-11 pr-4 py-[15px] bg-transparent text-white text-sm placeholder:text-white/25 outline-none resize-none" />
              </div>

              <ErrorMessage message={errors.user_message} />
            </div>

            {/* Button */}
            <motion.button
              whileHover={!loading ? { y: -2 } : {}}
              whileTap={!loading ? { scale: 0.98 } : {}}
              disabled={loading}
              type="submit"
              className="group relative w-full h-[54px] mt-1 rounded-xl overflow-hidden bg-gradient-to-r from-primaryBlue to-secondaryPurple text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_12px_35px_rgba(42,41,248,0.18)] hover:shadow-[0_16px_40px_rgba(42,41,248,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />

              {loading ? (
                <>
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Let's Discuss Your Project</span>
                  <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </>
              )}
            </motion.button>

            <p className="text-center text-[11px] text-white/25 leading-relaxed">
              By submitting this form, you agree to be contacted regarding your project inquiry.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const InputField = ({ icon, type, name, placeholder, error }) => (
  <div className="relative">
    <div className="relative h-[52px] rounded-xl bg-white/[0.045] transition-all duration-300 focus-within:bg-white/[0.075]">
      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg text-white/25 pointer-events-none">{icon}</span>

      <input type={type} name={name} placeholder={placeholder} className="w-full h-full pl-11 pr-4 bg-transparent text-white text-sm placeholder:text-white/25 outline-none" />
    </div>

    <ErrorMessage message={error} />
  </div>
);

const ErrorMessage = ({ message }) => (
  <AnimatePresence>
    {message && (
      <motion.span initial={{opacity: 0, y: -3 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute left-2 -bottom-[17px] text-[10px] font-medium text-red-400">
        {message}
      </motion.span>
    )}
  </AnimatePresence>
);

export default RequestCallback;