import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import registeredNgo from "../../assets/NGO/registered_ngo.png";
import { MdArrowOutward } from "react-icons/md";

const RegisteredNgo = () => {
  return (
    <section className="py-20 bg-bgFirstBlue overflow-hidden">
      <div className="customContainer !my-0">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <motion.div
            initial={{ y: 50, x: -100, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "linear" }}
          >
            <div>
              <button className="px-2 py-1 rounded cursor-text bg-text_primary text-white_main SP">
                Are you a registered NGO or non-profit?
              </button>
            </div>
            <p className="H6 font-semibold text-white mt-3 mb-3">
              We’re committed to supporting the mission-driven work of NGOs and
              non-profits like yours. That’s why we’re offering a fully
              <span className="font-semibold text-primaryBlue">
                {" "}
                professional website — completely free of charge.
              </span>
            </p>

            <p className="P text-off_white ">
              Whether you're just getting started or looking to revamp your
              current site, our team will handle the design, development, and
              launch process at no cost to you. There are no hidden fees, no
              monthly charges, and no strings attached — just high-quality
              digital support to help you amplify your impact and reach the
              communities you serve.
            </p>

            <Link to={"/contact"} onclick={() => window.scrollTo(0, 0)}>
              {" "}
              <button className="px-5 mt-7 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 flex items-center gap-1 group">
                Contact for Free Website
                <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
              </button>
            </Link>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "linear" }}
          >
            <img
              src={registeredNgo}
              alt="NGO receiving digital support"
              className="relative z-10 w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegisteredNgo;
