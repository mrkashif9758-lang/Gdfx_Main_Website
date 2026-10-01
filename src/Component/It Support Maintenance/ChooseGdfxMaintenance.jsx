import gdfx_maintenance from "../../assets/It Support Maintenance/whychoose.jpeg";
const chooseGdfxMaintenanceData = [
  {
    title: "1. Rapid Issue Resolution",
    description:
      "Our skilled team resolves IT issues quickly and efficiently, reducing downtime and maintaining business continuity effectively.",
  },
  {
    title: "2. Tailored Solutions",
    description:
      "Customized IT support strategies aligned with your unique business needs, ensuring integration and enhanced operational efficiency.",
  },
  {
    title: "3. Regular Maintenance",
    description:
      "Scheduled updates and maintenance services ensure your systems stay secure, efficient, and ready to meet evolving business demands.",
  },
  {
    title: "4. Cost-Effective Services",
    description:
      "Affordable IT support and maintenance solutions without compromising quality, designed to fit your business budget perfectly.",
  },
  {
    title: "5. Expert Team",
    description:
      "Certified IT professionals offering reliable, scalable, and secure support to address complex technological challenges with precision.",
  },
];
const ChooseGdfxMaintenance = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center mb-10">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Why Choose
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              GDFX for IT Support and Maintenance?
            </span>
          </h2>
        </div>

        <div className="customContainer !my-0 grid lg:grid-cols-2 grid-cols-1 gap-5 lg:items-center !px-0">
          <div className="flex flex-col gap-y-3">
            {chooseGdfxMaintenanceData.map((item, index) => (
              <div key={index} className="">
                <h2 className="H5 font-bold text-white">{item.title}</h2>
                <p className="SP text-off_white mt-0.5">{item.description}</p>
              </div>
            ))}
          </div>
          <div className=" p-5">
            <img
              src={gdfx_maintenance}
              className="w-full lg:w-auto"
              alt="Service-It"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseGdfxMaintenance;
