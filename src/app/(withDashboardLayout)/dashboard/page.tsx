import React from "react";

export default function DashboardHomePage() {
  return (
    <div>
      <main className="flex-1 bg-gray-100 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-blue-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-blue-800">
              Manage Products
            </h2>
            <p className="text-blue-700">
              Easily add, edit, or delete products from your inventory. Keep
              your product listings up-to-date and organized for your customers.
            </p>
          </div>
          <div className="bg-green-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-green-800">
              Process Orders
            </h2>
            <p className="text-green-700">
              Efficiently manage and process customer orders. Track order
              status, update shipping details, and ensure timely deliveries.
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-yellow-800">
              Customer Management
            </h2>
            <p className="text-yellow-700">
              Keep track of your customer base and their preferences. Manage
              customer accounts, handle inquiries, and provide personalized
              support.
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-red-800">
              Sales Analytics
            </h2>
            <p className="text-red-700">
              Gain insights into your sales performance and trends. Analyze
              customer behavior, identify opportunities, and optimize your
              marketing strategies.
            </p>
          </div>
          <div className="bg-purple-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-purple-800">
              Marketing Campaigns
            </h2>
            <p className="text-purple-700">
              Plan and execute targeted marketing campaigns. Create promotions,
              discounts, and special offers to attract and retain customers.
            </p>
          </div>
          <div className="bg-indigo-100 p-4 rounded shadow">
            <h2 className="text-xl font-bold mb-2 text-indigo-800">
              Settings & Configuration
            </h2>
            <p className="text-indigo-700">
              Customize your eCommerce platform to suit your business needs.
              Configure payment gateways, shipping options, and website
              settings.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
