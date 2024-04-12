import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { GoChevronUp, GoChevronDown } from "react-icons/go";
import Search from './Search';
import { CgProfile } from "react-icons/cg";
import { MdOutlineDarkMode } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const navMenuRef = useRef<HTMLDivElement>(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleShowProfile = () => {
    setShowProfile((prev) => !prev);
  }

  const handleProfileMenuClick = (e: any) => {
    if (profileMenuRef && e.target === profileMenuRef.current) {
      handleShowProfile();
    }
  }
  const handleNavMenuClick = (e: any) => {
    if (navMenuRef && e.target === navMenuRef.current) {
      handleShowMobileNavMenu();
    }
  }
  const handleShowSearchMenu = () => {
    setShowSearch((prev) => !prev);
  }
  const handleShowMobileNavMenu = () => {
    setShowMobileNavMenu((prev) => !prev);
  }

  return (
    <nav className='w-full dark:bg-slate-900 bg-white border-b border-b-gray-400 h-[60px] ' >
      <div className='container h-full my-auto flex items-center justify-between px-5'>
        <Link to={"/"} className='flex items-center justify-center gap-1 group '>
          <img src="./assets/logo.jpeg" className='w-9 rounded-full group-hover:animate-spin' alt="" />
          <h1 className='dark:text-white text-gray-700 text-xl font-light'>TaskWave</h1>
        </Link>
        <div className='items-center gap-6 hidden md:flex'>
          <div>
            <button onClick={handleShowSearchMenu} className=' border border-gray-400 text-gray-600 dark:border-gray-600 px-3 py-[2px] flex items-center gap-1 text-lg group dark:text-gray-300 rounded-xl w-[200px] hover:bg-blue-50 dark:hover:bg-slate-800'><span>Search</span> <IoSearch className='group-hover:translate-x-1 transition-all delay-100 ease-in-out' /> </button>
          </div>
          <div className='relative'>
            <button className='flex items-center gap-1 border p-1 px-2 border-gray-500 rounded-lg group dark:hover:bg-slate-800 hover:bg-blue-50 select-none text-white' onClick={handleShowProfile} >
              <img src="./assets/logo.jpeg" className='w-6 rounded-full ' alt="" />
              <p className='text-gray-900 dark:text-white text-sm'>Abhinav</p>
              {showProfile ? <GoChevronUp className='group-hover:translate-x-[2px] transition-all text-gray-900 dark:text-white delay-100 ease-in-out' /> : <GoChevronDown className='group-hover:translate-x-[2px] transition-all delay-100 text-gray-900 dark:text-white ease-in-out' />}
            </button>

            {
              showProfile &&
              <div ref={profileMenuRef} onClick={handleProfileMenuClick} className='fixed left-0 z-50 right-0 top-0 bottom-0 backdrop-blur-[2px]  flex justify-center items-center'>
                <div className='absolute z-50 min-w-[200px] flex flex-col     '>
                  <button onClick={handleShowProfile} className='text-3xl text-black self-end m-1'><IoIosCloseCircle /></button>
                  <ul className='flex rounded-lg   dark:*:text-white *:text-black items-start flex-col p-3 gap-2 '>
                    <Link className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800  bg-blue-50  hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center' to="/profile"> <CgProfile className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Profile</Link>
                    <button className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800 bg-blue-50 hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center'> <MdOutlineDarkMode className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Theme</button>
                    <button className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800 bg-blue-50 hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center'> <HiOutlineLogout className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Logout
                    </button>
                  </ul>
                </div>
              </div>
            }
          </div>
        </div>
        <button onClick={handleShowMobileNavMenu} className='md:hidden text-white text-2xl'>
          <GiHamburgerMenu />
        </button>
        {
          showMobileNavMenu &&
          <div ref={navMenuRef} onClick={handleNavMenuClick} className='md:hidden fixed left-0 z-50 right-0 top-0 bottom-0 backdrop-blur-[2px]  flex justify-center items-center'>
            <div className='absolute z-50 min-w-[200px] flex flex-col     '>
              <button onClick={handleShowMobileNavMenu} className='text-3xl text-black self-end m-1'><IoIosCloseCircle /></button>
              <ul className='flex rounded-lg   dark:*:text-white *:text-black items-start flex-col p-3 gap-2 '>
                <button className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800  bg-blue-50  hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center' onClick={() => {
                  navigate("/profile")
                  handleShowMobileNavMenu()
                }}> <CgProfile className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Profile</button>
                <button onClick={handleShowSearchMenu} className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800 bg-blue-50 hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center'>  <span>Search</span> <IoSearch className='group-hover:translate-x-1 transition-all delay-100 ease-in-out' /></button>
                <button className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800 bg-blue-50 hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center'> <MdOutlineDarkMode className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Theme</button>
                <button className='flex items-center gap-1 text-xl group dark:bg-slate-950 dark:hover:bg-slate-800 bg-blue-50 hover:bg-blue-100 w-full p-2 rounded-2xl border justify-center'> <HiOutlineLogout className='text-2xl group-hover:-translate-x-[2px] transition-all delay-100 ease-in-out' /> Logout
                </button>
              </ul>
            </div>


          </div>
        }
        {showSearch && <Search handleShowSearchMenu={handleShowSearchMenu} />}

      </div>
    </nav >
  )
}

export default Navbar