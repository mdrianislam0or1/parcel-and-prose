/* eslint-disable @next/next/no-img-element */
"use client";

import Loading from "@/components/UI/StyleComponent/Loading";
import React, { useEffect, useState } from "react";

interface OrderItem {
  product: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  _id: string;
}

interface Order {
  _id: string;
  user: string;
  orderItems: OrderItem[];
  itemsPrice: number;
  taxPrice: number;
  shippingPrice: number;
  totalPrice: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export default function OrderManagement() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "https://parcel-and-prose.vercel.app/api/orders"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data.data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleStatusToggle = async (orderId: string) => {
    try {
      const response = await fetch(
        `https://parcel-and-prose.vercel.app/api/orders/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "completed" }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update status");
      }
      const updatedOrder = await response.json();
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order._id === updatedOrder.data._id ? updatedOrder.data : order
        )
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    try {
      const response = await fetch(
        `https://parcel-and-prose.vercel.app/api/orders/${orderId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete order");
      }
      setOrders((prevOrders) =>
        prevOrders.filter((order) => order._id !== orderId)
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error fetching orders. Please try again later.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto p-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Items</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user}</td>
              <td>
                {order.orderItems.map((item) => (
                  <div key={item._id} className="flex items-center space-x-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10"
                    />
                    <div>
                      <div>{item.name}</div>
                      <div className="text-sm text-gray-500">
                        Quantity: {item.quantity} | Price: ${item.price}
                      </div>
                    </div>
                  </div>
                ))}
              </td>
              <td>${order.totalPrice}</td>
              <td>{order.status}</td>
              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
              <td>{new Date(order.updatedAt).toLocaleDateString()}</td>
              <td>
                {order.status === "completed" ? (
                  <button
                    onClick={() => handleStatusToggle(order._id)}
                    className="bg-orange-500 text-white px-4 py-2 rounded-md"
                  >
                    Make it Completed
                  </button>
                ) : (
                  <button
                    onClick={() => handleStatusToggle(order._id)}
                    className="bg-pink-500 text-white px-4 py-2 rounded-md"
                  >
                    Mark as Pending
                  </button>
                )}
                <button
                  onClick={() => handleDeleteOrder(order._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
