import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import LandingPage from "../LandingPage/LandingPage";
import Login from "../LandingPage/Login";
import SignUp from "../LandingPage/SignUp";

import DashBoardLayout from "../Layouts/DashBoardLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
      
        ]
    },

    { path: '/login', element: <Login /> },
    { path: '/signUp', element: <SignUp /> },
    {
      path: '/dashboard',
      element:<DashBoardLayout />,
      children: [
       
      
      
      ]
    }
  
]);

export default router;
