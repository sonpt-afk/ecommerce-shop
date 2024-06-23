import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '~/configs/axios';
// import router from '~/router';
import { lazy } from 'react';
import '~/assets/css/index.scss';
import { Provider } from 'react-redux';
import { store } from '~/redux/store';
import DetailItem from "~/pages/DetailItem"
import BaseLayout from "~/components/Layout/BaseLayout"
import Home from "~/pages/Home"
import Category from "~/pages/Category"
import Register from "~/pages/Register"
import Login from "~/pages/Login"

const router = createBrowserRouter([{
  path: '/',
  element: <BaseLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/item-detail', element: <DetailItem /> },
    { path: '/account/register', element: <Register /> },
    { path: '/account/login', element: <Login /> },

    { path: '/danh-muc/:category', element: <Category /> },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
