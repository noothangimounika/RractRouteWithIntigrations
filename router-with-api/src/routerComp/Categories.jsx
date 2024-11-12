// // import React, { useEffect, useState } from 'react'

// // const Categories = () => {

// //     const [categories,setCatagories]=useState([])
// //     const [filterdata,setfilterdata]=useState([])

// //     useEffect(()=>{
// //         fetch('https://fakestoreapi.com/products/category/electronics')
// //         .then(res=>res.json())
// //         .then(json=>console.log(json))
// //     },[])

// //     const feactdata=async()=>{
      
// //         let response= await fetch('https://fakestoreapi.com/products/categories')
// //         let data=await response.json()
// //         // console.log(data)
// //        setCatagories(data)
       
      
// //     }

// //     useEffect(()=>{
// //         feactdata()
// //     },[])

// //     useEffect(()=>{
// //         fetch('https://fakestoreapi.com/products/category')
// //         .then(res=>res.json())
// //         .then(json=>console.log(json))
// //     },[])

// //     const fetchfilterData=async(data)=>{
// //         let response= await fetch(`https://fakestoreapi.com/products/category/${data}`)
// //         let data1= await response.json()
// //         console.log(data1)
// //         setfilterdata(data1)

// //     }

// //     useEffect(()=>{
// //         fetchfilterData()
        
// //     },[])



// //   return (

// //     <div className='Categories'>
// //        {
// //         categories.map((data,index)=>{
// //             // console.log(data)
// //             <div className="cate-div" style={{display:"flex"}}></div>
// //             return(
// //                 <div className='items-div' key={index}>
              
// //               <button onClick={()=>filterData(data)}>{data}</button>
// //                 </div>
// //             )
          
// //         })
// //        }


// //        <div className="filter-data">
// //         {
// //             filterdata.map((data)=>{
// //                 return(
// //                     <h1>Hello</h1>
// //                 )
// //             })
// //         }
// //        </div>




// //     </div>
// //   )
// // }

// // export default Categories




// import React, { useEffect, useState } from 'react'

// const Categories = () => {
//     const [category,setcategory]=useState([])
//     const [filtercategory,setfiltercategory]=useState([])
//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/category/electronics')
//         .then(res=>res.json())
//         .then(json=>console.log(json))
        

//     },[])


//     const handleCategory=async()=>{
//         let response= await fetch('https://fakestoreapi.com/products/categories')
//         let data=await response.json()
//         console.log(data)
//         setcategory(data)

//     }


//     useEffect(()=>{
//         handleCategory()
//     },[])


//     // const handleselectCategory = async (data) =>{
//     //     let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
//     //     let data2 = await response.json()
        
//     //     setfiltercategory(data2)
//     //     console.log(data2)
//     // }


//     useEffect(() =>{
//         fetch('https://fakestoreapi.com/products/category/jewelery')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//     },[])


//     const handlefiltercategory = async(data) =>{

//         let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
 
//         let data2 = await response.json()
//         setfiltercategory(data2)
//      }
 
    
 

//   return (
//     <div className='Categories-Container'>

//         <div className="items-div" style={{display:'flex',flexDirection:'row',gap:70,marginTop:'20px'}}>
//         {
//             category.map((data)=>{
//               return(
//                 <div className="">
//                       <button onClick={() =>handleselectCategory(data)}  type="button" class="btn btn-primary">{data}</button>
//                 </div>
              
//               )
//             })
//         }
//         </div>

//         <div className="filter-container">
//           {
//             filtercategory.map((item)=>{
//               return(
//                 <div className="items">
//                    <h4>{item.category}</h4>
//                                     <img src={item.image}  style={{width:'300px',height:'300px'}}/>
//                                     <p style={{fontWeight:'bold',color:'blue',fontSize:30}}>Price <span>{item.price}</span></p>
//                                     <div style={{display:'flex',gap:80}}>

//                                     <p style={{fontWeight:'bold',color:'red'}}>Rating {item.rating.rate}</p>

//                                     <p>Count {item.rating.count}</p>
//                                     </div>
//                                     <p style={{width:"300px"}}>{item.description}</p>
//                 </div>
//               )
//             })
//           }
//         </div>




       
//     </div>
//   )
// }

// export default Categories


import { useEffect, useState } from "react"
import { Link, Route, Routes } from "react-router-dom"
import ProductDetails from "./ProductDetails"


const Categories = () =>{

    const [category,setcategory] = useState([])
    const [filtercategory,setfiltercategory] = useState([])

    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>console.log(json))
    },[])

    const handlecategories = async () =>{

        let response = await fetch('https://fakestoreapi.com/products/categories')

        let data = await response.json()
        setcategory(data)
    }

    useEffect(() =>{
        handlecategories()
    },[])

    const handleselectCategory = async (data) =>{
        let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
        let data2 = await response.json()
        
        setfiltercategory(data2)
        console.log(data2)
    }

    return(
        <div>
            <h1>Category Fields</h1>
            
            <div style={{display:'flex',flexDirection:'row',gap:50}}>
            {
                category.map((data,index) =>{
                    return(
                       
                        <div key={index}>
                        <button onClick={() =>handleselectCategory(data)}>{data}</button>
                        </div>
                       
                    )
                })
            }
                 </div>
              
               <div style={{display:'grid',gridTemplateColumns:"300px 300px 300px",gap:200}}>
                    {
                        filtercategory.map((item,index) =>{
                            return(
                                <Link to="/productdetails" state={{id:item.id}} >

                                <div key={index}>
                                    <h4>{item.category}</h4>
                                    <img src={item.image}  style={{width:'300px',height:'300px'}}/>
                                    <p style={{fontWeight:'bold',color:'blue',fontSize:30}}>Price <span>{item.price}</span></p>
                                    <div style={{display:'flex',gap:80}}>

                                    <p style={{fontWeight:'bold',color:'red'}}>Rating {item.rating.rate}</p>

                                    <p>Count {item.rating.count}</p>
                                    </div>
                                    <p style={{width:"300px"}}>{item.description}</p>
                                   
                                </div></Link>
                            )
                        })
                    }
                </div> 
                        <div>

                            
                        </div>
            </div>
    )
}

export default Categories