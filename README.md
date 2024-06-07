This project is an e-commerce application built using Next.js and MongoDB. It allows users to browse products, add them to a shopping cart, and place orders. Additionally, it includes an admin dashboard for order management.
Features Implemented
Frontend Development

    Responsive Design: The home page is fully responsive and works seamlessly on both desktop and mobile devices. CSS media queries were used to ensure responsiveness.
    Product Display: A list of products with images, names, descriptions, and prices is displayed on the home page, mirroring the original design.
    Shopping Cart: Users can add products to a shopping cart, and the cart displays selected products, quantities, and the total price.

Backend Development

    RESTful API: Next.js API routes were used to create endpoints for managing orders. CRUD operations for orders (create, read, update, delete) were implemented.
    Database Integration: MongoDB was used to store order data. Data validation and proper schema design for orders were ensured.
    Order Placement: Functionality for users to place an order was implemented, and order details are saved in the MongoDB database.

Admin Dashboard

    Order Management: A basic admin dashboard was created to view placed orders. It displays a list of orders with details such as order ID, product names, quantities, total price, and order status. Functionality to update and delete orders was also implemented.

Deployment

    Application Deployment: The Next.js application (both front-end and back-end) was deployed to Vercel. The application is publicly accessible at link_to_deployed_site.

How to Run Locally

To run the application locally, follow these steps:

    Clone this repository.
    Install dependencies by running npm install.
    Set up environment variables for MongoDB connection.
    Run the development server with npm run dev.
    Access the application in your browser at https://parcel-and-prose.vercel.app.
