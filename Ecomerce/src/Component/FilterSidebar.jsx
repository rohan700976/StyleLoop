import React, { useState } from "react";
import Products from "./Products";
import axios from 'axios';
import { Sidebar } from "lucide-react";

export default function FilterSidebar({tableName,details, setDetails}) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openFabric, setOpenFabric] = useState(false);
  const [openRating, setOpenRating] = useState(false);
  const [openOccasion, setOpenOccasion] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openBrand, setOpenBrand] = useState(false);
  const [openAvailability, setOpenAvailability] = useState(false);
  const [fabric, setFabric] = useState('');
  const [size,setSize]=useState('')
  const [brand,setBrand]=useState('');
  const [price,setPrice]=useState('')
  const [rating,setRating]=useState('');
  const [occasion,setOccasion]=useState('');

  const [priceToogle, setPriceToogle] = useState(false);
  const [brandToogle, setBrandToogle] = useState(false);
  const [fabricToogle, setFabricToogle] = useState(false);
  const [occasionToogle, setOccasionToogle] = useState(false);
  const [ratingToogle, setRatingToogle] = useState(false);
  const [sizeToogle, setSizeToogle] = useState(false);
  const [temp, setTemp] = useState([]);


  // Fabric Sidebar
  const handleFabric = async (event) => {
  const selectedFabric = event.target.value;
  setFabric(selectedFabric);

  try {
    if (priceToogle || occasionToogle || brandToogle || ratingToogle || sizeToogle) {
      if (Array.isArray(details)) {
        const filtered = details.filter(item => item.Fabric === selectedFabric);
        console.log(filtered);
        setDetails(filtered);
      } else {
        console.warn("Details is not an array:", details);
      }
    }
    else{const resFabric = await axios.get(`http://localhost:8000/filter/${tableName}/fabric/${selectedFabric}`);
    console.log(selectedFabric);
    console.log(resFabric.data); // Use `.data` to get actual response
    setDetails(resFabric.data);
    setFabricToogle(!fabricToogle);}
  } catch (err) {
    console.error("Fabric filter error:", err);
  }
};


// size Sidebar
const handleSize=async (event)=>{
  const selectedSize=event.target.value;
  // setSize(selectedSize);
  console.log("hello");

  try {
    if (priceToogle || occasionToogle || brandToogle || ratingToogle || fabricToogle) {
      if (Array.isArray(details)) {
        const filtered = details.filter(item => item.Size === selectedSize);
        console.log(filtered);
        setDetails(filtered);
      } else {
        console.warn("Details is not an array:", details);
      }
    }
   else {const resSize=await axios.get(`http://localhost:8000/filter/${tableName}/size/${selectedSize}`);
    console.log(selectedSize);
    console.log(resSize.data);
    setDetails(resSize.data);
    setSizeToogle(!sizeToogle);}
    
  } catch (error) {
    console.log("size error", error);
  }
}
  const handleBrand=async(event)=>{
    const selectedBrandValue=event.target.value;
    // setBrand(selectedBrandValue);
    try {
      const resBrand= await axios.get(`http://localhost:8000/filter/${tableName}/brand/${selectedBrandValue}`)
      console.log(selectedBrandValue);
      console.log(resBrand)
      setDetails(resBrand.data);
    } catch (error) {
       console.log("brand error",error)      
    }

  }

  //  price sidebar
  const handlePrice=async (event)=>{
  const selectedPrice=event.target.value;
  const parts=selectedPrice.split('-');
  
  const price1 = parseInt(parts[0].substring(1));
  const price2 = parseInt(parts[1].trim().substring(1));
 
  console.log(price1);
  console.log(price2);
  // setPrice(selectedPrice);

  try {
    if(fabricToogle || occasionToogle || ratingToogle || brandToogle || sizeToogle){
      for(let i = 0 ; i < details.length() ; i++){
        if(details[i].Discounted_Price >=parseInt(price1) && details[i].Discounted_Price <= parseInt(price2)){
          setTemp(details[i]);
        }
      }
      setDetails(temp);
      
    }
   else{ const resPrice=await axios.get(`http://localhost:8000/filter/${tableName}/price/${parseInt(price1)}/${parseInt(price2)}`);
    // console.log(selectedPrice);
    // console.log(parts[0]);
    // console.log(parts[1].trim());
    console.log(resPrice.data);
    setDetails(resPrice.data);
    setPriceToogle(!priceToogle);}
    
  } catch (error) {
    console.log("size error", error);
  }
}

  // rating sidebar
const handleRating=async (event)=>{
  const selectedRating=event.target.value;
  // setRating(selectedRating);

  try {
  if (priceToogle || occasionToogle || brandToogle || fabricToogle || sizeToogle) {
    console.log("hello")
      if (Array.isArray(details)) {
        console.log("by");
        const filtered = details.filter(item => item.Rating === selectedRating);
        console.log(filtered);
        setDetails(filtered);
      } else {
        console.warn("Details is not an array:", details);
      }
    }

    else{  const resRating=await axios.get(`http://localhost:8000/filter/${tableName}/rating/${selectedRating}`);
      console.log(selectedRating);
      console.log(resRating.data);
      setDetails(resRating.data);
      setRatingToogle(!ratingToogle);
    }  
  } catch (error) {
    console.log("size error", error);
  }
}
     // occasion sidebar
