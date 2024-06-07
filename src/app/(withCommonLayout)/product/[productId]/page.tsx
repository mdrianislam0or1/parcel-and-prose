/* eslint-disable @next/next/no-async-client-component */
"use client";
import AddToCartButton from "@/components/UI/AddToCart/AddToCart";
import { useGetSingleProductByIdQuery } from "@/redux/api/productApi";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart, calculateCartPrices } from "@/redux/slices/cartSlice";
import Image from "next/image";
import React from "react";

type ParamsType = {
  params: string;
  productId: string;
};

export default function ProductDisplay({ params }: { params: ParamsType }) {
  const { data, isLoading, isError } = useGetSingleProductByIdQuery(
    params.productId
  );
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    if (data) {
      dispatch(
        addItemToCart({
          productId: data._id,
          name: data.name,
          price: data.price,
          imageUrl: data.imageUrl,
          quantity: 1,
        })
      );
      dispatch(calculateCartPrices());
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error fetching product data</div>;
  }
  if (!data) {
    return <div>No product found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col space-y-4">
          <div className="w-full h-96 bg-gray-200 flex justify-center items-center overflow-hidden">
            <Image
              width={500}
              height={500}
              src={data.imageUrl}
              alt={data.name}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-24 bg-gray-200 flex justify-center items-center overflow-hidden"
              >
                <Image
                  width={100}
                  height={100}
                  src={data.imageUrl}
                  alt={`${data.name} ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300 ease-in-out"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{data.name}</h1>
          <p className="text-xl text-gray-700 mb-4">${data.price.toFixed(2)}</p>
          <p className="mb-4">{data.description}</p>
          <div className="mb-4">
            <span className="font-semibold">Brand: </span>
            {data.brand}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Category: </span>
            {data.category}
          </div>
          <div className="mb-4">
            <span className="font-semibold">Rating: </span>
            {data.rating} ({data.numReviews} reviews)
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Colors: </span>
            <div className="flex ml-2">
              {data.colors?.map((color: any, index: any) => (
                <span
                  key={index}
                  className="w-6 h-6 rounded-full border-2 border-gray-200 ml-1"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
          <div className="flex items-center mb-4">
            <span className="font-semibold">Sizes: </span>
            <div className="flex ml-2">
              {data.sizes?.map((size: any, index: any) => (
                <span
                  key={index}
                  className="px-2 py-1 border border-gray-200 rounded ml-1"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center mb-4">
            <AddToCartButton onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
}
