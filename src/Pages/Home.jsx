import { Helmet } from "react-helmet";
import React from "react";
// Normal imports without lazy loading
import HomeHeader from "../Component/Home Page Component/HomeHeader";
import ExpertItConstultains from "../Component/Home Page Component/ExpertItConstultains";
import AboutOurCompany from "../Component/Home Page Component/AboutOurCompany";
import Service_Providing from "../Component/Home Page Component/Service_Providing";
import WhyChooseUs from "../Component/Home Page Component/WhyChooseUs";
import SubscribeNow from "../Component/Home Page Component/SubscribeNow";
import MakeConnection from "../Component/Home Page Component/MakeConnection";
import OurExperience from "../Component/Home Page Component/OurExperience";
import OurClient from "../Component/Home Page Component/OurClient";
import OurTestimonials from "../Component/Home Page Component/OurTestimonials";
import Blog from "../Component/Home Page Component/Blog";
import BookYourConsultains from "../Component/Home Page Component/BookYourConsultains";
import quotesTestimonials from "../assets/Home/Our Testimonials/quoteTestimonials.webp";
import smart from "../assets/newImg/smart1.png";
import astro from "../assets/newImg/rahul.png";
import koshika from "../assets/newImg/koshikaicon.png";
import nirala from "../assets/newImg/nirala.png";
import mint from "../assets/newImg/mint.webp";
import tej from "../assets/newImg/tej.jpeg";
import sold from "../assets/newImg/sold.png";
import OurServicesAccordion from "../Component/Home Page Component/OurServicesAccordion";

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

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          GDFX | Custom Web Development & Digital Marketing Solutions
        </title>
        <meta
          name="description"
          content="GDFX delivers cutting-edge web development, design, and digital strategies to transform businesses and enhance their online presence."
        />
        <meta
          name="keywords"
          content="web development, digital marketing, custom solutions, business growth, GDFX"
        />
        <meta name="author" content="GlobalDigitalsFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/" />
        <meta
          property="og:title"
          content="GDFX | Custom Web Development & Digital Marketing Solutions"
        />
        <meta
          property="og:description"
          content="GDFX delivers cutting-edge web development, design, and digital strategies to transform businesses and enhance their online presence."
        />
        <meta property="og:url" content="https://www.globaldigitalsfx.com/" />
        <meta property="og:type" content="website" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Global Digital FX",
            image: "https://www.globaldigitalsfx.com/assets/logo-DJ_LCy6L.webp",
            "@id": "",
            url: "https://www.globaldigitalsfx.com/",
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

      <HomeHeader />
      <ExpertItConstultains />
      <AboutOurCompany />
      <Service_Providing />
      <WhyChooseUs />
      <OurExperience />
      <OurClient />
      {/* <Blog /> */}
      {/* <SubscribeNow /> */}
      <OurServicesAccordion/>
      <MakeConnection />
      <OurTestimonials testimonialsData={testimonialsData} />
      <BookYourConsultains />
    </>
  );
};

export default Home;
