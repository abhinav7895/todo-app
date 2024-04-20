import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import Task from "../models/todoTask.model.js";


const createTask = asyncHandler(async (req, res) => {
    const todoId = req.params.todoId
    const { taskName } = req.body;

    if (!taskName || !todoId || taskName.length < 1) {
        throw new ApiError(400, "Invalid request data");
    }

    const task = await Task.create({
        taskName, todo : todoId,
    });

    console.log("Created Task: " + task);

    if (!task) {
        throw new ApiError(500, "Failed to create task");
    }

    return res.status(201).json(new ApiResponse(201, task, "Task created successfully"));
});

const getAllTask = asyncHandler(async (req, res) => {
    const todoId = req.params.todoId;

    if (!todoId) {
        throw new ApiError(400, "Todo ID is required");
    }

    const allTasks = await Task.find({ todo: todoId });

    if (!allTasks || allTasks.length === 0) {
        throw new ApiError(404, "No tasks found for the given todo");
    }

    return res.status(200).json(new ApiResponse(200, allTasks, "Tasks retrieved successfully"));
});


const updateTask = asyncHandler(async (req, res) => {
    const taskId = req.params.taskId;
    const { taskName, isCompleted } = req.body;

    if (!taskId) {
        throw new ApiError(400, "Invalid request data");
    }

    if (!taskName && isCompleted === undefined) {
        throw new ApiError(400, "No fields to update");
    }

    const updatedTask = {};

    if (taskName) {
        updatedTask.taskName = taskName;
    }

    if (isCompleted !== undefined) {
        updatedTask.isCompleted = isCompleted;
    }

    const task = await Task.findByIdAndUpdate(taskId, updatedTask, { new: true });

    if (!task) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(new ApiResponse(200, task, "Task updated successfully"));
});

const deleteTask = asyncHandler(async (req, res) => {
    const taskId = req.params.taskId;

    if (!taskId) {
        throw new ApiError(400, "Task ID is required");
    }

    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
        throw new ApiError(404, "Task not found");
    }

    return res.status(200).json(new ApiResponse(200, deletedTask, "Task deleted successfully"));
});



export { createTask, getAllTask, updateTask, deleteTask };