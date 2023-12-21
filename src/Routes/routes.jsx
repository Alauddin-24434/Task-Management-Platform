import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../LandingPage/Login";
import SignUp from "../LandingPage/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<LandingPage/>
            }
            ,
           
            {
                path: '/signUp',
                element:<SignUp/>
            }
            ,
            {
                path: '/login',
                element:<Login/>
            }
            ,
        ]
    },
]);
export default router;