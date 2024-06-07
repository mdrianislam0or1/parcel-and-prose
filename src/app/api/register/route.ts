import { NextRequest, NextResponse } from "next/server";
import { dbConnection } from "@/lib/dbConnection";
import jwt from "jsonwebtoken";
import User from "@/lib/models/userModel";
import bcrypt from "bcryptjs";

export async function POST(request: NextRequest) {
  await dbConnection();

  try {
    const { name, email, password, role, img } = await request.json();

    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json(
        { success: false, message: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
      img,
    });

    const token = jwt.sign(
      { id: user._id, email: user.email, name: user.name, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: "1h" }
    );

    return NextResponse.json(
      { success: true, data: { user, token } },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error registering user", error },
      { status: 500 }
    );
  }
}
