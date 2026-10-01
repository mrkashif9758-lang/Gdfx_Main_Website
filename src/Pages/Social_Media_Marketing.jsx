import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaPinterest,
} from "react-icons/fa";
import GdfxCROSolution from "../Component/Digital Transformation Service/GdfxCROSolution";
import GdfxMarkiting from "../Component/Digital Transformation Service/GdfxMarkiting";
import GdfxProvide from "../Component/Digital Transformation Service/GdfxProvide";
import GdfxInformation from "../Component/Digital Transformation Service/GdfxInformation";
import { Helmet } from "react-helmet";
import E_Commerce_Header from "../Component/E Commerce Solution/E_Commerce_Header";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import E_commerce_Slider from "../Component/E Commerce Solution/E_commerce_Slider";
import SquareButtonBgTransparent from "../Component/Common/SquareButtonBgTransparent";
import Smm_Header from "../Component/Smm/Smm_Header";
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
      question: "What is social media marketing (SMM)?",
      answer:
        "Social media marketing (SMM) involves using platforms like Facebook, Instagram, Twitter, and LinkedIn to promote your brand, engage with your audience, and drive traffic to your website or products.",
    },
    {
      question: "Why is social media important for businesses?",
      answer:
        "Social media helps businesses connect with their target audience, increase brand visibility, build trust, and drive sales. It’s a cost-effective way to engage millions of users daily.",
    },
    {
      question: "Which social media platforms should I use for my business?",
      answer:
        "It depends on your audience. For visual content, use Instagram or Pinterest. For professional networking, focus on LinkedIn. Facebook and Twitter cater to broader audiences.",
    },
    {
      question: "How often should I post on social media?",
      answer:
        "Post consistently. For most platforms, 3-5 times a week is ideal. Monitor engagement metrics to determine the frequency that works best for your audience.",
    },
    {
      question: "What is the difference between organic and paid social media?",
      answer:
        "Organic social media involves free posts and interactions, while paid social media uses advertising to reach a targeted audience. A mix of both is often ideal.",
    },
    {
      question: "What is a social media algorithm?",
      answer:
        "A social media algorithm determines which content users see based on factors like engagement, relevance, and user preferences. Optimizing your content improves visibility.",
    },
    {
      question: "How can I grow my social media followers?",
      answer:
        "Post consistently, engage with your audience, use hashtags, collaborate with influencers, and run contests or giveaways to attract followers.",
    },
    {
      question: "What is social media engagement?",
      answer:
        "Engagement refers to user interactions with your content, such as likes, comments, shares, and clicks. High engagement indicates active audience interest.",
    },
    {
      question: "Is social media marketing suitable for small businesses?",
      answer:
        "Yes! Social media marketing is affordable and helps small businesses reach their target audience, build community, and compete with larger brands.",
    },
    {
      question: "How do I handle negative comments on social media?",
      answer:
        "Respond professionally and promptly. Acknowledge the issue, offer a solution, and avoid deleting genuine criticism unless it violates platform guidelines.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question: "What type of content works best on social media?",
      answer:
        "Engaging content like videos, infographics, polls, user-generated content, and stories tend to perform best. Tailor your content to match the platform and audience.",
    },
    {
      question: "How do I create a social media strategy?",
      answer:
        "Define your goals (e.g., brand awareness, sales), identify your audience, choose the right platforms, plan content, set a budget, and analyze performance regularly.",
    },
    {
      question: "What is a content calendar, and why do I need one?",
      answer:
        "A content calendar organizes your posting schedule, helping you plan ahead, maintain consistency, and align posts with important dates or campaigns.",
    },
    {
      question: "How can hashtags improve my posts?",
      answer:
        "Hashtags increase the discoverability of your posts by categorizing them under specific topics. Use popular and niche hashtags relevant to your content.",
    },
    {
      question: "Should I use the same content on all platforms?",
      answer:
        "No. Each platform has a unique audience and format. Tailor your content to fit the style and audience preferences of each platform.",
    },
    {
      question: "How do I find my target audience on social media?",
      answer:
        "Analyze your current customers, use social media analytics, and research platform demographics to identify where your audience is most active.",
    },
    {
      question:
        "What is user-generated content (UGC), and why is it important?",
      answer:
        "UGC is content created by your customers, like reviews, photos, or videos. It builds trust and authenticity, encouraging others to engage with your brand.",
    },
    {
      question: "How can I increase engagement on my posts?",
      answer:
        "Ask questions, use polls or quizzes, share behind-the-scenes content, post consistently, and respond to comments quickly to keep the conversation going.",
    },
    {
      question: "How do I handle a drop in engagement?",
      answer:
        "Review your analytics, adjust your posting times, experiment with new content formats, and re-engage your audience with interactive posts or giveaways.",
    },
    {
      question: "What are social media trends, and how can I use them?",
      answer:
        "Trends are popular themes or challenges. Incorporating relevant trends into your strategy (e.g., trending hashtags or memes) can boost visibility and engagement.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "What is social media advertising?",
      answer:
        "Social media advertising involves paying platforms like Facebook, Instagram, or LinkedIn to promote your content or products to a targeted audience.",
    },
    {
      question: "What is a social media ad campaign?",
      answer:
        "An ad campaign is a series of ads with specific goals, such as driving website traffic, increasing sales, or growing your social media following.",
    },
    {
      question: "How much does social media advertising cost?",
      answer:
        "Costs vary based on platform, audience size, and competition. On average, businesses spend $0.50 to $2.00 per click for ads on platforms like Facebook or Instagram.",
    },
    {
      question:
        "What is the difference between boosting a post and running an ad?",
      answer:
        "Boosting a post promotes an existing post to a larger audience, while running an ad allows you to create highly targeted, customized campaigns.",
    },
    {
      question: "How do I measure the success of my social media campaigns?",
      answer:
        "Track metrics like reach, impressions, click-through rate (CTR), conversion rate, and return on ad spend (ROAS) to evaluate success.",
    },
    {
      question: "What are custom audiences in social media advertising?",
      answer:
        "Custom audiences are groups of users targeted based on specific criteria, such as website visitors, email subscribers, or past customers.",
    },
    {
      question: "How do I retarget users with ads?",
      answer:
        "Use retargeting tools like Facebook Pixel or Google Tag Manager to show ads to users who’ve interacted with your website or social media pages.",
    },
    {
      question: "What is A/B testing in social media ads?",
      answer:
        "A/B testing involves running two versions of an ad with slight variations (e.g., different images or headlines) to see which performs better.",
    },
    {
      question: "What is ROI in social media marketing?",
      answer:
        "ROI (Return on Investment) measures the profitability of your campaigns. Calculate it by comparing the revenue generated to the ad spend.",
    },
    {
      question: "How do I analyze social media performance?",
      answer:
        "Use platform analytics tools like Facebook Insights, Instagram Analytics, or LinkedIn Analytics to track engagement, impressions, and conversions.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];

const heading =
  "GDFX IT Consulting transform your technology into a powerful business enabler. ";
const title =
  "Contact us today and take the first step toward innovation and growth!";

function Social_Media_Marketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const GDFXForSMM = [
    {
      heading: `Expert Team`,
      paragraph: `Our social media specialists stay ahead of trends to create impactful strategies tailored to your brand.`,
      shadowClass: `shadow-1`,
    },
    {
      heading: `Custom Campaigns`,
      paragraph: `Every brand is unique, and so are our solutions. We craft campaigns designed to resonate with your audience.`,
      shadowClass: `shadow-2`,
    },
    {
      heading: `Data-Driven Approach`,
      paragraph: `With detailed analytics and insights, we optimize every campaign for success.`,
      shadowClass: `shadow-3`,
    },
    {
      heading: `Multi-Platform Expertise`,
      paragraph: `From Facebook and Instagram to LinkedIn and TikTok, we’ve got you covered across all major platforms.`,
      shadowClass: `shadow-4`,
    },
  ];
  const SMMServices = [
    {
      bgColor: "bg-primaryBlue/70",
      heading: `Social Media Strategy Development`,
      paragraph: `Collaborate with our experts to create a roadmap that aligns with your business goals and speaks to your target audience.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Content Creation and Management`,
      paragraph: `Deliver high-quality, engaging content, including posts, stories, and videos, tailored to your brand voice.`,
    },
    {
      bgColor: "bg-primaryBlue/70",
      heading: `Paid Social Advertising`,
      paragraph: `Boost your visibility and drive conversions with targeted ad campaigns across platforms like Facebook Ads, Instagram Ads, and LinkedIn Ads.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Community Management`,
      paragraph: ` Build strong relationships with your audience through active engagement, prompt responses, and fostering meaningful interactions.`,
    },
    {
      bgColor: "bg-primaryBlue/70",
      heading: `Social Media Analytics & Reporting`,
      paragraph: `Track performance with detailed reports that highlight successes, opportunities, and actionable insights.`,
    },
    {
      bgColor: "bg-secondaryPurple/70",
      heading: `Reputation Management`,
      paragraph: `Protect and enhance your brand image by monitoring mentions, reviews, and public sentiment across social platforms.`,
    },
  ];
  const SMMInof = [
    {
      title: "Benefits of GDFX SMM Services",
      content: [
        {
          subtitle: "Enhanced Brand Awareness",
          text: "Reach your target audience effectively and establish a strong online presence.",
        },
        {
          subtitle: "Increased Engagement",
          text: "Foster deeper connections with your audience through interactive and relatable content.",
        },
        {
          subtitle: "Boosted Website Traffic",
          text: "Drive qualified traffic from social platforms to your website or landing pages.",
        },
        {
          subtitle: "Higher ROI",
          text: "Maximize your marketing spend with optimized campaigns designed for conversions.",
        },
      ],
    },
    {
      title: "Our Proven SMM Process",
      content: [
        {
          subtitle: "Discovery & Planning",
          text: "Understand your business, target audience, and goals to create a customized social media plan.",
        },
        {
          subtitle: "Content Creation",
          text: "Develop creative and compelling content that aligns with your brand identity.",
        },
        {
          subtitle: "Campaign Execution",
          text: "Launch and manage campaigns across chosen platforms, ensuring timely and impactful delivery.",
        },
        {
          subtitle: "Performance Optimization",
          text: "Monitor campaigns in real-time and tweak strategies to maximize results.",
        },
        {
          subtitle: "Comprehensive Reporting",
          text: "Provide detailed insights to measure success and refine future efforts.",
        },
      ],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Social Media Marketing (SMM) Services | GDFX</title>
        <meta
          name="description"
          content="GDFX offers expert social media marketing services across Facebook, Instagram, LinkedIn, and TikTok. With 15+ years of experience in 25+ industries, we’re a leading SMM company delivering impactful results."
        />
        <meta
          name="keywords"
          content="SMM services, social media marketing, Facebook marketing, Instagram marketing, LinkedIn marketing, TikTok marketing, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/digital-transformation-service/social-media-marketing"
        />
        <meta
          property="og:title"
          content="Social Media Marketing (SMM) Services | GDFX"
        />
        <meta
          property="og:description"
          content="GDFX offers expert social media marketing services across Facebook, Instagram, LinkedIn, and TikTok. With 15+ years of experience in 25+ industries, we’re a leading SMM company delivering impactful results."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/digital-transformation-service/social-media-marketing"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/digital-transformation-service/social-media-marketing",
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
      <Smm_Header />

      <GdfxCROSolution
        mainHeading="GDFX"
        subHeading="Social Media Marketing (SMM) Services"
        introParagraph="In today’s digital-first world, social media is more than just a platform. it’s a powerful tool to connect, engage, and grow your audience. At GDFX, our Social Media Marketing (SMM) services are designed to transform your online presence, drive meaningful engagement, and deliver measurable business results."
        highlightText="Amplify Your Brand’s Reach with GDFX Social Media Marketing"
        midHeading="Why Choose GDFX for Social Media Marketing?"
        cardsData={GDFXForSMM}
      />

      <GdfxProvide
        mainHeading="Our Social"
        subHeading="Media Marketing Services Include"
        CROServices={SMMServices}
      />

      {/* <LetContact
        heading="Take Your Social Media to the Next Level with GDFX"
        title="Whether you're aiming to build brand awareness, drive traffic, or increase sales, our Social Media Marketing services are designed to help you achieve real results."
        underline={false}
      /> */}

      <GdfxInformation CROInfo={SMMInof} />

      {/* <OurTestimonials testimonialsData={testimonialsData} /> */}
      {/* <RequestCallback /> */}
      <ServiceFaq faqs={faqs} faqName={faqName} />
      <SubscribeToNewsLetter />
    </>
  );
}

export default Social_Media_Marketing;
