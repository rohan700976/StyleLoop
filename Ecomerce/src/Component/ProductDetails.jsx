import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaRegHeart } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProductDetail(props) {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) return <div className="text-center py-10 text-red-500">Product data not found.</div>;

  const imageList = [
    product.image,
    product.image2 || product.image,
    product.image3 || product.image,
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Image Slider */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Slider {...sliderSettings} className="w-full max-w-md">
            {imageList.map((img, index) => (
              <div key={index} className="flex justify-center items-center">
                <img
                  src={img}
                  alt={`Product ${index + 1}`}
                  className="rounded-lg max-h-[500px] object-contain mx-auto"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right Detail Section */}
        <div className="w-full md:w-1/2 bg-white p-6 rounded-md shadow-md">
          <h2 className="text-3xl font-bold text-indigo-700 mb-2">Stated Fit Jeans for Men</h2>
          <p className="text-gray-700 font-medium mb-2">Brand: StyleLoop</p>

          <div className="flex items-center text-yellow-500 text-sm mb-2">
            ★★★★★ <span className="text-gray-600 ml-2">(649 Ratings)</span>
          </div>

          {/* Price Section */}
          <div className="mb-3 text-sm">
            <div className="grid grid-cols-[auto_auto] gap-x-2 gap-y-1">
              <span className="text-gray-800 font-medium">M.R.P.</span>
              <span className="line-through text-gray-500">₹{props.MRP}</span>

              <span className="text-gray-800 font-medium">Price</span>
              <span className="text-black font-semibold">₹{props.price}</span>

              <span className="text-gray-800 font-medium">You Save</span>
              <span className="text-pink-600 font-medium">
                ₹{props.MRP - props.price} (
                {Math.round(((props.MRP - props.price) / props.MRP) * 100)}%)
              </span>
            </div>
            <p className="text-xs text-gray-600 mt-1">M.R.P. inclusive of all taxes</p>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h2 className="text-md font-semibold mb-1 text-red-700">Select Size:</h2>
            <div className="flex gap-2 flex-wrap">
              {['S', 'M', 'L', 'XL', '2XL', '3XL'].map((size) => (
                <button
                  key={size}
                  className="px-4 py-1 border border-gray-400 rounded text-gray-600 hover:text-indigo-600 hover:border-indigo-600 bg-white"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-lime-500 hover:bg-lime-600 text-white px-8 py-2 text-lg rounded shadow-md font-semibold">
              Add to Cart
            </button>
            <button className="w-12 h-12 bg-lime-500 hover:bg-lime-600 border border-gray-400 rounded-lg shadow-md flex items-center justify-center">
              <FaRegHeart className="text-white text-xl" />
            </button>
          </div>

          {/* Delivery Info */}
          <div className="mt-2">
            <p className="text-gray-600 font-bold">Delivery & Return</p>
            <p className="text-gray-500">Expected delivery in 3 to 6 days</p>
            <p className="text-gray-600 mt-0.5">7 days no hassle return</p>
          </div>

          {/* Description */}
          <div className="text-sm text-gray-800 mt-6">
            <h2 className="font-semibold mb-3 text-black">Description</h2>
            <ul className="space-y-1">
              <li><span className="font-medium">Occasion</span> : festive wear</li>
              <li><span className="font-medium">Kurta length (cms)</span> : 116.8</li>
              <li><span className="font-medium">Net Quantity</span> : 1</li>
              <li><span className="font-medium">Color</span> : blue</li>
              <li><span className="font-medium">Work</span> : sequin</li>
              <li><span className="font-medium">Bottom Material</span> : cotton</li>
              <li><span className="font-medium">Type</span> : Lehnga</li>
              <li><span className="font-medium">Neck Type</span> : round</li>
              <li><span className="font-medium">Lining Material</span> : none</li>
              <li><span className="font-medium">Material</span> : Jarjat</li>
              <li><span className="font-medium">Sleeve</span> : three quarter</li>
              <li><span className="font-medium">Country of Origin</span> : india</li>
              <li><span className="font-medium">Prints and Pattern</span> : ethnic motifs</li>
              <li><span className="font-medium">Product Code</span> : 18181308</li>
            </ul>

            <h3 className="font-semibold mt-4 mb-2 text-black">Product Details</h3>
            <ul className="list-disc ml-5 text-gray-700 text-sm space-y-1">
              <li>
                Are you ready to adorn some alluring lehengas this season? Well, gear up to look gracious as LimeRoad brings to you the most magnificent collection of lehengas from WARTHY ENT and in pink colours.
                Find these lovely lehengas in flared types and for different occasions.
                Don this outstanding collection from LimeRoad in georgette fabrics and that too in embroidery designs.
                Lay your hands on semi-stitched garment types and get them in FREE SIZE sizes.
                Shop this excellent collection of lehengas priced at ₹2399 and benefit 52% discount.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
