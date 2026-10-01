import { motion } from "framer-motion";
import img_1 from "../../assets/Services/Our Work Process/01.svg";
import img_2 from "../../assets/Services/Our Work Process/02.svg";
import img_3 from "../../assets/Services/Our Work Process/03.svg";
import img_4 from "../../assets/Services/Our Work Process/04.svg";
import img_5 from "../../assets/Services/Our Work Process/05.svg";
import img_6 from "../../assets/Services/Our Work Process/06.svg";
import img_7 from "../../assets/Services/Our Work Process/07.svg";
import img_8 from "../../assets/Services/Our Work Process/08.svg";

import left_to_right_arrow from "../../assets/Services/Service Header/left_to_right_arrow.svg";
import right_to_left_arrow from "../../assets/Services/Service Header/right_to_left_arrow.svg";
import top_to_bottom_arrow from "../../assets/Services/Service Header/top_to_bottom_arrow.svg";
import { RxDragHandleDots2 } from "react-icons/rx";


const OurWorkProcess = () => {
 
  return (
    <section className="bg-white py-20">
      <div className="customContainer mx-w-7xl mx-auto !my-0">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex gap-2 items-center justify-center mb-2">
            <RxDragHandleDots2 className="rotate-90 text-secondaryPurple text-2xl" />
            <span className="text-secondaryPurple font-medium tracking-wider H6">
              OUR WORK PROCESS
            </span>
          </div>

          <h2 className="H2 font-bold capitalize text-black mb-1 leading-tight text-center">
            Our Working Process at GDFX:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Tailored Solutions for Your Success
            </span>
          </h2>

          <p className="P text-heading_color leading-relaxed text-center">
            At GDFX, we follow a streamlined, transparent process to deliver
            high-quality *software development, mobile apps, and IT services*.
            Our expert team ensures projects are completed on time, within
            budget, and meet the highest standards, prioritizing customer
            satisfaction and long-term growth.
          </p>
        </motion.div>

        <div className="lg:block hidden mb-20">
          <div className="flex w-full items-center mb-7 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">01</h2>
              </div>
              <img
                src={img_1}
                draggable={false}
                alt="Service-Working-Process-idea"
              />
              <div className="text-center">
                <h2 className=" H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  You’ve an idea!
                </h2>
                <p className="SP text-black/70">
                  Your fresh Idea into real project
                </p>
              </div>
            </div>
            <div>
              <img
                src={left_to_right_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">02</h2>
              </div>
              <img
                src={img_2}
                draggable={false}
                alt="Service-Working-Process-Consultation"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Consultation
                </h2>
                <p className="SP text-black/70">
                  Schedule a consolation to discuss your <br /> business goals
                  and digital marketing needs with our team
                </p>
              </div>
            </div>
            <div>
              <img
                src={left_to_right_arrow}
                draggable={false}
                alt="Service-Working-Process-arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">03</h2>
              </div>
              <img
                src={img_3}
                className="w-[150px]"
                draggable={false}
                alt="Service-Working-Process-UI/UX-Design"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  UI/UX Design
                </h2>
                <p className="SP text-black/70">
                  We refine the appearance of elements till you’re pleased
                </p>
              </div>
            </div>
            <div>
              <img
                src={left_to_right_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">04</h2>
              </div>
              <img
                src={img_4}
                draggable={false}
                alt="Service-Working-Process-Development"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Development
                </h2>
                <p className="SP text-black/70">
                  Our approach to Programming <br /> in iterations improving in
                  each stage
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end pe-14 mb-7">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex w-full items-center mb-7">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">08</h2>
              </div>
              <img
                src={img_8}
                draggable={false}
                alt="Service-Working-Process-Maintenance"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Maintenance{" "}
                </h2>
                <p className="SP text-black/70">
                  We Offer Maintenance <br /> support to our client to resolve
                  technical issues
                </p>
              </div>
            </div>
            <div>
              <img
                src={right_to_left_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">07</h2>
              </div>
              <img
                src={img_7}
                draggable={false}
                alt="Service-Working-Process-Project-Launch"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Project Launch
                </h2>
                <p className="SP text-black/70">
                  The new app is ready for Explore
                </p>
              </div>
            </div>
            <div>
              <img
                src={right_to_left_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">06</h2>
              </div>
              <img
                src={img_6}
                draggable={false}
                alt="Service-Working-Process-Testing"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Testing
                </h2>
                <p className="SP text-black/70">
                  For your review purpose. we <br /> setup the app at staging
                  within a limited group
                </p>
              </div>
            </div>
            <div>
              <img
                src={right_to_left_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">05</h2>
              </div>
              <img
                src={img_5}
                draggable={false}
                alt="Service-Working-Process-Beta-Release"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Beta Release
                </h2>
                <p className="SP text-black/70">
                  For your review, we have set up the app <br /> on the staging
                  environment for a limited group.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:block lg:hidden hidden mb-20">
          <div className="flex w-full items-center mb-7 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">01</h2>
              </div>
              <img
                src={img_1}
                draggable={false}
                alt="Service-Working-Process-idea"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  You’ve an idea!
                </h2>
                <p className="SP text-black/70 text">
                  Your Fresh Idea into real Project
                </p>
              </div>
            </div>
            <div>
              <img
                src={left_to_right_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">02</h2>
              </div>
              <img
                src={img_2}
                draggable={false}
                alt="Service-Working-Process-Consultation"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Consultation
                </h2>
                <p className="SP text-black/70 text">
                  Schedule a consolation to discuss your <br /> business goal
                  and gitital marketing needs with our team
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end pe-14 mb-7">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex w-full items-center mb-7 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">04</h2>
              </div>
              <img
                src={img_4}
                draggable={false}
                alt="Service-Working-Process-Development"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Development
                </h2>
                <p className="SP text-black/70 text">
                  Our approach to Programming in iterations improving in each
                  stage
                </p>
              </div>
            </div>
            <div>
              <img
                src={right_to_left_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">03</h2>
              </div>
              <img
                src={img_3}
                className="w-[150px]"
                draggable={false}
                alt="Service-Working-Process-UI/UX-Design"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  UI/UX Design
                </h2>
                <p className="SP text-black/70 text">
                  We refine the appearance of elements till you’re pleased
                </p>
              </div>
            </div>
          </div>
          <div className="ps-14 mb-7">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex w-full items-center mb-7 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">05</h2>
              </div>
              <img
                src={img_5}
                draggable={false}
                alt="Service-Working-Process-Beta-Release"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Beta Release
                </h2>
                <p className="SP text-black/70 text">
                  For your review, we have set up the app on the staging
                  environment for a limited group.
                </p>
              </div>
            </div>
            <div>
              <img
                src={left_to_right_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">06</h2>
              </div>
              <img
                src={img_6}
                draggable={false}
                alt="Service-Working-Process-Testing"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Testing
                </h2>
                <p className="SP text-black/70 text">
                  For your review purpose. we setup the app at staging within a
                  limited group
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-end pe-14 mb-7">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex w-full items-center mb-7 justify-between">
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">08</h2>
              </div>
              <img
                src={img_8}
                draggable={false}
                alt="Service-Working-Process-Maintenance"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Maintenance
                </h2>
                <p className="SP text-black/70 text">
                  We Offer Maintenance support to <br /> our client to resolve
                  technical issues
                </p>
              </div>
            </div>
            <div>
              <img
                src={right_to_left_arrow}
                draggable={false}
                alt="Service-Working-Process-Arrow"
              />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
                <h2 className="H4 font-bold text-white">07</h2>
              </div>
              <img
                src={img_7}
                draggable={false}
                alt="Service-Working-Process-Project-Launch"
              />
              <div className="text-center">
                <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                  Project Launch
                </h2>
                <p className="SP text-black/70">
                  The new app is ready for Explore
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:hidden flex flex-col gap-3 ">
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">01</h2>
            </div>
            <img
              src={img_1}
              draggable={false}
              alt="Service-Working-Process-Idea"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                You’ve an idea!
              </h2>
              <p className="SP text-black/70 text">
                Your Fresh Idea into real Project
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">02</h2>
            </div>
            <img
              src={img_2}
              draggable={false}
              alt="Service-Working-Process-Consultation"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Consultation
              </h2>
              <p className="SP text-black/70 text">
                Schedule a consolation to discuss your business goal and gitital
                marketing needs with our team
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">03</h2>
            </div>
            <img
              src={img_3}
              className="w-[200px]"
              draggable={false}
              alt="Service-Working-Process-UXUI-Design"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                UI/UX Design
              </h2>
              <p className="SP text-black/70 text">
                We refine the appearance of elements till you’re pleased
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">04</h2>
            </div>
            <img
              src={img_4}
              draggable={false}
              alt="Service-Working-Process-Development"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Development
              </h2>
              <p className="SP text-black/70 text">
                Our approach to Programming in iterations improving in each
                stage
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">05</h2>
            </div>
            <img
              src={img_5}
              draggable={false}
              alt="Service-Working-Process-Beta-Release"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Beta Release
              </h2>
              <p className="SP text-black/70 text">
                For your review, we have set up the app on the staging
                environment for a limited group.
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">06</h2>
            </div>
            <img
              src={img_6}
              draggable={false}
              alt="Service-Working-Process-testing"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Testing
              </h2>
              <p className="SP text-black/70 text">
                For your review purpose. we setup the app at staging within a
                limited group
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">07</h2>
            </div>
            <img
              src={img_7}
              draggable={false}
              alt="Service-Working-Process-Project-Launch"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Project Launch
              </h2>
              <p className="SP text-black/70 text">
                The new app is ready for Explore
              </p>
            </div>
          </div>
          <div className="flex justify-center mb-2">
            <img
              src={top_to_bottom_arrow}
              draggable={false}
              className="h-[70px]"
              alt="Service-Working-Process-Arrow"
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-[60px] h-[60px] flex items-center justify-center bg-primary-gradient rounded-full">
              <h2 className="H4 font-bold text-white">08</h2>
            </div>
            <img
              src={img_8}
              draggable={false}
              alt="Service-Working-Process-Maintenance"
            />
            <div className="text-center">
              <h2 className="H5 font-bold text-primaryBlue leading-[1.2] mb-2">
                Maintenance
              </h2>
              <p className="SP text-black/70 text">
                We Offer Maintenance support to our client to resolve technical
                issues
              </p>
            </div>
          </div>
        </div>
    
      </div>
    </section>
  );
};

export default OurWorkProcess;
