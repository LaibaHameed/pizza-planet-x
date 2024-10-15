import mongoose from "mongoose";
require('dotenv').config();

const mongoURI = process.env.DB_URL;
let isConnected = false; // Track connection status

async function connect() {
    if (isConnected) {
        console.log("Already connected");
        return;
    }

    if (mongoose.connections.length > 0) {
        isConnected = mongoose.connections[0].readyState;
        if (isConnected === 1) {
            console.log("Using existing connection");
            return;
        }
        await mongoose.disconnect();
    }

    try {
        const db = await mongoose.connect(mongoURI, {
            connectTimeoutMS: 60000,  // 60 seconds
            socketTimeoutMS: 60000,   // 60 seconds
        });

        isConnected = db.connections[0].readyState;
        console.log("New connection established");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error('Failed to connect to database');
    }
}

async function disconnect() {
    if (isConnected) {
        if (process.env.NODE_ENV === "production") {
            await mongoose.disconnect();
            isConnected = false;
        } else {
            console.log("Not disconnected (in development mode)");
        }
    }
}

const db = { connect, disconnect };
export default db;
