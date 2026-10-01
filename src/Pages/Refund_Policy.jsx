import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";

const Refund_Policy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund Policy</title>
        <meta
          name="description"
          content="Read GDFX's refund policy to understand eligibility criteria, refundable services, and the process to request a refund smoothly and transparently."
        />
        <meta
          name="keywords"
          content="GDFX Refund Policy, GlobalDigitalSFX Refund, Money-back guarantee, Service Refund, Refund eligibility, Cancel Service, Payment Refund"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/refund-policy"
        />

        <meta property="og:title" content="Refund Policy" />
        <meta
          property="og:description"
          content="Read GDFX's refund policy to understand eligibility criteria, refundable services, and the process to request a refund smoothly and transparently."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/refund-policy"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-bgSecondBlue py-20 min-h-[400px] flex items-center">
        <div className="customContainer !my-0">
          <h2 className="H1 font-extrabold capitalize text-white">
            Refund{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Policy
            </span>
          </h2>
        </div>
      </section>

      <section className="bg-bgSecondBlue">
        <div className="mx-5">
          <div className="max-w-[1050px] mx-auto bg-dark-gradient-br py-10 md:py-20 border border-gray-800 border-b-0">
            <div className="customContainer !my-0">
              <h3 className="text-white H3 font-extrabold">
                GlobalDigitalSFX (GDFX) Refund Policy
              </h3>
              <h5 className="H5 font-bold text-white">
                Effective Date: 1 Jan 2025
              </h5>
              <p className="P pt-3 pb-10 text-navyBlue-c1">
                At GlobalDigitalSFX (GDFX), we want you to be happy with our
                services. If you're not satisfied, you may be eligible for a
                refund. Here's how it works:
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="H4 font-bold text-white">
                    Who Can Get a Refund?
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      You can request a refund within 15 days of purchase.
                    </li>
                    <li>
                      If we haven't fully delivered the service or you haven't
                      used it, you may qualify.
                    </li>
                    <li>
                      Before asking for a refund, reach out to our support
                      team—we may be able to fix the issue.
                    </li>
                    <li>
                      You'll need to provide details about your purchase and why
                      you want a refund.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    What's Not Refundable?
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>Services that are already completed and delivered.</li>
                    <li>Custom or personalized services that have started.</li>
                    <li>Subscription services after the first 15 days.</li>
                    <li>Special deals and discounted services.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    How to Request a Refund
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-decimal space-y-1 ms-2">
                    <li>
                      Send an email to{" "}
                      <span className="underline">
                        billing@globaldigitalsfx.com
                      </span>{" "}
                      with the subject "Refund Request."
                    </li>
                    <li>
                      Include your order details, the reason for the refund, and
                      any necessary proof.
                    </li>
                    <li>
                      We'll review your request and get back to you within 5-7
                      business days.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Refund Processing Time
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      If approved, refunds take 7-10 business days to process.
                    </li>
                    <li>
                      The money will be returned to the same payment method you
                      used.
                    </li>
                    <li>
                      Any transaction fees may be deducted from your refund.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">Need Help?</h4>
                  <p className="P text-navyBlue-c1 mt-2">
                    If you have any questions, feel free to contact us:
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
                    <li>Support Hours: Monday - Friday, 10 AM to 6 PM (EST)</li>
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

export default Refund_Policy;
