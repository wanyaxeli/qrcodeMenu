import React,{useEffect,useState,useContext} from 'react'
import {Data} from "../components/Data"
import { barge } from '../App'
function PopularFoods() {
    // const [product,setProduct]=useState([])
    const {value}=useContext(barge)
    const [click,setClicked]=useState(false)
    const [q,setQuantity]=useState('')
    const[bargeValue,setBarge,product,setProduct]=value
    let pro=product.flat()
    const handleAddToCart =(id)=>{
        let item=Data.find(item=>item.id===id)
        const quantity={quantity:1}
        const newItem=Object.assign({},item,quantity)
        setProduct(pre=>[...pre,newItem])
        updateBtn(id)
        setClicked(pre=>({...pre,[id]:
        <div className=' displayMenuWrapper'>
        <button onClick={()=>handleQuantityDecrement(item.id,item.price)}>-</button><p>{newItem.quantity}</p><button onClick={()=>handleQuantityIncrement(item.id,item.price)}>+</button>
       </div>}))
    }
    // function updateQuantity(id){
    //    let item= product.find(item=>item.id ===id)
    //    if (item){
    //     const =item.quantity + 1
    //     setQuantity(pre=>({...pre,item.quantity}))
    //     console.log(item.quantity)
    //    }
    // }
    function updateBtn(id){
        setClicked(pre=>({...pre,[id]:
            <button onClick={()=>handleAddToCart(id)}>add to cart</button>}))
    }
    function showbarge(){
        let quantity=pro.reduce((accu,cur)=>{
            return accu + cur.quantity
            },0)
            setBarge(quantity)
    }
    const handleQuantityDecrement=(id)=>{
       if(product){
        const newitem=pro.find(item=>item.id === id)
        if ( newitem.quantity > 1){
          newitem.quantity= newitem.quantity - 1
        }else {
          return false
        }
       }
      }
      const handleQuantityIncrement=(id)=>{
      if(product){
        const newitem=pro.find(item=>item.id === id)
      if ( newitem.quantity <= newitem.stock){
        newitem.quantity= newitem.quantity + 1
      }else {
        return false
      }
      }
      }
 useEffect(() => {
    if(pro.length > 0){
        localStorage.setItem("item", JSON.stringify(product));
  }
    showbarge()
//    product.forEach(item=>{
//     updateQuantity(item.id)
//    })
  }, [pro]);
 useEffect(()=>{
    let item = JSON.parse(localStorage.getItem("item"))
    if (item){
     setProduct(item)
    }
    Data.forEach(item=>{
        updateBtn(item.id)
    })
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
                            {click[item.id]}
                            <div className='popularFoodCardIconWrapper'>
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