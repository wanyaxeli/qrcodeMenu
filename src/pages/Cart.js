import React,{useState,useEffect} from 'react'
import img from "../assets/rice.jpg"
import { Data } from '../components/Data'
export default function Cart() {
  const [item,setItem]=useState([])
  const [quantity,setQuantity]=useState(1)
  const [price,setPrice]=useState('')
  const [totalPrice,setTotalPrice]=useState('')
  const flatenedItem= item.flat()
  const handleQuantityDecrement=(id,quantity,price)=>{
    const newitem=flatenedItem.find(item=>item.id === id)
    if ( newitem.quantity > 1){
      const newQuantity= newitem.quantity = quantity - 1
      setQuantity(pre=>({...pre,[id]:newQuantity}))
      calculatePrice(id)
    }else {
      return false
    }
  }
  const handleQuantityIncrement=(id,quantity)=>{
  const newitem=item.find(item=>item.id === id)
  if ( newitem.quantity <= newitem.stock){
    const newQuantity= newitem.quantity = quantity + 1
    setQuantity(pre=>({...pre,[id]:newQuantity}))
    calculatePrice(id)
  }else {
    return false
  }
  }
  function calculatePrice(id){
   let item=flatenedItem.find(item=>item.id === id)
   const newprice = item.quantity * item.price
   console.log(newprice)
   setPrice(pre=>({...pre,[id]:newprice}))
   calculateTotalPrice()
  }
  function calculateTotalPrice(){
    let values=Object.values(price)
    let result = values.reduce((accu,cur)=>{
      return accu + cur
    },0)
    setTotalPrice(result)
}
  useEffect(()=>{
  
  let item = JSON.parse(localStorage.getItem('item'))
  if (item){
    setItem(item)
  }
  },[])
 useEffect(()=>{
  
  item.forEach(item => {
    calculatePrice(item.id);
  });
 },[item])
 useEffect(()=>{
  calculateTotalPrice()
 },[flatenedItem])
 if (flatenedItem.length===0){
  return <div className='noItemWrapper'><h4>No orders added to cart yet</h4></div>
 }else{
  return (
    <div className='cartWrapper'>
    <div className='cartContainer'>
      <div className='cartCardWrapper'>
      {flatenedItem.map(item=>{
        return(
      <div key={item.id} className='cartCardContainer'>
        <div className='cartCardImgWrapper'>
          <img src={item.img} />
        </div>
        <div className='cartCarddesWrapper'>
          <h4>{item.name}</h4>
          <div className='cartCardBtnWrapper'>
            <button onClick={()=>handleQuantityDecrement(item.id,item.quantity,item.price)}>-</button><p>{item.quantity}</p><button onClick={()=>handleQuantityIncrement(item.id,item.quantity,item.price)}>+</button>
          </div>
        </div>
        <div className='cartCardpriceWrapper'>
          <p>${ price[item.id]  }</p>
          <p>&times;</p>
        </div>
      </div>
        )
      })}
      </div>
      <div className='cartTotalPriceWrapper'>
            <div>
              <h3>total price</h3>
            </div>  
            <div>  
              <p>${totalPrice}</p>
            </div>
            <div className='cartBtnWrapper'>
              <button>order now</button>
            </div>
      </div>
    </div>
    </div>
  )
    }
}
