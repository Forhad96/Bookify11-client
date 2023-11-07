import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
// import Rooms from "../components/Test/Rooms/Rooms";
import Rooms from '../pages/Rooms/Rooms'
import RoomDetails from "../pages/RoomDetails/RoomDetails";
import Bookings from "../pages/Bookings/Bookings";
import Login from "../pages/Login/Login";
import Registration from "../pages/Register/Registration";
import RoomReviews from "../pages/RoomReviews/RoomReviews";

const routes = createBrowserRouter ([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/rooms",
                element:<Rooms></Rooms>,
            },
            {
                path:'/roomsDetails/:id',
                element:<RoomDetails></RoomDetails>,
            },
            {
                path:'/roomReviews',
                element:<RoomReviews></RoomReviews>
            },
            {
                path:'/bookings',
                element:<Bookings></Bookings>
            },

            {
                path:'/contact',
                element:<Contact></Contact>,
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            }
    
        ]
    }
])
export default routes;