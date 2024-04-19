import { Link, Navigate, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import useInputValidation from '../../hooks/useInputValidation';
import useStrongPassword from '../../hooks/useStrongPassword';
import { FormEvent, useState } from 'react';
import { emailValidation } from '../../utils/validators';
import { TbLoader } from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { UserState, setUser } from '../../lib/redux/slices/userSlice';
import { setUserToLocalStorage } from '../../utils/helper';
import { RxCross2 } from "react-icons/rx";



const Signin = () => {
  const email = useInputValidation("", emailValidation);
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const password = useStrongPassword();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoader(true)
      // if (email.error || password.error) {
      //   setLoader(false)
      //   return;
      // };

      const formData = new FormData(e.target as HTMLFormElement);
      const data = { email: formData.get("email"), password: formData.get("password") };
      const response = await fetch("http://localhost:8000/api/v1/users/signin", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        response.status < 500 ? setError("Incorrect email or password!") : setError("Something wrong at our end, Please try again!");
        setLoader(false);
        return;
      };
      const responseData = await response.json();
      dispatch(setUser(responseData.data));
      setUserToLocalStorage(responseData.data);
      setLoader(false);
      navigate("/");
    } catch (error) {
      console.log(error);

    }
  }


  return (
    <div className='w-full max-w-md px-4 py-10   rounded-lg  border border-gray-500'>
      <div className='flex sm:hidden items-center justify-start gap-3 flex-row'>
        <img src="./assets/logo.jpeg" className='rounded-full w-20 my-5' alt="" />
        <h1 className='text-3xl font-semibold text-gray-600 dark:text-gray-300'>TaskWave</h1>
      </div>
      <h1 className="text-xl font-light leading-tight text-gray-900 md:text-2xl  dark:text-white tracking-wide">
        Sign in to your account
      </h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-3 mt-6'>

        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="">Email</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="email" name="email" id="email" placeholder='johnmodi@pjb.con' value={email.value} onChange={email.changeHandler} />
        </div>
        {email.error && <span className='text-red-500 text-xs'>{email.error}</span>}
        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="">Password</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="password" name="password" id="password" placeholder='••••••••' value={password.value} onChange={password.changeHandler} />
        </div>
        {password.error &&  <div className="text-gray text-default mt-2 flex items-center text-sm">
          <ul className="ml-2">
            <li className="text-red-500 flex items-center gap-1 font-light" >
            <RxCross2 />
              Mix of uppercase &amp; lowercase letters
            </li>
            <li className="text-red-500 flex items-center gap-1 font-light" >
            <RxCross2 />
              Minimum 8 characters long
            </li>
            <li className="text-red-500 flex items-center gap-1 font-light" >
            <RxCross2 />
              Contain at least 1 number, and special character
            </li>
          </ul>
        </div>}

        <button disabled={loader} type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 flex justify-center items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-400">
          {loader ? <TbLoader className='text-xl animate-spin' /> : "Sign in"}
        </button>

        {error && <span className='text-red-500 text-xs'>{error}</span>}
        <p className="text-sm font-light flex gap-1 items-center text-gray-500 dark:text-gray-400">
          Not registered?<Link to="/sign-up" className="group font-medium text-primary-600 hover:underline dark:text-primary-500 flex justify-center items-center hover:text-blue-500">Create an account<IoIosArrowRoundForward className='text-xl hidden group-hover:block group-hover:-rotate-45 ' /> </Link>
        </p>
      </form>
    </div>
  )
}

export default Signin