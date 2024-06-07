import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import jwt from "jsonwebtoken";
import User from "@/lib/models/userModel";
import { comparePassword } from "@/utils/auth";

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const { email, password } = await request.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "Invalid email or password" },
        { status: 400 }
      );
    }

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      { success: true, data: { user, token } },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error logging in:", error);
    return NextResponse.json(
      { success: false, message: "Error logging in", error },
      { status: 500 }
    );
  }
}
