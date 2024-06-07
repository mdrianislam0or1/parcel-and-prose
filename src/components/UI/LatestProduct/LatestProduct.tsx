"use client";

import Link from "next/link";
import Loading from "../StyleComponent/Loading";
import ProductUi from "../ProductUi/ProductUi";
import { useGetAllProductQuery } from "@/redux/api/productApi";

export default function LatestProduct() {
  const { data, error, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error loading .
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-6">New Arrivals</h2>
      <p className="text-center mb-10">We have your occasion covered</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((product: any) => (
          <ProductUi key={product.slug} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-primary">DISCOVER MORE</button>
      </div>
    </section>
  );
}
