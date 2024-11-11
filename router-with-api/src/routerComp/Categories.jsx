// import React, { useEffect, useState } from 'react'

// const Categories = () => {

//     const [categories,setCatagories]=useState([])
//     const [filterdata,setfilterdata]=useState([])

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/category/electronics')
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//     },[])

//     const feactdata=async()=>{
      
//         let response= await fetch('https://fakestoreapi.com/products/categories')
//         let data=await response.json()
//         // console.log(data)
//        setCatagories(data)
       
      
//     }

//     useEffect(()=>{
//         feactdata()
//     },[])

//     useEffect(()=>{
//         fetch('https://fakestoreapi.com/products/category')
//         .then(res=>res.json())
//         .then(json=>console.log(json))
//     },[])

//     const fetchfilterData=async(data)=>{
//         let response= await fetch(`https://fakestoreapi.com/products/category/${data}`)
//         let data1= await response.json()
//         console.log(data1)
//         setfilterdata(data1)

//     }

//     useEffect(()=>{
//         fetchfilterData()
        
//     },[])



//   return (

//     <div className='Categories'>
//        {
//         categories.map((data,index)=>{
//             // console.log(data)
//             <div className="cate-div" style={{display:"flex"}}></div>
//             return(
//                 <div className='items-div' key={index}>
              
//               <button onClick={()=>filterData(data)}>{data}</button>
//                 </div>
//             )
          
//         })
//        }


//        <div className="filter-data">
//         {
//             filterdata.map((data)=>{
//                 return(
//                     <h1>Hello</h1>
//                 )
//             })
//         }
//        </div>




//     </div>
//   )
// }

// export default Categories




import React, { useEffect, useState } from 'react'

const Categories = () => {
    const [category,setcategory]=useState([])
    const [filtercategory,setfiltercategory]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/electronics')
        .then(res=>res.json())
        .then(json=>console.log(json))
        

    },[])


    const handleCategory=async()=>{
        let response= await fetch('https://fakestoreapi.com/products/categories')
        let data=await response.json()
        console.log(data)
        setcategory(data)

    }


    useEffect(()=>{
        handleCategory()
    },[])


    // const handleselectCategory = async (data) =>{
    //     let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
    //     let data2 = await response.json()
        
    //     setfiltercategory(data2)
    //     console.log(data2)
    // }


    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
    },[])


    const handlefiltercategory = async(data) =>{

        let response = await fetch(`https://fakestoreapi.com/products/category/${data}`)
 
        let data2 = await response.json()
        setfiltercategory(data2)
     }
 
    
 

  return (
    <div className='Categories-Container'>

        <div className="items-div" style={{display:'flex',flexDirection:'row',gap:70,marginTop:'20px'}}>
        {
            category.map((data)=>{
              return(
                <div className="">
                      <button onClick={() =>handleselectCategory(data)}  type="button" class="btn btn-primary">{data}</button>
                </div>
              
              )
            })
        }
        </div>



       
    </div>
  )
}

export default Categories