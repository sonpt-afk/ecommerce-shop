import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "@/components/Layout/BaseLayout";
import Home from "@/pages/Home";
import Category from "@/pages/Category";
import ProductDetail from "@/components/Product/ProductDetail";
import Cart from '@/pages/Cart'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Checkout from '@/pages/Checkout'
import OrderDetail from "@/pages/Order/OrderDetail";
import OrderList from "@/pages/Order/OrderList";
import PrivateRouter from "@/components/PrivateRouter";

const router = createBrowserRouter([{
    path: '/',
    element: <BaseLayout></BaseLayout>,
    children: [
        {path: '/', element: <Home/>},
        {path: '/danh-muc/:category', element: <Category/>},
        {path: '/tim', element: <Category/>},
        {path: '/sanpham/:slug', element: <ProductDetail/>},
        {path: '/giohang', element: <Cart/>},
        {path: '/thanhtoan', element: <PrivateRouter><Checkout/></PrivateRouter>},
        {path: '/dang-nhap', element: <Login/>},
        {path: '/dang-ky', element: <Register/>},
        {path: '/danh-sach-don-hang', element: <PrivateRouter><OrderList/></PrivateRouter>},
        {path: '/don-hang/:id', element: <PrivateRouter><OrderDetail/></PrivateRouter>}
    ]
}])

export default router