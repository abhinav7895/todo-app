import { useEffect, useState } from 'react'
import { ITaskData } from '../../types'
import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { setTask } from '../lib/redux/slices/taskSlice';
import useTodoTask from '../hooks/useTodoTask';

const TodoTask = ({ todoId }: { todoId: string }) => {
  const todoTask = useTodoTask(todoId);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:8000/api/v1/task/getAllTask/${todoId}`, {
        credentials: "include"
      });
      const responseData = await response.json();
      const data = responseData.data;
      dispatch(setTask({todoId : todoId, taskData : data}));
    }
    fetchTask()
  }, []);

  return (
    todoTask?.map((task: ITaskData) =>
      <li key={v4()}>
        <div className="flex items-center mb-4">
          <input checked={task.isCompleted} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
          <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{task.taskName}</label>
        </div>
      </li>)
  )
}

export default TodoTask