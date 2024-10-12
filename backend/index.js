// const express = require('express')// method-1
import express from "express"; // method-2
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./socket/socket.js";

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 5000;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000', // Change this for production
    credentials: true,
};
app.use(cors(corsOptions)); 

// routes
app.use("/api/v1/user", userRoute); 
app.use("/api/v1/message", messageRoute);

// Connect to MongoDB
const db_url = process.env.MONGODB_URI; // Load from environment variables
connectDB(db_url); // Ensure this function connects to your MongoDB

// Start server after connecting to DB
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
