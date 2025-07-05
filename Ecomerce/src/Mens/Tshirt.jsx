import React, { useEffect, useState } from 'react'
import Products from '../Component/Products';
import axios from 'axios'

function Tshirt() {
  const [details,setDetails]=useState([]);

  useEffect(()=>{
  const  handleProductDetails= async ()=>{
    try {
      const response= await axios.get('http://localhost:8000/menstshirt/tshirt');
     // console.log(response.data);
      if(response.status==200){
        setDetails(response.data)
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }
  handleProductDetails();
  },[])

  useEffect(()=>{
    //console.log(details);
  },[details]);

  
  
  return (
  <div className="mt-15 ">
    
     <Products details={{details}}/>
   </div>
  )
}

export default Tshirt