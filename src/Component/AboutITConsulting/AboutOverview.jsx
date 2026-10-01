import CSImg from "../../assets/About It Consulting/CS.svg";

function AboutOverview() {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            IT Consulting:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Transforming Ideas into Success Stories
            </span>
          </h2>
          <p className="P text-off_white mt-1.5">
            In today’s technology-driven world, staying ahead of the competition
            demands more than just keeping up—it requires strategic
            implementation of cutting-edge IT solutions tailored to your
            business needs. At GDFX, our IT Consulting services go beyond
            advice; we deliver actionable strategies, state-of-the-art
            solutions, and measurable results that drive growth, optimize
            operations, and future-proof your business.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="H4 font-bold text-white">Overview</h3>
            <p className="P text-off_white mt-3">
              At GDFX, we specialize in delivering innovative IT consulting
              solutions tailored to empower businesses across industries. Our
              goal is to help organizations optimize their IT infrastructure,
              adopt emerging technologies, and drive digital transformation.
              Whether you're looking to streamline operations, enhance
              cybersecurity, or leverage cloud computing, our expert team
              provides end-to-end support to align technology with your business
              objectives.
            </p>
            <ul className="mt-5 space-y-2.5 list-disc list-inside">
              <li className="SP text-off_white">
                Process Automation: Boost productivity with AI-driven automation
                tools.
              </li>
              <li className="SP text-off_white">
                Digital Transformation Consulting: Modernize your workflows with
                cutting-edge technology.
              </li>
              <li className="SP text-off_white">
                IT Strategy and Planning: Comprehensive IT roadmaps tailored to
                your growth goals.
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 lg:flex justify-center">
            <img
              src={CSImg}
              className="lg:w-auto w-full"
              draggable={false}
              alt="About-OverView-Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutOverview;
