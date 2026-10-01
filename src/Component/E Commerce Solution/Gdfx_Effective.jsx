const effectiveList = [
  {
    heading: "Expertise & Customization",
    text: "GDFX leverages a skilled team of developers, designers, and business analysts to craft tailor-made solutions for each client. This ensures that every eCommerce platform is unique, secure, and efficient.",
    bg: "bg-primaryBlue/60",
  },
  {
    heading: "Technology Integration",
    text: "We integrate the latest technologies and tools, such as advanced CMS platforms, payment gateways, CRM systems, and inventory management software, to offer a fully functional and seamless online store.",
    bg: "bg-secondaryPurple/50",
  },
  {
    heading: "Scalability & Flexibility",
    text: "GDFX designs solutions that are easily scalable, enabling businesses to grow without facing limitations.",
    bg: "bg-secondaryPurple/50",
  },
  {
    heading: "Support & Maintenance",
    text: "We provide ongoing support to ensure smooth operation, quick issue resolution, and regular updates to keep the platform competitive.",
    bg: "bg-primaryBlue/60",
  },
];

const Gdfx_Effective = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <h2 className="H2 font-bold capitalize text-white leading-tight text-center">
          How GDFX effective
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
            {" "}
            Solutions For e-Commerce
          </span>
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 sm:gap-5 gap-3 sm:mb-5 mb-2 mt-10">
          {effectiveList.map((item, index) => (
            <div
              className={`px-4 py-6 flex flex-col items-center justify-center text-white rounded ${item.bg}`}
              key={index}
            >
              <h3 className="H4 font-bold text-white mb-2">{item.heading}</h3>
              <p className="P leading-[1.3] text-white text-center">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="P text-off_white">
          This structured process ensures that each eCommerce project is handled
          professionally, with a focus on quality, user experience, and
          long-term success.
        </p>
      </div>
    </section>
  );
};

export default Gdfx_Effective;