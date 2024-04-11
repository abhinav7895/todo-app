import React, { useEffect, useRef, useState } from 'react'
import { Todo, TodoData } from '../../../types'
import TodosList from '../../components/TodosList';
import useFetchTodoData from '../../hooks/useFetchTodoData';
import { useSelector } from 'react-redux';

const Home = () => {
  useFetchTodoData();
  const status = useRef(true);
  
  const {todos} = useSelector((store : any) => store.todos);

  if (!todos) {
    return <h1>Loading...</h1>
  }

  return (
    <section className=''>
      <div className='container'>
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
    </section>
  )
}

export default Home