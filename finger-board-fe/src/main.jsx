import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Products from './components/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/login",
    element: <Login/>

  },
  {
    path:"/register",
    element: <Register/>

  },

  {
    path:"/produkt",
    element: <Products/>
  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
