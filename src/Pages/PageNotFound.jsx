import React from "react";
import { Helmet } from "react-helmet";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | GDFX</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Navigate back to the homepage or explore other services offered by GDFX."
        />
        <meta
          name="keywords"
          content="404 error, page not found, GDFX broken link, missing page"
        />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/404" />

        <meta property="og:title" content="404 Page Not Found | GDFX" />
        <meta
          property="og:description"
          content="This page doesn't exist. Go back to the homepage or check out our services."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/404"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="flex items-center justify-center min-h-screen bg-bgSecondBlue">
        <div className="text-center text-white">
          <h1 className="text-6xl font-extrabold mb-4">404</h1>
          <p className="text-2xl mb-4">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="bg-white text-[#4A3AFF] px-6 py-3 rounded-lg font-semibold hover:bg-[#4A3AFF] hover:text-white transition duration-300"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
