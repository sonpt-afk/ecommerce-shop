import React, { useState } from 'react';
import "./DetailItem.scss";
import vans1 from "~/assets/images/vans1.jpg";
import { Button, Input, Form } from 'antd';
import { FaPlus } from "react-icons/fa";
import { FaMinus, FaShoppingCart } from "react-icons/fa";

const DetailItem = () => {
    const [activeSize, setActiveSize] = useState<number | null>(null);
    const [quantityItem, setQuantityItem] = useState(1)
    const handleChooseSize = (size: number) => {
        setActiveSize(size); // Update active size
    };
    const [form] = Form.useForm();
    const handleDecrease = () => {
        setQuantityItem(quantityItem - 1)
        console.log("quantityItem", quantityItem - 1);
        form.setFieldsValue({ quantity: quantityItem - 1 });

    }

    const handleIncrease = () => {
        setQuantityItem(quantityItem + 1)
        console.log("quantityItem", quantityItem + 1)
        form.setFieldsValue({ quantity: quantityItem + 1 });

    }
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
                        <p className="main-item-price-sale">1.500.000đ</p>
                        <p className="main-item-price-original">1.800.000đ</p>
                    </div>
                    <div className="main-item-size">
                        <p>SIZE</p>
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
                        <Form form={form} initialValues={{ quantity: quantityItem }}>
                            <Form.Item
                                name="quantity"

                            >
                                <Input
                                    onChange={(e) => setQuantityItem(parseInt(e.target.value))}
                                ></Input>
                            </Form.Item>

                            <Button className='main-item-buy-btn'>
                                <FaShoppingCart /> Mua ngay
                            </Button>
                        </Form>
                        <Button onClick={handleIncrease} >+</Button>

                    </div>


                </div>
            </div>
        </div >
    );
};

export default DetailItem;