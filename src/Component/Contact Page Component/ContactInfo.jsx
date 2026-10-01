import React from "react";
import contactInfo from "../../assets/Contact/ContactInfo.webp";
import india from "../../assets/Contact/india.svg";
import usa from "../../assets/Contact/usa.svg";
import { GoHorizontalRule } from "react-icons/go";
const ContactInfo = () => {
  return (
    <div
      className="w-full min-h-[200px] bg-cover bg-center bg-no-repeat mb-20 sm:py-20 py-10 "
      style={{ backgroundImage: `url(${contactInfo})` }}
    >
      <div className="customContainer  grid lg:grid-cols-2  sm:gap-5 gap-10 ">
        <div>
          <h2 className="text-2xl mb-4 text-text_color">Contact Info</h2>
          <p className="sm:text-5xl xs:text-4xl text-3xl font-bold text-heading_color">
            We are always <br /> happy to assist you
          </p>
        </div>
        <div className="flex justify-between flex-wrap lg:flex-nowrap gap-10">
          <div className="flex flex-col gap-2">
            <div>
              <img src={india} className="w-[50px]" alt="Contact-India-Image" />
            </div>
            <h2 className="xs:text-xl font-semibold text-heading_color">
              India
            </h2>

            <div>
              <GoHorizontalRule className="text-3xl" />
            </div>
            <h2 className="xs:text-xl font-medium text-heading_color">Email</h2>
            <h2 className="  text-heading_color">hello@globaldigitalsfx.com</h2>
            <h2 className="xs:text-xl font-medium text-heading_color">
              Number
            </h2>
            <h2 className="xs:text-xl  text-heading_color">+91 888-264-8039</h2>
            <div>
              <p className="text-text_color">Assistance hours: </p>
              <p className="text-text_color mb-1">
                Monday - Friday 10 am to 6 pm{" "}
              </p>
              <p className="text-text_color">
                India-Address Office No-O-899,Gaur City Centre ,Greater Noida
                West,201301
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <img src={usa} className="w-[50px]" alt="Contact-USA-Image" />
            </div>
            <h2 className="xs:text-xl font-semibold text-heading_color">USA</h2>

            <div>
              <GoHorizontalRule className="text-3xl" />
            </div>
            <h2 className="xs:text-xl font-medium text-heading_color">Email</h2>
            <h2 className="  text-heading_color">hello@globaldigitalsfx.com</h2>
            <h2 className="xs:text-xl font-medium text-heading_color">
              Number
            </h2>
            <h2 className="xs:text-xl  text-heading_color">+1-330-321-3108</h2>
            <div>
              <p className="text-text_color">Assistance hours: </p>
              <p className="text-text_color mb-1">
                Monday - Friday 10 am to 6 pm{" "}
              </p>
              <p className="text-text_color">
                Office No-30 N Gould ST STE R Sheridan ,WY 82801
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
