import { useEffect } from "react";
import { Helmet } from "react-helmet";
import ServiceHeader from "../Component/Service Page Component/ServiceHeader";
import OurServices from "../Component/Service Page Component/OurServices";
import OurWorkProcess from "../Component/Service Page Component/OurWorkProcess";
import RequestCallback from "../Component/Home Page Component/RequestCallback";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import ServiceFaq from "../Component/Service Page Component/ServiceFaq";
import Technology from "../Component/Service Page Component/Technology";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";
import ProjectDemo from "../Component/About Page Component/ProjectDemo";

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
      question: "What is GDFX and what services do you offer?",
      answer:
        "GDFX (Global Digitals FX) is a software development company specializing in innovative solutions for businesses across various industries. We provide services such as mobile app development, custom software development, API development, UI/UX design, digital transformation, IT support, e-commerce solutions, and digital marketing strategies.",
    },
    {
      question: "How do I get started with GDFX?",
      answer:
        "Getting started is easy! Simply reach out to us via our contact form or schedule a free consultation. During this meeting, we’ll discuss your needs, understand your vision, and determine the best approach to help you achieve your goals.",
    },
    {
      question: "Why should I choose GDFX over other development companies?",
      answer:
        "GDFX stands out because of our tailored, client-centric approach. We focus on delivering customized solutions that are scalable, secure, and future-proof. Our team has expertise across a wide range of technologies and industries, ensuring we meet your specific business needs effectively.",
    },
    {
      question: "What industries do you work with?",
      answer:
        "We serve businesses across a broad spectrum of industries, including e-commerce, healthcare, finance, education, technology, and more. No matter your industry, we have the expertise to provide cutting-edge solutions.",
    },
    {
      question: "How long has GDFX been in business?",
      answer:
        "GDFX has been delivering exceptional digital solutions for over a decade. Our experience and expertise have made us a trusted partner for businesses of all sizes.",
    },
    {
      question: "Will I own the code after the project is completed?",
      answer:
        "Yes, once the project is completed and paid for, you own the full rights to the code and all assets associated with your project.",
    },
    {
      question: "How does GDFX ensure the security of my data?",
      answer:
        "At GDFX, we prioritize the security of your data. We implement industry-standard security measures, including encryption, secure coding practices, and regular security audits to ensure your information is always protected.",
    },
    {
      question: "Can I track the progress of my project?",
      answer:
        "Absolutely! We provide regular updates and maintain open communication with our clients. You’ll have access to a dedicated project manager who will keep you informed about milestones, timelines, and any challenges we encounter.",
    },
    {
      question: "Do you offer post-launch support?",
      answer:
        "Yes, GDFX provides post-launch support to ensure that your solution runs smoothly. This includes bug fixes, system updates, and ongoing maintenance.",
    },
    {
      question: "Can you work with my existing development team?",
      answer:
        "Yes, we can collaborate with your existing team to provide expertise and supplement your internal resources. Whether you need specialized skills or additional support, we’re here to help.",
    },
  ],

  // Mobile App Development FAQ
  [
    {
      question: "What is the process for developing a mobile app with GDFX?",
      answer:
        "Our mobile app development process includes the following steps: Discovery, Design, Development, Testing, and Launch. We work closely with you to ensure the app meets your requirements and delivers a seamless user experience.",
    },
    {
      question:
        "What is the timeline for a custom software development project?",
      answer:
        "The timeline varies depending on the complexity of the project. Typically, custom software development takes anywhere from 8 weeks to several months. We’ll provide an estimated timeline after assessing your project’s scope and requirements.",
    },
    {
      question: "How do you ensure the quality of the development?",
      answer:
        "We follow agile development methodologies, perform thorough testing at each phase, and involve you in regular review sessions to ensure the quality and functionality of the product meet your expectations.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "GDFX specializes in a wide range of technologies, including but not limited to React Native, Swift, Java, Python, Node.js, PHP, AWS, Google Cloud, and Angular. We choose the right technology stack based on the project’s requirements.",
    },
    {
      question: "Do you provide UI/UX design as part of your services?",
      answer:
        "Yes! Our UI/UX design team works alongside the development team to create visually appealing, intuitive, and user-friendly designs that improve the user experience and drive business results.",
    },
    {
      question: "Can you help with API development and integration?",
      answer:
        "Absolutely! GDFX offers API development and integration services to enhance your system’s ability to communicate with other platforms and services, helping to automate processes and improve overall efficiency.",
    },
    {
      question:
        "Do you offer digital marketing services for my product or website?",
      answer:
        "Yes, we offer comprehensive digital marketing services, including SEO, PPC, social media marketing, email campaigns, and content creation to help you drive traffic and convert visitors into loyal customers.",
    },
    {
      question:
        "What is the typical cost of a custom software development project?",
      answer:
        "The cost depends on the scope, complexity, and timeline of your project. We offer flexible pricing models, including fixed-price and hourly rates. We’ll provide a detailed estimate after understanding your needs.",
    },
    {
      question: "Can GDFX build an e-commerce platform for my business?",
      answer:
        "Yes! We specialize in developing robust and scalable e-commerce platforms tailored to your business needs. Our solutions are optimized for user experience, payment processing, and inventory management.",
    },
    {
      question: "Will my project be updated regularly?",
      answer:
        "Yes, we provide regular updates during the development process. You’ll be able to track progress, request revisions, and provide feedback to ensure the project aligns with your expectations.",
    },
  ],

  // Post-Launch FAQ
  [
    {
      question: "Do you offer ongoing maintenance for the projects you build?",
      answer:
        "Yes, we offer ongoing maintenance services, including bug fixes, updates, security patches, and enhancements to ensure your software or website continues to perform optimally.",
    },
    {
      question:
        "What happens if something goes wrong after the project is completed?",
      answer:
        "GDFX provides reliable post-launch support. If any issues arise after the project is completed, our team will respond quickly to resolve them and ensure that your solution continues to function smoothly.",
    },
    {
      question:
        "Can you help with updates and adding new features to my app or website?",
      answer:
        "Yes, we can help with adding new features, implementing updates, and making any necessary modifications to keep your solution current and aligned with evolving business needs.",
    },
    {
      question: "How do you handle bug fixes and technical issues post-launch?",
      answer:
        "We provide ongoing bug fixing and technical support after the launch. If any issues arise, we prioritize them and resolve them in a timely manner to minimize disruption to your business operations.",
    },
    {
      question:
        "Do you offer training on how to use the software or website after launch?",
      answer:
        "Yes, we provide training to ensure your team is comfortable using the system. Whether it's a mobile app, software platform, or website, we offer comprehensive training sessions and documentation.",
    },
    {
      question: "How do you ensure security after the project is live?",
      answer:
        "We provide regular security updates and patches to ensure your software or website remains secure. We also offer ongoing monitoring services to identify and address potential vulnerabilities.",
    },
    {
      question:
        "Will I have access to the source code after the project is completed?",
      answer:
        "Yes, once the project is completed and fully paid for, you will have full access to the source code, documentation, and all related assets.",
    },
    {
      question: "Can GDFX assist with scaling my project as my business grows?",
      answer:
        "Absolutely! We can help scale your project as your business grows, whether it’s optimizing performance, adding new features, or upgrading your infrastructure to handle more users and data.",
    },
    {
      question:
        "How do I contact GDFX for support after the project is completed?",
      answer:
        "You can reach out to our support team via email, phone, or our dedicated support portal. We’re always available to assist with any issues or questions you may have.",
    },
    {
      question: "Can you assist with cloud hosting and server management?",
      answer:
        "Yes, we offer cloud hosting and server management services to ensure your solution runs smoothly and efficiently, with the scalability and security you need.",
    },
  ],
];

const faqName = ["General", "Technical", "Solution"];

const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | Web, App & Digital Solutions - GDFX</title>
        <meta
          name="description"
          content="GlobalDigitalSFX offers web development, SEO, apps, and digital marketing solutions to enhance online presence and drive sustainable business growth."
        />
        <meta
          name="keywords"
          content="custom software development, web application design, mobile app development, UI/UX design, API development, IT support, e-commerce solutions, SEO, PPC, social media marketing, content marketing, analytics"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/service" />
        <meta
          property="og:title"
          content="Our Services | Web, App & Digital Solutions - GDFX"
        />
        <meta
          property="og:description"
          content="GlobalDigitalSFX offers web development, SEO, apps, and digital marketing solutions to enhance online presence and drive sustainable business growth."
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/service"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <ServiceHeader />
      <OurServices />
      <OurWorkProcess />
      <ProjectDemo />
      <Technology />
      {/* <RequestCallback /> */}
      <OurTestimonials testimonialsData={testimonialsData} />
      <ServiceFaq faqs={faqs} faqName={faqName} />
      <SubscribeToNewsLetter />
    </>
  );
};

export default Service;
