import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        const db_url = process.env.MONGO_URI; // Get the MongoDB URI from the environment variables
        await mongoose.connect(db_url); // No need for options
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit the process if the connection fails
    }
};

export default connectDB;
