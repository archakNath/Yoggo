import React from "react";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home'
import About from "./components/About";
import Profile from './components/Profile'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><NavBar /><Home /></>,
    },
    {
      path: "/about",
      element: <><NavBar /><About /></>,
    },
    {
      path: "/profile",
      element: <><NavBar /><Profile /></>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
