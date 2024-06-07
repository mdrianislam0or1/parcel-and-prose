import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Product from "@/lib/models/productModel";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const id = request.url.split("/").pop();
    const product = await Product.findById(id);

    if (!product) {
      return NextResponse.json(
        { success: false, message: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
