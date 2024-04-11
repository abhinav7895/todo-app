import { SubTodoData, TodoData } from '../../types';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { IoIosCreate } from 'react-icons/io';
import { MdOutlinePending } from 'react-icons/md';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusOfSubtodo } from '../lib/redux/slices/todoSlice';
import TodoMenu from './TodoMenu';

type TodosListType = {
    todo: TodoData;
    status: boolean;
};

const TodosList = ({ todo, status }: TodosListType) => {
    const dispatch = useDispatch();
    const { subTodos } = useSelector((store: any) => store.todos);
    const [showTodo, setShowTodo] = useState(false);
    const handleShowTodo = () => {
        setShowTodo((prev) => !prev);
    }
    const handleSubtodo = (id: string) => {
        dispatch(setStatusOfSubtodo(id));
    }

    return (
        <>
            <div onClick={handleShowTodo} className={`bg-slate-700 p-3 w-80 rounded-lg border border-gray-400 hover:scale-[101%] transition-transform delay-100 ease-in-out cursor-pointer hover:border-blue-400 group flex flex-col justify-between `}>
                <div>
                    <div className='flex justify-between items-center dark:text-white text-3xl '>
                        <h2 className='dark:text-white text-3xl'>{todo.title}</h2>
                        <button><BiSolidEditAlt className='hidden group-hover:block' /></button>
                    </div>
                    <ul className='mt-2'>

                        {
                            subTodos.map((subTodo: SubTodoData) => {
                                if (status && !subTodo.isCompleted) {
                                    status = false;
                                }
                                if (subTodo.todo === todo._id) {
                                    return <li key={subTodo._id + todo._id}>
                                        <div className="flex items-center mb-4">
                                            <input onChange={() => { handleSubtodo(subTodo._id) }} checked={subTodo.isCompleted} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{subTodo.todoName}</label>
                                        </div>
                                    </li>
                                }
                            })
                        }

                    </ul>
                </div>
                <div className='mt-8 opacity-0 flex justify-between *:text-xs *:text-white  group-hover:opacity-100' >
                    <p>

                        {
                            status ? <span className='flex items-center gap-1'> <IoCheckmarkDoneCircle className='text-base text-green-600' /> Completed</span> : <span className='flex items-center gap-1'><MdOutlinePending className='text-base text-red-400' /> Pending</span>
                        } </p>
                    <p className='flex items-center gap-1'>
                        <IoIosCreate className='text-base' /> Created at {todo.createdAt}
                    </p>
                </div>
            </div>

            {
                showTodo && <TodoMenu id={todo._id} closeMenu={handleShowTodo} />
            }
        </>
    )
}

export default TodosList;