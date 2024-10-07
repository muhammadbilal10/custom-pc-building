import mongoose, { Model } from "mongoose";
import { Document } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  description: string;
  price: string;
  vendor?: string;
  sold_out?: string;
  image_url: string;
  category: string;
  source?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new mongoose.Schema<ProductDocument>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  vendor: {
    type: String,
    required: false,
  },
  sold_out: {
    type: String,
    required: false,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

ProductSchema.set("toJSON", {
  transform: (doc, ret) => {
    ret._id = ret._id.toString();
    return ret;
  },
});

const Product =
  mongoose.models.Product ||
  mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
