import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Todo from "../models/todo.model.js";

const createTodo = asyncHandler(async (req, res) => {
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

    return res.status(201).json(new ApiResponse(201, todo, "Todo created successfully"));
});

const getTodos = asyncHandler(async (req, res) => {
    const user = req.user;
    const todos = await Todo.find({ user: user._id }).select("-__v -user");

    if (!todos) {
        throw new ApiError(500, "Failed to fetch todos");
    }

    return res.status(201).json(new ApiResponse(201, todos, ""));
})

const editTodo = asyncHandler(async (req, res) => {
    const todoId = req.params.todoId;
    const { title } = req.body;

    if (!todoId || !title || title.length < 1) {
        throw new ApiError(400, "Invalid request data");
    }

    const todo = await Todo.findByIdAndUpdate(todoId, { title }, { new: true });

    if (!todo) {
        throw new ApiError(404, "Todo not found");
    }

    return res.status(200).json(new ApiResponse(200, data, "Todo updated successfully"));
});

const deleteTodo = asyncHandler(async (req, res) => {
    const todoId = req.params.todoId;

    if (!todoId) {
        throw new ApiError(400, "Todo ID is required");
    }

    const todo = await Todo.findByIdAndDelete(todoId);

    if (!todo) {
        throw new ApiError(404, "Todo not found");
    }

    return res.status(200).json(new ApiResponse(200, todo, "Todo deleted successfully"));
});

export { createTodo, getTodos, editTodo, deleteTodo };