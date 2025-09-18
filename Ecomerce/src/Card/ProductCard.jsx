import React from 'react'
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';

function ProductCard(props) {

  const handleWishList = async () => {
    try {
      const { Brand_Name, Product_Name, Actual_Price, Discounted_Price, Image1 } = props.product;
      const response = await axios.post(`${import.meta.env.VITE_URL}/wishlist/insert/1`, {
        Brand_Name,
        Product_Name,
        Actual_Price,
        Discounted_Price,
        Product_Img: Image1,
      });

      if (response.status === 200) {
        console.log("Added to Wishlist:", response.data);
      }
    } catch (error) {
      console.error("Error while adding to wishlist:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const { Brand_Name, Product_Name, Actual_Price, Discounted_Price, Image1 } = props.product;
      const response = await axios.post(`${import.meta.env.VITE_URL}/cart/insert/1`, {
        Brand_Name,
        Product_Name,
        Actual_Price,
        Discounted_Price,
        Product_Img: Image1,
      });

      if (response.status === 200) {
        console.log("Added to Cart:", response.data);
      }
    } catch (error) {
      console.error("Error while adding to cart:", error);
    }
  };

  return (
    <div className="w-40 sm:w-68 h-102 sm:h-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white relative group">
      
      {/* Wishlist Icon */}
      <div 
        onClick={handleWishList}
        className="absolute top-2 right-2 bg-white rounded-full p-1 flex items-center justify-center z-10 cursor-pointer">
        <FaHeart
          className="h-5 w-5 text-indigo-600"
          style={{ fill: 'none', stroke: 'currentColor', strokeWidth: '50' }}
        />
      </div>

      {/* Product Image */}
      <div className="w-full h-60 bg-gray-100 overflow-hidden">
        <img
          src={props.product.Image1}
          alt="T-shirt"
          className="w-full h-60 object-cover transform group-hover:scale-105 duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="p-2 space-y-1 pl-4">
        <span className="text-md tracking-wide font-bold text-pink-600">{props.product.Brand_Name}</span>
        <p className="text-xs font-semibold text-green-600">{props.product.Product_Name}</p>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-indigo-600 font-bold text-lg">{props.product.Discounted_Price}</span>
          <span className="line-through text-pink-400 text-sm">{props.product.Actual_Price}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-between px-4 pb-4 gap-2 mb-5">
        <button 
          onClick={handleAddToCart}
          className="w-full sm:flex-1 bg-indigo-600 text-white h-8 sm:h-11 font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-200">
          Add to Cart
        </button>
        <button className="w-full sm:flex-1 border-2 border-indigo-600 h-7 sm:h-11 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200 text-center">
          Buy Now 
        </button>
      </div>

    </div>
  )
}

export default ProductCard;
