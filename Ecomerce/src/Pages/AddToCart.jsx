import React from 'react'
import demo from '../assets/SaleImg/sale.png';
import { useNavigate } from 'react-router-dom';

function AddToCart() {
    const navigate = useNavigate();
    const handleContinueShopping = () => {
        navigate('/'); // Navigate to home page
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
            {/* Subheading */}

            {/* Image */}
            <img
                src={demo}
                alt="Empty Wishlist"
                className="w-36 h-36 sm:w-48 sm:h-48 mb-6"
            />
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">YOUR Cart IS EMPTY</h2>
            <p className="text-gray-500 text-center max-w-md mb-6">

                Your cart is feeling lonely! Add something to make it happy.
            </p>


            {/* Button */}
            <button
                onClick={handleContinueShopping}
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-md hover:bg-blue-50 transition">

                Add Items To Cart
            </button>
        </div>
    );
}

export default AddToCart