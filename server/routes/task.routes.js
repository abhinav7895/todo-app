import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJWT.js";
import { createTask, deleteTask, getAllTask, updateTask } from "../controllers/task.controllers.js";

const router = Router();

router.get("/getAllTask/:todoId", verifyJwt, getAllTask)
router.post("/createTask/:todoId", verifyJwt, createTask);
router.put("/updateTask/:taskId", verifyJwt, updateTask);
router.delete("/deleteTask/:taskId", verifyJwt, deleteTask);

export default router;