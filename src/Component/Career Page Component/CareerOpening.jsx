import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AllJobApi } from "../../redux/actions/jobActions";
import { RxDragHandleDots2 } from "react-icons/rx";

const CareerOpening = () => {
  const { jobs } = useSelector((state) => state.jobContainer);
  const dispatch = useDispatch();

  const [activeTabs, setActiveTabs] = useState(1);
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    dispatch(AllJobApi());
  }, [dispatch]);

  useEffect(() => {
    setJobData(jobs); // Initialize with all jobs
  }, [jobs]);

  const filterByCategory = (category, index) => {
    setActiveTabs(index);
    if (category === "") {
      setJobData(jobs); // Show all jobs when "ALL" is clicked
    } else {
      setJobData(jobs?.filter((job) => job?.category === category));
    }
  };

  return (
    <section className="bg-bgSecondBlue w-full py-20">
      <div className="customContainer !my-0 ">
        <div className="max-w-[600px] mx-auto text-center">
          <div className="flex gap-2 items-center justify-center mb-3">
            <RxDragHandleDots2 className="rotate-90 text-primaryBlue text-2xl" />
            <span className="text-primaryBlue font-medium tracking-wider H6">
              COME JOIN US
            </span>
          </div>

          <h2 className="H2 font-bold capitalize text-white mb-2 leading-tight">
            Career
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Openings
            </span>
          </h2>

          <p className="P text-mutedGray-c1 mb-8 leading-relaxed">
            We’re always looking for creative, talented self-starters to join
            the GDFX family. Check out our open roles below and fill out an
            application.
          </p>
        </div>
      </div>

      <div className="customContainer !my-0 ">
        <div className="flex lg:flex-row flex-col gap-5">
          <div className="lg:basis-[20%] basis-full flex gap-x-5 gap-y-1 justify-center lg:justify-start flex-wrap mb-3 lg:flex-col">
            {[
              { name: "ALL", key: "" },
              { name: "ENGINEERING", key: "Engineering" },
              { name: "HR & ADMIN", key: "Admin" },
              { name: "SUPPORT", key: "Support" },
              { name: "DESIGN", key: "Design" },
              { name: "DIGITAL MARKETING", key: "DigitalMarketing" },
            ].map((tab, index) => (
              <h2
                key={index}
                className={`cursor-pointer transition-all duration-500 P ease-linear ${
                  activeTabs === index + 1
                    ? "text-primaryBlue font-semibold"
                    : "font-medium text-white"
                }`}
                onClick={() => filterByCategory(tab.key, index + 1)}
              >
                {tab?.name} (
                {tab?.name === "ALL"
                  ? jobs?.length
                  : jobs?.filter((job) => job?.category === tab?.key)?.length}
                )
              </h2>
            ))}
          </div>

          <div className="lg:basis-80% basis-full flex flex-col gap-4">
            {jobData?.length > 0 ? (
              jobData?.map((job, index) => (
                <Link
                  key={index}
                  // to={`/career/we-are-hiring/${encodeURIComponent(job?.title)}`}
                  to={`/career/we-are-hiring/${job?.title
                      .replace(/[^a-zA-Z0-9]+/g, "-")
                      .replace(/^-+|-+$/g, "")
                      .toLowerCase()}`}
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "instant" })
                  }
                >
                  <div className="bg-primary-gradient grid xs:grid-cols-4 grid-cols-3 sm:px-5 px-2 py-5">
                    <div>
                      <h2 className="H6 text-white leading-[1.2] font-semibold">
                        {job?.title}
                      </h2>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-off_white P font-semibold">
                        Experience
                      </h3>
                      <h4 className="H6 font-semibold text-white">{`${job?.experience}+ years`}</h4>
                    </div>
                    <div className="flex flex-col items-center">
                      <h3 className="text-off_white P font-semibold">
                        Deadline
                      </h3>
                      <h4 className="H6 font-semibold text-white">
                        {new Date(job?.lastDate).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </h4>
                    </div>
                    <div className="hidden xs:flex justify-center items-center">
                      <FaArrowRightLong className="xs:text-2xl text-xl text-white hover:text-off_white" />
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-center text-gray-500">
                No jobs available in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpening;
