import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Layout from "./routes/Layout";
import Fake from "./components/Fake";
import NavCom from "./stream/NavCom";
import Features from "./routes/Features";
import Pricing from "./routes/Pricing";
import Signup from "./sections/Signup";
import Login from "./sections/Login";
import { ToastContainer } from "react-toastify";
import Stream from "./stream/Stream";
import Help from "./sections/Help";
import PaymentComponent from "./sections/PaymentComponent";


export const routes= createBrowserRouter([
    {path:'/',
        element:<App/>,
 
    },
    {
        path:'/navcom',
        element:<NavCom/>
    },
    {path:'/features',
        element:<Features/>
    },
    {
        path:'/pricing',
        element:<Pricing/>,
    },
    {
        path:'/register',
        element:<Signup/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/stream',
        element:<Stream/>
    },

    {
        path:':/',
        element: <Pricing/>
    },
    {
        path:'/contact',
        element: <Help/>
    },

    {
        path:'/payment',
        element: <PaymentComponent/>
    }
])

