
import {useState,useEffect} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
const SingleProduct = () => {
    const navigate = useNavigate();
    const host = "http://localhost:5000"
    const [product,setProduct]=useState({})
    const params=useParams();
 
    useEffect(async()=>{
        
        const response = await fetch(`${host}/api/products/${params._id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          
            
            
            
          },
          body: JSON.stringify()
        });
        const json = await response.json(); 
      
       setProduct(json)
        
      },[params._id])

  return (
   
    <div className="container mx-auto mt-12">
   
   <button className="mb-12 font-bold" onClick={ () => { 
        
        navigate("/")
    } }>Back</button>
    <div className="flex">
        <img src="/images/peproni.png" alt="pizza" />
        <div className="ml-16">
            <h1 className="text-xl font-bold">{product.name}</h1>
            <div className="text-md">{product.size}</div>
            <div className="font-bold mt-2">{product.price}</div>
            <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
        </div>
    </div>
</div>
  )
}

export default SingleProduct