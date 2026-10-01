import { useEffect } from "react";
import { Helmet } from "react-helmet";

const Payment_Method = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Payment Methods</title>
        <meta
          name="description"
          content="Discover secure, flexible payment options at GDFX, including credit cards, PayPal, bank transfers, and cryptocurrency for seamless transactions."
        />
        <meta
          name="keywords"
          content="Payment methods, GDFX payments, GlobalDigitalSFX options, credit cards, PayPal, cryptocurrency, secure transactions, bank transfers"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/payment-method"
        />

        <meta property="og:title" content="Payment Methods" />
        <meta
          property="og:description"
          content="Discover secure, flexible payment options at GDFX, including credit cards, PayPal, bank transfers, and cryptocurrency for seamless transactions."
        />

        <meta property="og:type" content="website" />
      </Helmet>

      <section className="bg-bgSecondBlue py-20 min-h-[400px] flex items-center">
        <div className="customContainer !my-0">
          <h2 className="H1 font-extrabold capitalize text-white">
            Payment{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              Methods
            </span>
          </h2>
        </div>
      </section>

      <section className="bg-bgSecondBlue">
        <div className="mx-5">
          <div className="max-w-[1050px] mx-auto bg-dark-gradient-br py-10 md:py-20 border border-gray-800 border-b-0">
            <div className="customContainer !my-0">
              <h3 className="text-white H3 font-extrabold">
                GlobalDigitalSFX (GDFX) Payment Methods
              </h3>
              <h5 className="H5 font-bold text-white">
                Effective Date: 1 Jan 2025
              </h5>
              <p className="P pt-3 pb-10 text-navyBlue-c1">
                At GlobalDigitalSFX (GDFX), we offer a variety of secure and
                convenient payment methods for our customers. Below are the
                available payment options:
              </p>

              <div className="space-y-8">
                <div>
                  <h4 className="H4 font-bold text-white">
                    Accepted Payment Methods
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      <span className="font-bold">Credit/Debit Cards:</span> We
                      accept Visa, MasterCard, American Express, and Discover
                    </li>
                    <li>
                      <span className="font-bold">PayPal:</span> Secure online
                      payments via your PayPal account
                    </li>
                    <li>
                      <span className="font-bold">Bank Transfers:</span> Direct
                      bank transfers are accepted. Please contact our billing
                      team for details.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">Payment Terms</h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      All payments must be made in full before services begin.
                    </li>
                    <li>Prices are listed in USD unless stated otherwise.</li>
                    <li>
                      Customers are responsible for any additional charges from
                      their payment provider.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Security & Privacy
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      We use secure encryption to protect your payment details.
                    </li>
                    <li>
                      Payment information is processed by trusted third-party
                      payment processors; we do not store sensitive payment
                      details
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">
                    Billing & Invoicing
                  </h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>An invoice will be sent upon successful payment.</li>
                    <li>
                      If you require a customized invoice, please contact our
                      billing department.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">Refund Policy</h4>
                  <ul className="mt-2 P text-navyBlue-c1 list-inside list-disc space-y-1 ms-2">
                    <li>
                      Refunds are available within 15 days of purchase, subject
                      to our refund policy.
                    </li>
                    <li>
                      Processing time for refunds is 7-10 business days after
                      approval.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="H4 font-bold text-white">Need Help?</h4>
                  <p className="P text-navyBlue-c1 mt-2">
                    For payment assistance, please reach out to our billing
                    team:
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
                  <p className="P text-navyBlue-c1 text-center mt-4">
                    Thank you for choosing GlobalDigitalSFX (GDFX)!
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

export default Payment_Method;
