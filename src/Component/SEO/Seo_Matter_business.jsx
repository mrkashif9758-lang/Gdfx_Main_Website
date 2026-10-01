import React from "react";
import seo_matters from "../../assets/Seo/seo_matters.svg";

const Seo_Matter_business = () => {
  return (
    <section className="py-20 bg-bgFirstBlue relative overflow-hidden">
      <div className="customContainer !my-0">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="H2 font-bold capitalize text-white leading-tight mb-4">
            GDFX provides SEO services for a{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primaryBlue to-secondaryPurple">
              wide range of industries, including:
            </span>
          </h2>
          <p className="P text-off_white max-w-3xl mx-auto leading-relaxed">
            GDFX offers expert SEO services for industries including technology,
            e-commerce, healthcare, real estate, education, finance, and
            hospitality, ensuring tailored strategies for maximum online
            visibility and growth.
          </p>
        </div>

        {/* Content & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 lg:order-1 order-2 space-y-6">
            <h3 className="H3 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary leading-snug">
              Why SEO Matters for Your Business
            </h3>
            
            <p className="P text-off_white leading-relaxed">
              SEO (Search Engine Optimization) is critical for businesses as it
              boosts online visibility and drives organic traffic to websites.
              In a competitive digital landscape, SEO ensures your brand appears
              in front of the right audience at the right time.
            </p>

            <p className="P text-off_white leading-relaxed">
              It helps build trust and credibility, improves user experience, and
              increases conversion rates. By targeting relevant keywords and
              optimizing your website, SEO attracts potential customers actively
              searching for your products or services.
            </p>

            <p className="P text-off_white leading-relaxed">
              Moreover, it offers a cost-effective marketing solution with
              measurable results, making it essential for long-term growth,
              brand awareness, and staying ahead of competitors in today’s
              digital-first world.
            </p>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 lg:order-2 order-1 flex justify-center items-center">
            <div className="w-full max-w-md h-[380px] sm:h-[420px] flex items-center justify-center p-6 backdrop-blur-sm shadow-xl">
              <img
                src={seo_matters}
                className="w-full h-full object-contain drop-shadow-lg"
                alt="service-Digital-SEO"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Seo_Matter_business;