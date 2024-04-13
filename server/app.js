import express from "express"
import helmet from "helmet";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(helmet());
app.use(cors({
    origin : process.env.ORIGIN_URL,
}));

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(express.json({limit : "20kb"}));


export default app;