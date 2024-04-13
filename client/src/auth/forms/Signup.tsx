import { Link } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import useInputValidation from '../../hooks/useInputValidation';
import useStrongPassword from '../../hooks/useStrongPassword';
import { emailValidation } from '../../utils/validators';

const Signup = () => {
  const name = useInputValidation("");
  const email = useInputValidation("", emailValidation);
  const password = useStrongPassword();
  
  return (
    <div className='w-full max-w-md px-4 py-10   rounded-lg  border border-gray-500'>
      <div className='flex sm:hidden items-center justify-start gap-3 flex-row'>
        <img src="./assets/logo.jpeg" className='rounded-full w-20 my-5' alt="" />
        <h1 className='text-3xl font-semibold text-gray-600 dark:text-gray-300'>TaskWave</h1>
      </div>
      <h1 className="text-xl font-light leading-tight text-gray-900 md:text-2xl  dark:text-white tracking-wide">
        Get Started
      </h1>
      <form action="http://localhost:8000/api/users/register" method='post' className=' flex flex-col gap-3 mt-6'>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="">Name</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="text" name="fullName" id="" placeholder='John Modi' value={name.value} onChange={name.changeHandler}/>
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="">Email</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="email" name="email" id="" placeholder='johnmodi@pjb.con' value={email.value} onChange={email.changeHandler} />
        </div>
        {email.error && <span className='text-red-500 text-xs'>{email.error}</span>}

        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="">Password</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="password" name="password" id="" placeholder='••••••••' value={password.value} onChange={password.changeHandler} />
        </div>
        {password.error && <span className='text-red-500 text-xs'>{password.error}</span>}

        <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
        <p className="text-sm font-light flex gap-1 items-center text-gray-500 dark:text-gray-400">
          Already have an account? <Link to="/sign-in" className="group font-medium text-primary-600 hover:underline dark:text-primary-500 flex justify-center items-center hover:text-blue-500">Login here <IoIosArrowRoundForward className='text-xl hidden group-hover:block group-hover:-rotate-45 ' /> </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup