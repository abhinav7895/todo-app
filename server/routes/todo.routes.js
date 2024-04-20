import { Router } from "express";
import { verifyJwt } from "../middlewares/verifyJWT.js";
import { createTodo, deleteTodo, editTodo, getTodos } from "../controllers/todo.controllers.js";
const router = Router();

router.post("/createTodo", verifyJwt, createTodo);
router.get("/todos", verifyJwt, getTodos);
router.patch("/editTodo", verifyJwt, editTodo);
router.delete("/deleteTodo", verifyJwt, deleteTodo);


export default router;

