import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import ProductDetail from "@/components/Product/ProductDetail";
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Checkout from '@/pages/Checkout'

const router = createBrowserRouter([{
    path: '/',
    element: <BaseLayout></BaseLayout>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/danh-muc/:category', element: <Category/>},
        {path: '/tim', element: <Category/>},
        {path: '/sanpham/:slug', element: <ProductDetail/>},
        {path: '/giohang', element: <Cart/>},
        {path: '/thanhtoan', element: <Checkout/>},
        {path: '/login', element: <Login/>},
        {path: '/register', element: <Register/>}
    ]
}])

export default router