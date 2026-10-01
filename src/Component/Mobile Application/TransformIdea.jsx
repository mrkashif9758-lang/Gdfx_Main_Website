import transformidea from "../../assets/Mobile Application/transformIdea.webp";
const TransformIdea = () => {
  return (
    <section className="py-20">
      <div className="customContainer !my-0">
        <div className="mb-10">
          <h2 className="H2 font-bold capitalize text-black leading-tight text-center">
            Everything You Need to Know About
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              App Development Steps
            </span>
          </h2>
          <p className="P text-text_color text-center max-w-5xl mx-auto">
            Our app development process covers everything — from discovery and
            design to agile development, testing, deployment, and long-term
            support — to deliver tailored, scalable solutions that grow with
            your business.
          </p>
        </div>
        <div onContextMenu={(e) => e.preventDefault()}>
          <img src={transformidea} draggable={false} alt="app-development" />
        </div>
      </div>
    </section>
  );
};

export default TransformIdea;
