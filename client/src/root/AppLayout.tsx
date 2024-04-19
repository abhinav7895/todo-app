import { Navigate, Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import useUserAuthenticated from "../hooks/useUserAuthenticated"

const AppLayout = () => {
    const isAuthenticated = useUserAuthenticated();

    if(!isAuthenticated) {
        return <Navigate to={"/sign-in"} />
    }

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default AppLayout