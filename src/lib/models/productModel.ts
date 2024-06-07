import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  colors?: string[];
  sizes?: string[];
  isFeatured?: boolean;
  banner?: string;
}

const ProductSchema: Schema<IProduct> = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  colors: {
    type: [String],
    required: false,
  },
  sizes: {
    type: [String],
    required: false,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
  banner: {
    type: String,
    required: false,
    trim: true,
  },
});

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;
