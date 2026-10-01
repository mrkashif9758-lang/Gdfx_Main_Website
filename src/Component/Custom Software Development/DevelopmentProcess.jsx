import developmentProcess from "../../assets/Custom Software Development/Development Process/development_process.webp";
const DevelopmentProcess = () => {
  return (
    <section className="py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H2 font-bold capitalize text-black leading-tight text-center">
            Our
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Development Process
            </span>
          </h2>
          <p className="P text-text_color text-center">
            Our custom software development process ensures tailored, scalable
            solutions through discovery, design, agile development, testing,
            deployment, and support.
          </p>
        </div>
        <div onContextMenu={(e) => e.preventDefault()}>
          <img
            src={developmentProcess}
            draggable={false}
            alt="Service-Custom-Development-Process"
          />
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
