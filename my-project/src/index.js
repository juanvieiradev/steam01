import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Store from './pages/Store';
import Login from './pages/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/Comprar",
    element: <Store />,
  },

  {
    path: "/Login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
   
);

