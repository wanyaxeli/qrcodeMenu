import React,{useEffect,useState,useContext} from 'react'
import img from "../assets/meat.jpg"
import {Data} from "../components/Data"
import { barge } from '../App'
function PopularFoods() {
    const [product,setProduct]=useState([])
    const {value}=useContext(barge)
    const[bargeValue,setBarge]=value
    const handleAddToCart =(id)=>{
        let item=Data.find(item=>item.id===id)
        const quantity={quantity:1}
        const newItem=Object.assign({},item,quantity)
        if (product.length===0){
            setProduct(pre=>[...pre,newItem])
        }else{
            product.forEach(item=>{
                console.log(item.id)
                if(item.id===newItem.id){
                    alert ("item exist")
                    return false
                }else{
                    setProduct(pre=>[...pre,newItem])
                    localStorage.setItem("item",JSON.stringify(product))
                }
               })
        }
    }
 useEffect(() => {
    localStorage.setItem("item",JSON.stringify(product))
    setBarge(product.length)
  }, [product]);
 useEffect(()=>{
    let item = JSON.parse(localStorage.getItem("item"))
    if (item){
     setProduct(item)
    }
 },[])
  return (
    <div className='popularFoodsWrapper'>
        <div className='populaFoodsContainer'>
            <div>
                 <h2>food menu</h2>
                <div className='popularFoodsBarWrapper'>
                <h1>Pupular Foods</h1>
                <ul>
                    <li className='popularBaractive'>all menu</li>
                    <li>Pizza</li>
                    <li>Chicken</li>
                    <li>Desserts</li>
                    <li>beverages</li>
                </ul>
                </div>
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
    </div>
  )
}

export default PopularFoods