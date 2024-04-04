import { lazy, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Home = lazy(() => import("./root/pages/Home"));
const NotFound = lazy(() => import("./root/pages/NotFound"));
const AppLayout = lazy(() => import("./root/AppLayout"));
const Profile = lazy(() => import("./root/pages/Profile"));
const AuthLayout = lazy(() => import("./auth/AuthLayout"));
const Signin = lazy(() => import("./auth/forms/Signin"));
const Signup = lazy(() => import("./auth/forms/Signup"));


const appRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/profile",
        element : <Profile />
      },
    ]
  },
  {
    element : <AuthLayout />,
    children : [
      {
        path : "/sign-in",
        element : <Signin />
      },
      {
        path : "/sign-up",
        element : <Signup />
      }
    ]
  }, {
    path : "*", 
    element : <NotFound />
  }
])

const App = () => {
  return (
    <main>
      <Suspense>
        <RouterProvider router={appRouter} />
      </Suspense>
    </main>
  )
}

export default App