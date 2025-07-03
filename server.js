import express from "express";
import dotenv from "dotenv";

import { swaggerUi, swaggerSpec } from './swagger.js';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoutes.js';
connectDB();
dotenv.config();
const app=express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/api/auth",authRoutes);


app.listen(process.env.PORT,()=>{console.log(`Connection on port ${process.env.PORT}`);});