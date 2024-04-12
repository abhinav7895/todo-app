import React, { useEffect, useRef, useState } from 'react'
import { Todo, TodoData } from '../../../types'
import TodosList from '../../components/TodosList';
import useFetchTodoData from '../../hooks/useFetchTodoData';
import { useSelector } from 'react-redux';
import { IoIosAddCircle } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addNewTodo, addTodo } from '../../lib/redux/slices/todoSlice';
import TodoMenu from '../../components/TodoMenu';


const Home = () => {
  useFetchTodoData();
  const status = useRef(true);
  const todoId = useRef("");
  const [showAddTodo, setShowAddTodo] = useState(false);
  const dispatch = useDispatch();
  
  const {todos} = useSelector((store : any) => store.todos);

  const handleAddTodo = () => {
    const id = uuidv4();
    dispatch(addNewTodo(id));
    todoId.current = id;
    setShowAddTodo(true)
  }

  if (!todos) {
    return <h1>Loading...</h1>
  }

  return (
    <section className=''>
      <div className='container'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-fit'>
            <h1 className='text-center italic text-2xl md:text-5xl  font-semibold mt-5 mb-3'>Do one thing every day that scares you. </h1>
            <p className=' text-center md:text-right  font-light md:text-xl'>- Eleanor Roosevelt</p>
          </div>
          <button onClick={handleAddTodo} className='mt-6 border flex items-center group gap-1 border-gray-500 text-xl p-2 bg-blue-500 rounded-xl font-semibold text-white shadow-md '>Add Todo <IoIosAddCircle className='text-3xl group-hover:scale-110 transition-transform delay-100 ease-in-out ' /></button>
        </div>
        <div className='flex flex-wrap p-10 justify-center gap-4 '>
          {
            todos.map((todo: TodoData) => {
              return (
                <TodosList key={todo._id} todo={todo} status={status.current} />
              )
            })
          }
        </div>
      </div>

      {
        showAddTodo &&
        <TodoMenu id={todoId.current} closeMenu={() => setShowAddTodo(!showAddTodo)} />
      }
    </section>
  )
}

export default Home