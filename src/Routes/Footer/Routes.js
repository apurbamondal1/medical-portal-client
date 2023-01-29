import { createBrowserRouter } from "react-router-dom";
import Appointment from "../../Appointment/Appointment";
import Dashboard from "../../Dashboard/Dashboard";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home";
import PrivateRoute from "../../privateRoute/PrivateRoute";
import SignUp from "../../SignUp/SignUp";


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
        },
        {
            path: '/signUP',
            element:<SignUp></SignUp>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  }
])