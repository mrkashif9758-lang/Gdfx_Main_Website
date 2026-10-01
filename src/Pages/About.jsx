import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AboutHeader from "../Component/About Page Component/AboutHeader";
import AboutUsIntroduction from "../Component/About Page Component/AboutUsIntroduction";
import ProjectDemo from "../Component/About Page Component/ProjectDemo";
import StartBuildingProject from "../Component/About Page Component/StartBuildingProject";
import TrustedClient from "../Component/About Page Component/TrustedClient";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";
import MeetOurTeam from "../Component/About Page Component/MeetOurTeam";
import GlobalPresence from "../Component/About Page Component/GlobalPresence";

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>About GDFX | Digital Strategy & Web Solutions Experts</title>
        <meta
          name="description"
          content="GlobalDigitalsFX provides cutting-edge digital solutions to transform your business. Specializing in web development, design, and innovative digital strategies to enhance your online presence."
        />
        <meta
          name="keywords"
          content="about GDFX, digital agency, web solutions company, digital transformation experts, our story, company profile, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/about" />
        <meta
          property="og:title"
          content="About GDFX | Digital Strategy & Web Solutions Experts"
        />
        <meta
          property="og:description"
          content="GlobalDigitalsFX provides cutting-edge digital solutions to transform your business. Specializing in web development, design, and innovative digital strategies to enhance your online presence."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/about"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <AboutHeader />
      <AboutUsIntroduction />
      <MeetOurTeam/>
      <ProjectDemo />
      {/* <StartBuildingProject /> */}
      <TrustedClient />
      <GlobalPresence/>
      {/* <SubscribeToNewsLetter /> */}
    </>
  );
};

export default About;
