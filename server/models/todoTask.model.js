import mongoose, { Schema } from "mongoose";

const TodoTaskSchema = new Schema({
    taskName: {
        type: String,
        required: true
    },
    todo : {
        type: Schema.ObjectId,
        required: true,
        ref: "todo"
    },
    isCompleted : {
        type : Boolean,
        default : false,
    }
}, { timestamps: true });



const Task = mongoose.model("task", TodoTaskSchema);
export default Task;