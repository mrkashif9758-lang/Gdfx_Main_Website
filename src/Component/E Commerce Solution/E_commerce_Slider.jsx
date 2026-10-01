import React from 'react'
import MarqueeSlidingText from '../Common/MarqueeSlidingText'
const tickerItems = [
  { name: "Custom eCommerce Development", link: "#" },
  { name: "Advanced Analytics & Reporting", link: "#" },
  { name: "Inventory Management", link: "#" },
  { name: "Responsive Design", link: "#" },
  { name: "Search Engine Optimization ", link: "#" },
  { name: "Scalability & Flexibility", link: "#" },
  { name: "Secure Payment Gateways", link: "#" },
  { name: "Customer Support & Maintenance", link: "#" },
  { name: "CRM", link: "#" },
  { name: "Planning & Strategy", link: "#" },
];
const E_commerce_Slider = () => {
  return (
    <div className='py-5 mb-[30px]' style={{backgroundColor:'rgba(228, 239, 255, 1)'}}>
     <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  )
}

export default E_commerce_Slider
