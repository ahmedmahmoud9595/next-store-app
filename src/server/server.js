import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productsDB");

app.use("/api/products", productRoutes);

app.listen(5000, () => console.log("Server running on 5000"));
