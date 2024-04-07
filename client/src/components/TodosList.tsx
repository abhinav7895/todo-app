import { SubTodo, Todo } from '../../types';
import { BiSolidEditAlt } from 'react-icons/bi';
import { IoCheckmarkDoneCircle, IoSearch } from 'react-icons/io5';
import { IoIosCreate } from 'react-icons/io';
import { MdOutlinePending } from 'react-icons/md';
import { memo, useRef, useState } from 'react';
import { MdAddTask } from "react-icons/md";
import { RxCross2 } from 'react-icons/rx';
import { PiDotsThreeBold } from "react-icons/pi";


type TodosListType = {
    todo: Todo;
    status: boolean;
    handleTodos: (todoIndex: number, subTodoIndex: number) => void,
    todoIndex: number
};

const TodosList = ({ todo, status, handleTodos, todoIndex }: TodosListType) => {
    const [showTodo, setShowTodo] = useState(false);
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const todoMenuRef = useRef<HTMLDivElement>(null);
    const [isEditable, setIsEditable] = useState(false);
    const handleShowTodo = () => {
        setShowTodo((prev) => !prev);
    }

    const handleShowMoreOptions = () => {
        setShowMoreOptions((prev) => !prev);
    }

    const closeTodoMenu = (e) => {
        console.log(e.target);
        console.log(todoMenuRef.current);

        if (todoMenuRef && e.target === todoMenuRef.current) {
            handleShowTodo();
        }
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
                            todo?.subTodos.map((subTodo: SubTodo, subTodoIndex) => {
                                if (!subTodo.isCompleted && status) {
                                    status = false;
                                }
                                return <li>
                                    <div className="flex items-center mb-4">
                                        <input onClick={() => handleTodos(todoIndex, subTodoIndex)} checked={subTodo.isCompleted} id={todo.todoID + subTodoIndex} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 " />
                                        <label htmlFor={todo.todoID + subTodoIndex} className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">{subTodo.title}</label>
                                    </div>
                                </li>
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
                showTodo && <div onClick={closeTodoMenu} ref={todoMenuRef} className='absolute mx-auto z-50 top-0 left-0 right-0 bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-sm flex justify-center  items-center'>
                    <div className='mx-auto w-full max-w-[500px]  dark:bg-slate-900  bg-white border border-gray-400 rounded-xl   shadow-2xl relative scroll-smooth'>

                        <div className="sticky right-0 top-0 left-0">
                            <button className="absolute top-[10px] dark:text-gray-300 text-gray-600 left-3 text-xl"> <MdAddTask /> </button>
                            <input type="text" placeholder='Add Todo' className='py-2  px-10  outline-none border-b border-b-gray-400 dark:text-gray-200 text-gray-700  placeholder:font-light bg-white dark:bg-slate-700  rounded-tl-xl rounded-tr-xl w-full ' />
                            <button className="absolute top-[7px] dark:text-gray-300 bg-blue-600 rounded-md text-gray-600 right-3 border px-2"> Add </button>
                        </div>
                        <div className='p-4  flex max-h-[600px] overflow-y-scroll flex-col'>
                            <div className='flex items-center gap-2'>
                                {
                                    isEditable ? <input className='dark:text-white  text-3xl outline-none  bg-transparent'
                                        type="text" value={todo.title} /> : <button className='dark:text-white text-3xl' onClick={() => setIsEditable((prev) => !prev)}>{todo.title}</button>
                                }
                            </div>
                            <ul className='mt-5'>

                                {
                                    todo?.subTodos.map((subTodo: SubTodo, subTodoIndex) => {
                                        if (!subTodo.isCompleted && status) {
                                            status = false;
                                        }
                                        return <li>
                                            <div className="flex items-center mb-4 justify-between group border-t dark:border-t-gray-400 pt-3">
                                                <div className='flex items-center gap-1 '>
                                                    <input onClick={() => handleTodos(todoIndex, subTodoIndex)} checked={subTodo.isCompleted} id={todo.todoID + subTodoIndex} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <input type="text" value={subTodo.title} className=" bg-transparent dark:text-white outline-none" />
                                                </div>
                                                <button className='dark:text-white opacity-0 group-hover:opacity-100 '><RxCross2 /></button>
                                            </div>
                                        </li>
                                    })
                                }

                            </ul>

                        </div>
                        <div className='px-4 pb-3 flex justify-between items-end *:text-xs *:text-white  ' >
                            <div className='flex flex-col gap-1 justify-start'>
                                <p>
                                    {
                                        status ? <span className='flex items-center gap-1'> <IoCheckmarkDoneCircle className='text-base text-green-600' /> Completed</span> : <span className='flex items-center gap-1'><MdOutlinePending className='text-base text-red-400' /> Pending</span>
                                    } </p>
                                <p className='flex items-center gap-1'>
                                    <IoIosCreate className='text-base' /> Created at {todo.createdAt}
                                </p>
                            </div>
                            <div className='relative'>
                                <button onClick={handleShowMoreOptions}>
                                    <PiDotsThreeBold className='text-xl dark:text-white' />
                                </button>
                                {
                                    showMoreOptions &&
                                    <div className=' absolute  gap-1 flex flex-col bottom-5 right-1 bg-slate-950 p-2 rounded-lg '>
                                        <button className=' w-full dark:text-gray-300 bg-slate-900 rounded-md text-gray-600  border py-1 px-2'>Delete</button>
                                        <button onClick={handleShowTodo} className=' w-full dark:text-gray-300 bg-slate-900 rounded-md text-gray-600  border py-1 px-2'>Close</button>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
        </>
    )
}

export default TodosList;