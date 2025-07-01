import React, { useState } from "react";

export default function FilterSidebar() {
  const [sortOpen, setSortOpen] = useState(false);
  const [openSection, setOpenSection] = useState({
    category: false,
    gender: false,
    price: false,
    fabric: false,
    rating: false,
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
    section6: false,
  });

  const toggleSection = (section) => {
    setOpenSection((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const toggleSort = () => setSortOpen(!sortOpen);

  const sections = [
    {
      title: "Category",
      id: "category",
      options: ["Lehnga", "Girl Jeans", "Kurti", "Man T-shirt", "Man Shirt", "Man Jeans"],
    },
    // {
    //   title: "Gender",
    //   id: "gender",
    //   options: ["Men", "Women", "Kids"],
    // },
    {
      title: "Price",
      id: "price",
      options: [
        "Below ₹100",
        "₹100 - ₹200",
        "₹200 - ₹500",
        "₹500 - ₹1000",
        "₹1000 - ₹2000",
        "₹2000 - ₹5000",
      ],
    },
    {
      title: "Fabric",
      id: "fabric",
      options: [
        "Cotton", "Polyester", "Silk", "Linen", "Denim",
        "Wool", "Rayon", "Nylon", "Georgette", "Chiffon",
      ],
    },
    {
      title: "Rating",
      id: "rating",
      options: ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"],
    },
    // {
    //   title: "Material Type",
    //   id: "section1",
    //   options: ["Rubber", "Plastic", "Metal", "Glass", "Wood"],
    // },
    {
      title: "Occasion",
      id: "section2",
      options: ["Casual", "Formal", "Party", "Wedding", "Ethnic"],
    },
    // {
    //   title: "Color",
    //   id: "section3",
    //   options: ["Red", "Blue", "Green", "Black", "White", "Yellow"],
    // },
    {
      title: "Size",
      id: "section4",
      options: ["S", "M", "L", "XL", "XXL"],
    },
    {
      title: "Brand",
      id: "section5",
      options: ["Nike", "Adidas", "Zara", "Puma", "Levi's"],
    },
    {
      title: "Availability",
      id: "section6",
      options: ["In Stock", "Out of Stock"],
    },
  ];

  return (
    <div className="w-full max-w-xs p-4 borderbg-[#F2F2F2] rounded-lg shadow-sm">
      {/* Sort By Dropdown */}
      {/* <div className="relative mb-4">
        <button
          onClick={toggleSort}
          className="w-full flex justify-between items-center border px-4 py-2 rounded text-sm font-medium text-gray-800 bg-white"
        >
          <span>Sort by : <strong>Relevance</strong></span>
          <span className="text-xl">{sortOpen ? "▲" : "▼"}</span>
        </button> */}
        {/* {sortOpen && (
          <div className="absolute z-10 w-full bg-white border rounded shadow mt-1 max-h-60 overflow-y-auto text-sm">
            {[
              "Relevance",
              "New Arrivals",
              "Price (High to Low)",
              "Price (Low to High)",
              "Ratings",
              "Discount",
              "Popularity",
              "Newest First",
              "Customer Reviews",
              "Best Sellers",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 hover:bg-pink-100 cursor-pointer"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* FILTERS Heading */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-gray-600">FILTERS</h2>
        <p className="text-xs text-gray-500">1000+ Products</p>
      </div>
      <hr className="mb-4" />

      {/* Filter Sections */}
      {sections.map((section) => (
        <div key={section.id} className="mb-4">
          <button
            onClick={() => toggleSection(section.id)}
            className="w-full flex justify-between items-center mb-2 font-medium text-gray-800 focus:outline-none"
          >
            <span>{section.title}</span>
            <span className="text-xl">{openSection[section.id] ? "▲" : "▼"}</span>
          </button>

          {openSection[section.id] && (
            <div className="flex flex-col gap-2 text-sm text-gray-700 mb-2">
              {section.options.map((opt) => (
                <label key={opt} className="flex items-center gap-2">
                  <input type="checkbox" className="accent-indigo-600" />
                  {opt}
                </label>
              ))}
            </div>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
}
