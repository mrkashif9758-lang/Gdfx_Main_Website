import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Terms_of_Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms and Conditions</title>
        <meta
          name="description"
          content="Read GDFX's Terms of Service to understand policies on payments, refunds, user responsibilities, intellectual property, and service limitations."
        />
        <meta
          name="keywords"
          content="GlobalDigitalSFX Terms of Service, GDFX policies, digital services agreement, payment terms, refunds, user responsibilities, IP rights, service limits"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/terms-of-services"
        />

        <meta property="og:title" content="Terms and Conditions" />
        <meta
          property="og:description"
          content="Read GDFX's Terms of Service to understand policies on payments, refunds, user responsibilities, intellectual property, and service limitations."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-bgSecondBlue py-20 min-h-[400px] flex items-center">
        <div className="customContainer !my-0">
          <h2 className="H1 font-extrabold capitalize text-white">
            Terms of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Service
            </span>
          </h2>
        </div>
      </section>

      <section className="bg-bgSecondBlue">
        <div className="mx-5">
          <div className="max-w-[1050px] mx-auto bg-dark-gradient-br py-10 md:py-20 border border-gray-800 border-b-0">
            <div className="customContainer !my-0">
              <h3 className="text-white H3 font-extrabold">
                GlobalDigitalSFX (GDFX) Terms of Service
              </h3>
              <h5 className="H5 font-bold text-white">
                Effective Date: 1 Jan 2025
              </h5>
              <p className="P pt-3 pb-10 text-navyBlue-c1">
                Welcome to GlobalDigitalSFX (GDFX)! By using our services, you
                agree to the following terms. Please read them carefully.
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="H4 font-bold text-white">
                    1. Acceptance of Terms
                  </h4>
                  <p className="P text-navyBlue-c1 mt-2">
                    By accessing or using our website and services, you agree to
                    follow these terms. If you do not agree, please do not use
                    our services.
                  </p>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    2. Services We Provide
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      We offer digital services, including design, development,
                      and consulting.
                    </li>
                    <li>
                      All services are provided as described at the time of
                      purchase.
                    </li>
                    <li>
                      We may update or change our services without prior notice.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    3. Payments & Refunds
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      Payments must be made in full before services begin.
                    </li>
                    <li>
                      Refunds are available within 15 days of purchase, subject
                      to our refund policy.
                    </li>
                    <li>
                      We are not responsible for additional charges from your
                      payment provider.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    4. User Responsibilities
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      You agree to provide accurate information when using our
                      services.
                    </li>
                    <li>
                      You must not misuse or abuse our services, including
                      engaging in illegal activities.
                    </li>
                    <li>
                      You are responsible for keeping your account details safe.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    5. Intellectual Property
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      All content, logos, and materials on our website belong to
                      GDFX.
                    </li>
                    <li>
                      You may not copy, reproduce, or distribute our content
                      without permission.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    6. Limitation of Liability
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      We strive to provide reliable services, but we do not
                      guarantee error-free performance.
                    </li>
                    <li>
                      GDFX is not responsible for any losses resulting from the
                      use of our services.
                    </li>
                    <li>
                      Our maximum liability is limited to the amount you paid
                      for the service.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    7. Termination of Services
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      We reserve the right to suspend or terminate your access
                      to our services if you violate these terms.
                    </li>
                    <li>
                      No refunds will be issued for terminated accounts due to
                      violations.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    8. Changes to These Terms
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>We may update these terms from time to time.</li>
                    <li>
                      Continued use of our services after changes means you
                      accept the updated terms.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    9. Contact Information
                  </h4>
                  <p className="P text-navyBlue-c1 mt-2">
                    If you have any questions about these terms, you can reach
                    us at:
                  </p>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      Email:{" "}
                      <span className="underline">
                        billing@globaldigitalsfx.com
                      </span>
                    </li>
                    <li>
                      Phone: <span className="underline">+1-330-321-3108</span>
                    </li>
                    <li>
                      Office Address:{" "}
                      <span className="underline">
                        30 N Gould ST STE R, Sheridan, WY 82801
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms_of_Service;
