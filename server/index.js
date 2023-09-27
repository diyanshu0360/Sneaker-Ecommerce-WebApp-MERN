import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import userRoute from './routes/user.js';
import productRoute from './routes/product.js';
import cartRoute from './routes/cart.js';
import orderRoute from './routes/order.js';
import stripeRoute from './routes/stripe.js';
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express();
dotenv.config();

// Middlewares 
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Api Routes
app.use("/api/auth", authRoute)
app.use("/api/users ", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

// MongoDB Connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB);
        console.log('connected to MongoDB!')
    } catch (error) {
        throw error;
    }
}

// Backend server Connection
app.listen(5002, ()=>{
    connect()
    console.log('connected to backed server!')
})