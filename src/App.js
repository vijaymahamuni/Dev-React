import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import RestroMenucard from "./components/RestroMenucard";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";


const Grocery = lazy(() => import("./components/Grocery"));


const AppLayout = () => {
    const [userName, setUserName] = useState();
    useEffect(() => {
        const data = {
            name: "Vijay",
        }
        setUserName(data.name);
    }, [])
    return (
        <UserContext.Provider value={{ loggedInuser: userName }}>
            <div className="App">
                <Header />
                <Outlet />

            </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,

            },
            {
                path: "/about",
                element: <About />,

            },
            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Shimmer />}>
                    <Grocery />
                </Suspense>,

            },
            {
                path: "/restromenu/:resId",
                element: <RestroMenucard />,

            },
        ]


    },

])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);
