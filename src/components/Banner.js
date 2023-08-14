import React from 'react'
import img from "../assets/pizza.jpg"
export default function Banner() {
  return (
    <div className='bannerWrapper'>
     <img src= {img}/>
     <div className='coverWrapper'>
     <div className='bannerContainer'>
        <div className='textWrapper'>
            <div>
                <h3>Satisfy you hunger</h3>
                <h1>Delicious foods with wonderfull eating </h1>
                <p>Get to order you food fast and easy way with scanning qrcode</p>
            </div>
            <div className='bannerInputWrapper'>
                <input type='search' placeholder='Search food ...'/>
                <button>Search</button>
            </div>
        </div>
        <div className='imgWrapper'>
            <div className='imgContainer'>
                <div className='innerImgContainer'>
                 <img src={img}/>
                </div>
            </div>
        </div>
     </div>
     </div>
    </div>
  )
}
