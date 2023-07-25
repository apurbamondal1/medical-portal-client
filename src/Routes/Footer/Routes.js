import { createBrowserRouter } from "react-router-dom";
import AddDoctor from "../../AddDoctor/AddDoctor";
import Appointment from "../../Appointment/Appointment";
import Dashboard from "../../Dashboard/Dashboard";
import ManageDoctors from "../../Dashboard/ManageDoctors/ManageDoctors";
import AllUser from "../../Layout/DashboardLayout.js/AllUsers/AllUser";
import DashboardLayout from "../../Layout/DashboardLayout.js/DashboardLayout";
import Main from "../../Layout/Main";
import MyAppointment from "../../Layout/MyAppointment/MyAppointment";
import Login from "../../Login/Login";
import Home from "../../Pages/Home/Home/Home";
import AdminRoute from "../../privateRoute/AdminRoute/AdminRoute";
import PrivateRoute from "../../privateRoute/PrivateRoute";
import SignUp from "../../SignUp/SignUp";
import Payment from "../../Dashboard/Payment/Payment";
import DisplayError from "../../Shared/DisplayError/DisplayError";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <DisplayError></DisplayError>,
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
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement: <DisplayError></DisplayError>,
      children: [
        {
          path: '/dashboard',
          element : <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/alluser',
          element : <AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path: '/dashboard/adddoctor',
          element : <AdminRoute><AddDoctor></AddDoctor></AdminRoute>
        },
        {
          path: '/dashboard/managedoctors',
          element : <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute>
        },
        {
          path: '/dashboard/dashboard',
          element : <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/payment/:id',
          element : <PrivateRoute><Payment></Payment></PrivateRoute>,
          loader : ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
        }
       
      ]
  }
])