import React, { useEffect, useState } from 'react';
import Products from '../Component/Products';
import axios from 'axios';
function Jeans() {
   const [jeansDetails,setJeansDetails]=useState([]);
  useEffect(()=>{
   
    const handleProductDetails=async()=>{
      try {
         const response = await axios.get('http://localhost:8000/mensjeans/jeans');
         console.log(response);
         if(response.status==200){
          setJeansDetails(response.data);
         }
        
      } catch (error) {
        console.log(error);
      }
    }
    handleProductDetails();
  },[])

  // useEffect(()=>{
  //   console.log(jeansDetails);
  // },[jeansDetails])


  return (
    <div className="mt-15 ">
      <h1>helo</h1>

     <Products detail={jeansDetails}/>
   </div>
  );
}

export default Jeans;
