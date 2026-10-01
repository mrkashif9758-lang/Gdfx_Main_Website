import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";
import { subscribeNewsletter } from "../../lib/subscriber"; // Import the service function

const SubscribeToNewsLetter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleEmailSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await subscribeNewsletter({ email });
      toast.success(res.message || "Subscribed successfully!");
      setEmail("");
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full bg-slate-950 relative overflow-hidden py-20 lg:py-28 ">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/15  blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/10  blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-slate-900/90 to-slate-950/90 backdrop-blur-2xl   p-8 sm:p-12 lg:p-16 shadow-2xl shadow-purple-950/20 grid lg:grid-cols-12 grid-cols-1 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-5">
              <HiSparkles className="text-sm text-purple-400" />
              <span>Stay Updated</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-white mb-4 tracking-tight leading-tight">
              Subscribe to Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-500">
                Newsletter
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Stay informed about the latest investor updates, financial results,
              and company announcements by subscribing to our newsletter.
            </p>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 w-full"
          >
            <form onSubmit={handleEmailSubmit} className="w-full">
              <div className="relative flex flex-col sm:flex-row items-center gap-3">
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    className="w-full outline-none py-4 px-5 rounded-2xl bg-slate-950/80 border border-slate-700/80 focus:border-purple-500 text-white placeholder:text-slate-500 text-sm sm:text-base shadow-inner transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-2xl flex items-center justify-center gap-2.5 shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  {isLoading ? (
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <>
                      <span>Subscribe</span>
                      <FaPaperPlane className="text-sm" />
                    </>
                  )}
                </motion.button>
              </div>

              {error && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="text-rose-400 text-xs sm:text-sm mt-2 pl-2"
                >
                  {error}
                </motion.p>
              )}

              <p className="text-slate-500 text-xs sm:text-sm mt-3 pl-1 text-center lg:text-left">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SubscribeToNewsLetter;