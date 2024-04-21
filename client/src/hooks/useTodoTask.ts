import React, { useEffect, useState } from "react";
import { ITaskData } from "../../types";
import { useSelector } from "react-redux";

const useTodoTask = (todoId: string) => {
  const [todoTask, setTodoTask] = useState<ITaskData[]>([]);
  const { taskData } = useSelector((store: any) => store.tasks);
  useEffect(() => {
    const index = taskData.findIndex(
      (task: { todoId: string; taskData: ITaskData }) => {
        return task.todoId === todoId;
      }
    );
    const data = index !== -1 ? taskData[index] : [];
    setTodoTask(data?.length === 0 ? data : data.taskData);
  }, [taskData]);
  return todoTask;
};

export default useTodoTask;
