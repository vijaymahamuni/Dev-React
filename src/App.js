import React, { Suspense, lazy, useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import { BrowserRouter, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import RestroMenucard from "./components/RestroMenucard";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Grocery from "./components/Grocery";
import Header from "./components/Header";

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
        <Provider store={appStore}>
        <UserContext.Provider value={{ loggedInuser: userName }}>
            <div className="App">
                <Header />
                <Outlet />

            </div>
        </UserContext.Provider>
        </Provider>
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
