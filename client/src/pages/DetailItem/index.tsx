import React, { useEffect, useState } from 'react';
import "./DetailItem.scss";
import vans1 from "~/assets/images/vans1.jpg";
import { Button, Input, Form } from 'antd';
import { FaShoppingCart } from "react-icons/fa";
import DetailModal from "./DetailModal"
import { useDispatch } from "react-redux"
import { shades } from "~/theme"
import { useNavigate } from 'react-router-dom';
import { addProduct } from "~/redux/cartSlice/index.jsx";
import { useSelector, useDispatch } from 'react-redux';
const DetailItem = () => {
    const [activeSize, setActiveSize] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1)
    const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState<boolean>(false);
    const [product, setProduct] = useState<any>({})
    const [price, setPrice] = useState<number>(100000)
    const handleChooseSize = (size: number) => {
        setActiveSize(size); // Update active size
    };

    const dispatch = useDispatch();
    const [form] = Form.useForm();
    const handleDecrease = () => {
        setQuantity(quantity - 1)
        form.setFieldsValue({ quantity: quantity - 1 });

    }

    const handleIncrease = () => {
        setQuantity(quantity + 1)
        form.setFieldsValue({ quantity: quantity + 1 });

    }
    const handleOpenDetailModal = () => {
        setIsShowDetail(true)

    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div className="intro">
                <div className="intro-content">
                    <h1>VANS Việt Nam | VANS Old Skool Classic Black/White</h1>
                    <p>Trang chủ  /  Sale Off 15%  /  VANS OLD SKOOL CLASSIC BLACK/WHITE</p>
                </div>
            </div>
            <div className="main">
                <div className="main-left">
                    <div className="main-left-img">
                        <img src={vans1} alt="" />
                    </div>
                </div>
                <div className="main-right">
                    <h3 className="main-item">VANS Old Skool Classic Black/White</h3>
                    <p>Thương hiệu: <span className="main-item-brand">VANS </span><span>/</span> <span>Mã sản phẩm:</span> <span className="main-item-brand">VN000EE3BLK </span></p>
                    <div className="main-item-price">
                        <p className="main-item-price-sale">{price} đ</p>
                        {/* <p className="main-item-price-original">1.800.000đ</p> */}
                    </div>
                    <div className="main-item-size">
                        <p>SIZE MEN</p>
                        <div className="main-item-size-list">
                            {[37, 38, 39, 40, 41, 42, 43].map(size => (
                                <Button
                                    key={size}
                                    className="main-item-size-btn"
                                    style={{ borderColor: activeSize === size ? 'red' : 'gray', color: activeSize === size ? 'red' : 'black' }}
                                    onClick={() => handleChooseSize(size)}
                                >
                                    {size}
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="main-item-quantity">
                        <div className="main-item-quantity-text"><p>Chọn số lượng</p></div>

                        <Button onClick={handleDecrease}>-</Button>
                        <Form form={form} initialValues={{ quantity: quantity }}>
                            <Form.Item
                                name="quantity"

                            >
                                <Input
                                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                                ></Input>
                            </Form.Item>

                            <Button className='main-item-buy-btn' onClick={
                                () => {
                                    // handleOpenDetailModal();
                                    dispatch(addProduct({ product, quantity, price: price * quantity }));
                                }
                            }>
                                <FaShoppingCart /> <span className="main-item-buy-btn-text">Mua ngay</span>
                            </Button>
                        </Form>
                        <Button onClick={handleIncrease} >+</Button>
                        <>
                            {isShowDetail && (<DetailModal
                                onCancel={() => setIsShowDetail(false)
                                }
                                quantity={quantity}

                            />)}
                            {/* {<DetailModal isModalOpen={isModalOpen}/>} */}

                        </>
                    </div>


                </div>
            </div>

        </div >

    );
};

export default DetailItem;