import React from "react";
import { Route,Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

export default function AppRoutes() {
  return (
    <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/menu" element={<Menu/>}></Route>
         <Route path="/cart" element={<Cart/>}/>
    </Routes>
  )
}
