import React from 'react'
import img from "../assets/rice.jpg"
export default function Footer() {
  return (
    <div className='footerWrapper'>
     <img src={img}/>
     <div className='coverWrapper'>
        <div className='footerContainer'>
        <div></div>
        <div></div>
        <div></div>
        </div>
     </div>
    </div>
  )
}
