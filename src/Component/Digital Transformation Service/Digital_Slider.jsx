import React from 'react'
import MarqueeSlidingText from '../Common/MarqueeSlidingText'
const tickerItems = [
  { name: "SEO", link: "#" },
  { name: "Pay-Per-Click Advertising", link: "#" },
  { name: "Conversion Rate Optimization", link: "#" },
  { name: "Social Media Marketing", link: "#" },
  { name: "Content Marketing", link: "#" },
  { name: "Analytics and Reporting", link: "#" },
  { name: "Expert Team", link: "#" },
  { name: "Focus on Results", link: "#" },
  { name: "Cutting-Edge Tools", link: "#" },
  { name: "Comprehensive Services", link: "#" },
];
const Digital_Slider = () => {
  return (
    <div className='py-5 mb-[30px]' style={{backgroundColor:'rgba(228, 239, 255, 1)'}}>
     <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  )
}

export default Digital_Slider
