import { todosData, subTodosData } from "../utils/data";
import { useState, useEffect } from "react";
import { useDispatch} from "react-redux";
import { SubTodoData, TodoData } from "../../types";
import { setData } from "../lib/redux/slices/todoSlice";
export const useFetchTodoData = () => {
    const [todoData, setTodoData] = useState<TodoData[]>(todosData);
    const [subTodoData, setSubTodoData] = useState<SubTodoData[]>(subTodosData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setData({todoData, subTodoData}));
    }, [])
}

export default useFetchTodoData