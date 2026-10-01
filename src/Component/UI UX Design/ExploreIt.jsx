import React from "react";
import Explore from "../../assets/UI UX Design/Explore.svg";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

function ExploreIt() {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <h2 className="H2 font-bold capitalize text-white mb-4 leading-tight text-center">
          Ready to Transform Your
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
            {" "}
            Digital Presence? Contact Us Today!
          </span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center mt-10">
          <div className="order-2 lg:order-1">
            <p className="P text-off_white mt-5">
              GDFX is a leading UI design agency, renowned for creating
              exceptional user experiences that drive engagement and business
              growth. Our team combines creativity, technical expertise, and a
              user-first approach to deliver intuitive, visually captivating
              designs tailored to your audience. From responsive interfaces to
              seamless navigation, we prioritize functionality and aesthetics to
              enhance usability and satisfaction. Our designs are crafted to
              align with your brand vision while meeting the demands of modern
              users. With a focus on innovation and attention to detail, GDFX
              ensures every product we design is impactful, scalable, and
              result-oriented. Trust us for unmatched UI/UX design services.
            </p>

   

            <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}>
              <button className="mt-7 px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 inline-flex items-center gap-2 group">
                Explore About It
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
              alt="UI-UX-Design-Services"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreIt;
