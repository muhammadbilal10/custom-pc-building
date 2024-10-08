import mongoose, { Connection } from "mongoose";

declare global {
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  };
}

if (!global.mongoose) {
  global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectToDB() {
  if (global.mongoose.conn) {
    console.log("Using existing MongoDB connection");
    return global.mongoose.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  if (!global.mongoose.promise) {
    console.log("Creating new MongoDB connection");
    global.mongoose.promise = mongoose
      .connect(process.env.MONGODB_URI)
      .then((mongoose) => mongoose.connection);
  }

  try {
    global.mongoose.conn = await global.mongoose.promise;
    return global.mongoose.conn;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    global.mongoose.promise = null;
    throw error;
  }
}
