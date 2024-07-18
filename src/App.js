import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, RouterProvider, createBrowserRouter,Outlet } from "react-router-dom";
import RestroMenucard from "./components/RestroMenucard";
const AppLayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Outlet />

        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
        {
            path:"/",
            element:<Body />,
    
        },
        {
            path:"/about",
            element:<About />,
    
        },
        {
            path:"/contact",
            element:<Contact />,
    
        },
        {
            path:"/restromenu/:resId",
            element:<RestroMenucard />,
    
        },
    ]
    

    },
   
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);
