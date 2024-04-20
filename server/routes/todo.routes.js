import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import Todo from "../models/todo.model.js";
import ApiResponse from "../utils/ApiResponse.js";

const router = Router();


router.post("/createTodo", asyncHandler(async (req, res) => {
    const { title } = req.body;
    if (!title) {
        throw new ApiError(400, "Title is required");
    }

    const user = req.user;
    const todo = await Todo.create({ title, user: user._id });

    console.log("Created Todo: " + todo);

    if (!todo) {
        throw new ApiError(500, "Failed to create todo");
    }

    return res.status(201).json({ data: todo, message: "Todo created successfully" });
}));



export default router;

/**
 * User can do several things : 
 * + user can create the todo
 * + get the todo which the user created
 * + user can edit the todo title
 * + user can delete the todo
 */