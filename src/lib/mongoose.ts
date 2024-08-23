import mongoose from "mongoose";

let isConnected = false; // Check to see if mongoose is connected

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI) return console.log("MONGODB_URI Not Found!");
  if (isConnected) return console.log("Already Connected To MongoDB");

  try {
    await mongoose.connect(process.env.MONGODB_URI);

    isConnected = true;
  } catch (error) {
    console.log(error);
  }
};
