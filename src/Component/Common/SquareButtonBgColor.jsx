import React from "react";
import { Link } from "react-router-dom";

const SquareButtonBgColor = (props) => {
  return (
    <>
      <Link
        to={props.link}
        // className="sm:w-auto w-full"
        onClick={() => window.scrollTo(0, 0)}
      >
        <button className="px-7 py-2 sm:w-auto w-full border-[2px] border-[#1B2FE0FE] customGradient HovercustomGradient text-white rounded-md">
          {props.title}
        </button>
      </Link>
    </>
  );
};

export default SquareButtonBgColor;
