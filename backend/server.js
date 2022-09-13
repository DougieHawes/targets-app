import colors from "colors";
import dotenv from "dotenv";
import express from "express";

import connectDB from "./config/db.js";

import targetRoutes from "./routes/targetRoutes.js";

import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/targets", targetRoutes);

app.use(errorHandler);

app.listen(port, () => console.log(`express app running on port:${port}`));
