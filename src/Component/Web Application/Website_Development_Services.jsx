import React, { useEffect, useState } from "react";
import designing_1 from "../../assets/Web Application/WebDev Services/web_dev_1.svg";
import designing_2 from "../../assets/Web Application/WebDev Services/web_dev_2.svg";
import designing_3 from "../../assets/Web Application/WebDev Services/web_dev_3.svg";
import designing_4 from "../../assets/Web Application/WebDev Services/web_dev_4.svg";
import designing_5 from "../../assets/Web Application/WebDev Services/web_dev_5.svg";
import designing_6 from "../../assets/Web Application/WebDev Services/web_dev_6.svg";
import designing_7 from "../../assets/Web Application/WebDev Services/web_dev_7.svg";
import designing_8 from "../../assets/Web Application/WebDev Services/web_dev_8.svg";
import designing_9 from "../../assets/Web Application/WebDev Services/web_dev_9.svg";
import designing_10 from "../../assets/Web Application/WebDev Services/web_dev_10.png";
import designing_11 from "../../assets/Web Application/WebDev Services/web_dev_11.svg";
import designing_12 from "../../assets/Web Application/WebDev Services/web_dev_12.png";
import "./Website_designing.css";

import DesignGrid from "./DesignGrid";

const designs = [
  {
    title: "Frontend Development",
    img: designing_1,
    text: "Build modern, responsive, and interactive user interfaces that deliver seamless experiences across all screen sizes and devices.",
  },
  {
    title: "Backend Development",
    img: designing_2,
    text: "Develop secure, scalable, and high-performance backend systems that power your applications with robust logic and data management.",
  },
  {
    title: "Full Stack Development",
    img: designing_3,
    text: "Deliver complete web solutions by combining elegant frontend design with powerful backend architecture for end-to-end functionality.",
  },
  {
    title: "CMS Development",
    img: designing_4,
    text: "Create scalable and customizable Content Management Systems that enable easy content editing, publishing, and workflow management.",
  },
  {
    title: "E-Commerce Development",
    img: designing_5,
    text: "Build high-performing e-commerce platforms with secure payment gateways, intuitive UI, and features that boost sales and conversions.",
  },
  {
    title: "webApp Development",
    img: designing_6,
    text: "Develop fast, scalable, and secure web applications tailored to your business logic, enabling digital growth and user engagement.",
  },
  {
    title: "Performance Optimization",
    img: designing_7,
    text: "Improve website loading speed, responsiveness, and overall performance for better SEO, user retention, and conversion rates.",
  },
  {
    title: "Website Maintenance & Support",
    img: designing_8,
    text: "Provide continuous website monitoring, regular updates, bug fixes, and technical support to keep your site running smoothly.",
  },
  {
    title: "API Development & Integration",
    img: designing_9,
    text: "Design and integrate reliable APIs to enable seamless communication between your applications and third-party services.",
  },
  {
    title: "Database Design & Integration",
    img: designing_10,
    text: "Create structured, efficient, and secure database systems with smooth integration for reliable data storage and management.",
  },
  {
    title: "Payment Gateway & Integration",
    img: designing_11,
    text: "Integrate secure and user-friendly payment gateways that support multiple methods and currencies to streamline transactions.",
  },
  {
    title: "Authentication & Authorization",
    img: designing_12,
    text: "Implement robust login, role-based access control, and data protection systems to ensure secure user authentication and authorization.",
  },
];

const Website_Development_Services = () => {
  const [visibleProjects, setVisibleProjects] = useState(12);

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleProjects(12);
      else if (window.innerWidth >= 648) setVisibleProjects(6);
      else setVisibleProjects(3);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
            Website
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Development Services
            </span>
          </h2>
          <p className="P text-off_white mt-1">
            Our web development services stand out by delivering comprehensive,
            end-to-end solutions powered by cutting-edge technologies like
            Python, React, Angular, Java, and PHP. Leveraging robust backend
            frameworks such as Node.js and Django, we create highly functional,
            scalable, and secure websites.
          </p>
          <p className="P text-off_white mt-1.5 italic">
            We prioritize top-notch security with globally recognized standards
            and implement CI/CD pipelines for smooth, automated deployments. Our
            expert developers craft responsive designs that ensure seamless,
            user-friendly experiences across all devices and platforms. Trust
            GDFX to build innovative, high-performing websites tailored to meet
            your business goals while optimizing user engagement and
            satisfaction.
          </p>
        </div>
        <DesignGrid designs={designs} visibleProjects={visibleProjects} />
        {visibleProjects < designs.length && (
          <div className="text-center mt-5">
            <button
              onClick={handleLoadMore}
              className="mt-7 px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Website_Development_Services;
