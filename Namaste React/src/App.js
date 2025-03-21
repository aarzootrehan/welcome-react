import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Body } from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import { About } from './components/About';
import Contact from './components/Contact';
import { Cart } from './components/Cart';
import { Error } from './components/Error';
import { RestaurantMenu } from './components/RestaurantMenu';


const AppLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            }
        ],
        errorElement: <Error />,
    },


]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);