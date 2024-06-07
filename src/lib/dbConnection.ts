import mongoose from "mongoose";

export const dbConnection = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Database connection is already established.");
    return mongoose.connection.asPromise();
  }

  try {
    const connection = await mongoose.connect(process.env.MONGODB_URL!);
    console.log("Successfully connected to the database.");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
