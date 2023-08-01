import React from 'react'
import img from "../assets/pizza.jpg"
export default function Banner() {
  return (
    <div className='bannerWrapper'>
     <img src= {img}/>
     <div className='coverWrapper'>
     <div></div>
     <div></div>
     </div>
    </div>
  )
}
