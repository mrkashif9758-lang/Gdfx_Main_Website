import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import WebHeader from "../Component/Web Application/WebHeader";
import WebDevServices from "../Component/Web Application/WebDevServices";
import End_To_End_Dev from "../Component/Web Application/End_To_End_Dev";
import Seo_optimized from "../Component/Web Application/Seo_optimized";
import LetContact from "../Component/Mobile Application/LetContact";
import MobileFirstApproach from "../Component/Web Application/MobileFirstApproach";
import Website_designing from "../Component/Web Application/Website_designing";
import WideRangeTechnologies from "../Component/Web Application/WideRangeTechnologies";
import Choose_GDFX from "../Component/Web Application/Choose_GDFX";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import MarqueeSlidingText from "../Component/Common/MarqueeSlidingText";
import HeaderBottomSlider from "../Component/Web Application/HeaderBottomSlider";
import Website_Development_Services from "../Component/Web Application/Website_Development_Services";
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
  [
    {
      question: "What types of websites do you design and develop?",
      answer:
        "At GDFX, we design and develop a wide range of websites, including eCommerce platforms, corporate websites, blogs, landing pages, portfolios, and custom web applications. We tailor our designs to fit your specific business needs and objectives.",
    },
    {
      question: "What is the importance of UI/UX design in web development?",
      answer:
        "UI/UX design is crucial because it directly impacts the user’s experience on your website. A well-designed interface improves usability, ensures intuitive navigation, and encourages engagement, all of which lead to higher user retention and conversions.",
    },
    {
      question: "How do you ensure the design is user-friendly?",
      answer:
        "We focus on user-centered design by conducting research, creating user personas, and developing wireframes and prototypes. User feedback is incorporated during the design phase to ensure the website meets user expectations and delivers a seamless experience.",
    },
    {
      question: "Can I provide my own design ideas or branding guidelines?",
      answer:
        "Yes, we encourage clients to provide any existing branding guidelines, logos, color schemes, and design inspirations. This helps us create a design that aligns with your vision and business goals while maintaining consistency with your brand identity.",
    },
    {
      question: "How do you handle revisions during the design phase?",
      answer:
        "We collaborate closely with you during the design phase. After presenting the initial design drafts or wireframes, we gather feedback and make revisions. We continue this process until the design is finalized and meets your satisfaction.",
    },
    {
      question: "Do you design websites for mobile responsiveness?",
      answer:
        "Yes, we ensure that all websites are fully responsive, meaning they adapt to different screen sizes, from desktops to tablets and mobile devices. This ensures an optimal user experience across all devices.",
    },
    {
      question: "What tools do you use for designing websites?",
      answer:
        "We use industry-standard design tools such as Figma, Adobe XD, Sketch, and InVision for wireframing, creating prototypes, and high-fidelity designs. These tools enable smooth collaboration and efficient design iteration.",
    },
    {
      question: "How do you ensure accessibility in web design?",
      answer:
        "We follow best practices for web accessibility, ensuring that websites are usable for people with disabilities. This includes using proper color contrast, providing keyboard navigation, and following WCAG (Web Content Accessibility Guidelines).",
    },
    {
      question: "How long does the design phase typically take?",
      answer:
        "The design phase typically takes 4-6 weeks, depending on the complexity of the website and the number of design revisions needed. This time frame includes wireframing, prototyping, and finalizing the design based on client feedback.",
    },
    {
      question: "Can you redesign an existing website?",
      answer:
        "Yes, we can help redesign an existing website to make it more modern, user-friendly, and optimized for performance. We will assess the current design, identify areas for improvement, and deliver a revamped solution that aligns with your goals.",
    },
  ],
  [
    {
      question: "How long does it take to develop a website?",
      answer:
        "The development timeline depends on the complexity of the website. A simple website can take 4-6 weeks, while a more complex website or web application might take several months. We provide a more accurate estimate after reviewing your specific requirements.",
    },
    {
      question: "What programming languages and technologies do you use?",
      answer:
        "We use a wide range of programming languages and technologies, including HTML, CSS, JavaScript, PHP, React, Angular, Node.js, and Python. We choose the best technology stack based on your website’s functionality and scalability requirements.",
    },
    {
      question: "Do you provide custom web development?",
      answer:
        "Yes, we specialize in custom web development tailored to your specific business needs. Whether it’s a content management system (CMS), eCommerce platform, or a complex web application, we can build a solution that’s tailored to you.",
    },
    {
      question:
        "Can you integrate third-party services or APIs into the website?",
      answer:
        "Yes, we can integrate third-party APIs and services such as payment gateways, CRM systems, social media platforms, and analytics tools to enhance the functionality of your website.",
    },
    {
      question: "How do you ensure the website is secure?",
      answer:
        "We implement the latest security practices such as SSL certificates, data encryption, regular security audits, secure authentication, and firewalls to ensure your website is secure and protected against potential threats.",
    },
    {
      question: "What content management systems (CMS) do you work with?",
      answer:
        "We specialize in popular CMS platforms like WordPress, Drupal, Joomla, and Shopify for eCommerce websites. We can also build custom CMS solutions based on your needs, giving you full control over the website’s content.",
    },
    {
      question: "How do you optimize websites for speed and performance?",
      answer:
        "We optimize websites by reducing page load times through image compression, minification of CSS/JS files, caching strategies, and using Content Delivery Networks (CDNs) to serve content quickly across the globe. Performance is tested regularly to ensure optimal load times.",
    },
    {
      question: "Do you ensure the website is SEO-friendly?",
      answer:
        "Yes, SEO is an integral part of our development process. We follow best SEO practices like optimizing page titles, meta descriptions, image alt tags, and URL structures. We also ensure that your website is mobile-friendly, as search engines prioritize mobile responsiveness.",
    },
    {
      question:
        "How do you ensure the website works across different browsers?",
      answer:
        "We perform thorough cross-browser testing to ensure that your website functions correctly on all major browsers, including Chrome, Firefox, Safari, and Edge. We test for compatibility and make adjustments where needed.",
    },
    {
      question: "Can you build eCommerce websites?",
      answer:
        "Yes, we specialize in building custom eCommerce websites. Whether you need a small online store or a large-scale eCommerce platform, we offer solutions with integrated payment gateways, shopping carts, inventory management, and more.",
    },
  ],
  [
    {
      question: "Do you offer post-launch support for websites?",
      answer:
        "Yes, we offer comprehensive post-launch support, including bug fixes, security updates, content updates, and feature enhancements. We ensure your website remains functional and up-to-date after launch.",
    },
    {
      question: "How long do you provide post-launch support?",
      answer:
        "We offer 3-6 months of free post-launch support which includes bug fixes, minor adjustments, and troubleshooting. After this period, we offer ongoing support and maintenance services on a retainer or as needed.",
    },
    {
      question: "Can you help with ongoing content updates after launch?",
      answer:
        "Yes, we can assist with ongoing content updates, including text, images, videos, and other media. We also offer training if you'd like to manage your own content through the CMS.",
    },
    {
      question: "How do you handle website backups?",
      answer:
        "We implement regular website backups to ensure your website data is safe. We can set up automated backups and provide assistance with restoring data in case of any unexpected issues or errors.",
    },
    {
      question: "Can you help with SEO optimization after launch?",
      answer:
        "Yes, we provide SEO maintenance services after launch, including monitoring website performance, optimizing content, improving keyword rankings, and ensuring the website remains optimized for search engines.",
    },
    {
      question: "Will you help me with website analytics and tracking?",
      answer:
        "Yes, we can integrate Google Analytics or other analytics tools to track website traffic, user behavior, conversions, and other key metrics. We can also help analyze this data and make recommendations to improve performance.",
    },
    {
      question: "How do you ensure website security after launch?",
      answer:
        "We implement regular security updates, monitor for potential threats, conduct vulnerability assessments, and apply patches as needed. We also recommend additional security measures, such as two-factor authentication and regular penetration testing.",
    },
    {
      question: "Can you handle website migrations or redesigns in the future?",
      answer:
        "Yes, we can assist with website migrations, whether you are moving to a new domain or a different platform. Additionally, we can help with future redesigns to keep your website current and aligned with your business goals.",
    },
    {
      question: "How often should I update my website?",
      answer:
        "It’s a good idea to update your website regularly, at least every 6 months, to ensure it remains secure, functional, and aligned with the latest design trends. Regular updates help improve user engagement and SEO performance.",
    },
    {
      question: "How do I contact GDFX for post-launch support?",
      answer:
        "You can contact our support team through email, phone, or our online support portal. We are available to address any issues or requests and provide ongoing support to ensure your website’s continued success.",
    },
  ],
];
const faqName = ["General", "Technical", "Support"];

