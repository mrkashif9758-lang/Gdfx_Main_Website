import logo_icon from "../../assets/logo/logo.webp";
import { Link } from "react-router-dom";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { motion } from "framer-motion";
import { FaPinterest } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import usa from "../../assets/Contact/usa.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <div className="customContainer max-w-7xl mx-auto px-4 pt-16 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col gap-4">
            <div>
              <img src={logo_icon} alt="Logo" className="h-10 w-auto object-contain" />
              <p className="pt-3 text-sm text-gray-400 font-lato leading-relaxed">
                Empower Your Success with Tailored Solutions, Expertise, and
                Transparent Communication.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {[
                {
                  icon: <AiOutlineYoutube size={20} />,
                  color: "#FF0000",
                  href: "https://www.youtube.com/@globaldigitalsfx",
                },
                {
                  icon: <AiOutlineInstagram size={20} />,
                  color: "#E4405F",
                  href: "https://www.instagram.com/globaldigitalsfx/",
                },
                {
                  icon: <FaPinterest size={20} />,
                  color: "#E60023",
                  href: "https://in.pinterest.com/globaldigitalsfx/",
                },
                {
                  icon: <AiOutlineLinkedin size={20} />,
                  color: "#0A66C2",
                  href: "https://www.linkedin.com/in/global-digital-fx-04972b345/",
                },
                {
                  icon: <AiOutlineFacebook size={20} />,
                  color: "#1877F2",
                  href: "https://www.facebook.com/GlobalDigitalsFx",
                },
                {
                  icon: <AiOutlineWhatsApp size={20} />,
                  color: "#25D366",
                  href: "https://wa.me/18774667021",
                },
              ].map((social, index) => (
                <motion.a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-900 border border-neutral-800 text-gray-300 w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                  key={index}
                  whileHover={{
                    backgroundColor: social.color,
                    color: "#fff",
                    scale: 1.1,
                    rotate: [0, -10, 0, 10, 0],
                    transition: { duration: 0.1 },
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col">
            <h3 className="mb-5 font-nunito font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Services
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              {[
                { name: "Mobile App Development", path: "/service/mobile-app-development" },
                { name: "Web App Development", path: "/service/web-app-development" },
                { name: "UI/UX Design", path: "/service/ui-ux-design" },
                { name: "Api Development", path: "/service/api-development" },
                { name: "Custom Software Development", path: "/service/custom-software-development" },
                { name: "Digital Services", path: "/service/digital-transformation-service" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:underline transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col">
            <h3 className="mb-5 font-nunito font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Company
            </h3>
            <ul className="flex flex-col gap-3 text-gray-400 font-lato text-sm">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Term & Condition", path: "/terms-of-services" },
                { name: "Payment Method", path: "/payment-method" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "NGO", path: "/ngo" },
                { name: "Career", path: "/career" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="hover:text-white hover:underline transition-colors"
                    onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="flex flex-col">
            <h3 className="mb-5 font-nunito font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-sm font-lato text-gray-400">
              
              {/* Phone */}
              <div className="flex gap-3 items-center group">
                <img src={usa} className="w-6 h-6 object-contain flex-shrink-0" alt="USA Flag" />
                <a
                  href="https://wa.me/13073818900?text=Hello%20GlobalDigitalSFX,%20I%20would%20like%20to%20know%20more%20about%20your%20digital%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors"
                >
                  +1-3073818900
                </a>
              </div>

              {/* Email */}
              <div className="flex gap-3 items-start group">
                <CiMail className="text-xl text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:connect@globaldigitalsfx.com"
                  className="hover:text-white hover:underline transition-colors break-all"
                >
                  connect@globaldigitalsfx.com
                </a>
              </div>

              {/* Address */}
              <div className="flex gap-3 items-start group">
                <IoLocationOutline className="text-xl text-purple-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=Office+No-30,+N+Gould+St,+STE+R,+Sheridan,+WY+82801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline transition-colors leading-relaxed"
                >
                  Office No-30, N Gould St, STE R<br />
                  Sheridan, WY 82801, USA
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent my-8"
        ></motion.div>

        {/* Copyright */}
        <p className="text-center text-xs sm:text-sm text-gray-500 font-lato pb-4">
          All copy rights reserved by ©{new Date().getFullYear()}{" "}
          <span className="text-gray-400 font-medium">globaldigitalsfx.com</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;