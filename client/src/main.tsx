import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider, useParams
} from "react-router-dom";
import '~/configs/axios';
// import router from '~/router';
import { lazy } from 'react';
import '~/assets/css/index.scss';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import DetailItem from "~/pages/DetailItem"
import BaseLayout from "~/components/Layout/BaseLayout"
import Home from "~/pages/Home"
import Category from "~/pages/Category"
import Register from "~/pages/Register"
import Login from "~/pages/Login"
import { AuthWrapper } from "~/components/context/auth.context.jsx"
import cartReducer from "~/redux/cartSlice/index.jsx"
// let { productId } = useParams()
import { store } from '~/redux/store.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <BaseLayout />,
  children: [
    { path: '/', element: <Home /> },
    // { path: '/item-detail', element: <DetailItem /> },
    {
      path: '/item-detail/',

      children: [
        { path: ':productId', element: <DetailItem /> }
      ]
    },
    { path: '/account/register', element: <Register /> },
    { path: '/account/login', element: <Login /> },

    { path: '/danh-muc/:category', element: <Category /> },

  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthWrapper>
        <RouterProvider router={router} />
      </AuthWrapper>
    </Provider>
  </React.StrictMode>,
)
