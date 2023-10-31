import React, { useEffect, useState } from 'react'

export default function Products() {
    let [products,setProducts] = useState([]);
    const getProducts= async()=>{
        let response= await fetch("https://fakestoreapi.com/products");
        let data= await response.json();
        setProducts(data);
    }
    useEffect(()=>{
        getProducts();
    }
    ,[])
    
  return (
    <div className='row'>
        {products.map((ele)=>{
            return <div className='col-md-3' key={ele.id}>
            <div className='container'>
            <img className='img-fluid' src={ele.image}/>
                <h2>{ele.title}</h2>
                <h1>{ele.price}$</h1>

            </div>
               

                
            </div>
        })}
    </div>
  )
}
