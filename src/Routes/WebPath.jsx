import { createBrowserRouter } from "react-router-dom";
import Parent from "../MainWebRoutes/Parent";
import Home from "../MainWebRoutes/Home";
import Login from "../MainWebRoutes/Login";
import Register from "../MainWebRoutes/Register";
import Dashboard from "../MainWebRoutes/DashBoard/Dashboard";
import CommonPage from "../MainWebRoutes/DashBoard/CommonPage";
import BookPacel from "../MainWebRoutes/DashBoard/User/BookPacel";
import MyPercels from "../MainWebRoutes/DashBoard/User/MyPercels";
import MyProfile from "../MainWebRoutes/DashBoard/User/MyProfile";
import DeliveryList from "../MainWebRoutes/DashBoard/DeliveryMan/DeliveryList";
import MyReview from "../MainWebRoutes/DashBoard/DeliveryMan/MyReview";
import AdminStat from "../MainWebRoutes/DashBoard/Admin/AdminStat";
import AllPercel from "../MainWebRoutes/DashBoard/Admin/AllPercel";
import AllDeliveryMan from "../MainWebRoutes/DashBoard/Admin/AllDeliveryMan";
import AllUser from "../MainWebRoutes/DashBoard/Admin/AllUser";


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
                element: <CommonPage></CommonPage>
            },
            {
                path: 'book-parcel',
                element: <BookPacel></BookPacel>
            },
            {
                path: 'my-parcels',
                element: <MyPercels></MyPercels>
            },
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },
            {
                path: 'delivery-list',
                element: <DeliveryList></DeliveryList>
            },
            {
                path: 'review',
                element: <MyReview></MyReview>
            },
            {
                path: 'stat',
                element: <AdminStat></AdminStat>
            },
            {
                path: 'parcels',
                element: <AllPercel></AllPercel>
            },
            {
                path: 'delivery-man',
                element: <AllDeliveryMan></AllDeliveryMan>
            },
            {
                path: 'user',
                element: <AllUser></AllUser>
            }
        ]
    }
])


export default WebPath;