import React, { useState,useEffect } from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,

  
    
  } from "react-router-dom";


  import Home from './pages/Home'
  import SingleProduct from './components/SingleProduct'
import Navbar from './components/Navbar';
import Productspage from './pages/Productspage';
import Cart from './pages/Cart';
import { CartContext } from './CartContext';

function App() {

  const [cart,setCart]=useState({})
  //fetch from local storage
  useEffect(() => {
    
   const cart=window.localStorage.getItem('cart')
   setCart(JSON.parse(cart))
    
  }, [])
  
  useEffect(() => {
    
    window.localStorage.setItem('cart',JSON.stringify(cart))
     
   }, [cart])
  return (
      <>
      <Router>
     <CartContext.Provider value={{cart,setCart}}>

      <Navbar/>
 
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/products/:_id" element={<SingleProduct/>} />
        <Route exact path="/products" element={<Productspage/>} />
      </Routes>
      </CartContext.Provider>
    </Router>
   
 
      </>
   
  )
}

export default App