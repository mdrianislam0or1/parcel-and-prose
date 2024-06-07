import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./userModel";
import { IProduct } from "./productModel";

interface IOrderItem {
  product?: IProduct["_id"];
  name?: string;
  image?: string;
  price?: number;
  quantity?: number;
}

interface IOrder extends Document {
  user?: IUser["_id"];
  orderItems?: IOrderItem[];
  itemsPrice?: number;
  taxPrice?: number;
  shippingPrice?: number;
  totalPrice?: number;
  status?: "pending" | "processing" | "completed" | "cancelled";
  createdAt?: Date;
  updatedAt?: Date;
}

const OrderItemSchema: Schema<IOrderItem> = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, min: 1 },
});

const OrderSchema: Schema<IOrder> = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [OrderItemSchema],
    itemsPrice: {
      type: Number,

      min: 0,
    },
    taxPrice: {
      type: Number,

      min: 0,
    },
    shippingPrice: {
      type: Number,

      min: 0,
    },
    totalPrice: {
      type: Number,

      min: 0,
    },
    status: {
      type: String,
      enum: ["pending", "processing", "completed", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
