import mongoose from 'mongoose';

let isConnected = false;

const ConnectionDB = async () => {
    if (isConnected) return; 
 
    try {
        const db = await mongoose.connect(process.env.DB_URI);
        isConnected = db.connections[0].readyState;
        console.log("MongoDB Connected...");
    } catch (error) {
        console.log("MongoDB Connection Error: ", error);
        throw error;
    }
};

export default ConnectionDB;