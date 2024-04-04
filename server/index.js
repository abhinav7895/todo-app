import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors"
import { config } from "dotenv";
import { connectDB } from "./db";

config();


connectDB()
 .then(() => {
    app.on("error", (error) => {
        console.error("Express error " + error);
        throw new Error(error.message);
    })
    app.listen(process.env.PORT || 8000, () => console.log("Server running at port " + process.env.PORT));
 })
 .catch((error) => {
    console.error("MongoDB error" + error);
    process.exit(1);
 })