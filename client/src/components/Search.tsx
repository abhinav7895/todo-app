import { useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Search = ({ handleShowSearchMenu }: { handleShowSearchMenu: () => void }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const closeSearchMenu = (e: MouseEvent) => {
    if (e.target === menuRef.current) {
      handleShowSearchMenu();
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div onClick={closeSearchMenu} ref={menuRef} className='absolute mx-auto z-50 top-0 left-0 right-0 bottom-0 w-full bg-black bg-opacity-40 backdrop-blur-sm flex justify-center  items-center'>
      <div className='mx-auto w-full max-w-[500px]  max-h-[400px] dark:bg-slate-900 bg-white border border-gray-400 rounded-xl overflow-hidden overflow-y-scroll shadow-2xl relative scroll-smooth'>

        <div className="sticky right-0 top-0 left-0">
          <button className="absolute top-[10px] dark:text-gray-300 text-gray-600 left-3 text-xl"> <IoSearch /> </button>
          <input ref={inputRef} type="text" placeholder='Search Todos' className='py-2  px-10  outline-none border-b border-b-gray-400 dark:text-gray-200 text-gray-700  placeholder:font-light bg-white dark:bg-slate-700 w-full ' />
          <button onClick={handleShowSearchMenu} className="absolute top-[10px] dark:text-gray-300 text-gray-600 right-3 text-xl"> <RxCross2 /> </button>
        </div>

        <div className="p-2 mt-1 flex flex-col gap-2">
          {
            Array(20).fill("").map((_, index) => (
              <div key={index} className="border hover:bg-blue-50 dark:hover:bg-slate-800 px-3 py-2  rounded-md">
                <p className="flex  items-center justify-between">
                  <span className="text-green-600 font-semibold">Groceries</span>
                  <span className="dark:text-gray-300 text-gray-600 text-sm">27 Oct 2021</span>
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Search