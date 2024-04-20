import express from "express"
// import helmet from "helmet";
import cors from "cors"
import cookieParser from "cookie-parser";
import UserRouter from "./routes/user.routes.js"
import TodoRouter from "./routes/todo.routes.js"
import TaskRouter from "./routes/task.routes.js"

const app = express();
// app.use(helmet());
app.use(cors({
    origin : "http://localhost:5174",
    credentials : true,
}));

app.use(cookieParser());
app.use(express.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(express.json({limit : "20kb"}));


// routes 
app.use("/api/v1/users", UserRouter);
app.use("/api/v1/todo", TodoRouter);
app.use("/api/v1/task", TaskRouter);


export default app;