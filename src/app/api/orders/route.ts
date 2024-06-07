import { dbConnection } from "@/lib/dbConnection";
import Order from "@/lib/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const data = await request.json();
    const order = await Order.create(data);
    return NextResponse.json({ success: true, data: order }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function GET(request: NextRequest) {
  await dbConnection();

  try {
    const products = await Order.find({});
    return NextResponse.json({ success: true, data: products });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
