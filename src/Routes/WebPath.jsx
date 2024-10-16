import { createBrowserRouter } from "react-router-dom";
import Parent from "../MainWebRoutes/Parent";
import Home from "../MainWebRoutes/Home";
import Login from "../MainWebRoutes/Login";
import Register from "../MainWebRoutes/Register";
import Dashboard from "../MainWebRoutes/Dashboard";
import SideBar from "../MainWebRoutes/SideBar";

const WebPath = createBrowserRouter([
    {
        path: '/',
        element: <Parent></Parent>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
       
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
    {
        path : '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                index: true,
                element: <SideBar></SideBar>
            }
        ]
    }
])


export default WebPath;