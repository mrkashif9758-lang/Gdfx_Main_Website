import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import E_Commerce_Header from "../Component/E Commerce Solution/E_Commerce_Header";
import Ppc_Advertisement from "../Component/PPC/Ppc_Advertisement";
import BanefitsOfPpc from "../Component/PPC/BanefitsOfPpc";
import ChooseGdfxAdvertisement from "../Component/PPC/ChooseGdfxAdvertisement";
import LetContact from "../Component/Mobile Application/LetContact";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import E_commerce_Slider from "../Component/E Commerce Solution/E_commerce_Slider";
import Ppc_header from "../Component/PPC/Ppc_header";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";
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
      question: "What is Pay-Per-Click (PPC) advertising?",
      answer:
        "PPC advertising is a digital marketing model where advertisers pay a fee each time their ad is clicked. It’s a way to buy traffic for websites instead of earning it organically.",
    },
    {
      question: "How does PPC work?",
      answer:
        "In PPC, advertisers bid on specific keywords to display their ads on search engine results pages (SERPs) or other platforms. When a user clicks the ad, the advertiser is charged a fee.",
    },
    {
      question: "Why is PPC important for my business?",
      answer:
        "PPC provides immediate visibility, attracts highly targeted traffic, and offers measurable results, making it ideal for businesses seeking fast returns on investment.",
    },
    {
      question: "What platforms offer PPC advertising?",
      answer:
        "Popular platforms include Google Ads, Microsoft Ads (Bing Ads), Facebook Ads, Instagram Ads, LinkedIn Ads, and Twitter Ads.",
    },
    {
      question: "What is the difference between PPC and SEO?",
      answer:
        "PPC delivers immediate results by placing paid ads, while SEO improves organic rankings over time. PPC costs per click, while SEO is free but requires effort.",
    },
    {
      question: "How much does PPC advertising cost?",
      answer:
        "Costs vary depending on competition and keywords. The average cost-per-click (CPC) can range from $1 to $50 or more for highly competitive terms.",
    },
    {
      question: "What is a keyword in PPC?",
      answer:
        "A keyword is a term or phrase that triggers your ad when a user searches for it. Bidding on the right keywords ensures your ad reaches the right audience.",
    },
    {
      question: "What is Quality Score in PPC?",
      answer:
        "Quality Score is a metric used by Google Ads to measure the relevance of your ad, keywords, and landing page. A higher score reduces costs and improves ad placements.",
    },
    {
      question: "Can small businesses afford PPC advertising?",
      answer:
        "Yes! PPC allows businesses to set their budget, making it affordable for small businesses to compete with larger brands.",
    },
    {
      question: "What is an ad auction in PPC?",
      answer:
        "An ad auction is the process where search engines determine which ads to show and their placement based on factors like bid amount and Quality Score.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question: "How do I set up a PPC campaign?",
      answer:
        "To set up a campaign: Choose a platform (e.g., Google Ads), define your goals (e.g., website traffic or sales), select keywords, write compelling ad copy, set a budget and bidding strategy.",
    },
    {
      question: "What is the difference between search ads and display ads?",
      answer:
        "Search ads appear on search engine results pages, while display ads are shown on websites, apps, and videos in the Google Display Network.",
    },
    {
      question: "What is a bidding strategy in PPC?",
      answer:
        "A bidding strategy determines how you pay for ad placement. Options include Manual CPC, Maximize Clicks, and Target CPA.",
    },
    {
      question: "How do negative keywords work?",
      answer:
        "Negative keywords prevent your ads from showing for irrelevant searches. For example, a luxury shoe store might use 'cheap' as a negative keyword.",
    },
    {
      question: "How do I write effective PPC ad copy?",
      answer:
        "Focus on highlighting benefits, using a strong call-to-action (e.g., 'Buy Now'), including the keyword in the headline, and emphasizing urgency (e.g., 'Limited Time Offer').",
    },
    {
      question: "How can I target local audiences with PPC?",
      answer:
        "Use location-based targeting to show ads only to users in specific geographic areas. Add location-specific keywords and extensions to attract local customers.",
    },
    {
      question: "How do I determine my PPC budget?",
      answer:
        "Base your budget on campaign goals (e.g., lead generation or sales), keyword costs (CPC), and expected ROI. Start small, analyze results, and scale up.",
    },
    {
      question: "What is ad relevance in PPC?",
      answer:
        "Ad relevance measures how closely your ad matches the user’s search intent. High relevance improves Quality Score and lowers CPC.",
    },
    {
      question: "What is remarketing in PPC?",
      answer:
        "Remarketing targets users who previously visited your site with tailored ads to re-engage them and encourage conversions.",
    },
    {
      question: "How do I improve my landing page for PPC?",
      answer:
        "Align the landing page with the ad copy, use clear CTAs, optimize for fast loading and mobile-friendliness, and remove distractions.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "What metrics should I track in PPC campaigns?",
      answer:
        "Key metrics include Click-Through Rate (CTR), Conversion Rate, Cost Per Click (CPC), and Return on Ad Spend (ROAS).",
    },
    {
      question: "What is CTR, and why is it important?",
      answer:
        "CTR (Click-Through Rate) measures how often users click your ad after seeing it. A high CTR indicates relevance and improves Quality Score.",
    },
    {
      question: "How do I measure PPC campaign success?",
      answer:
        "Evaluate success by tracking conversions, ROI, and metrics like CTR, CPC, and cost per acquisition (CPA).",
    },
    {
      question: "What tools are best for managing PPC campaigns?",
      answer:
        "Top tools include Google Ads Manager, SEMRush, Google Analytics, and SpyFu.",
    },
    {
      question: "How do I perform keyword research for PPC?",
      answer:
        "Use tools like Google Keyword Planner, Ahrefs, or SEMRush to find high-volume, low-competition keywords relevant to your target audience.",
    },
    {
      question: "What is the Google Ads Quality Score?",
      answer:
        "Quality Score is a 1-10 rating based on ad relevance, expected CTR, and landing page experience. A higher score lowers costs and improves rankings.",
    },
    {
      question: "What is impression share in PPC?",
      answer:
        "Impression share is the percentage of times your ad appears compared to the total available impressions for your keywords.",
    },
    {
      question: "How do I track conversions in PPC?",
      answer:
        "Set up conversion tracking in Google Ads by adding a tracking code to your website or using Google Tag Manager for specific actions like form submissions or purchases.",
    },
    {
      question: "What is ad scheduling in PPC?",
      answer:
        "Ad scheduling allows you to show ads during specific times or days when your target audience is most active.",
    },
    {
      question: "How do I optimize PPC campaigns?",
      answer:
        "Regularly review performance, adjust bids, add negative keywords, improve ad copy, and test new strategies through A/B testing.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];

const heading =
  "Invest in GDFX Pay-Per-Click Advertising services and watch your business soar to new heights. Whether you’re looking to generate leads, increase sales, or enhance brand awareness, our team is here to deliver results that matter. ";
const title = "Let’s grow together! Are you Ready for Fly High";
const PPC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Pay Per Click Advertising | PPC Management Services</title>
        <meta
          name="description"
          content="A PPC management agency that understands client goals. With 15+ years of experience across 25+ industries, we help businesses reach their buyers through Google, Facebook, and other paid ad platforms."
        />
        <meta
          name="keywords"
          content="PPC services, pay per click advertising, PPC management, Google ads, Facebook ads, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/digital-transformation-service/ppc"
        />
        <meta
          property="og:title"
          content="Pay Per Click Advertising | PPC Management Services"
        />
        <meta
          property="og:description"
          content="A PPC management agency that understands client goals. With 15+ years of experience across 25+ industries, we help businesses reach their buyers through Google, Facebook, and other paid ad platforms."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/digital-transformation-service/ppc"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/digital-transformation-service/ppc",
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

      <Ppc_header />
      <Ppc_Advertisement />
      {/* <LetContact title={title} heading={heading} underline={false} /> */}
      <BanefitsOfPpc />
      <ChooseGdfxAdvertisement />
      <OurTestimonials testimonialsData={testimonialsData} />
      <ServiceFaq faqs={faqs} faqName={faqName} />
      <RequestCallback />
      
      {/* <SubscribeToNewsLetter /> */}
    </>
  );
};

export default PPC;
