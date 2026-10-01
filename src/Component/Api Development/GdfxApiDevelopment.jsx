import React from "react";
import api_development from "../../assets/Api Development/api_development.jpg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
const GdfxApiDevelopment = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <h2 className="H2 font-bold capitalize text-white leading-tight text-center mb-10">
          GDFX helps businesses connect and automate with powerful
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
            {" "}
            API development and integration.
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="P text-off_white mt-5">
              GDFX offers comprehensive API Development and Integration services
              to enhance your business's connectivity and efficiency. APIs
              (Application Programming Interfaces) enable seamless communication
              between applications, streamlining operations and automating
              workflows. We create custom APIs tailored to your specific needs
              and integrate third-party APIs such as payment gateways, CRMs, and
              ERP systems to optimize functionality.
            </p>

            <p className="italic SP text-off_white mt-5">
              "GDFX offers comprehensive API Development and Integration
              services to enhance your business's connectivity and efficiency.
              APIs (Application Programming Interfaces) enable seamless
              communication between applications, streamlining operations and
              automating workflows. We create custom APIs tailored to your
              specific needs and integrate third-party APIs such as payment
              gateways, CRMs, and ERP systems to optimize functionality."
            </p>

            <Link to={"/case-study"} onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-7 px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Our Projects
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>

          <div className="order-1 lg:order-2 lg:flex justify-center items-center p-5">
            <img
              src={api_development}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="lg:w-auto w-full"
              alt="Service-API-Integration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GdfxApiDevelopment;
