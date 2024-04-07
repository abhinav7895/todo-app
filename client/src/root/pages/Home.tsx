import React, { useState } from 'react'
import { todos } from '../../utils/data'
import { Todo } from '../../../types'
import TodosList from '../../components/TodosList';





const Home = () => {
  const [todosData, setTodosData] = useState<Todo[]>(todos);
  const handleTodos = (index: number, subTodoIndex: number) => {
    console.log(index, subTodoIndex);

    setTodosData((prev) => {
      const updateTodos = [...prev];
      updateTodos[index].subTodos[subTodoIndex].isCompleted = !updateTodos[index].subTodos[subTodoIndex].isCompleted;
      return updateTodos;
    })
  }

  return (
    <section className='w-full dark:bg-slate-950 bg-white'>
      <div className='container'>
        <div className='flex flex-wrap p-10 justify-center gap-4 '>
          {
            todosData.map((todo: Todo, todoIndex) => {
              let status = true;
              return (
                <TodosList handleTodos={handleTodos} todo={todo} todoIndex={todoIndex} status={status} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Home