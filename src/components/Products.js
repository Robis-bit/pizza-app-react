import React from 'react'
import Product from './Product'
import { useState ,useEffect,useContext} from 'react'
import { CartContext } from '../CartContext'
const Products =() => {
  // const{name}=useContext(CartContext)
  const host = "http://localhost:5000"
    const[products,setProducts]=useState([]);
      useEffect(async()=>{
        
        const response = await fetch(`${host}/api/products`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          
            
            
            
          },
          body: JSON.stringify()
        });
        const json = await response.json(); 
      
      setProducts(json)
        
      },[])
    
    



  return (
    <div className="container mx-auto pb-24">
    <h1 className="text-lg font-bold my-8">Products </h1>
    <div className="grid grid-cols-5 my-8 gap-24">
  
     
     {
       products.map(product=>{
         return <Product key={product._id} product={product}/>
       })
     }
     
     
     
     
     
     
     
     
     
     
     {/* <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>
     <Product/>

     <Product/>
     <Product/> */}
       
    </div>
</div>
  )
}

export default Products