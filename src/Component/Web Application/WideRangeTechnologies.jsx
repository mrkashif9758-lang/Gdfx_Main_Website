import React from "react";
import wide_range_technologies from "../../assets/Web Application/Wide Range Technologies/wide_range_technologies.webp";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const WideRangeTechnologies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="customContainer !my-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="">
            <h2 className="H2 font-bold capitalize text-black mb-4 leading-tight">
              A Wide
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Range of Technologies
              </span>
            </h2>
            <p className="P text-heading_color">
              At GDFX, we specialize in providing a wide range of innovative
              technology solutions designed to meet the specific needs of your
              business. Our services include custom web development, mobile app
              design, SEO optimization, UI/UX design, cloud-based solutions, and
              digital marketing. We leverage cutting-edge technologies to
              deliver scalable, responsive, and user-friendly solutions that
              drive engagement, improve performance, and boost your online
              presence. Whether you're looking to enhance your website, create a
              mobile app, or improve your search engine rankings, GDFX is your
              trusted partner for high-quality, results-driven solutions that
              foster growth and business success.
            </p>

            <Link to={"/service"} onClick={() => window.scrollTo(0, 0)}>
            <button
              className={`px-5 mt-7 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 inline-flex items-center gap-2 group`}
            >
              View All Technologies
              <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
            </button>
          </Link>
          </div>
          <div className="flex justify-center p-5">
            <img
              src={wide_range_technologies}
              alt="Service-Wide-Range-Solution"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WideRangeTechnologies;
