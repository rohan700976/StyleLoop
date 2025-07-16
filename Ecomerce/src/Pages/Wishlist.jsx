import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import demo from '../assets/SaleImg/sale.png';
import axios from 'axios';

const Wishlist = () => {
  const [wishListDetails, setWishListDetails] = useState([]);
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    navigate('/');
  };

  useEffect(() => {
    const handleWishlist = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_URL}/wishlist/get/2`);
        if (response.status === 200) {
          setWishListDetails(response.data); // Make sure backend returns array
        }
      } catch (error) {
        console.error('Error fetching wishlist:', error);
      }
    };

    handleWishlist(); // ✅ CALL THE FUNCTION
  }, []);

  return (
    <>
      {/* Show wishlist items if any */}
      {wishListDetails.length > 0 ? (
        <div className="flex flex-wrap gap-4 justify-center p-4">
          {wishListDetails.map((item, index) => (
            <div
              key={index}
              className="w-40 sm:w-68 h-102 sm:h-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white relative group"
            >
              <div className="w-full h-60 bg-gray-100 overflow-hidden">
                <img
                  src={item.Product_Img}
                  alt={item.Product_Name}
                  className="w-full h-60 object-cover transform group-hover:scale-105 duration-300"
                />
              </div>

              <div className="p-2 space-y-1 pl-4">
                <span className="text-md tracking-wide font-bold text-pink-600">
                  {item.Brand_Name}
                </span>
                <p className="text-xs font-semibold text-green-600">{item.Product_Name}</p>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-bold text-lg">
                    {item.Discounted_Price}
                  </span>
                  <span className="line-through text-pink-400 text-sm">
                    {item.Actual_Price}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between px-4 pb-4 gap-2 mb-5">
                <button className="w-full sm:flex-1 bg-indigo-600 text-white h-8 sm:h-11 font-medium rounded-lg hover:bg-indigo-500 transition-colors duration-200">
                  Add to Cart
                </button>
                <button className="w-full sm:flex-1 border-2 border-indigo-600 h-7 sm:h-11 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors duration-200 text-center">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show Empty Wishlist
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">YOUR WISHLIST IS EMPTY</h2>
          <p className="text-gray-500 text-center max-w-md mb-6">
            Add items that you like to your wishlist. Review them anytime and easily move them to the bag.
          </p>
          <img
            src={demo}
            alt="Empty Wishlist"
            className="w-36 h-36 sm:w-48 sm:h-48 mb-6"
          />
          <button
            onClick={handleContinueShopping}
            className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition"
          >
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </>
  );
};

export default Wishlist;
