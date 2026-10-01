import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import ContactHeader from "../Component/Contact Page Component/ContactHeader";
import ContactForm from "../Component/Contact Page Component/ContactForm";
import ContactInfo from "../Component/Contact Page Component/ContactInfo";
import SubscribeToNewsLetter from "../Component/Contact Page Component/SubscribeToNewsLetter";
import GlobalPresence from "../Component/About Page Component/GlobalPresence";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | GDFX – Let's Build Your Digital Future</title>
        <meta
          name="description"
          content="Contact GlobalDigitalSFX for expert IT solutions, software development, web design, and digital marketing services. Get in touch today!"
        />
        <meta
          name="keywords"
          content="contact GlobalDigitalSFX, IT solutions support, software development queries, digital marketing assistance, web development services"
        />
        <meta name="author" content="GlobalDigitalSFX" />
        <link rel="canonical" href="https://www.globaldigitalsfx.com/contact" />
        <meta
          property="og:title"
          content="Contact Us | GDFX – Let's Build Your Digital Future"
        />
        <meta
          property="og:description"
          content="Contact GlobalDigitalSFX for expert IT solutions, software development, web design, and digital marketing services. Get in touch today!"
        />
        <meta
          property="og:url"
          content="https://www.globaldigitalsfx.com/contact"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <ContactHeader />
      <ContactForm />
      <GlobalPresence/>
      {/* <ContactInfo /> */}
      {/* <SubscribeToNewsLetter /> */}
    </>
  );
};

export default Contact;
