import React, { useEffect, useState } from 'react'

const Products = () => {


    const[data,setdata]=useState([])


    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const fetchdata=async()=>{
        let response=await fetch('https://fakestoreapi.com/products')
        let data= await response.json()
        console.log(data)
        setdata(data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

  return (
    <div className='Products-Container'>
       {/* <h1>All Products</h1> */}
       {
            data.map((item)=>
            {
                return(
                    <div className="container-items">

                           
                            <h1>{item.category}</h1>
                            <img src={item.image} width="200" height="250"/>
                            <p>${item.price}</p>
                            <p>{item.rating.count}</p>
                            <p>⭐{item.rating.rate}</p>   

                    </div>
                )
            })
       }
    </div>
  )
}

export default Products