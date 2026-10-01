import { useEffect } from "react";
import { Helmet } from "react-helmet";
import BlogHeader from "../Component/Blog Page Component/BlogHeader";
import RecentArticle from "../Component/Blog Page Component/RecentArticle";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Insights & Trends | GDFX Blog on Digital Strategy & Innovation
        </title>
        <meta
          name="description"
          content="Explore the Global Digitals FX Blog for expert insights on digital transformation in foreign exchange. Stay informed with timely updates on FX trends, tech-driven solutions, market schedules, regulation, and more."
        />
        <meta
          name="keywords"
          content="digital strategy blog, tech innovation insights, FX trends, market updates, digital transformation articles, GDFX blog"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/blog" />
        <meta
          property="og:title"
          content="Insights & Trends | GDFX Blog on Digital Strategy & Innovation"
        />
        <meta
          property="og:description"
          content="Explore the Global Digitals FX Blog for expert insights on digital transformation in foreign exchange. Stay informed with timely updates on FX trends, tech-driven solutions, market schedules, regulation, and more."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/blog"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <BlogHeader />
      <RecentArticle />
      <SubscribeToNewsLetter />
    </>
  );
};

export default Blog;
