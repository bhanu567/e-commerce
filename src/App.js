import React, { useState } from "react";
import Store from "./components/Store/Store";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import {
  RouterProvider,
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyNavbar />,
    children: [
      {
        path: "/",
        element: <Store />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);

//AN ALTERNATIVE WAY TO CREATE A ROUTE
// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path="\" elements={<Store />}></Route>
//     <Route path="\about" elements={<About />}></Route>
//     <Route path="\home" elements={<Home />}></Route>
//     <Route path="\cart" elements={<Cart />}></Route>
//   </Route>
// );

// const router = createBrowserRouter(routeDefinition);

const App = () => { 
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
