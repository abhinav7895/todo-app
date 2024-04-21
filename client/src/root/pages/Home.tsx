import { useEffect,  } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { setTodo } from '../../lib/redux/slices/todoSlice';
import Todos from '../../components/Todos';


const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/todo/todos", {
          credentials: "include",
        });

        if (!response.ok) {
         // handle this
         return;
        }
        
        const responseData = await response.json();
        console.log(responseData.data);
        
        dispatch(setTodo(responseData.data));
      } catch (error) {
        console.log(error);

      }
    }
    fetchTodos();
  }, [])


  return (
    <section className=''>
      <div className='container'>
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='w-fit'>
            <h1 className='text-center italic text-2xl md:text-5xl  font-semibold mt-5 mb-3'>Do one thing every day that scares you. </h1>
            <p className=' text-center md:text-right  font-light md:text-xl'>- Eleanor Roosevelt</p>
          </div>
          <button className='mt-6 border flex items-center group gap-1 border-gray-500 text-xl p-2 bg-blue-500 rounded-xl font-semibold text-white shadow-md '>Add Todo <IoIosAddCircle className='text-3xl group-hover:scale-110 transition-transform delay-100 ease-in-out ' /></button>
        </div>
        <div className='flex flex-wrap p-10 justify-center gap-4 '>
          <Todos />
        </div>
      </div>

      {/* {
        showAddTodo &&
        <TodoMenu id={todoId.current} closeMenu={() => setShowAddTodo(!showAddTodo)} />
      } */}
    </section>
  )
}

export default Home