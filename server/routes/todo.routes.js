import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJWT.js";
import { createTodo, deleteTodo, editTodo, getTodos } from "../controllers/todo.controllers.js";
const router = Router();

router.post("/createTodo", verifyJwt, createTodo);
router.get("/todos", verifyJwt, getTodos);
router.put("/editTodo/:todoID", verifyJwt, editTodo);
router.delete("/deleteTodo/todoID", verifyJwt, deleteTodo);


export default router;

