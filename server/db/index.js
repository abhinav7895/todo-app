import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js"

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log("MongoDB host : " + connectionInstance.connection.host);
    } catch (error) {
        console.error("MongoDB Error : " + error);
    }
}