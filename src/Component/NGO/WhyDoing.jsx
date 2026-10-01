import { motion } from "framer-motion";
import donation from "../../assets/NGO/donation.svg";
import trust from "../../assets/NGO/trust.svg";
import eye from "../../assets/NGO/eye.svg";
import donors from "../../assets/NGO/donors.svg";
import showcase from "../../assets/NGO/showcase.svg";

const doingData = [
  {
    imgSrc: donation,
    title: "Accept donations online",
  },
  {
    imgSrc: trust,
    title: "Build trust with your community",
  },
  {
    imgSrc: eye,
    title: "Share your story and raise awareness",
  },
  {
    imgSrc: donors,
    title: "Connect with donors and volunteers",
  },
  {
    imgSrc: showcase,
    title: "Showcase your projects and impact",
  },
];

const WhyDoing = () => {
  const containerV = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
      },
    },
  };

  const itemV = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-bgFirstBlue overflow-hidden">
      <div className="customContainer !my-0">
        <div className="flex flex-col mb-10">
          <div className="flex justify-center">
            <button className="px-2 py-1 rounded cursor-text bg-text_primary text-white_main SP">
              Are you a registered NGO or non-profit?
            </button>
          </div>
          <h2 className="H2 font-bold capitalize text-white leading-tight text-center mt-3">
            Why We’re
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              {" "}
              Doing This
            </span>
          </h2>
          <p className="text-center P text-off_white">
            {" "}
            At GlobalDigitalsFX, we believe in supporting those who support
            others. Non-profits and NGOs are doing the hard work of making our
            world a better place — often with limited resources. A digital
            presence shouldn't be a luxury, so we’re offering free websites to
            eligible organizations to help amplify their voice, build
            credibility, and connect with more people.
          </p>
        </div>
        <motion.div
          variants={containerV}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "linear" }}
          className="grid xl:grid-cols-5  md:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-5 mb-5"
        >
          {doingData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemV}
              className="px-5 py-10 rounded-md shadow-md bg-primary-gradient flex flex-col gap-5"
            >
              <div className="flex justify-center">
                <img src={item.imgSrc} alt="" />
              </div>
              <p className="text-center H6 font-bold text-off_white">
                {item.title}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyDoing;
