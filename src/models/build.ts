import mongoose, { Schema, Document } from "mongoose";

export interface IBuild extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  components: Record<string, any>;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}

const BuildSchema: Schema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    components: {
      type: Map,
      of: new Schema(
        {
          _id: String,
          name: String,
          description: String,
          price: String,
          vendor: String,
          sold_out: String,
          image_url: String,
          category: String,
          source: String,
        },
        { _id: false }
      ),
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Build =
  mongoose.models.Build || mongoose.model<IBuild>("Build", BuildSchema);

export default Build;
