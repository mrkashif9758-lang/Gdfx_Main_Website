import React, { useEffect } from "react";

import "./TextShpere.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const Languages = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Vue",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
        "Nuxt",
        "NodeJS",
        "Babel",
        "Jquery",
        "ES6",
        "GIT",
        "GITHUB",
      ];

      const options = {
        radius: 300,
        maxSpeed: "small",
        initSpeed: "small",
        keep: true,
        direction: 135,
      };

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
      <div className="text-shpere mb-[50px]">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default Languages;
