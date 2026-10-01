import { useEffect, useState } from "react";
import { FaLocationDot, FaSuitcaseMedical } from "react-icons/fa6";
import { IoTodayOutline } from "react-icons/io5";
import {
  MdChairAlt,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
} from "react-icons/md";
import { SlBookOpen } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AllJobApi } from "../../redux/actions/jobActions";
import HiringForm from "./HiringForm";
import { motion } from "framer-motion";

const JobDescription = () => {
  const { jobs } = useSelector((state) => state.jobContainer);

  const { jobId } = useParams();
  const [showPopup, setShowPopup] = useState(false); // State to control the popup

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const decodedJobId = decodeURIComponent(jobId);

  const singleJob = jobs?.find(
    (item) =>
      item?.title
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase() === jobId
  );

  const currentDate = new Date();
  const lastDate = new Date(singleJob?.lastDate);
  const isExpired = lastDate <= currentDate;

  useEffect(() => {
    dispatch(AllJobApi());
  }, []);

  return (
    <section className="py-20 bg-bgSecondBlue">
      <div className="customContainer  !my-0">
        <div className="flex justify-between lg:flex-row flex-col gap-5">
          <div className="lg:basis-[70%] basis-full px-3">
            <h2 className="H3 font-bold text-white mb-10">
              {singleJob?.title}
            </h2>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">
                Who Are We Looking For
              </h3>
              <ul className="space-y-1.5 ms-5 SP text-off_white list-inside list-disc">
                {singleJob?.whoAreWeLookingFor?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">
                What You Will Be Doing
              </h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.whatYouWillBeDoing?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">
                Bonus Points for Familiarity with
              </h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.bonusPoints?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">
                Educational Requirement
              </h3>
              <div className="lg:w-[70%] w-full">
                {singleJob?.educationRequirement?.map((item, index) => (
                  <p key={item._id} className="ms-5 SP text-off_white">
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">Salary</h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.salary?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">Working Hours</h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.workingHours?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">Working Days</h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.workingDays?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="H4 font-bold text-white mb-3">
                Perks & Benefits You’ll Get
              </h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.perksAndBenefits?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-6 ">
              <h3 className="H4 font-bold text-white mb-3">
                The Application Process
              </h3>
              <ul className="ms-5 space-y-1.5 SP text-off_white list-inside list-disc">
                {singleJob?.applicationProcess?.map((item, index) => (
                  <li key={item._id} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:basis-[30%] basis-full">
            <div className="bg-dark-gradient-br border border-gray-700 rounded p-5">
              <h2 className="H4 font-bold text-white mb-5">Job Summary</h2>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <FaLocationDot size={25} className="mt-1 text-white" />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">Location</h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <FaSuitcaseMedical size={25} className="mt-1 text-white" />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">Job Type</h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.jobType}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <MdOutlineCalendarMonth
                      size={25}
                      className="mt-1 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">Date Posted</h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.datePosted?.split("T")[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <SlBookOpen size={25} className="mt-1 text-white" />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">Experience</h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.experience}+ Years
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <MdOutlineWatchLater
                      size={25}
                      className="mt-1 text-white"
                    />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">
                      Working Hours
                    </h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.workHours}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="shrink-0">
                    <IoTodayOutline size={25} className="mt-1 text-white" />
                  </div>
                  <div>
                    <h3 className="H6 font-semibold text-white">
                      Working Days
                    </h3>
                    <p className="SP font-medium text-off_white">
                      {singleJob?.workDays}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="shrink-0">
                    <MdChairAlt size={25} className="mt-1 text-white" />
                  </span>
                  <div>
                    <h3 className="H6 font-semibold text-white">Vacancy</h3>
                    <p className="SP font-medium text-off_white">
                      Number of Vacancy : {singleJob?.noOfVacency}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                {!isExpired ? (
                  <motion.button
                    onClick={() => setShowPopup(true)}
                    className="px-5 py-2 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Apply Now
                  </motion.button>
                ) : (
                  <motion.button
                    disabled
                    className="px-5 py-2 bg-danger-gradient text-off_white P rounded-lg font-medium cursor-not-allowed"
                  >
                    Expire
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="lg:flex md:items-center md:flex-row flex-col hidden border-t pt-5">
          <div>
            <h3 className="H4 font-bold text-white mb-3">Our Statement</h3>
            <div className="lg:w-[70%] w-full ">
              <p className="ms-5 SP text-off_white">
                {singleJob?.areStatement}
              </p>
            </div>
          </div>
          {!isExpired ? (
            <motion.button
              onClick={() => setShowPopup(true)}
              className="px-5 py-2 rounded-lg font-medium text-white shadow-lg bg-primary-gradient hover:shadow-xl hover:shadow-primaryBlue/20 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          ) : (
            <motion.button
              disabled
              className="px-5 py-2 bg-danger-gradient text-off_white P rounded-lg font-medium cursor-not-allowed"
            >
              Expire
            </motion.button>
          )}
        </div>
        <HiringForm showPopup={showPopup} setShowPopup={setShowPopup} />
      </div>
    </section>
  );
};

export default JobDescription;
