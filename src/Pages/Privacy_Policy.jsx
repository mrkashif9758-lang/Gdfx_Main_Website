import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Privacy_Policy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="Read GDFX's Privacy Policy to learn how we collect, use, and protect your data while ensuring security, transparency, and compliance."
        />
        <meta
          name="keywords"
          content="Privacy Policy, GlobalDigitalSFX privacy, GDFX data protection, personal info security, online privacy, data sharing, cookies policy"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/privacy-policy"
        />

        <meta property="og:title" content="Privacy Policy" />
        <meta
          property="og:description"
          content="Read GDFX's Privacy Policy to learn how we collect, use, and protect your data while ensuring security, transparency, and compliance."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-bgSecondBlue py-20 min-h-[400px] flex items-center">
        <div className="customContainer !my-0">
          <h2 className="H1 font-extrabold capitalize text-white">
            privacy{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple ">
              policy
            </span>
          </h2>
        </div>
      </section>
      <section className="bg-bgSecondBlue">
        <div className="mx-5">
          <div className="max-w-[1050px] mx-auto bg-dark-gradient-br py-10 md:py-20 border border-gray-800 border-b-0">
            <div className="customContainer !my-0">
              <h3 className="text-white H3 font-extrabold">
                GlobalDigitalSFX (GDFX) Privacy Policy
              </h3>
              <h5 className="H5 font-bold text-white">
                Effective Date: 1 Jan 2025
              </h5>
              <p className="P pt-3 pb-10 text-navyBlue-c1">
                At GlobalDigitalSFX (GDFX), we care about your privacy and want
                you to understand how we collect, use, and protect your personal
                information. Below is a simple breakdown of our privacy policy.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="H4 font-bold text-white">
                    What Information We Collect
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      Your name, email, phone number, and payment details when
                      you sign up or make a purchase.
                    </li>
                    <li>
                      Information about how you use our website and services.
                    </li>
                    <li>Any messages or support requests you send us.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    How We Use Your Information
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>To provide and improve our services.</li>
                    <li>To process payments and send invoices.</li>
                    <li>
                      To communicate with you about updates, support, or
                      promotions.
                    </li>
                    <li>To keep our website safe and prevent fraud.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Who We Share Your Information With
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>We do not sell your information to anyone.</li>
                    <li>
                      We may share it with trusted partners who help us run our
                      business, like payment processors.
                    </li>
                    <li>
                      If required by law, we may share your information with
                      authorities.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    How We Keep Your Information Safe
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      We use security measures to protect your data from hackers
                      and unauthorized access.
                    </li>
                    <li>
                      Only authorized staff can access your personal
                      information.
                    </li>
                    <li>
                      We do not store sensitive payment details; they are
                      processed securely by payment providers.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Your Rights and Choices
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      You can ask us what personal data we have about you.
                    </li>
                    <li>You can request to update or delete your data.</li>
                    <li>
                      You can opt out of marketing emails anytime by clicking
                      “unsubscribe.”
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Cookies and Tracking
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>We use cookies to improve your browsing experience.</li>
                    <li>
                      You can disable cookies in your browser settings if you
                      prefer.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">Contact Us</h4>
                  <p className="P text-navyBlue-c1">
                    If you have any questions about this privacy policy, you can
                    reach us at
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
                  <p className="P text-navyBlue-c1 mt-2">
                    We take your privacy seriously and appreciate your trust in
                    us. Thank you for being a valued customer!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy_Policy;
