import React,{useEffect,useState,useContext} from 'react'
import img from "../assets/rice.jpg"
import meat from "../assets/meat.jpg"
import Footer from '../components/Footer'
import { Data } from '../components/Data'
import { barge } from '../App'
function Menu() {
    const {value}=useContext(barge)
    const[bargeValue,setBarge]=value
    const [product,setProduct]=useState([])
    const handleAddToCart =(id)=>{
        let item=Data.find(item=>item.id===id)
        const quantity={quantity:1}
        const newItem=Object.assign({},item,quantity)
        setProduct(pre=>[...pre,newItem])
    }
    function showbarge(){
        let quantity=product.reduce((accu,cur)=>{
            return accu + cur.quantity
            },0)
            setBarge(quantity)
    }
 useEffect(()=>{
    if(product.length > 0){
        localStorage.setItem("item", JSON.stringify(product));
  }
    showbarge() 
},[product])
 useEffect(()=>{
   let item = JSON.parse(window.localStorage.getItem('item'))
   if (item){
    setProduct(item)
   }
},[])
  return (
    <div className='menuWrapper'>
    <div className='menuBanner'>
        <img src={img} />
        <div className='coverWrapper'>
            <div className='menuTextWrapper'>
             <h1>welcome to justEat Hotel's menu</h1>
            </div>
        </div>
    </div>  
    <div className='menuContainer'>
       <div className='menuNavWrapper'>
         <div><p>What would you like to eat today?</p></div>
         <ul>
            <li>pizza</li>
            <li>pizza</li>
            <li>pizza</li>
            <li>pizza</li>
         </ul>
       </div>
       <div className='menuSearchBarWrapper'> 
        <input type='search' placeholder='Search...'/>
        <button>search</button>
       </div>
       <div className='popularFoodCardWrapper'>
                {Data.map((item)=>{
                    return(
                    <div key={item.id} className='popularFoodCard'>
                        <div className='popularFoodCarImgWrapper'>
                            <img src={item.img} />
                        </div>
                        <div className='popularFoodCardDesWrapper'>
                        <div className='popularFoodCardCategoryWrapper'>
                            <span>{item.category}</span>
                        </div>
                        <div className='popularFoodCardPriceWrapper'>
                            <h2>{item.name}</h2>
                            <h3>${item.price}</h3>
                        </div>
                        <div className='popularFoodCardBtnWrapper'>
                            <button onClick={()=>handleAddToCart(item.id)}>add to cart</button>
                            <div className='popularFoodCardWrapper'>
                            <span><i className="fa fa-heart" aria-hidden="true"></i></span>
                                <span><i className="fa fa-eye" aria-hidden="true"></i></span> 
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                })}
            </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Menu