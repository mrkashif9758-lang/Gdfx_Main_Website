import React, { useEffect } from "react";
import DesignHero from "../Component/UI UX Design/DesignHero";
import ExploreIt from "../Component/UI UX Design/ExploreIt";
import UIUX from "../Component/UI UX Design/UIUX";
import WebLineIndia from "../Component/UI UX Design/WebLineIndia";
import DesignMetter from "../Component/UI UX Design/DesignMetter";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import SubscribeLetter from "../Component/Home Page Component/SubscribeLetter";
import { Helmet } from "react-helmet";
import UI_Ux_slider from "../Component/UI UX Design/UI_Ux_slider";
import Ui_Ux_talk from "../Component/UI UX Design/Ui_Ux_talk";
import img1 from "../assets/UI UX Design/1.svg";
import img2 from "../assets/UI UX Design/2.svg";
const title1 = "Want a interface integrated with modern tech?";
const title2 = "Ready to Transform Your Digital Presence? Contact Us Today!";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";
import MobileCreateDesign from "../Component/Mobile Application/MobileCreateDesign";
import LetContact from "../Component/Mobile Application/LetContact";
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
      question: "What is UI/UX design?",
      answer:
        "UI (User Interface) design refers to the visual layout and interactive elements of a product (e.g., buttons, typography, images), while UX (User Experience) design focuses on the overall experience a user has with a product, including usability, accessibility, and user satisfaction. Both work together to create a seamless, engaging, and intuitive user experience.",
    },
    {
      question: "How important is UI/UX design for a product?",
      answer:
        "UI/UX design is crucial because it directly impacts the user's experience and satisfaction. A well-designed interface leads to ease of use, higher user engagement, and increased retention. A good user experience ensures that the product meets user needs efficiently, which can lead to improved conversions and business success.",
    },
    {
      question:
        "What types of projects do you work on in terms of UI/UX design?",
      answer:
        "At GDFX, we work on a variety of projects, including websites, mobile applications, enterprise software, eCommerce platforms, and custom software solutions. We specialize in creating user-centered designs tailored to your specific business and product requirements.",
    },
    {
      question: "How does UI/UX design affect business performance?",
      answer:
        "A positive UI/UX design can lead to higher user engagement, increased conversion rates, and better customer retention. Well-designed user interfaces reduce friction, making it easier for users to complete tasks, while a good UX ensures users feel satisfied, encouraging repeat visits and referrals.",
    },
    {
      question:
        "Can I provide my own ideas or branding guidelines for the design?",
      answer:
        "Yes, we welcome any ideas, preferences, or existing branding guidelines you may have. Sharing your vision, goals, and visual identity allows us to design solutions that align with your brand and target audience, ensuring consistency across your products.",
    },
    {
      question:
        "How do you ensure the UI/UX design is tailored to the target audience?",
      answer:
        "We conduct user research, create personas, and analyze user behavior to understand the needs and preferences of the target audience. We then create wireframes, prototypes, and conduct usability testing to ensure the design is intuitive, engaging, and effective for the users.",
    },
    {
      question: "Do you design for mobile and desktop platforms?",
      answer:
        "Yes, we design for both mobile and desktop platforms, ensuring that the user interface is responsive and optimized for a seamless experience across devices. This includes designing layouts that adapt to different screen sizes, resolutions, and orientations.",
    },
    {
      question: "What is the difference between UI and UX design?",
      answer:
        "UI design is focused on the visual and interactive elements of a product, such as colors, typography, icons, and layout. UX design, on the other hand, involves creating a positive experience for the user by focusing on usability, accessibility, information architecture, and how users interact with the product overall.",
    },
    {
      question: "How do you measure the effectiveness of UI/UX design?",
      answer:
        "We measure effectiveness using user feedback, user testing, analytics, and conversion rates. We also track metrics such as user retention, engagement, task success rates, and other key performance indicators (KPIs) to ensure the design meets the desired outcomes.",
    },
    {
      question: "What tools do you use for UI/UX design?",
      answer:
        "We use industry-standard design tools like Sketch, Figma, Adobe XD, InVision, and Axure to create wireframes, prototypes, and high-fidelity designs. These tools help us deliver responsive and interactive design solutions, allowing for easy collaboration and feedback.",
    },
  ],
  // Tab 2 FAQs (Questions 11 to 20)
  [
    {
      question: "What is your design process for UI/UX projects?",
      answer:
        "Our design process typically involves: 1. Research and Discovery: Understanding your business goals, user needs, and market context. 2. Wireframing and Prototyping: Creating low-fidelity wireframes and interactive prototypes. 3. UI Design: Designing high-fidelity mockups, including colors, typography, and icons. 4. User Testing: Conducting usability testing and refining the design based on user feedback. 5. Final Design and Handoff: Delivering the final design files and collaborating with developers for implementation.",
    },
    {
      question: "What is user research, and why is it important?",
      answer:
        "User research involves understanding the target audience's behaviors, needs, pain points, and preferences through methods like surveys, interviews, and usability testing. It’s important because it informs design decisions, ensuring the product meets the real needs of users and improves the user experience.",
    },
    {
      question: "How do you ensure accessibility in UI/UX design?",
      answer:
        "We follow WCAG (Web Content Accessibility Guidelines) to ensure that designs are accessible to users with disabilities. This includes using proper color contrast, ensuring keyboard navigation, designing for screen readers, and considering other accessibility features to improve usability for all users.",
    },
    {
      question: "How do you ensure consistency across the UI design?",
      answer:
        "We create and follow a design system, which includes standardized components like buttons, form fields, and typography. This ensures a consistent visual language and design structure, making the interface easier to use and visually cohesive across different screens.",
    },
    {
      question: "What is a design system, and why is it important?",
      answer:
        "A design system is a set of design standards, guidelines, and reusable components (e.g., buttons, colors, icons) that ensure consistency across a product’s design. It streamlines the design process and makes it easier to scale the project, providing a unified and cohesive experience for users.",
    },
    {
      question: "How do you handle revisions during the design process?",
      answer:
        "We follow an iterative approach to design, where we present designs in stages (e.g., wireframes, prototypes) and gather feedback after each phase. Revisions are made based on client input and user testing results, ensuring the final design aligns with your vision and objectives.",
    },
    {
      question: "Do you conduct usability testing during the design process?",
      answer:
        "Yes, we conduct usability testing to gather feedback on the design from actual users. We test prototypes with users, observe their interactions, and gather insights to refine the design, ensuring that the final product is intuitive and meets user needs.",
    },
    {
      question: "How do you ensure the UI/UX design is mobile-friendly?",
      answer:
        "We focus on responsive design, ensuring that the interface adapts to different screen sizes and devices. We test the design on various mobile devices to ensure that it provides an optimal user experience on smartphones, tablets, and other mobile platforms.",
    },
    {
      question: "Do you create interactive prototypes?",
      answer:
        "Yes, we create interactive prototypes that allow stakeholders to experience and interact with the design before development. This helps visualize the user journey, validate design choices, and identify potential issues early in the process.",
    },
    {
      question: "What is the role of collaboration in the design process?",
      answer:
        "Collaboration is key throughout the design process. We work closely with you to ensure that the design meets your business objectives, and we also collaborate with developers to ensure the design is feasible from a technical perspective. Feedback from stakeholders and users is integrated throughout the process.",
    },
  ],
  // Tab 3 FAQs (Questions 21 to 30)
  [
    {
      question: "Do you provide post-launch support for UI/UX design?",
      answer:
        "Yes, we offer post-launch support to ensure that the design is fully functional and effective after it goes live. We monitor user behavior, gather feedback, and make necessary updates or adjustments to improve the experience.",
    },
    {
      question: "How do you handle design revisions after launch?",
      answer:
        "If there are any issues or changes needed after launch, we provide ongoing support to make design revisions. This includes improving usability, adding new features, or addressing any user concerns that arise post-launch.",
    },
    {
      question: "How do you track user feedback after the launch?",
      answer:
        "We use analytics tools and user feedback surveys to track how users are interacting with the product. Tools like heatmaps, session recordings, and user surveys help us understand user behavior and identify areas for improvement.",
    },
    {
      question:
        "How do you ensure continued optimization of the UI/UX design after launch?",
      answer:
        "We continuously monitor performance and user engagement metrics to identify opportunities for optimization. Based on user feedback and performance analysis, we make iterative improvements to the UI/UX design, ensuring the product evolves with user needs and business goals.",
    },
    {
      question:
        "Can you make design adjustments based on new business requirements?",
      answer:
        "Yes, as your business evolves, we can help make design adjustments to accommodate new features, branding changes, or user requirements. This ensures that the UI/UX remains aligned with your business objectives over time.",
    },
    {
      question: "How do you handle user onboarding design?",
      answer:
        "We design user onboarding flows that introduce users to key features, guide them through the setup process, and ensure they understand how to use the product. A good onboarding experience reduces friction and increases user retention.",
    },
  ],
];

