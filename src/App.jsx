import React, { useEffect,useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Component/Common/ScrollToTop";
const Navbar = React.lazy(() => import("./Component/Common/Navbar"));
const Footer = React.lazy(() => import("./Component/Common/Footer"));

import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Blog from "./Pages/Blog";
import BlogDetails from "./Pages/BlogDetails";
import Contact from "./Pages/Contact";
import Project from "./Pages/Project";
import ProjectDetails from "./Pages/ProjectDetails";
import Career from "./Pages/Career";
import WeAreHiringPage from "./Pages/WeAreHiringPage";
import PageNotFound from "./Pages/PageNotFound";
import MobileApplication from "./Pages/MobileApplication";
import WebApplication from "./Pages/WebApplication";
import AboutITConsulting from "./Pages/AboutITConsulting";
import Ui_Ux_design from "./Pages/Ui_Ux_design";
import CustomSoftwareDevelopment from "./Pages/CustomSoftwareDevelopment";
import E_Commerce_Solution from "./Pages/E_Commerce_Solution";
import Digital_Transformation_Service from "./Pages/Digital_Transformation_Service";
import PPC from "./Pages/PPC";
import SEO from "./Pages/SEO";
import Keyword from "./Pages/Keyword";
import AnalyticsReporting from "./Pages/AnalyticsReporting";
import Conversion_Rate_Optimization from "./Pages/Conversion_Rate_Optimization";
import Social_Media_Marketing from "./Pages/Social_Media_Marketing";
import Content_Marketing from "./Pages/Content_Marketing";
import ApiDevelopment from "./Pages/ApiDevelopment";
import PopupForm from "./Component/Home Page Component/PopupForm";
import ItSupportMaintenance from "./Pages/ItSupportMaintenance";
import Payment_Method from "./Pages/Payment_Method";
import Privacy_Policy from "./Pages/Privacy_Policy";
import Refund_Policy from "./Pages/Refund_Policy";
import Terms_of_Service from "./Pages/Terms_of_Service";
import { Toaster } from "react-hot-toast";
import HiringForm from "./Component/WeAreHiring Page Component/HiringForm";
import { useDispatch } from "react-redux";
import { GetAllCaseStudyApi } from "./redux/actions/caseStudyAction";
import { GetAllBlog } from "./redux/actions/blogActions";
import { AllJobApi } from "./redux/actions/jobActions";
import NGO from "./Pages/NGO";
import WhatsAppButton from "./Component/Common/WhatsAppButton";
import FloatingTouchButton from "./Component/Common/FloatingTouchButton";
import ContactPopup from "./Component/Contact Page Component/ContactPopup";
import Preloader from "./Component/Common/Preloader";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllCaseStudyApi());
    dispatch(GetAllBlog());
    dispatch(AllJobApi());
  }, []);

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    // Check karte hain kya user pehle popup dekh chuka hai is session mein?
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopup");

    if (!hasSeenPopup) {
      // Timer lagate hain ki website khulne ke 3 seconds baad popup aaye
      const timer = setTimeout(() => {
        setIsPopupOpen(true);
        // Session storage mein save kar dete hain taaki baar-baar na aaye
        sessionStorage.setItem("hasSeenPopup", "true");
      }, 3000); // 3000ms = 3 seconds (ise apne hisab se kam/zyada kar sakte ho)

      // Cleanup timer on unmount
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    
    <BrowserRouter>
    <Preloader />
      <Navbar />
      {/* <PopupForm /> */}
    <ContactPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />
      {/* <ScrollToTop /> */}
      <WhatsAppButton/>
      <FloatingTouchButton/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-it-consulting" element={<AboutITConsulting />} />
        <Route path="/service" element={<Service />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/:category/:blogSlug" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/case-study" element={<Project />} />
        <Route path="/case-study/:casestudyId" element={<ProjectDetails />} />
        <Route path="/career" element={<Career />} />
        <Route path="/ngo" element={<NGO />} />
        <Route
          path="/career/we-are-hiring/:jobId"
          element={<WeAreHiringPage />}
        />
        <Route
          path="/career/we-are-hiring/hiring-form/:jobId"
          element={<HiringForm />}
        />
        <Route
          path="/service/custom-software-development"
          element={<CustomSoftwareDevelopment />}
        />
        <Route
          path="/service/mobile-app-development"
          element={<MobileApplication />}
        />
        <Route
          path="/service/web-app-development"
          element={<WebApplication />}
        />
        <Route path="/service/ui-ux-design" element={<Ui_Ux_design />} />
        <Route path="/service/api-development" element={<ApiDevelopment />} />
        <Route
          path="/service/digital-transformation-service"
          element={<Digital_Transformation_Service />}
        />
        <Route
          path="/service/it-support-maintenance"
          element={<ItSupportMaintenance />}
        />
        <Route
          path="/service/e-commerce-solution"
          element={<E_Commerce_Solution />}
        />
        <Route
          path="/service/digital-transformation-service/ppc"
          element={<PPC />}
        />
        <Route
          path="/service/digital-transformation-service/seo"
          element={<SEO />}
        />
        <Route
          path="/service/digital-transformation-service/conversion-rate-optimization"
          element={<Conversion_Rate_Optimization />}
        />
        <Route
          path="/service/digital-transformation-service/social-media-marketing"
          element={<Social_Media_Marketing />}
        />
        <Route
          path="/service/digital-transformation-service/content-marketing"
          element={<Content_Marketing />}
        />
        <Route
          path="/service/digital-transformation-service/analytics-reporting"
          element={<AnalyticsReporting />}
        />
        <Route
          path="/service/digital-transformation-service/keyword"
          element={<Keyword />}
        />
        {/* <Keyword /> page not linked anywhere */}

        <Route path="/privacy-policy" element={<Privacy_Policy />} />
        <Route path="/terms-of-services" element={<Terms_of_Service />} />
        <Route path="/payment-method" element={<Payment_Method />} />
        <Route path="/refund-policy" element={<Refund_Policy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
