import React from "react";
// import testimonialsBottom from "../../assets/Home/Our Testimonials/testimonialsBottom.webp";
import testimonialsBottom from "../../assets/newImg/parallax_2.jpg";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";

// Array with text and link (URL)
const items = [
  { name: "Custom Software Development", link: "/service/custom-software-development" },
  { name: "Mobile App Development", link: "/service/mobile-app-development" },
  { name: "Web Development", link: "/service/web-app-development" },
  { name: "Custom Web Application", link: "/service/custom-software-development" },
  { name: "Digital Transforming Service", link: "/service/digital-transformation-service" },
  { name: "Mobile App Designing", link: "/service/mobile-app-development" },
  { name: "User Interface & User Experience", link: "/service/ui-ux-design" },
  { name: "E-Commerce Development", link: "/service/e-commerce-solution" },
  { name: "IT Consulting", link: "/about-it-consulting" },
];

const TestimonialsBottom = () => {
  return (
    <div
      className="w-full bg-fixed lg:h-[600px] h-[300px] bg-no-repeat bg-cover bg-center mb-[50px] flex items-end"
      style={{ backgroundImage: `url(${testimonialsBottom})` }}
    >
      {/* Infinite Sliding Text Section */}
      <div className="mt-5 w-full">
        <div className="bg-white py-8 lg:mb-16 mb-7 md:mb-10 text-orange_main font-semibold">
          <div className="stock-ticker" >
            {/* Creating the sliding effect with a single ul */}
            <ul>
              {items.map((item, index) => (
                <li key={index} className="flex items-center sm:gap-4 gap-2 lg:text-2xl text-base">
                  <GoDotFill />
                  <Link to={item.link} className="font-bold group">
                    <span className="group-hover:underline cursor-pointer">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
            {/* You can add the same list below to create the illusion of an infinite loop */}
            <ul>
              {items.map((item, index) => (
                <li key={`second-${index}`} className="flex items-center sm:gap-4 gap-2 lg:text-2xl text-base">
                  <GoDotFill />
                  <Link to={item.link} className="font-bold group">
                    <span className="group-hover:underline cursor-pointer">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBottom;
