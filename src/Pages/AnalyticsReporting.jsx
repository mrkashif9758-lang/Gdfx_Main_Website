import React, { useEffect } from "react";
import GdfxCROSolution from "../Component/Digital Transformation Service/GdfxCROSolution";
import GdfxMarkiting from "../Component/Digital Transformation Service/GdfxMarkiting";
import GdfxProvide from "../Component/Digital Transformation Service/GdfxProvide";
import GdfxInformation from "../Component/Digital Transformation Service/GdfxInformation";
import { Helmet } from "react-helmet";
import E_Commerce_Header from "../Component/E Commerce Solution/E_Commerce_Header";
import E_commerce_Slider from "../Component/E Commerce Solution/E_commerce_Slider";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import SquareButtonBgTransparent from "../Component/Common/SquareButtonBgTransparent";
import Analytics_Header from "../Component/Analytics Reporting/Analytics_Header";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";
import LetContact from "../Component/Mobile Application/LetContact";
const testimonialsData = [
  {
    testimonials: smart,
    src: smart,
    des: "I hired GlobalDigitalsfx to create a real estate website for SmartPropertyHub, and I’m super happy with the results! The website looks amazing, works smoothly, and is easy for users to find properties. The team made sure everything was done on time and exactly how I wanted. Highly recommend their work",
    author: "smartpropertyhub",
  },
  {
    testimonials: astro,
    src: astro,
    des: "We at AstroSoull were really pleased with GDFX’s services. The platform is easy to navigate, and the customer support team is always ready to help. With useful tools and educational resources, GDFX is a great choice for anyone wanting to improve their trading experience. Definitely worth checking out!",
    author: "astroSoull",
  },
  {
    testimonials: koshika,
    src: koshika,
    des: `GlobalDigitalsfx created a great website for Koshika! It’s clean, simple to navigate, and explains our services like LLC filing, business banking, and bookkeeping. They worked quickly and made the whole process stress-free. We’re very happy with their work`,
    author: "koshika.llc",
  },
  {
    testimonials: nirala,
    src: nirala,
    des: "The Nirala Trio's website, created by GlobalDigitalsfx, is modern, user-friendly, and informative. The team worked efficiently, delivering high-quality results. Highly recommend GlobalDigitalsfx for professional websites",
    author: "niralatrio",
  },
  {
    testimonials: mint,
    src: mint,
    des: "We’re extremely happy with the website created for The Mint Consultancy! It’s easy to navigate, professional, and highlights all our key services, making it simple for clients to find what they need. GlobalDigitalsfx delivered on time and exceeded our expectations. Great job!",
    author: "theminconsultancy",
  },
  {
    testimonials: quotesTestimonials,
    src: sold,
    des: `I want to thank GlobalDigitalsfx for creating an exceptional website for Sold Style. The website is modern, easy to navigate, and perfectly represents our brand and services. They understood our requirements and delivered a professional platform that exceeded our expectations. The team was efficient, responsive, and a pleasure to work with. Highly recommend their services!`,
    author: "soldforstyle",
  },
  {
    testimonials: quotesTestimonials,
    src: tej,
    des: `I want to thank GlobalDigitalsfx for creating an amazing website that beautifully tells my story. They showcased my political journey and social work with great care and professionalism. The site is easy to navigate and highlights my efforts, such as providing oxygen, medicines, and food during the pandemic. Their team worked efficiently and understood exactly what I needed. I’m very happy with the result and would recommend them to anyone looking for high-quality website development.`,
    author: "tejpratapsingh",
  },
];
const faqs = [
  // Tab 1 FAQs (Questions 1 to 10)
  [
    {
      question: "What is analytics in digital marketing?",
      answer:
        "Analytics in digital marketing involves tracking, measuring, and analyzing data from your marketing campaigns to understand performance and improve decision-making.",
    },
    {
      question: "Why is analytics important for businesses?",
      answer:
        "Analytics helps businesses understand customer behavior, optimize marketing efforts, track ROI, and make data-driven decisions for growth.",
    },
    {
      question: "What is the difference between analytics and reporting?",
      answer:
        "Analytics focuses on interpreting data to uncover insights and trends, while reporting involves presenting data in an organized format, like charts or dashboards.",
    },
    {
      question: "What types of data are tracked in marketing analytics?",
      answer:
        "Common data points include website traffic, conversion rates, bounce rates, customer demographics, ad performance, and email open rates.",
    },
    {
      question: "What is a KPI in analytics?",
      answer:
        "KPI (Key Performance Indicator) is a measurable value that shows how effectively you’re achieving a specific objective, such as website traffic, conversion rates, or ROI.",
    },
    {
      question: "How do I choose the right KPIs for my business?",
      answer:
        "Align KPIs with your goals. For example, track conversion rates for e-commerce, or engagement metrics for brand awareness campaigns.",
    },
    {
      question: "What is real-time analytics?",
      answer:
        "Real-time analytics provides immediate insights into user behavior and campaign performance, enabling quick decisions and adjustments.",
    },
    {
      question: "How can analytics improve ROI?",
      answer:
        "Analytics identifies underperforming campaigns, optimizes high-performing content, and allocates resources to strategies that drive the best results.",
    },
    {
      question: "What is attribution in analytics?",
      answer:
        "Attribution assigns credit to different touchpoints in the customer journey (e.g., ads, social media) to determine which efforts drive conversions.",
    },
    {
      question: "What are common challenges in analytics?",
      answer:
        "Challenges include data silos, tracking accuracy, misaligned KPIs, and difficulty interpreting data into actionable insights.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question: "What is a marketing dashboard?",
      answer:
        "A marketing dashboard visually presents your key metrics in one place, making it easier to monitor performance and track progress toward goals.",
    },
    {
      question: "How do I create a marketing report?",
      answer:
        "Define your objectives. Select relevant KPIs. Collect data from analytics tools. Visualize insights with graphs or charts. Include actionable recommendations.",
    },
    {
      question: "What is data segmentation?",
      answer:
        "Data segmentation divides your data into groups (e.g., by demographics or behavior) to identify trends and personalize campaigns.",
    },
    {
      question: "How can I track conversions?",
      answer:
        "Set up conversion tracking in tools like Google Analytics, where you can define goals like form submissions, purchases, or button clicks.",
    },
    {
      question: "What is bounce rate?",
      answer:
        "Bounce rate is the percentage of visitors who leave your website after viewing only one page. A high bounce rate can indicate poor content or user experience.",
    },
    {
      question: "What is CTR in analytics?",
      answer:
        "CTR (Click-Through Rate) measures how many users clicked on a specific link or ad compared to the number of impressions. A higher CTR indicates relevance.",
    },
    {
      question: "How often should I review analytics data?",
      answer:
        "Regularly! For real-time campaigns, review daily or weekly. For long-term strategies, analyze data monthly or quarterly.",
    },
    {
      question: "What is cohort analysis?",
      answer:
        "Cohort analysis groups users based on shared characteristics (e.g., signup date) to analyze behavior over time and measure retention or engagement.",
    },
    {
      question: "What is predictive analytics in marketing?",
      answer:
        "Predictive analytics uses historical data and machine learning to forecast future trends, like customer behavior or campaign performance.",
    },
    {
      question: "What should be included in a monthly marketing report?",
      answer:
        "Overview of KPIs (traffic, conversions). Campaign performance (CTR, CPC). Audience insights (demographics, behavior). Recommendations for improvement.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "What are the best analytics tools for businesses?",
      answer:
        "Top tools include: Google Analytics: Website performance. Tableau: Advanced data visualization. SEMRush: SEO and keyword insights. HubSpot: Marketing and sales analytics. Kissmetrics: Customer behavior tracking.",
    },
    {
      question: "How does Google Analytics work?",
      answer:
        "Google Analytics collects data from your website using a tracking code. It analyzes visitor behavior, traffic sources, and conversions to provide insights.",
    },
    {
      question: "What is a UTM parameter, and why is it important?",
      answer:
        "UTM parameters are tags added to URLs to track the performance of specific campaigns, helping you understand where your traffic is coming from.",
    },
    {
      question: "What is data visualization, and why is it important?",
      answer:
        "Data visualization presents complex data as charts or graphs, making it easier to interpret insights and communicate findings effectively.",
    },
    {
      question: "How can I use heatmaps in analytics?",
      answer:
        "Heatmaps visually show where users click, scroll, or hover on a page, helping you optimize layouts and improve user experience.",
    },
    {
      question: "What is conversion tracking in analytics?",
      answer:
        "Conversion tracking monitors specific user actions, like purchases or form submissions, to measure the success of your campaigns.",
    },
    {
      question: "What is A/B testing, and how does it help analytics?",
      answer:
        "A/B testing compares two versions of a webpage or ad to determine which performs better, providing data for optimization.",
    },
    {
      question: "How can I integrate analytics tools with my CRM?",
      answer:
        "Use tools like HubSpot, Salesforce, or Google Analytics API to sync user data, enabling deeper customer insights and streamlined reporting.",
    },
    {
      question: "How do I track multi-channel marketing efforts?",
      answer:
        "Use attribution models and tools like Google Analytics 360 or Adobe Analytics to track how different channels contribute to conversions.",
    },
    {
      question: "How do I optimize campaigns using analytics?",
      answer:
        "Identify underperforming areas. Use A/B testing to refine elements. Adjust targeting based on audience insights. Monitor metrics like CTR and CPC to make data-driven changes.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];
function AnalyticsReporting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const GDFXForCRO = [
    {
      heading: `Comprehensive Data Analysis`,
      paragraph: `Gain a holistic view of your performance across all digital channels.`,
      shadowClass: `shadow-1`,
    },
    {
      heading: `Expert Insights`,
      paragraph: `Our analytics experts interpret the data, offering actionable recommendations to improve your outcomes.`,
      shadowClass: `shadow-2`,
    },
    {
      heading: `Customized Reporting`,
      paragraph: `Receive tailored reports that align with your business objectives and KPIs.`,
      shadowClass: `shadow-3`,
    },
    {
      heading: `Real-Time Monitoring`,
      paragraph: `Stay informed with real-time tracking and alerts for critical metrics.`,
      shadowClass: `shadow-4`,
    },
  ];
  const CROServices = [
    {
      bgColor: "bg-primaryBlue/70",
      heading: `Website Analytics`,
      paragraph: `Track user behavior, identify trends, and optimize your website for better engagement and conversions using tools like Google Analytics.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Campaign Performance Tracking`,
      paragraph: `Monitor the success of your marketing campaigns, including PPC, SEO, social media, and email marketing, to ensure maximum ROI.`,
    },
    {
      bgColor: "bg-primaryBlue/70",
      heading: `Custom Dashboards`,
      paragraph: `Access intuitive dashboards that display your key metrics in one place, making it easier to visualize and act on the data.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Conversion Tracking and Optimization`,
      paragraph: `Identify bottlenecks in your sales funnel and implement strategies to boost conversion rates.`,
    },
    {
      bgColor: "bg-primaryBlue/70",
      heading: `SEO Analytics`,
      paragraph: `Measure your organic search performance, track keyword rankings, and uncover opportunities to improve your visibility.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Social Media Analytics`,
      paragraph: `Understand audience engagement, track the performance of your social campaigns, and discover trends to inform your strategy.`,
    },
  ];

  const CROInfo = [
    {
      title: "Benefits of GDFX Analytics and Reporting Services",
      content: [
        {
          subtitle: "Better Decision-Making",
          text: "Make informed business decisions backed by reliable data and expert analysis.",
        },
        {
          subtitle: "Optimized Marketing ROI",
          text: "Focus your resources on strategies that deliver the best results.",
        },
        {
          subtitle: "Improved Customer Understanding",
          text: "Gain deeper insights into your audience’s preferences, behaviors, and needs.",
        },
        {
          subtitle: "Streamlined Reporting",
          text: "Save time with automated, accurate, and clear reports tailored to your goals.",
        },
      ],
    },
    {
      title: "Our Analytics and Reporting Process",
      content: [
        {
          subtitle: "Data Collection",
          text: "Gather data from all relevant sources, including websites, campaigns, and social platforms.",
        },
        {
          subtitle: "Data Analysis",
          text: "Process and analyze the data to uncover trends, patterns, and insights.",
        },
        {
          subtitle: "Custom Reporting",
          text: "Create detailed, actionable reports with recommendations for improvement.",
        },
        {
          subtitle: "Performance Monitoring",
          text: "Continuously track metrics to ensure your strategies stay on track.",
        },
        {
          subtitle: "Optimization Recommendations",
          text: "Provide guidance on optimizing strategies for ongoing success.",
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Analytics and Reporting Services | GDFX</title>
        <meta
          name="description"
          content="GDFX offers customized digital marketing analytics and reporting services for all industries. Gain insights and build data-driven strategies with consistent, clear reporting."
        />
        <meta
          name="keywords"
          content="analytics services, reporting services, data-driven marketing, digital marketing analytics, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/digital-transformation-service/analytics-reporting"
        />
        <meta
          property="og:title"
          content="Analytics and Reporting Services | GDFX"
        />
        <meta
          property="og:description"
          content="GDFX offers customized digital marketing analytics and reporting services for all industries. Gain insights and build data-driven strategies with consistent, clear reporting."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/digital-transformation-service/analytics-reporting"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/digital-transformation-service/analytics-reporting",
            telephone: "+1 877-466-7021",
            address: {
              "@type": "PostalAddress",
              streetAddress:
                "Office No-30, N Gould St, STE R Sheridan, WY 82801, USA",
              addressLocality: "Sheridan, Wyoming",
              addressRegion: "WY",
              postalCode: "82801",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 44.7977689,
              longitude: -106.9549034,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            sameAs: [
              "https://www.facebook.com/GlobalDigitalsFx",
              "https://www.instagram.com/globaldigitalsfx/",
              "https://www.youtube.com/@globaldigitalsfx",
              "https://www.linkedin.com/in/global-digital-fx-04972b345/",
              "https://in.pinterest.com/globaldigitalsfx/",
              "https://www.globaldigitalsfx.com/",
            ],
          })}
        </script>
      </Helmet>
      <Analytics_Header />

      <GdfxCROSolution
        mainHeading="GDFX"
        subHeading="Analytics and Reporting Services"
        introParagraph="In a digital world fueled by data, success comes to those who can turn insights into actions. At GDFX, our Analytics and Reporting services are designed to empower your business with in-depth data insights, real-time reporting, and actionable strategies. With our expertise, you can measure what matters, optimize your efforts, and achieve your goals."
        highlightText="Unlock Data-Driven Growth with GDFX Analytics and Reporting"
        midHeading="Why Choose GDFX for Analytics and Reporting?"
        cardsData={GDFXForCRO}
      />

      <GdfxProvide
        mainHeading="Our Analytics"
        subHeading="and Reporting Services Include"
        CROServices={CROServices}
      />

      {/* <LetContact
        heading="Leverage the Power of Data with GDFX"
        title="Don’t just collect data — use it to transform your business. With GDFX Analytics and Reporting services, you'll gain the clarity and confidence needed to drive meaningful results."
        underline={false}
      /> */}

      <GdfxInformation CROInfo={CROInfo} />

      <OurTestimonials testimonialsData={testimonialsData} />
      {/* <RequestCallback /> */}
      <ServiceFaq faqs={faqs} faqName={faqName} />
      <SubscribeToNewsLetter />
    </>
  );
}

export default AnalyticsReporting;
