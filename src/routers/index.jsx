import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";

const router = createBrowserRouter([{
    path: '/',
    element: <BaseLayout></BaseLayout>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/danh-muc/:category', element: <Category/>},
    ]
}])

export default router