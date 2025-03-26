import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Body } from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router";
import { About } from "./components/About";
import { Cart } from "./components/Cart";
import { Error } from "./components/Error";
import { RestaurantMenu } from "./components/RestaurantMenu";
import { UserClass } from "./components/UserClass";
import { UserContext } from "./context/UserContext";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    // Make api call to fetch the authenticated user
    const data = { username: "AArzooo SP" };
    setUserName(data.username);
  }, []);

  return (
    <div className="flex flex-col h-[100vh]">
      {/**Providing the redux store to our application */}
      <Provider store={appStore}>
        {/**Doing this we are setting the value of User Context and throughout the app, this value will be used whenever we print loggedInUser */}
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
          <UserContext.Provider value={{ loggedInUser: "2nd dummy user" }}>
            <Header></Header>
          </UserContext.Provider>
          <Outlet />
          <Footer></Footer>
        </UserContext.Provider>
      </Provider>
    </div>
  );
};

const Contact = lazy(() => import("./components/Contact"));

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
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loadingg</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
