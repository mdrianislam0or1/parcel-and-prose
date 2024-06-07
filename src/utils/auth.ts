import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
) => {
  return bcrypt.compare(password, hashedPassword);
};

export const generateToken = (user: {
  id: string;
  email: string;
  name: string;
  role: string;
}) => {
  return jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: "1d" });
};
