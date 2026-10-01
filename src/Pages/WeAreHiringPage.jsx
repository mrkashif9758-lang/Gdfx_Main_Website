import { useEffect } from "react";
import { Helmet } from "react-helmet";
import HiringHeader from "../Component/WeAreHiring Page Component/HiringHeader";
import JobDescription from "../Component/WeAreHiring Page Component/JobDescription";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";

const WeAreHiringPage = () => {
  const { jobs } = useSelector((state) => state.jobContainer);
  const { jobId } = useParams();

  // const decodedJobId = decodeURIComponent(jobId);
  const singleJob = jobs?.find(
    (item) =>
      item?.title
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase() === jobId
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!singleJob) return null;

  return (
    <>
      <Helmet>
        <title>{`GDFX ${singleJob.title} in ${singleJob.location} | GDFX Careers`}</title>

        <meta
          name="description"
          content={`Apply for ${singleJob.title} at GDFX in ${singleJob.location}. Join our innovative team and grow your career!`}
        />
        <meta
          name="keywords"
          content={`${singleJob.title} job, hiring in ${singleJob.location}, ${singleJob.jobType}, GDFX careers, IT jobs, software development, tech careers`}
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link
          rel="canonical"
          href={`https://www.globaldigitalsfx.com/we-are-hiring/${singleJob.slug}`}
        />
        <meta
          property="og:title"
          content={`Now Hiring: ${singleJob.title} in ${singleJob.location} | GDFX Careers`}
        />
        <meta
          property="og:description"
          content={`Apply for ${singleJob.title} at GDFX in ${singleJob.location}. Join our innovative team and grow your career!`}
        />
        <meta
          property="og:url"
          content={`https://www.globaldigitalsfx.com/we-are-hiring/${singleJob.slug}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>

      <HiringHeader />
      <JobDescription />
      <SubscribeToNewsLetter />
    </>
  );
};

export default WeAreHiringPage;
