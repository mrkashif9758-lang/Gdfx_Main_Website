import { useEffect } from "react";
import { Helmet } from "react-helmet";
import CareerHeader from "../Component/Career Page Component/CareerHeader";
import Benefits from "../Component/Career Page Component/Benefits";
import CareerOpening from "../Component/Career Page Component/CareerOpening";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";

const Career = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Careers at GDFX | Join Our Innovative Tech Team</title>
        <meta
          name="description"
          content="Explore careers at GlobalDigitalSFX. Join an innovative team with growth opportunities, work-life balance, and global exposure"
        />
        <meta
          name="keywords"
          content="GDFX careers, IT jobs, software development jobs, work-life balance, innovation-driven company, tech jobs, job openings, hiring"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/career" />

        <meta
          property="og:title"
          content="Careers at GDFX | Join Our Innovative Tech Team"
        />
        <meta
          property="og:description"
          content="Explore careers at GlobalDigitalSFX. Join an innovative team with growth opportunities, work-life balance, and global exposure"
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/career"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <CareerHeader />
      <Benefits />
      <CareerOpening />
      <SubscribeToNewsLetter />
    </>
  );
};

export default Career;
