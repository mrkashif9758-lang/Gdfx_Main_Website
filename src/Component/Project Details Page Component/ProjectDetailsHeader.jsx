import React from "react";
const ProjectDetailsHeader = ({ projectIntro, headerImg, projectName }) => {
  return (
    <section className="pb-20 pt-24 bg-black">
      <div className="customContainer !my-0">
        <h2 className="H2 font-bold capitalize text-white mb-4 leading-tight text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
            {projectName}
          </span>
        </h2>
        <div className="mb-10">
          <h3 className="H4 font-bold text-white uppercase">Introduction</h3>
          <p className="P text-navyBlue-c1 ">{projectIntro}</p>
        </div>
        <div className="w-full rounded-xl overflow-hidden mb-5 xl:h-[550px] lg:h-[400px] md:h-[300px] sm:h-[250px] h-[190px]">
          <img
            src={headerImg}
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            alt="Case-Study-Image"
            className="w-full h-full object-center "
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsHeader;
