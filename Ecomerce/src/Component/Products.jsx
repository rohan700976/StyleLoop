import React, { useEffect , useState} from 'react'
import FilterSidebar from './FilterSidebar'
import ProductCard from '../Card/ProductCard'
import demo from '../assets/Rohan.jpg'
import axios from 'axios'

const Products = ({details}) => {
  console.log(details);
  


  return (
    <div className="flex gap-4 p-6">
        {/* Sidebar */}
        <div className="w-full max-w-xs hidden sm:block">
  <FilterSidebar />
</div>


        {/* Cards Section */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1 h-415 sm:h-210">
  {details.map((product, index) => (
    <ProductCard key={index} product={product} />
  ))}
</div>
</div>
  )
}

export default Products