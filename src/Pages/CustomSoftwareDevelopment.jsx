import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import CustomHeader from "../Component/Custom Software Development/CustomHeader";
import CustomHeaderBottom from "../Component/Custom Software Development/CustomHeaderBottom";
import Passionate_Building from "../Component/Custom Software Development/Passionate_Building";
import DevelopmentProcess from "../Component/Custom Software Development/DevelopmentProcess";
import GdfxPerfect from "../Component/Custom Software Development/GdfxPerfect";
import RecentCustomSoftware from "../Component/Custom Software Development/RecentCustomSoftware";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import CustomHeaderSlider from "../Component/Custom Software Development/CustomHeaderSlider";
import LetContact from "../Component/Mobile Application/LetContact";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";

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
      question: "What is custom software development?",
      answer:
        "Custom software development involves creating software applications tailored to the specific needs of a business or organization. Unlike off-the-shelf software, custom solutions are designed to solve unique challenges and deliver specific functionalities that align with your business goals.",
    },
    {
      question: "What types of custom software do you develop?",
      answer:
        "At GDFX, we develop a wide range of custom software, including enterprise resource planning (ERP) systems, customer relationship management (CRM) software, inventory management systems, business intelligence solutions, and custom web and mobile applications.",
    },
    {
      question:
        "What industries do you specialize in for custom software development?",
      answer:
        "We have experience across various industries, including finance, healthcare, education, eCommerce, logistics, manufacturing, and government. We create solutions tailored to meet the specific regulatory, operational, and technical needs of each sector.",
    },
    {
      question: "How do you ensure the software aligns with my business goals?",
      answer:
        "We focus on understanding your business strategy and objectives from the beginning. By continuously engaging with you, we ensure that the features and functionalities of the software are aligned with your goals, maximizing its value for your business.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question:
        "How do you gather requirements for custom software development?",
      answer:
        "We start by engaging with you to understand your business processes, goals, and challenges. Through in-depth discussions, workshops, and analysis of existing workflows, we identify key requirements. This information helps us create a solution that meets your specific needs.",
    },
    {
      question: "How involved is the client during the development process?",
      answer:
        "We believe in a collaborative approach, and your involvement is crucial. You’ll be engaged throughout the process, from initial requirements gathering to final delivery. We schedule regular check-ins and feedback sessions to ensure the project is aligned with your expectations.",
    },
    {
      question: "Can I make changes during the development process?",
      answer:
        "Yes, changes can be made throughout the development process, especially during the iterative phases. However, we encourage you to finalize major requirements early to avoid scope creep and ensure that the project stays on track.",
    },
    {
      question: "How do you handle project scope and timelines?",
      answer:
        "We follow a structured project management approach, often using Agile methodologies, to break down the development process into manageable phases. This allows for flexibility and adjustments, while ensuring that timelines are met. We provide regular updates to keep you informed.",
    },
    {
      question:
        "What programming languages and technologies do you use for custom software development?",
      answer:
        "We use a wide range of technologies and programming languages, including Java, C#, Python, PHP, JavaScript, React, Node.js, and Ruby on Rails. The technology stack is chosen based on the project’s needs, scalability requirements, and future growth.",
    },
    {
      question: "How do you ensure software quality?",
      answer:
        "We follow a robust testing process, including unit testing, integration testing, automated testing, and user acceptance testing. Our quality assurance (QA) team ensures that the software is bug-free, performs optimally, and meets the specified requirements.",
    },
    {
      question:
        "Can you integrate third-party services or APIs into the custom software?",
      answer:
        "Yes, we can integrate third-party APIs and services such as payment gateways, social media platforms, CRM tools, ERP systems, and other services into your custom software. This enhances functionality and makes your software more versatile.",
    },
    {
      question: "How do you ensure data security in custom software?",
      answer:
        "We implement best practices in data encryption, secure authentication, role-based access control, and regular security audits to ensure the safety and confidentiality of your data. Additionally, we follow industry-specific compliance requirements, such as GDPR and HIPAA, when necessary.",
    },
    {
      question: "Do you build cloud-based software solutions?",
      answer:
        "Yes, we develop cloud-based software solutions using Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Cloud solutions offer benefits like scalability, reduced infrastructure costs, and better accessibility from anywhere.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "Do you provide post-launch support for custom software?",
      answer:
        "Yes, we offer comprehensive post-launch support, including bug fixes, performance enhancements, updates, and troubleshooting. We ensure that your custom software continues to function optimally after deployment.",
    },
    {
      question: "How long do you provide post-launch support?",
      answer:
        "We offer 3-6 months of free post-launch support, which includes bug fixes and minor updates. After this period, we offer flexible maintenance packages to meet your ongoing needs.",
    },
    {
      question: "How do you handle bug fixes after the software is live?",
      answer:
        "We have a dedicated support team that addresses any issues promptly after launch. We provide quick bug fixes and patches to ensure your software remains stable and performs well, and we work closely with you to resolve any issues.",
    },
    {
      question:
        "Can you add new features to the software after it’s been developed?",
      answer:
        "Yes, we can add new features and functionalities to your custom software after launch. We can help with feature upgrades, enhancements, and integrations as your business needs evolve.",
    },
    {
      question:
        "How do you monitor the performance of custom software after launch?",
      answer:
        "We implement performance monitoring tools and dashboards to track the health of the software. We continuously monitor key metrics like server performance, response times, and error rates, and proactively address any performance-related issues.",
    },
    {
      question: "Can you help with software training for my team?",
      answer:
        "Yes, we provide training sessions for your team to ensure they understand how to use the software effectively. This includes detailed training on features, workflows, and troubleshooting techniques.",
    },
    {
      question: "Do you provide software upgrades and patches?",
      answer:
        "Yes, we handle software upgrades and release patches to address bugs, security vulnerabilities, and performance improvements. These updates are carefully planned and tested before deployment to ensure smooth functionality.",
    },
    {
      question: "How do you ensure software scalability for future growth?",
      answer:
        "We design custom software with scalability in mind by using modular architecture, cloud-based solutions, and optimized databases. This ensures that as your business grows, your software can handle increased demand without compromising performance.",
    },
    {
      question:
        "Can you help with migrating the software to a new platform or infrastructure?",
      answer:
        "Yes, we can assist with software migration, whether it’s moving to a new cloud provider, upgrading to a newer version, or transitioning from legacy systems. We ensure a smooth and secure migration process with minimal downtime.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];

const heading =
  "GDFX IT Consulting transform your technology into a powerful business enabler. ";
const title =
  "Contact us today and take the first step toward innovation and growth!";

const CustomSoftwareDevelopment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Custom Software Development Services | GDFX</title>
        <meta
          name="description"
          content="GDFX offers 15+ years of expert Custom Software Development Services, creating reliable Custom Software for businesses in 25+ industries."
        />
        <meta
          name="keywords"
          content="custom software development, bespoke software solutions, enterprise software, business software development, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/custom-software-development"
        />
        <meta
          property="og:title"
          content="Custom Software Development Services | GDFX"
        />
        <meta
          property="og:description"
          content="GDFX offers 15+ years of expert Custom Software Development Services, creating reliable Custom Software for businesses in 25+ industries."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/custom-software-development"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "GlobalDigitalsfx",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/custom-software-development",
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
      <CustomHeader />
      <CustomHeaderBottom />
      <DevelopmentProcess />
      <Passionate_Building />
      {/* <LetContact title={title} heading={heading} underline={false} /> */}
      <GdfxPerfect />
      {/* <RecentCustomSoftware /> */}
      <OurTestimonials testimonialsData={testimonialsData} />
      
      <ServiceFaq faqs={faqs} faqName={faqName} />
    <RequestCallback />
    </>
  );
};

export default CustomSoftwareDevelopment;
