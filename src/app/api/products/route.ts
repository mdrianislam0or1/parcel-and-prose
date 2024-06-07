import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import Product from "@/lib/models/productModel";

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const products = await Product.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const data = await request.json();
    const product = await Product.create(data);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
