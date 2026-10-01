import { Link } from "react-router-dom";
import digital_hero from "../../assets/Digital Transformation Service/digital_hero.svg";
import { MdArrowOutward } from "react-icons/md";
const digitalTransformationData = [
  {
    heading: "Search Engine Optimization (SEO)",
    bgColor: "bg-primaryBlue/70",
    description:
      "Drive Organic Traffic and Enhance Visibility Our SEO services ensure your website ranks prominently in search engine results, connecting you with the right audience. Key features include:",
    listItem: [
      "Keyword Research and Strategy: Identifying high-impact keywords relevant to your business and target audience.",
      "On-Page Optimization: Optimizing meta tags, headers, images, and content for better search engine indexing.",
      "Technical SEO: Fixing site architecture, mobile responsiveness, page speed, and XML sitemaps for seamless crawling and indexing.",
      "Link Building: Building high-quality backlinks to improve authority and rankings.",
      "Content Optimization: Creating engaging, keyword-rich content tailored to search intent.",
    ],
    link: "/service/digital-transformation-service/seo",
  },
  {
    heading: "Pay-Per-Click Advertising (PPC)",
    bgColor: "bg-secondaryPurple/70",
    description:
      "Achieve Immediate Results with Targeted Campaigns Our PPC services deliver fast and measurable results, targeting high-intent audiences. Core offerings include:",
    listItem: [
      "Campaign Setup: Creating compelling ad copies and visuals tailored to your goals.",
      "Platform Expertise: Managing ads on Google, Bing, Facebook, Instagram, and LinkedIn.",
      "A/B Testing: Testing variations to identify top-performing ads.",
      "Remarketing: Re-engaging visitors who’ve shown interest but haven’t converted.",
      "Budget Optimization: Maximizing ROI by carefully managing ad spend.",
    ],
    link: "/service/digital-transformation-service/ppc",
  },
  {
    heading: "Conversion Rate Optimization (CRO)",
    bgColor: "bg-secondaryPurple/70",
    description:
      "Turn Visitors into Loyal Customers Our CRO services maximize the value of your website traffic by:",
    listItem: [
      "UX/UI Analysis: Enhancing user experience for better engagement.",
      "A/B Testing: Testing layouts, CTAs, and designs to identify the most effective elements.",
      "Behavior Analytics: Using heatmaps and session recordings to understand user behavior.",
      "Landing Page Optimization: Creating high-converting pages tailored to specific campaigns.",
      "Funnel Optimization: Streamlining the customer journey to reduce drop-offs.",
    ],
    link: "/service/digital-transformation-service/conversion-rate-optimization",
  },
  {
    heading: "Social Media Marketing (SMM)",
    bgColor: "bg-primaryBlue/70",
    description:
      "Build Your Brand and Engage Directly with Customers Our SMM services foster meaningful connections and amplify your brand across social platforms:",
    listItem: [
      "Content Creation: Designing posts, videos, and stories that captivate audiences.",
      "Paid Social Campaigns: Running ads for increased visibility and engagement.",
      "Community Management: Building and managing your online community.",
      "Platform-Specific Strategies: Tailoring campaigns for Facebook, Instagram, LinkedIn, Twitter, and TikTok.",
      "Analytics: Monitoring performance and refining strategies for optimal results.",
    ],
    link: "/service/digital-transformation-service/social-media-marketing",
  },
  {
    heading: "Content Marketing",
    bgColor: "bg-primaryBlue/70",
    description:
      "Tell Your Story and Build Authority Engaging content is at the heart of any successful marketing strategy. GDFX provides:",
    listItem: [
      "Content Strategy: Developing a roadmap aligned with your audience’s needs.",
      "Content Creation: Producing blogs, videos, infographics, whitepapers, and eBooks.",
      "SEO Integration: Ensuring content ranks well for targeted keywords.",
      "Content Distribution: Amplifying reach via social media, email campaigns, and PR channels.",
      "Performance Tracking: Measuring engagement, shares, and conversions to refine efforts.",
    ],
    link: "/service/digital-transformation-service/content-marketing",
  },
  {
    heading: "Analytics and Reporting",
    bgColor: "bg-secondaryPurple/70",
    description:
      "Stay Informed and Ahead of the Curve Data drives our strategies. Our analytics services include:",
    listItem: [
      "Custom Dashboards: Providing real-time insights into campaign performance.",
      "KPI Tracking: Monitoring metrics like traffic, conversions, and engagement.",
      "Actionable Insights: Offering recommendations based on data trends.",
      "Advanced Tools: Utilizing Google Analytics, SEMrush, and other top-tier tools.",
    ],
    link: "/service/digital-transformation-service/analytics-reporting",
  },
];
const Digital_Marketing_Service = () => {
  return (
    <section className="py-20 bg-bgFirstBlue">
      <div className="customContainer !my-0">
        <div className="text-center">
          <h2 className="H2 font-bold capitalize text-white leading-tight">
            Comprehensive Digital Marketing Services by GDFX:
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondaryPurple to-primaryBlue">
              {" "}
              Elevate Your Online Presence
            </span>
          </h2>

          <p className="P text-mutedGray-c1 leading-relaxed ">
            At GDFX, we offer a complete suite of digital marketing services
            designed to empower your business, drive engagement, and achieve
            measurable results. Each service is crafted to align with your
            unique goals, leveraging cutting-edge strategies and tools to
            maximize impact.
          </p>

          <img src={digital_hero} alt="Service-Digital-Hero-Image" />
        </div>
        <div className="grid lg:grid-cols-2 gap-5">
          {digitalTransformationData.map((item, index) => {
            return (
              <div className={`p-4 flex flex-col ${item.bgColor}`} key={index}>
                <h2 className="H4 font-bold text-white mb-2">{item.heading}</h2>
                <div className="mb-5 flex-grow">
                  <p className="P text-white/90 mb-3">
                    {item.description}
                  </p>
                  <ul className="list-disc sm:pl-5 pl-4 space-y-2 marker:text-primaryBlue">
                    {item.listItem.map((listItem, idx) => (
                      <li className="SP text-off_white" key={idx}>
                        {listItem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="">
                  <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    <button className="px-5 py-2 border rounded-lg font-medium text-white shadow-lg bg-danger-gradient hover:shadow-xl hover:shadow-dangerRed/20 transition-all duration-300 inline-flex items-center gap-2 group">
                      Read More
                      <MdArrowOutward className="text-white text-xl transition-all duration-300 rotate-[45deg] group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Digital_Marketing_Service;
