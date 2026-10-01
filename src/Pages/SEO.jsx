import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import Seo_Service from "../Component/SEO/Seo_Service";
import Choose_Gdfx_Seo from "../Component/SEO/Choose_Gdfx_Seo";
import LetContact from "../Component/Mobile Application/LetContact";
import Provide_Seo from "../Component/SEO/Provide_Seo";
import Seo_Matter_business from "../Component/SEO/Seo_Matter_business";
import Seo_header from "../Component/SEO/Seo_header";
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
      question: "What is SEO?",
      answer:
        "Search Engine Optimization (SEO) is the process of improving a website’s visibility on search engines like Google. It involves optimizing your website to rank higher for relevant keywords, attracting organic traffic.",
    },
    {
      question: "Why is SEO important for my business?",
      answer:
        "SEO helps businesses gain visibility, attract targeted traffic, and establish credibility. Higher rankings mean more potential customers discovering your business online, leading to growth and sales.",
    },
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy. You may start seeing minor improvements in 3-6 months, but significant results typically take 6-12 months, depending on the competition and strategy.",
    },
    {
      question: "What are keywords in SEO?",
      answer:
        "Keywords are terms or phrases users type into search engines. Optimizing your content with relevant keywords ensures your website appears when users search for related products or services.",
    },
    {
      question:
        "What is the difference between organic and paid search results?",
      answer:
        "Organic search results are earned through SEO strategies, while paid search results come from paid advertising (e.g., Google Ads). Organic traffic is free, but it requires time and effort to achieve.",
    },
    {
      question: "Can SEO work for small businesses?",
      answer:
        "Yes! SEO is essential for small businesses to compete with larger brands. Local SEO, for instance, helps small businesses rank in their specific regions.",
    },
    {
      question: "How does Google rank websites?",
      answer:
        "Google uses algorithms to rank websites based on relevance, authority, content quality, user experience, mobile-friendliness, backlinks, and more.",
    },
    {
      question: "What are SERPs?",
      answer:
        "SERPs (Search Engine Results Pages) are the pages displayed by search engines in response to a user's query. The goal of SEO is to appear as high as possible on these pages.",
    },
    {
      question: "Do I need a blog for SEO?",
      answer:
        "Yes, blogging helps improve SEO by allowing you to create valuable content, target additional keywords, and attract backlinks. Blogs also help engage your audience.",
    },
    {
      question: "Is SEO a one-time effort?",
      answer:
        "No, SEO is an ongoing process. Search engine algorithms change frequently, and your competitors are constantly optimizing, so continuous improvements are essential to maintain and improve rankings.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question: "What is Technical SEO?",
      answer:
        "Technical SEO focuses on optimizing the backend and technical aspects of your website, such as site speed, mobile responsiveness, secure connections, and structured data, to improve rankings.",
    },
    {
      question: "What is a sitemap, and why is it important?",
      answer:
        "A sitemap is a file that lists all your website's pages, helping search engines understand your site structure. It ensures all pages are indexed and ranked appropriately.",
    },
    {
      question: "How does site speed affect SEO?",
      answer:
        "Site speed is a ranking factor. A slow-loading site negatively impacts user experience, leading to higher bounce rates and lower rankings.",
    },
    {
      question: "What is HTTPS, and is it necessary for SEO?",
      answer:
        "HTTPS (HyperText Transfer Protocol Secure) ensures secure communication between your website and users. Google prioritizes HTTPS websites for better rankings and user trust.",
    },
    {
      question: "What is mobile-first indexing?",
      answer:
        "Google’s mobile-first indexing means it primarily uses the mobile version of a site for ranking and indexing. A mobile-friendly site is critical for SEO.",
    },
    {
      question: "How do I fix broken links on my site?",
      answer:
        "Use tools like Screaming Frog or Google Search Console to identify broken links. Replace or redirect them to relevant pages to maintain user experience and SEO value.",
    },
    {
      question: "What is schema markup?",
      answer:
        "Schema markup is code added to your website to help search engines display rich snippets, like product ratings or event details, in search results, improving click-through rates (CTR).",
    },
    {
      question: "How can I check if my website is indexed by Google?",
      answer:
        "Search 'site:yourwebsite.com' on Google. If your pages appear, they’re indexed. You can also use Google Search Console to monitor indexing.",
    },
    {
      question: "What are canonical tags?",
      answer:
        "Canonical tags prevent duplicate content issues by specifying the preferred version of a webpage, ensuring search engines don’t split rankings between duplicates.",
    },
    {
      question: "How do I make my site mobile-friendly?",
      answer:
        "Use responsive design, optimize images, reduce unnecessary scripts, and test your site on Google’s Mobile-Friendly Test tool.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "What is Off-Page SEO?",
      answer:
        "Off-Page SEO involves activities outside your website that affect rankings, such as building backlinks, social media marketing, and influencer outreach.",
    },
    {
      question: "How do backlinks help SEO?",
      answer:
        "Backlinks are links from other websites to yours. High-quality backlinks signal to search engines that your site is authoritative and trustworthy, improving rankings.",
    },
    {
      question: "What is content optimization in SEO?",
      answer:
        "Content optimization involves improving your content with relevant keywords, meta tags, internal links, and proper formatting to rank better on search engines.",
    },
    {
      question: "How often should I update website content?",
      answer:
        "Regular updates signal freshness to search engines. Review and update content every 3-6 months to keep it relevant and accurate.",
    },
    {
      question: "What is anchor text in SEO?",
      answer:
        "Anchor text is the clickable text in a hyperlink. Using descriptive, keyword-rich anchor text helps search engines understand the linked page’s content.",
    },
    {
      question: "How does social media affect SEO?",
      answer:
        "While social media doesn’t directly affect rankings, it increases content visibility and can drive traffic, leading to more backlinks and engagement.",
    },
    {
      question: "What is duplicate content, and why is it bad?",
      answer:
        "Duplicate content refers to identical content on multiple URLs, which confuses search engines and may lead to lower rankings. Use canonical tags or rewrite content to avoid this.",
    },
    {
      question: "What is keyword stuffing, and should I avoid it?",
      answer:
        "Keyword stuffing is overloading content with keywords to manipulate rankings. It’s a black-hat SEO tactic and can result in penalties. Use keywords naturally.",
    },
    {
      question: "How do I create SEO-friendly blog posts?",
      answer:
        "Start with keyword research, write engaging and informative content, use headings and subheadings, add internal and external links, and optimize meta descriptions.",
    },
    {
      question: "What is link building, and how do I do it?",
      answer:
        "Link building involves acquiring links from other websites. Use strategies like guest blogging, creating high-value content, and outreach to industry sites.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];

const heading =
  "At GDFX, we’re committed to helping your business thrive online with our proven SEO strategies.";

const title = "Let’s grow together! Are you Ready for Fly High";

const SEO = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Search engine optimization Services (SEO) | GDFX</title>
        <meta
          name="description"
          content="GDFX is a top-ranked SEO company with 15+ years of experience across 25+ industries. Our proven SEO services increase website traffic, boost search rankings, and drive real business growth."
        />
        <meta
          name="keywords"
          content="SEO services, search engine optimization, SEO company, increase website traffic, boost rankings, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/digital-transformation-service/seo"
        />
        <meta
          property="og:title"
          content="Search engine optimization Services (SEO) | GDFX"
        />
        <meta
          property="og:description"
          content="GDFX is a top-ranked SEO company with 15+ years of experience across 25+ industries. Our proven SEO services increase website traffic, boost search rankings, and drive real business growth."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/digital-transformation-service/seo"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/digital-transformation-service/seo",
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

      <Seo_header />
      <Seo_Service />
      <Choose_Gdfx_Seo />
      {/* <LetContact title={title} heading={heading} underline={false} /> */}
      {/* <Provide_Seo /> */}
      <Seo_Matter_business />
      {/* <OurTestimonials testimonialsData={testimonialsData} /> */}
      {/* <RequestCallback /> */}
      <ServiceFaq faqs={faqs} faqName={faqName} />
      <SubscribeToNewsLetter />
    </>
  );
};

export default SEO;
