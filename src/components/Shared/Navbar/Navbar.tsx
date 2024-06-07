/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { selectCartItems } from "@/redux/slices/cartSlice";

import { FaOpencart } from "react-icons/fa6";

const Navbar = () => {
  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const items = useAppSelector(selectCartItems);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="hidden md:flex items-center justify-between p-2 border-b border-gray-200 bg-black text-white">
          <div className="text-xs">
            <span>AVAILABLE 24/7 AT +566 4444 9940</span>
          </div>
          <div className="text-xs">
            <span>FREE DELIVERY ON ORDERS OVER $120. DON'T MISS.</span>
          </div>
          <div className="text-xs flex items-center">
            <span className="mr-2">ENGLISH</span>
            <span>USD $</span>
          </div>
        </div>
        <div className="flex items-center justify-between p-4">
          <div className="text-xl font-bold">
            <Link href="/">Parcel-Ecom</Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/" className="hover:text-gray-700 text-sm">
              HOME
            </Link>
            <Link href="/dashboard" className="hover:text-gray-700 text-sm">
              DASHBOARD
            </Link>
            <Link href="/cart" className="hover:text-gray-700 text-sm">
              CART
            </Link>
            <Link href="#" className="hover:text-gray-700 text-sm">
              FEATURES
            </Link>
            <Link href="#" className="hover:text-gray-700 text-sm">
              DEAL ZONE
            </Link>
            <Link href="/login" className="hover:text-gray-700 text-sm">
              LOGIN
            </Link>
            <Link href="/register" className="hover:text-gray-700 text-sm">
              REGISTER
            </Link>
            <Link href="#" className="hover:text-gray-700 text-sm">
              BUY NOW
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-700 text-sm">
              <AuthButton />
            </Link>
            <Link href="#" className="hover:text-gray-700 text-sm">
              ABC
            </Link>
            <Link href="/cart" className="hover:text-gray-700 text-sm">
              {mounted && items.length != 0 && (
                <div className=" badge badge-secondary">
                  {items.reduce((a, c) => a + c.quantity, 0)}
                </div>
              )}
            </Link>
          </div>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16m-8 6h8"
                }
              />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden p-4">
            <Link href="/" className="block py-2 hover:text-gray-700 text-sm">
              HOME
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:text-gray-700 text-sm"
            >
              DASHBOARD
            </Link>
            <Link
              href="/login"
              className="block py-2 hover:text-gray-700 text-sm"
            >
              LOGIN
            </Link>
            <Link
              href="/register"
              className="block py-2 hover:text-gray-700 text-sm"
            >
              REGISTER
            </Link>
            <Link href="#" className="block py-2 hover:text-gray-700 text-sm">
              DEAL ZONE
            </Link>
            <Link href="#" className="block py-2 hover:text-gray-700 text-sm">
              PAGES
            </Link>
            <Link href="#" className="block py-2 hover:text-gray-700 text-sm">
              <AuthButton />
            </Link>
            <Link href="#" className="block py-2 hover:text-gray-700 text-sm">
              {mounted && items.length != 0 && (
                <div className=" ">
                  {items.reduce((a, c) => a + c.quantity, 0)}
                  <FaOpencart className="text-purple-400" />
                </div>
              )}
            </Link>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
