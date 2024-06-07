"use client";
import { useEffect, useId, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import {
  selectCartItems,
  selectCartTotalPrice,
} from "@/redux/slices/cartSlice";
import { useRouter } from "next/navigation";
import { getUserInfo } from "@/services/auth.service";

const OrderPage = () => {
  const router = useRouter();
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Items:", items);
    console.log("Total Price:", totalPrice);
  }, [items, totalPrice]);

  const userInfo = getUserInfo();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const dataToSend = {
        user: userInfo.id,
        orderItems: items.map((item) => ({
          product: item.productId,
          name: item.name,
          image: item.imageUrl,
          price: item.price,
          quantity: item.quantity,
        })),
        itemsPrice: totalPrice,
        taxPrice: 0,
        shippingPrice: 0,
        totalPrice: totalPrice,
        status: "pending",
      };

      console.log("Data to send:", dataToSend);

      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      console.log("Order response:", response);
      if (!response.ok) {
        throw new Error("Failed to create order");
      }
      router.push("/confirmation");
    } catch (error) {
      setError("Failed to create order");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Order Form</h1>
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Cart Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{item.name}</span> - $
              {item.price.toFixed(2)} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-bold mt-4">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
        >
          {loading ? "Placing Order..." : "Place Order"}
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default OrderPage;
