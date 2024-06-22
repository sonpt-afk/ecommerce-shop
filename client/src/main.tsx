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

const BaseLayout = lazy(() => import("~/components/Layout/BaseLayout"));
const Home = lazy(() => import("~/pages/Home"));
const Category = lazy(() => import("~/pages/Category"));
const DetailItem = lazy(() => import("~/pages/DetailItem"));

const router = createBrowserRouter([{
  path: '/',
  element: <BaseLayout />,
  children: [
    { path: '/', element: <Home /> },
    { path: '/item-detail', element: <DetailItem /> },

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
