import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { GrSecure } from "react-icons/gr";
import { MdSchool } from "react-icons/md";
import { GiUpgrade } from "react-icons/gi";
import { RxDragHandleDots2 } from "react-icons/rx";
const benefitsData = [
  {
    src: <HiOutlineUserGroup size={35} />,
    title: "Team work",
    des: "Join a team where collaboration and mutual respect are at the core. At GDFX, we believe in teamwork, open communication, and shared successes that foster a strong, connected workplace.",
  },
  {
    src: <GrSecure size={35} />,
    title: "Secured Future",
    des: "At GDFX, we ensure your secure future with stability, competitive benefits, and growth opportunities. Build a future-ready career through continuous learning, meaningful contributions, and long-term prospects in a trusted IT company.",
  },
  {
    src: <MdSchool size={35} />,
    title: "Learning opportunity",
    des: "Joining GDFX offers endless learning opportunities through advanced training, mentorship, and certifications. Gain exposure to innovative projects and technologies, continuously enhancing skills and building a future-ready, fulfilling career in a dynamic industry.",
  },
  {
    src: <GiUpgrade size={35} />,
    title: "Upgrate Skills",
    des: "Joining GDFX means consistently updating your skills with advanced training, certifications, and tools. Work on innovative projects, enhance expertise, adapt to trends, and grow professionally in a supportive, tech-driven environment.",
  },
];
const reasons = [
  {
    title: "Innovative Projects",
    description:
      "Work on cutting-edge technologies and solve real-world challenges.",
  },
  {
    title: "Career Growth",
    description:
      "Access to continuous learning, mentorship, and development programs to enhance your skills.",
  },
  {
    title: "Collaborative Culture",
    description:
      "Be part of a supportive and dynamic team where every idea is valued.",
  },
  {
    title: "Work-Life Balance",
    description:
      "Enjoy flexible schedules and remote work opportunities that promote personal well-being.",
  },
  {
    title: "Exposure to Global Clients",
    description:
      "Work on projects with international reach, expanding your professional experience.",
  },
];
const Benefits = () => {
  return (
    <section className="py-20 bg-bgSecondBlue">
      <div className="customContainer !my-0">
        <div className="flex lg:flex-row flex-col lg:justify-between gap-10">
          <div className="lg:basis-1/2 basis-full">
            <div className="flex gap-2 items-center mb-3">
              <RxDragHandleDots2 className="rotate-90 text-secondaryPurple text-2xl" />
              <span className="text-secondaryPurple font-medium tracking-wider H6">
                Benefits
              </span>
            </div>

            <h2 className="H2 font-bold capitalize text-white mb-4 leading-tight">
              Why you Should Join Our
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
                {" "}
                Awesome Team
              </span>
            </h2>

            <p className="P text-mutedGray-c1 mb-8 leading-relaxed">
              At GDFX, we offer rewarding career opportunities in an
              innovation-driven environment, where your skills and ideas are
              valued, fostering professional growth and impactful contributions.
            </p>

            <ul className="space-y-2 list-disc ps-4 marker:text-navyBlue-c1">
              {reasons.map((reason, index) => (
                <li key={index} >
                  <h3 className="H6 font-semibold text-navyBlue-c1">
                    {reason.title}
                  </h3>
                  <p className="text-navyBlue-c2 SP">{reason.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:basis-1/2 basis-full grid xs:grid-cols-2 grid-cols-1 gap-7">
            {benefitsData.map((item, index) => (
              <div
                key={index}
                className="bg-dark-gradient-br p-2.5 rounded border border-gray-700 hover:border-primaryBlue duration-300 hover:shadow-lg shadow-primaryBlue/20"
              >
                <div className="flex">
                  <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient text-white">
                    {item.src}
                  </div>
                </div>
                <h2 className="H4 font-bold text-white py-2.5 capitalize">
                  {item.title}
                </h2>
                <p className="SP text-navyBlue-c2">{item.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
