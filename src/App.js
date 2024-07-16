import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, RouterProvider, createBrowserRouter } from "react-router-dom";
const AppLayout=()=>{
    return(
        <div className="App">
            <Header/>
            <Body />

        </div>
    )
}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,

    },
    {
        path:"/about",
        element:<About />,

    },
    {
        path:"/contact",
        element:<Contact />,

    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);
