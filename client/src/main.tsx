import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import router from '~/router';
import { lazy } from 'react';

const Home = lazy(() => import("~/pages/Home"));


const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  children: [
    { path: '/', element: <Home /> },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
