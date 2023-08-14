import React from 'react'
import img from "../assets/meat.jpg"
import Slider from 'react-slick'
export default function Offers() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        
      }
  return (
    <div className='offerWrapper'>
        <div className='offerContainer'>
            <div className='offerheader'>
                <h2>Daily offers</h2>
                <h1>Up to 75% 0ff for this offer</h1>
            </div>
            <Slider {...settings} className='offerCardWrapper'>
             
               {Array(8).fill('0').map((item,i)=>{
                return(
                <div key={i} className='offercard'>
                    <div className='OffercardImgWrapper'>
                       <img src={img}/>
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#fff" fillOpacity="1" d="M0,160L80,170.7C160,181,320,203,480,176C640,149,800,75,960,85.3C1120,96,1280,192,1360,240L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                       </svg>
                    </div>
                   <div className='OffercardPriceWrapper'>
                   <div className='cardOfferIcon'>75%</div>
                       <div className='innerOfferCardWrapper'>
                           <h3>Beef Masala</h3>
                           <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                           <div className='offerIconWrapper'>
                           <span><i className="fa fa-shopping-basket" aria-hidden="true"></i></span>
                           <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                           <span><i className="fa fa-eye" aria-hidden="true"></i></span> 
                           </div>
                       </div>
                   </div>
                </div>
                )
               })}
              
            </Slider>
        </div>
    </div>
  )
}
