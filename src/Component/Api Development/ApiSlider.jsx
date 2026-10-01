import React from 'react'
import MarqueeSlidingText from '../Common/MarqueeSlidingText'
const tickerItems = [
  { name: "Requirement Analysis", link: "#" },
  { name: "API Design", link: "#" },
  { name: "Integration", link: "#" },
  { name: "Development", link: "#" },
  { name: "Testing", link: "#" },
  { name: "Integration", link: "#" },
  { name: "Deployment and Support", link: "#" },
  { name: "Tailored Solutions", link: "#" },
  { name: "Agile Development", link: "#" },
  { name: "End-to-End Support", link: "#" },
];
const ApiSlider = () => {
  return (
    <div className='py-5 mb-[30px]' style={{backgroundColor:'rgba(228, 239, 255, 1)'}}>
      <MarqueeSlidingText tickerItems={tickerItems} />
    </div>
  )
}

export default ApiSlider