const handleOccasion=async (event)=>{
  const selectedOccasion=event.target.value;
  setOccasion(selectedOccasion);

  try {
    const resOccasion=await axios.get(`http://localhost:8000/filter/${tableName}/occasion/${selectedOccasion}`);
    console.log(selectedOccasion);
    console.log(resOccasion.data);
    setDetails(resOccasion.data);
    
  } catch (error) {
    console.log("size error", error);
  }
}


const handleCategory=async(event)=>{
  const selectedCategory=event.target.value;
  console.log(selectedCategory);
  try {
    const resCategory=await axios.get(`http://localhost:8000/women/${selectedCategory}`)
    // console.log(resLehnga);
     console.log(resCategory.data);
     setDetails(resCategory.data);

    
  } catch (error) {
   console.log("error in category", error);    
  }

}




  


  return (
    <div className="w-full max-w-xs p-4 borderbg-[#F2F2F2] rounded-lg shadow-sm">
      {/* <Products classname='display-none' fabric /> */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-600">FILTERS</h2>
        <p className="text-xs text-gray-500">1000+ Products</p>
      </div>
      <hr className="mb-4" />

      {/* Category */}
      <div className="mb-4">
        <button onClick={() => setOpenCategory(!openCategory)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Category</span>
          <span className="text-xl">{openCategory ? "▲" : "▼"}</span>
        </button>
        {openCategory && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["womanlehenga", "womanjeans", "womenkurtas", "menstshirt", "menshirt", "mensjeans"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleCategory} 
                 value={opt}
                className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Price */}
      <div className="mb-4">
        <button onClick={() => setOpenPrice(!openPrice)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Price</span>
          <span className="text-xl">{openPrice ? "▲" : "▼"}</span>
        </button>
        {openPrice && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Below ₹100", "₹100 - ₹200", "₹200 - ₹500", "₹500 - ₹1000", "₹1000 - ₹2000", "₹2000 - ₹5000"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onClick={handlePrice}
                   value={opt}
                className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Fabric */}
      <div className="mb-4">
        <button onClick={() => setOpenFabric(!openFabric)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Fabric</span>
          <span className="text-xl">{openFabric ? "▲" : "▼"}</span>
        </button>
        {openFabric && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Cotton Blend", "Polyester", "Silk", "Linen", "Denim", "Wool", "Rayon", "Nylon", "Georgette", "Chiffon"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input
  type="checkbox"
  value={opt}
  onChange={handleFabric}
  className="accent-indigo-600"
/>

                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Rating */}
      <div className="mb-4">
        <button onClick={() => setOpenRating(!openRating)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Rating</span>
          <span className="text-xl">{openRating ? "▲" : "▼"}</span>
        </button>
        {openRating && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onClick={handleRating} 
                   value={opt}
                className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Occasion */}
      <div className="mb-4">
        <button onClick={() => setOpenOccasion(!openOccasion)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Occasion</span>
          <span className="text-xl">{openOccasion ? "▲" : "▼"}</span>
        </button>
        {openOccasion && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Casual", "Formal", "Party", "Wedding", "Ethnic"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleOccasion} 
                   value={opt}
                className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Size */}
      <div className="mb-4">
        <button onClick={() => setOpenSize(!openSize)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Size</span>
          <span className="text-xl">{openSize ? "▲" : "▼"}</span>
        </button>
        {openSize && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["Free Size","S", "M", "L", "XL", "XXL"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleSize}
                   value={opt}
                className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Brand */}
      <div className="mb-4">
        <button onClick={() => setOpenBrand(!openBrand)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Brand</span>
          <span className="text-xl">{openBrand ? "▲" : "▼"}</span>
        </button>
        {openBrand && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            {["BURDY","SAVON","Nike", "Adidas", "Zara", "Puma", "Levi's"].map((opt) => (
              <label key={opt} className="flex items-center gap-2">
                <input type="checkbox" onChange={handleBrand}
                 value={opt}
                 className="accent-indigo-600" />
                {opt}
              </label>
            ))}
          </div>
        )}
        <hr />
      </div>

      {/* Availability */}
      <div className="mb-4">
        <button onClick={() => setOpenAvailability(!openAvailability)} className="w-full flex justify-between items-center mb-2 font-medium text-gray-800">
          <span>Availability</span>
          <span className="text-xl">{openAvailability ? "▲" : "▼"}</span>
        </button>
        {openAvailability && (
          <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
            <label className="flex items-center gap-2">
              <input type="checkbox" onClick={handleFilter} className="accent-indigo-600" /> In Stock
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" onClick={handleFilter} className="accent-indigo-600" /> Out of Stock
            </label>
          </div>
        )}
        <hr />
      </div>
    </div>
  );
}
