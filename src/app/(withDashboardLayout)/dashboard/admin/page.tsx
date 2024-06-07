import React from "react";

export default function Admin() {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div>
            <button className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          </div>
        </header>

        <div className="bg-white rounded-lg shadow-md p-8">
          <p className="text-lg text-gray-700">
            Welcome to the admin dashboard! Here you can manage products,
            orders, customers, and more.
          </p>
        </div>
      </main>
    </div>
  );
}
