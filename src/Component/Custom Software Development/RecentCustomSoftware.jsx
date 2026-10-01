import React from "react";
import custom1 from "../../assets/Custom Software Development/Recent Custom Software/custom_1.svg";
import custom2 from "../../assets/Custom Software Development/Recent Custom Software/custom_2.svg";
import custom3 from "../../assets/Custom Software Development/Recent Custom Software/custom_3.svg";
import { Link } from "react-router-dom";
import RoundedButtonBgColor from "../Common/RoundedButtonBgColor";
import { useSelector } from "react-redux";
import { MdArrowOutward } from "react-icons/md";
const RecentCustomSoftware = () => {
  const { caseStudys } = useSelector((state) => state.caseStudyContainer);
  const threeCaseStudies = caseStudys?.slice(0, 3);
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
            Recent
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Custom Software Projects by GDFX
            </span>
          </h2>
          <p className="P text-off_white text-center">
            At GDFX, we pride ourselves on delivering innovative custom software
            solutions that address specific industry challenges. Here are some
            of our recent projects
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 sm:grid-cols-2 grid-cols-1 mb-3">
          {threeCaseStudies &&
            threeCaseStudies.map((item, index) => (
              <div
                key={item._id}
                className="relative overflow-hidden group rounded h-[200px] lg:h-[260px]"
              >
                <div className="absolute inset-0 bg-primary-gradient rounded-md overflow-hidden">
                  <img
                    src={item?.projectTitleImage?.url}
                    draggable={false}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                    alt={item.projectTitle}
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h2 className="H4 font-extrabold text-white capitalize">
                    {item.projectTitle}
                  </h2>
                  <p className="text-off_white mb-4 line-clamp-2 H5 font-semibold">
                    {item.shortDescription || item.projectTitle}
                  </p>
                  <Link
                    // to={`/case-study/${item.projectTitle}`}
                    to={`/case-study/${item.projectTitle
                      .replace(/[^a-zA-Z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")
                      .toLowerCase()}`}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "instant" })
                    }
                    className="self-start"
                    aria-label={`View ${item.projectTitle} case study`}
                  >
                    <button className="px-5 py-2 rounded-lg font-medium text-white bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 flex items-center gap-1 group/item">
                      View Case Study
                      <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover/item:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link to={"/case-study"} onClick={() => window.scrollTo(0, 0)}>
            <button className="px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300 flex items-center gap-2 group">
              Explore More
              <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentCustomSoftware;
