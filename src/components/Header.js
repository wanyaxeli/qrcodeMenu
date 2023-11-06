import React,{useContext} from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import logo from "../assets/hotelLogo.png"
import {  barge } from '../App'
function Header() {
  const {value}=useContext(barge)
  const[bargeValue]=value
    const location=useLocation()
    const {pathname}=location
    const slipath=pathname.split('/')[1]
  return (
    <div className='headerWrapper'>
        <div className='mainHeaderWrapper'>
         <nav>
            <div className='logoWrapper'>
             <img src={logo}/>
             <h2>justEat </h2>
            </div>
            <ul>
                <li className={`${slipath === ''?'active':''}`}><Link to='/'>Home</Link></li>
                <li  className={`${slipath === 'menu'?'active':''}`}><Link to='/menu'>Menu</Link></li>
                <li>About us</li>
                <li>Contact</li>
                <li>Help</li>
            </ul>
            <div className='headercartIconWrapper'>
             <span><Link to='/cart'><i className="fa fa-shopping-basket" aria-hidden="true"></i></Link></span>
             {bargeValue > 0 && <span>{bargeValue}</span>}
            </div>
         </nav>
        </div>
    </div>
  )
}

export default Header