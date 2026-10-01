import custom_software from "../../assets/Services/Our Work Process/custom_software.svg";
import app from "../../assets/Services/Our Work Process/app.svg";
import api from "../../assets/Services/Our Work Process/api.svg";
import digital from "../../assets/Services/Our Work Process/digital.svg";
import e_commerce from "../../assets/Services/Our Work Process/e_commerce.svg";
import it_support from "../../assets/Services/Our Work Process/it_support.svg";
import ui_ux from "../../assets/Services/Our Work Process/ui_ux.svg";
import website from "../../assets/Services/Our Work Process/website.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { RxDragHandleDots2 } from "react-icons/rx";
import { motion } from "framer-motion";

const ServiceCard = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <div className="h-[320px] w-full [perspective:1000px] group">
      <div className="relative h-full w-full rounded-2xl shadow-sm transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] border border-purple-100 bg-white">
        
        {/* --- FRONT FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white p-6 flex flex-col justify-between text-left [backface-visibility:hidden]">
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl shadow-md bg-gradient-to-b from-[#7e22ce] to-[#581c87] shrink-0">
            <img
              src={icon}
              className="w-8 h-8 object-contain filter brightness-0 invert"
              draggable={false}
              alt={`SERVICES-${title}`}
            />
          </div>

          <div className="mt-auto">
            <h3 className="H5 font-bold text-[#2d1b4e] leading-[1.3] line-clamp-2 min-h-[2.6em]">
              {title}
            </h3>
            <span className="mt-3 inline-block text-xs font-semibold text-purple-600 tracking-wider uppercase">
              Hover to explore →
            </span>
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl bg-purple-50/80 p-6 flex flex-col justify-between text-left [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div>
            <h3 className="text-base font-bold text-[#2d1b4e] mb-2 line-clamp-1">
              {title}
            </h3>
            <p className="SP leading-relaxed line-clamp-4">
              {description}
            </p>
          </div>

          <Link
            to={link}
            onClick={() => window.scrollTo(0, 0)}
            className="w-full mt-auto"
          >
            <motion.button 
              className="px-4 py-2.5 rounded-xl font-medium SP text-white bg-gradient-to-b from-[#7e22ce] to-[#581c87] hover:from-[#581c87] hover:to-[#7e22ce] transition-all duration-300 flex items-center gap-2 w-full justify-between shadow-xs"
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-lato font-semibold">Explore More</span>
              <MdArrowOutward className="text-lg text-white" />
            </motion.button>
          </Link>
        </div>

      </div>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      icon: custom_software,
      title: "Custom Software Development Services",
      description:
        "GDFX provides custom software development, designing solutions that align with your goals. From concept to deployment, we ensure high-performance software tailored to your exact needs.",
      link: "/service/custom-software-development",
    },
    {
      icon: app,
      title: "Mobile Application Design & Development",
      description:
        "GDFX offers mobile app development for Android, iOS, and cross-platform environments, creating user-friendly, high-performing, secure, and intuitive apps for both consumer and internal use.",
      link: "/service/mobile-app-development",
    },
    {
      icon: website,
      title: "Web Application Design & Development",
      description:
        "GDFX provides cutting-edge web development and design services, creating responsive, high-performance websites that are visually engaging, user-friendly, and easy to navigate and manage.",
      link: "/service/web-app-development",
    },
    {
      icon: ui_ux,
      title: "UI/UX Design",
      description:
        "GDFX's UI/UX design services create engaging, intuitive, and visually appealing interfaces, ensuring users enjoy functional and seamless interactions across digital platforms for an optimal experience.",
      link: "/service/ui-ux-design",
    },
    {
      icon: api,
      title: "API Development",
      description:
        "GDFX offers expert API integration and development, ensuring seamless communication between systems, automating workflows, and enhancing functionality to help businesses connect platforms efficiently.",
      link: "/service/api-development",
    },
    {
      icon: digital,
      title: "Digital Transformation Services",
      description:
        "GDFX offers digital transformation consulting, helping businesses integrate technology to improve efficiency, reduce costs, and enhance customer experiences, driving growth and innovation through strategic guidance.",
      link: "/service/digital-transformation-service",
    },
    {
      icon: it_support,
      title: "IT Support & Maintenance",
      description:
        "GDFX offers reliable IT support and maintenance services, providing continuous monitoring, troubleshooting, and updates to ensure smooth software performance and optimize business operations, preventing downtime.",
      link: "/service/it-support-maintenance",
    },
    {
      icon: e_commerce,
      title: "E-commerce Solution",
      description:
        "GDFX develops custom e-commerce platforms, creating secure, optimized online stores for efficient sales, secure payments, and an exceptional customer experience to drive business success.",
      link: "/service/e-commerce-solution",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 items-center justify-center mb-2">
            <RxDragHandleDots2 className="rotate-90 text-secondaryPurple text-2xl" />
            <span className="text-secondaryPurple font-medium tracking-wider H6">
              OUR WORK PROCESS
            </span>
          </div>

          <h2 className="H2 font-bold capitalize text-black mb-1 leading-tight text-center">
            Our Working Process at GDFX:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Tailored Solutions for Your Success
            </span>
          </h2>

          <p className="P text-heading_color leading-relaxed text-center">
            At GDFX, we follow a streamlined, transparent process to deliver
            high-quality *software development, mobile apps, and IT services*.
            Our expert team ensures projects are completed on time, within
            budget, and meet the highest standards, prioritizing customer
            satisfaction and long-term growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;