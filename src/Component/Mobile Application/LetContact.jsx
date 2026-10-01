import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const LetContact = (props) => {
  return (
    <section className="bg-black py-20">
      <div className="customContainer !my-0">
        <h2
          className={`H4 leading-[1.2] font-bold  text-center bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue ${
            props.underline && "underline"
          }`}
        >
          {props.heading}
        </h2>
        <h4
          className={`H6 text-center mb-6 mt-3 ${
            props.underline && "underline"
          }`}
          style={{ color: "rgba(216, 231, 255, 1)" }}
        >
          {props.title}
        </h4>
        <div className="flex justify-center">
          <Link to={"/contact"} onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
            <button
              className={`px-5 py-3 rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 flex items-center gap-2 group ${
                props.underline && "underline"
              }`}
            >
              Let's Contact Us
              <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1.5" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LetContact;
