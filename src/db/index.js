import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

// Load environment variables from .env
dotenv.config();

const connectDB = async () => {
  try {
    // Ensure MONGODB_URL is defined and DB_NAME is set in your environment
    const mongoURI = `${process.env.MONGODB_URL}/${DB_NAME}`;
    await mongoose.connect(mongoURI, {

});

    // Correct access to mongoose.connection
    console.log(`\nMongoDB connected!! DB HOST: ${mongoose.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;

