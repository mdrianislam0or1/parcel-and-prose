/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import Loading from "../../StyleComponent/Loading";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import React from "react";

const HeroSection = () => {
  const { data, error, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <Link href="#item1" className="btn btn-xs">
          1
        </Link>
        <Link href="#item2" className="btn btn-xs">
          2
        </Link>
        <Link href="#item3" className="btn btn-xs">
          3
        </Link>
        <Link href="#item4" className="btn btn-xs">
          4
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
