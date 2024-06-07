/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import {
  selectCartItems,
  selectCartItemsPrice,
  selectCartShippingPrice,
  selectCartTotalPrice,
  removeItemFromCart,
  updateItemQuantity,
} from "@/redux/slices/cartSlice";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const items = useAppSelector(selectCartItems);
  const itemsPrice = useAppSelector(selectCartItemsPrice);
  const shippingPrice = useAppSelector(selectCartShippingPrice);
  const totalPrice = useAppSelector(selectCartTotalPrice);
  const dispatch = useAppDispatch();

  const handleRemoveItem = (productId: string) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    dispatch(updateItemQuantity({ productId, quantity }));
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      <h1 className="py-4 text-3xl font-bold">Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="text-center">
          <h2 className="text-xl mb-4">Your cart is empty</h2>
          <Link href="/" className="btn btn-primary">
            Go to Home
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Image</th>
                    <th className="px-4 py-2">Product</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Quantity</th>
                    <th className="px-4 py-2">Total</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          width={50}
                          height={50}
                          className="rounded-lg"
                        />
                      </td>
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity - 1
                              )
                            }
                            className="btn btn-sm btn-secondary"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(
                                item.productId,
                                item.quantity + 1
                              )
                            }
                            className="btn btn-sm btn-secondary"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() => handleRemoveItem(item.productId)}
                          className="btn btn-sm btn-danger"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="border p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Items Price:</span>
                <span>${itemsPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping Price:</span>
                <span>${shippingPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total Price:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <Link href="/order">
                <button className="btn btn-primary mt-4 w-full">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
