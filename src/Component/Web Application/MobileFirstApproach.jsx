import mobile_first_approach from "../../assets/Web Application/Mobile First Approach/mobile_first_approach.svg";

const MobileFirstApproach = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="">
            <h2 className="H2 font-bold capitalize text-white mb-4 leading-tight">
              Mobile-First Approach to
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
                {" "}
                Website Development at GDFX
              </span>
            </h2>
            <p className="P text-off_white">
              At GDFX, we prioritize a mobile-first approach to web development,
              ensuring your website delivers seamless experiences across all
              devices. With over half of internet traffic originating from
              mobile users, our design and development process focuses on
              creating responsive, fast-loading, and user-friendly websites that
              rank higher on search engines. By leveraging cutting-edge
              technologies like React.js, HTML5, and CSS3, we craft scalable
              websites optimized for mobile usability without compromising
              desktop functionality. Our SEO-friendly design improves
              visibility, engagement, and conversion rates, helping your
              business thrive in today’s digital-first world. Choose GDFX for a
              website that’s built to excel on every platform.
            </p>
          </div>
          <div className="flex justify-center p-5">
            <img
              src={mobile_first_approach}
              alt="Service-Mobile-App"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileFirstApproach;
