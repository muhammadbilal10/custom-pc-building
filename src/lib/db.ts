import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToDB() {
  if (cachedConnection) {
    console.log("Using cached MongoDB connection");
    return cachedConnection;
  }
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_URI as string
    );
    cachedConnection = connection.connection;
    console.log("New MongoDB connection created");
    return cachedConnection;
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    console.error("Error connecting to MongoDB", error);
    return null;
  }
}
