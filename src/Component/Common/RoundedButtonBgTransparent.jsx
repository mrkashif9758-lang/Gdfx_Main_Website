import React from "react";
import { Link } from "react-router-dom";

const RoundedButtonBgTransparent = (props, color = false) => {
  return (
    <>
      <Link
        to={props.link}
        // className="sm:w-auto w-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        <button
          className={`px-7 py-3 border-[2px] rounded-md duration-200 ${
            color ? "text-white border-white hover:border-[#1B2FE0FE]" : "text-[#1B2FE0FE] border-[#1B2FE0FE]"
          }   hover:bg-gradient-to-b hover:from-[#1a2fe0] w-full hover:to-[#0F1A71] hover:text-white capitalize font-semibold`}
        >
          {props.title}
        </button>
      </Link>
    </>
  );
};

export default RoundedButtonBgTransparent;
