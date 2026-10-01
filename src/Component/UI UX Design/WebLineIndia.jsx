import React from "react";
import steps from "../../assets/UI UX Design/steps.svg";
function WebLineIndia() {
  return (
    <section className=" py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H2 font-bold capitalize text-black mb-1 leading-tight text-center">
            Step-by-Step
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              UI/UX Design Process at WeblineIndia
            </span>
          </h2>

          <p className="P text-text_color leading-relaxed text-center">
            At GDFX, we are a top-tier UI design agency specializing in a
            comprehensive UI/UX design lifecycle that combines strategy, theory,
            and practical execution. Our process starts with creating a roadmap
            that aligns project goals with user needs, ensuring a user-focused
            approach. In the next phase, we design user-centric interfaces and
            intuitive experiences tailored to enhance engagement. Our rigorous
            evaluation and testing phase ensures usability and effectiveness
            through continuous feedback. Finally, we implement seamless UX
            integration, delivering optimized solutions for an enhanced digital
            experience. Trust GDFX for cutting-edge UI/UX design services that
            elevate your digital presence and drive results.
          </p>
        </div>

        <div className="max-w-[800px] mx-auto">
          <div className="">
            <img
              src={steps}
              className="w-full h-full"
              alt="Service-UI-UX-Steps"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebLineIndia;