const faqName = ["General", "Technical", "Support"];

const Ui_Ux_design = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <title>UI UX Design Service | GDFX</title>
        <meta
          name="description"
          content="Global Digital SFX delivers tailored UI/UX design services that enhance usability and visual appeal. From mobile apps to web platforms, we design experiences that engage users and support your business objectives."
        />
        <meta
          name="keywords"
          content="UI design, UX design, user interface design, user experience design, mobile app design, web design, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link
          rel="canonical"
          href="https://www.globaldigitalsfx.com/service/ui-ux-design"
        />
        <meta property="og:title" content="UI UX Design Service | GDFX" />
        <meta
          property="og:description"
          content="Global Digital SFX delivers tailored UI/UX design services that enhance usability and visual appeal. From mobile apps to web platforms, we design experiences that engage users and support your business objectives."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service/ui-ux-design"
        />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/service/ui-ux-design",
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
      <DesignHero />
      {/* <UI_Ux_slider /> */}
      <ExploreIt />
      <UIUX />
      {/* <MobileCreateDesign /> */}
      <WebLineIndia />
      <DesignMetter />
      {/* <Ui_Ux_talk title={title2} img={img1} /> */}
      {/* <LetContact
        heading="Ready to Transform Your Digital Presence? Contact Us Today!"
        title="We design intuitive interfaces and seamless user experiences that elevate your brand and engage your users."
      /> */}
      <OurTestimonials testimonialsData={testimonialsData} />
      <RequestCallback />
      {/* <ServiceFaq faqs={faqs} faqName={faqName} />
      <SubscribeToNewsLetter /> */}
    </>
  );
};

export default Ui_Ux_design;
