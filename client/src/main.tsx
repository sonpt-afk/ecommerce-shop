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
const Home = lazy(() => import("~/pages/Home"));
const Category = lazy(()=> import("~/pages/Category"));


const router = createBrowserRouter([{
  path: '/',
  element: <Home />,
  children: [
    {path: '/danh-muc/:category', element: <Category/>},
    {path: '/tim', element: <Category/>},

  ]
}])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
