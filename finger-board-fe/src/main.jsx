import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Register from "./components/Register";
import Products from "./components/Products";
import UserStates from "./context/UserStates";

import Team from "./components/Team";
import ProductForm from "./components/ProductForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/produkt",
    element: <Products />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/addproducts",
    element: <ProductForm />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserStates>
      <RouterProvider router={router} />
    </UserStates>
  </React.StrictMode>
);
