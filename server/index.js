import { config } from "dotenv";
import { connectDB } from "./db/index.js";
import app from "./app.js";
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
