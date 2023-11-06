import logo from './logo.svg';
import './App.css';
import React,{useState,createContext,useEffect} from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SubHeader from './components/SubHeader';
import AppRoutes from './components/AppRoutes';
export const barge=createContext(0)
function App() {
  const [bargeValue,setBarge]=useState(0)
  const [product,setProduct]=useState([])
  function handleRemoveItem(id){
  let item= product.filter(item=>item.id!==id)
  setProduct(item)
  }
  useEffect(() => {
    if(product.length > 0){
      localStorage.setItem("item", JSON.stringify(product));
} 
 showbarge()
  }, [product]);
  function showbarge(){
    let quantity=product.reduce((accu,cur)=>{
        return accu + cur.quantity
        },0)
        setBarge(quantity)
}
  useEffect(()=>{
    let item = JSON.parse(localStorage.getItem("item"))
    if (item){
     setProduct(item)
    }
 },[])
  return (
<barge.Provider value={{value:[bargeValue,setBarge,product,setProduct,handleRemoveItem]}} className="App">
      <SubHeader/>
      <Header/>
      <AppRoutes/>
    </barge.Provider>
  );
}

export default App;
