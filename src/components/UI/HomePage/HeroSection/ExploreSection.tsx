/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const ExploreSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8 text-center">
          There's More to Explore
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative group">
            <img
              src="/img/8.jpg"
              alt="Women"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              WOMEN
            </button>
          </div>
          <div className="relative group">
            <img
              src="/img/9.jpg"
              alt="Men"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              MEN
            </button>
          </div>
          <div className="relative group">
            <img
              src="/img/10.jpg"
              alt="Shoes"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              SHOES
            </button>
          </div>
          <div className="relative group">
            <img
              src="/img/11.jpg"
              alt="Accessories"
              className="w-full h-full object-cover rounded-lg"
            />
            <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              ACCESSORIES
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12">
        <div className="flex justify-center items-center gap-8">
          <img src="/img/8.png" alt="Brand 1" className="h-16" />
          <img src="/img/8.png" alt="Brand 2" className="h-16" />
          <img src="/img/8.png" alt="Brand 3" className="h-16" />
          <img src="/img/8.png" alt="Brand 4" className="h-16" />
          <img src="/img/8.png" alt="Brand 5" className="h-16" />
          <img src="/img/8.png" alt="Brand 6" className="h-16" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 mb-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Top Seller</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <img
              src="/img/12.jpg"
              alt="Product 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="mt-2 text-center">
              Long Sleeve Top Black
              <br />
              <strong>$40.00</strong>
            </p>
          </div>
          <div className="relative">
            <img
              src="/img/13.jpg"
              alt="Product 2"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="mt-2 text-center">
              Zip-through hoodie set
              <br />
              <strong>
                <span className="line-through">$83.00</span> $78.00
              </strong>
            </p>
          </div>
          <div className="relative">
            <img
              src="/img/14.jpg"
              alt="Product 3"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="mt-2 text-center">
              Solid Cargo Pant
              <br />
              <strong>
                <span className="line-through">$90.00</span> $56.00
              </strong>
            </p>
          </div>
          <div className="relative">
            <img
              src="/img/15.jpg"
              alt="Product 4"
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="mt-2 text-center">
              High Heel Black Sandal
              <br />
              <strong>$120.00</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExploreSection;
