import { TbLoader3 } from "react-icons/tb";


const Loader = () => {
    return (
        <section className='w-screen h-screen flex justify-center items-center bg-white dark:bg-slate-900'>
            <TbLoader3 className=" animate-spin dark:text-white text-4xl" />
        </section>
    )
}

export default Loader