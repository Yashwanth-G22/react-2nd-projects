import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Mobile from "../Pages/Mobile";
import SignUp from "../Pages/SignUp";
import LogIn from "../Pages/LogIn";

const RoutesApplication = () => {

    let Routes=useRoutes([
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    path:'mobile',
                    element:<Mobile/>
                }
            ]
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'signup',
            element:<SignUp/>
        },
        {
            path:'login',
            element:<LogIn/>
        }
    ])

    return Routes
}

export default RoutesApplication