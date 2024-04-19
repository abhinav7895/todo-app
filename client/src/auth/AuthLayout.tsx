
import { Navigate, Outlet } from 'react-router-dom'
import useUserAuthenticated from '../hooks/useUserAuthenticated';

const AuthLayout = () => {
  const isAuthenticated = useUserAuthenticated();

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }
  return (
    <section className='dark:bg-slate-900 bg-white px-4'>
      <div className='flex justify-center w-full max-w-4xl  mx-auto h-screen items-center  gap-3'>

        <div className='w-full flex-col justify-center h-full overflow-hidden hidden sm:flex py-10'>
        <div className='flex items-center justify-start gap-3 flex-row'>
            <img src="./assets/logo.jpeg" className='rounded-full w-20 my-5' alt="" />
            <h1 className='text-3xl font-semibold text-gray-600 dark:text-gray-300'>TaskWave</h1>
          </div>
          <h3 className=' dark:text-white flex flex-col'>
            <span className='text-3xl font-light'>Now Plan. 📋</span>
            <span className='text-4xl'>Execute ⚙️</span>
            <span className='font-semibold text-5xl text-green-600'>Save Time 🕰️</span>
          </h3>
          <h4 className='text-2xl mt-5 text-gray-800 dark:text-gray-300'>Manage your daily tasks.</h4>
          <p className='text-gray-500 dark:text-gray-200'>Add your daily or weekly events to the calendar and save your time.</p>
        </div>
        <Outlet />
      </div>
    </section>
  )
}

export default AuthLayout