const heading =
  "GDFX IT Consulting transform your technology into a powerful business enabler.";
const title =
  "Contact us today and take the first step toward innovation and growth!";

const WebApplication = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <title>Web App Development Service | GDFX</title>
        <meta
          name="description"
          content="GDFX offers 15+ years of expert Web App Development Service, creating reliable web app development for businesses in 25+ industries."
        />
        <meta
          name="keywords"
          content="web app development, custom web applications, enterprise web apps, responsive web development, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/web-app-development"
        />
        <meta
          property="og:title"
          content="Web App Development Service | GDFX"
        />
        <meta
          property="og:description"
          content="GDFX offers 15+ years of expert Web App Development Service, creating reliable web app development for businesses in 25+ industries."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/web-app-development"
        />
        <meta property="og:type" content="website" />

         <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/web-app-development",
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
      <WebHeader />
      <WebDevServices />
      <End_To_End_Dev />
      <Seo_optimized />
      <MobileFirstApproach />
      <Website_designing />
      <Website_Development_Services />
      <LetContact heading={heading} title={title} />
      <WideRangeTechnologies />
      <Choose_GDFX />
      <OurTestimonials testimonialsData={testimonialsData} />
      <RequestCallback />
      {/* <ServiceFaq faqs={faqs} faqName={faqName} /> */}
      {/* <SubscribeToNewsLetter /> */}
    </>
  );
};

export default WebApplication;
