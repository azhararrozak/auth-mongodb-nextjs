import mongoose from "mongoose";

let isConnected = false;

const connectDB = async () => {
    if (isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    if(!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined in environment variables");
    }

    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {
            bufferCommands: false,
        });
        return connect;
    }catch (error) {
        console.log("MongoDB connection error:", error);
        throw error;
    }
}

mongoose.connection.on("connected", () => {
    isConnected = true;
    console.log("MongoDB connected successfully");
});

mongoose.connection.on("disconnected", () => {
    isConnected = false;
    console.log("MongoDB disconnected");
});

mongoose.connection.on("error", (error) => {
    isConnected = false;
    console.error("MongoDB connection error:", error);
});

export default connectDB;