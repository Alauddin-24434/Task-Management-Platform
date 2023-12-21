import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import LandingPage from "./LandingPage/LandingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<LandingPage/>
            }
        ]
    },
]);
export default router;