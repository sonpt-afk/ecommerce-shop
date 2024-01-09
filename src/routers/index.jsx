import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import ProductDetail from "../components/Product/ProductDetail";

const router = createBrowserRouter([{
    path: '/',
    element: <BaseLayout></BaseLayout>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/danh-muc/:category', element: <Category/>},
        {path: '/sanpham/:slug', element: <ProductDetail/>}
    ]
}])

export default router