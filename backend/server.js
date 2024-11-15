import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Makes it so it automatically parses the incoming JSON data and provides it as a JavaScript object on req.body

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at https://localhost:"+ PORT);
});

