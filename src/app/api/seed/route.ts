import { dbConnection } from "@/lib/dbConnection";
import Product from "@/lib/models/productModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const seedProducts = [
      {
        name: "Product 1",
        description: "Description for product 1",
        price: 100,
        imageUrl: "/img/2.jpg",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        sizes: ["S", "M", "L"],
        isFeatured: true,
        banner: "/img/1.jpg",
      },
      {
        name: "Product 2",
        description: "Description for product 2",
        price: 200,
        imageUrl: "/img/4.jpg",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        sizes: ["S", "M", "L"],
        isFeatured: true,
        banner: "/img/4.jpg",
      },
      {
        name: "Product 3",
        description: "Description for product 2",
        price: 200,
        imageUrl: "/img/6.jpg",
        colors: ["#000000", "#FFFFFF", "#FF0000"],
        sizes: ["S", "M", "L"],
        isFeatured: true,
        banner: "/img/2.jpg",
      },
    ];

    await Product.deleteMany();
    await Product.insertMany(seedProducts);
    return NextResponse.json({
      success: true,
      message: "Database seeded successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error seeding database.", error },
      { status: 500 }
    );
  }
}
