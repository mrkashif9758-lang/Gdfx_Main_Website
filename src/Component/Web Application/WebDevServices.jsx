import React from "react";
import webdev_Services from "../../assets/Web Application/WebDev Services/WebDev_Services1.png";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const WebDevServices = () => {
  return (
    <section className="py-20 lg:py-24 bg-bgFirstBlue overflow-hidden">
      <div className="customContainer !my-0">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-12">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Web Development
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue"> Services at GDFX</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 xl:gap-x-20 items-center">

          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="P text-off_white/80 leading-[1.8] max-w-[650px]">
              At GDFX, we specialize in delivering SEO-optimized web development services designed to boost your online visibility and drive business growth. Our expertise includes custom website development, responsive design, e-commerce solutions, CMS platforms like WordPress and Drupal, and dynamic web applications.
            </p>

            <p className="P text-off_white/80 leading-[1.8] max-w-[650px] mt-4">
              Using modern technologies like React.js, Node.js, PHP, and Python, we create high-performing, scalable, and secure websites tailored to your needs. Our solutions prioritize fast loading speeds, mobile responsiveness, and seamless user experiences.
            </p>

            <p className="P text-off_white/80 leading-[1.8] max-w-[650px] mt-4">
              Whether you're a startup or an enterprise, GDFX helps you rank higher on search engines, attract more visitors, and convert them into loyal customers.
            </p>

            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })} className="inline-block mt-7">
              <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Contact Us
                <MdArrowOutward className="text-white text-xl rotate-[45deg] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 flex items-center justify-center relative">

            {/* Subtle Background Glow */}
            <div className="absolute w-[280px] sm:w-[350px] lg:w-[420px] h-[280px] sm:h-[350px] lg:h-[420px] bg-primaryBlue/10 rounded-full blur-[90px] pointer-events-none" />

            <img
              src={webdev_Services}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="relative z-10 w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px] xl:max-w-[560px] h-auto object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:-translate-y-2"
              alt="Web Development Services"
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevServices;