import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import Rooms from "../components/Test/Rooms/Rooms";
import RoomDetails from "../pages/RoomDetails/RoomDetails";

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
                path:'/roomsDetails',
                element:<RoomDetails></RoomDetails>,
            },
            {
                path:'/contact',
                element:<Contact></Contact>,
            },
    
        ]
    }
])
export default routes;