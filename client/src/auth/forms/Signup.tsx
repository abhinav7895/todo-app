import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowRoundForward } from "react-icons/io";
import useInputValidation from '../../hooks/useInputValidation';
import useStrongPassword from '../../hooks/useStrongPassword';
import { emailValidation, nameValidation } from '../../utils/validators';
import { FormEvent, useState } from 'react';
import { setUser } from '../../lib/redux/slices/userSlice';
import { useDispatch } from 'react-redux';
import { setUserToLocalStorage } from '../../utils/helper';
import { RxCross2 } from 'react-icons/rx';
import { RxCheck } from "react-icons/rx";


const Signup = () => {
  const name = useInputValidation("", nameValidation);
  const email = useInputValidation("", emailValidation);
  const password = useStrongPassword();
  const [error, setError] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      if ((password.error?.isCharactersError || password.error?.isLetterError || password.error?.isNumAndSpecialCharError) || email.error || name.error ) {
        setLoader(false)
        return;
      };

      setError("")
      const formData = new FormData(e.target as HTMLFormElement);
      const data = { fullName: formData.get("fullName"), email: formData.get("email"), password: formData.get("password") };

      const response = await fetch("http://localhost:8000/api/v1/users/register", {
        method: "POST",
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        response.status < 500 ? setError("User already exist") : setError("Something wrong at our end, Please try again!");
        setLoader(false);
        return;
      };

      const responseData = await response.json();
      console.log(responseData);
      
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
        Get Started
      </h1>
      <form onSubmit={handleSubmit} className=' flex flex-col gap-3 mt-6'>
        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="fullName">Name</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="text" name="fullName" id="fullName" required placeholder='John Modi' value={name.value} onChange={name.changeHandler} />
        </div>

        {name.error && <span className='text-red-500 text-xs'>{name.error}</span>}
        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="email">Email</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="email" name="email" id="email" required placeholder='johnmodi@pjb.con' value={email.value} onChange={email.changeHandler} />
        </div>
        {email.error && <span className='text-red-500 text-xs'>{email.error}</span>}

        <div className='flex flex-col gap-1'>
          <label className='text-gray-700 dark:text-gray-300' htmlFor="password">Password</label>
          <input className='border px-2 py-1 text-lg focus:outline-dotted outline-blue-800 outline-2 border-gray-800 rounded dark:bg-slate-800 dark:border-gray-400 placeholder:text-gray-500 dark:text-gray-200 dark:outline-gray-100' type="password" name="password" id="password" required placeholder='••••••••' value={password.value} onChange={password.changeHandler} />
        </div>
        {password.error ?
          <div className={` text-default mt-2 flex items-center text-sm "}`}>
            <ul className={`list-disc`}>
              <li className={`font-light gap-1 flex items-center ${password.error.isCharactersError ? "text-red-500" : "text-green-500"
                }`} >
                {password.error.isCharactersError ? <RxCross2 className='text-base' /> : <RxCheck className='text-base' />}  Mix of uppercase &amp; lowercase letters
              </li>
              <li className={`font-light gap-1 flex items-center ${password.error.isLetterError ? "text-red-500" : "text-green-500"
                }`} >
                {password.error.isLetterError ? <RxCross2 className='text-base' /> : <RxCheck className='text-base' />} Minimum 8 characters long
              </li>
              <li className={`font-light gap-1 flex items-center ${password.error.isNumAndSpecialCharError ? "text-red-500" : "text-green-500"
                }`} >
                {password.error.isNumAndSpecialCharError ? <RxCross2 className='text-base' /> : <RxCheck className='text-base' />} Contain at least 1 number, and special character
              </li>
            </ul>
          </div>
          :
          <div className={` text-gray-400 mt-2 flex items-center text-sm ml-4`}>
            <ul className={`list-disc`}>

              <li className={`font-light`} >
                Mix of uppercase &amp; lowercase letters
              </li>
              <li className=" gap-1 font-light" >

                Minimum 8 characters long
              </li>
              <li className="  gap-1 font-light" >

                Contain at least 1 number, and special character
              </li>
            </ul>
          </div>
        }

        <button disabled={loader} aria-label='create an account' type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-500">Create an account</button>
        {error && <span className='text-red-500 text-base'>{error}</span>}

        <p className="text-sm font-light flex gap-1 items-center text-gray-500 dark:text-gray-400">
          Already have an account? <Link to="/sign-in" className="group font-medium text-primary-600 hover:underline dark:text-primary-500 flex justify-center items-center hover:text-blue-500">Login here <IoIosArrowRoundForward className='text-xl hidden group-hover:block group-hover:-rotate-45 ' /> </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup