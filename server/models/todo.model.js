import mongoose, { Schema } from "mongoose";

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: Schema.ObjectId,
        required: true,
        ref: "user"
    },
}, { timestamps: true });

const Todo = mongoose.model("todo", TodoSchema);
export default Todo;