import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element:<Home></Home>,
        },
        {
            path: '/Login',
            element:<Login></Login>,
        },
        {
            path: '/Appointment',
            element:<Appointment></Appointment>
        }
      ]
    }
])