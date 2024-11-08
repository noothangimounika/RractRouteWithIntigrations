import React, { useEffect, useState } from 'react'

const Categories = () => {

    const [data,setdata]=useState([])

    useEffect(()=>{
       ('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])

    const fetchdata=async()=>{
        let respose=await ('https://fakestoreapi.com/products/categories')
        let data= await respose.json()
        console.log(data)
        setdata(data)
    }

    useEffect(()=>{
        fetchdata()
    })

  return (
    <div className='Categories-Container'>
        {
            data.map((item)=>{
                return(
                    <div className="items-div">
                      
                    </div>
                )
            })
        }
    </div>
  )
}

export default Categories