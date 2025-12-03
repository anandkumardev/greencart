import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./configs/db.js";
import "dotenv/config";
import userRouter from "./routes/userRoute.js";
import sellerRouter from "./routes/sellerRoute.js";

const app = express();
const port = process.env.PORT || 4000;

await connectDB();

// Allow multiple origins
const allowedOrigins = ["http://localhost:5173"];

//Middlewares configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: allowedOrigins, credentials: true }));

// User API Route
app.use("/api/user", userRouter);

// Seller API Route
app.use("api/seller", sellerRouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
