import React from "react";
import { Link } from "react-router-dom";

const SquareButtonBgTransparent = (props) => {
  return (
    <>
      <Link
        to={props.link}
        // className="sm:w-auto w-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        <button className="px-7 py-2 sm:w-auto w-full border-[2px] border-white  text-white rounded-md hover:border-orange_main transition duration-300 ease-in-out hover:bg-text_primary ">
          {props.title}
        </button>
      </Link>
    </>
  );
};

export default SquareButtonBgTransparent;
