import { Outlet } from 'react-router-dom'

const AuthLayout = () => {


  return (
    <div>
        <div>Auth</div>
        <Outlet />
    </div>
  )
}

export default AuthLayout