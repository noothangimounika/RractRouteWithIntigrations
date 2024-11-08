import React, { useEffect, useState } from 'react'

const Carts = () => {

    const [data,setdata]=useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))
    })

    const fetchdata=async()=>{
        let respose=await fetch('https://fakestoreapi.com/carts')
        let data=await respose.json()
        console.log(data)
        setdata(data)
    }

    useEffect(()=>{
        fetchdata()
    },[])

  return (
    <div className='Carts-Container'>
        {
            data.map((item)=>{
                return(
                    <div className="items-div">
                        <p>{item.id}</p>
                        <p>{item.userId}</p>
                        <p>{item.date}</p>
                        
                    </div>
                )
            })
        }
    </div>
  )
}

export default Carts