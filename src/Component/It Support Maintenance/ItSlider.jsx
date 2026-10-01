import React from 'react'
import MarqueeSlidingText from '../Common/MarqueeSlidingText'
const tickerItems = [
  { name: "Reduced Downtime", link: "#" },
  { name: "Enhanced Security", link: "#" },
  { name: "Cost-Effective Operations", link: "#" },
  { name: "Optimized Performance", link: "#" },
  { name: "24/7 Support", link: "#" },
  { name: "Business Continuity", link: "#" },
  { name: " Security Management", link: "#" },
  { name: "Network Support", link: "#" },
  { name: "Helpdesk Support", link: "#" },
  { name: "Issue Resolution", link: "#" },
];
const ItSlider = () => {
  return (
    <div className='py-5 mb-[30px]' style={{backgroundColor:'rgba(228, 239, 255, 1)'}}>
      <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  )
}

export default ItSlider
