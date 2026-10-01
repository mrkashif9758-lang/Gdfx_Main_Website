import React from "react";
import Explore from "../../assets/Mobile Application/mobile_exp.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function MobileExploreIt() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto !my-0">
        <h2 className="H2 font-bold capitalize text-slate-900 mb-4 leading-tight text-center">
          Transform Ideas into Seamless
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
            {" "}
            Mobile Experiences with GDFX
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center">
          <div className="order-2 lg:order-1">
            <p className="P text-slate-600 leading-relaxed">
              Unlock your business’s potential with GDFX's top-tier mobile app
              development services. We craft innovative, custom mobile
              applications that are user-centric, visually stunning, and packed
              with features to drive engagement and growth. Whether you need an
              iOS, Android, or cross-platform app, our expert developers deliver
              scalable solutions tailored to your business goals. With
              cutting-edge technology and a focus on performance, we ensure your
              app stands out in a competitive digital landscape. Partner with
              GDFX to create a powerful mobile presence that connects,
              captivates, and converts!
            </p>

            <p className="italic SP text-slate-500 mt-5 leading-relaxed">
              "GDFX specializes in mobile app development, offering custom iOS,
              Android, and cross-platform solutions. Our expert team designs
              high-performance, user-friendly apps tailored to your business
              needs. Boost customer engagement, streamline operations, and drive
              growth with innovative, secure, and scalable mobile applications.
              Partner with GDFX for successful app development solutions."
            </p>

            <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-7 px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-gradient-to-r from-primaryBlue to-secondaryPurple hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group cursor-pointer">
                Connect with Us
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 md:flex justify-center">
            <img
              src={Explore}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className="lg:w-auto"
              alt="Service-Custom-Software"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MobileExploreIt;