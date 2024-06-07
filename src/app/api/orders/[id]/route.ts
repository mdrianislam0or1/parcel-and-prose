import { dbConnection } from "@/lib/dbConnection";
import Order from "@/lib/models/orderModel";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  await dbConnection();

  try {
    const id = request.url.split("/").pop();
    const deletedOrder = await Order.findByIdAndDelete(id);
    if (!deletedOrder) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: deletedOrder });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}

export async function PUT(request: NextRequest) {
  await dbConnection();

  try {
    const id = request.url.split("/").pop();
    const data = await request.json();
    const updatedOrder = await Order.findByIdAndUpdate(id, data, { new: true });
    if (!updatedOrder) {
      return NextResponse.json(
        { success: false, error: "Order not found" },
        { status: 404 }
      );
    }
    return NextResponse.json({ success: true, data: updatedOrder });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}
