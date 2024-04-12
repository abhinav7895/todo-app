import { ChangeEvent, MouseEventHandler, useRef, useState } from 'react'
import { IoIosCreate } from 'react-icons/io';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { MdAddTask, MdOutlinePending } from 'react-icons/md';
import { PiDotsThreeBold } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';
import { SubTodoData } from '../../types';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TodosState, addTodo, deleteSubtodo, deleteTodo, editTitle, setStatusOfSubtodo } from '../lib/redux/slices/todoSlice';
import { MdDeleteOutline } from "react-icons/md";
import { RiCloseCircleFill } from "react-icons/ri";


interface TodoMenuProps {
    closeMenu: () => void,
    id: string
}

const TodoMenu = ({ closeMenu, id }: TodoMenuProps) => {
    const todoMenuRef = useRef<HTMLDivElement>(null);
    const todoText = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const status = useRef(true);
    const [showMoreOptions, setShowMoreOptions] = useState(false);
    const { todos } = useSelector((store: { todos: TodosState }) => store.todos);
    const { subTodos } = useSelector((store: { todos: TodosState }) => store.todos);
    const todo = todos.find((todo) => todo._id === id);


    const handleShowMoreOptions = () => {
        setShowMoreOptions((prev) => !prev);
    }

    const closeTodoMenu = (e: any) => {
        if (todoMenuRef && e.target === todoMenuRef.current) {
            closeMenu();
        }
    }

    const handleTodoTitle = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        dispatch(editTitle({ id: id, title: value }));
    }

    const handleAddTodo = () => {
        if (todoText && todoText.current && todoText.current.value === "") return;

        if (todoText && todoText.current) {
            dispatch(addTodo({ id: id, todoName: todoText.current.value }));
            todoText.current.value = "";
            todoText.current.focus();
        }
    }

    const handleSubtodo = (id: string) => {
        dispatch(setStatusOfSubtodo(id));
    }

    const handleDeleteTodo = (id: string) => {
        dispatch(deleteTodo(id));
    }

    const handleDeleteSubTodo = (todoId: string, subTodoId: string) => {
        dispatch(deleteSubtodo({ todoId: todoId, subTodoId: subTodoId }))
    }


    return (
        <div onClick={(e) => closeTodoMenu(e)} ref={todoMenuRef} className='absolute mx-auto z-50 top-0 left-0 right-0 bottom-0 w-full h-screen bg-black bg-opacity-40 backdrop-blur-sm flex justify-center  items-center'>
            <div className='mx-auto w-full  max-h-[400px] max-w-[500px]  dark:bg-slate-900  bg-white border border-gray-400 rounded-xl grid grid-rows-3   shadow-2xl relative scroll-smooth' style={{ gridTemplateRows: '1fr 3fr 1fr' }}>
                <div className="">
                    <button className="absolute top-[10px] dark:text-gray-300 text-gray-600 left-3 text-xl"> <MdAddTask /> </button>
                    <input ref={todoText} type="text" placeholder='Add Todo' className='py-2  px-10  outline-none border-b border-b-gray-400 dark:text-gray-200 text-gray-700  placeholder:font-light bg-white dark:bg-slate-700  rounded-tl-xl rounded-tr-xl w-full ' />
                    <button onClick={handleAddTodo} className="absolute top-[7px] dark:text-gray-300 bg-blue-600 rounded-md text-gray-600 right-3 border px-2"> Add </button>
                </div>
                <div className='px-4 rounded-2xl  flex max-h-[600px] overflow-y-scroll flex-col'>
                    <div className='flex items-center gap-2'>
                        {
                            <input placeholder='Todo title😊' className='dark:text-white w-full  text-3xl outline-none  bg-transparent' type="text" onChange={handleTodoTitle} value={todo?.title} />
                        }
                    </div>
                    <ul className='mt-5'>

                        {
                            subTodos.map((subTodo: SubTodoData) => {
                                if (!subTodo.isCompleted && status.current) {
                                    status.current = false;
                                }
                                if (subTodo.todo === id) {
                                    return <li key={uuidv4()}>
                                        <div className="flex items-center mb-4 justify-between group border-t dark:border-t-gray-400 pt-3">
                                            <div className='flex items-center gap-1'>
                                                <input onChange={() => handleSubtodo(subTodo._id)} checked={subTodo.isCompleted} id={subTodo._id} type="checkbox" value="" className=" w-full h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                <input readOnly type="text" value={subTodo.todoName} className=" bg-transparent dark:text-white outline-none" />
                                            </div>
                                            <button onClick={() => handleDeleteSubTodo(id, subTodo._id)} className='dark:text-white opacity-0 group-hover:opacity-100 '><RxCross2 /></button>
                                        </div>
                                    </li>
                                }
                            })
                        }

                    </ul>

                </div>
                <div className='px-4 pb-3 flex justify-between items-end *:text-xs *:text-white  ' >
                    <div className='flex flex-col gap-1 justify-start'>
                        <p>
                            {
                                status.current ? <span className='flex items-center gap-1'> <IoCheckmarkDoneCircle className='text-base text-green-600' /> Completed</span> : <span className='flex items-center gap-1'><MdOutlinePending className='text-base text-red-400' /> Pending</span>
                            } </p>
                        <p className='flex items-center gap-1'>
                            <IoIosCreate className='text-base' /> Created at {todo?.createdAt}
                        </p>
                    </div>
                    <div className='relative'>
                        <div className='   gap-2 flex *:text-xl p-2 rounded-lg '>
                            <button onClick={() => handleDeleteTodo(id)} className=' dark:text-gray-300text-gray-600px'><MdDeleteOutline /></button>
                            <button onClick={closeMenu} className='dark:text-gray-300text-gray-600px'><RiCloseCircleFill />
</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoMenu

