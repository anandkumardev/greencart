import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRouter from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();
await connectCloudinary();

// Allow multiple origins
const allowedOrigins = ["http://localhost:5173"];

// Middlewares configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// User API Route
app.use("/api/user", userRouter);

// Seller API Route
app.use("/api/seller", sellerRouter);

// Product API Route
app.use("/api/product", productRouter);

// Cart API Route
app.use("/api/cart", cartRouter);

// Address API Route
app.use("/api/address", addressRouter);

// Order API Route
app.use("/api/order", orderRouter);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});