import React from 'react'
import logo from "../assets/hotelLogo.png"
function Header() {
  return (
    <div className='headerWrapper'>
        <div className='mainHeaderWrapper'>
         <nav>
            <div className='logoWrapper'>
             <img src={logo}/>
             <h2>Eat Hotel</h2>
            </div>
            <ul>
                <li className='active'>Home</li>
                <li>Menu</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
            <div className='cartWrapper'>
             <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
            </div>
         </nav>
        </div>
    </div>
  )
}

export default Header