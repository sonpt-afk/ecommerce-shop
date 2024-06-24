import React, { useState } from 'react';
import { Modal, Button, Row, Col } from 'antd';
import { FaCheck } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import vans1 from "~/assets/images/vans1.jpg"
const DetailModal = ({ onCancel, quantity }) => {
    // const handleOk = () => {
    //     setIsModalDetailOpen(false);
    // };

    // const handleCancel = () => {
    //     setIsModalDetailOpen(false);
    // };
    return (
        <>

            <Modal open={true}
                footer={<Button onClick={onCancel} className="w-120">
                    Thoát
                </Button>}
                width={1000}


            >
                <Row >
                    <Col className="detail-left" lg={12} xs={24} sm={24} md={12} xl={12}>
                        {/* <Col className="detail-left" span={12} > */}
                        <div className="detail-left-header"><FaCheck />
                            Bạn vừa thêm sản phẩm này vào giỏ hàng
                        </div>
                        <div className="detail-left-content">
                            <div className="detail-left-content-img">
                                <img src={vans1} className="detail-left-content-img" alt="" />
                            </div>
                            <div className="detail-left-content-info">
                                <h3 className="detail-left-content-name">VANS Old Skool Classic Black/White</h3>
                                <div className="detail-left-content-price">
                                    <p >1.500.000đ</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="detail-right" lg={12} xs={24} sm={24} md={12} xl={12}>
                        {/* <Col className="detail-right" span={12} > */}
                        <div className="detail-right-header"><FaShoppingCart /> Giỏ hàng của bạn có {quantity} sản phẩm</div>

                        <div className="detail-right-content">
                            <div className="detail-right-content-price">
                                <div className="detail-right-content-price-text">Tổng tiền
                                </div>
                                <div className="detail-right-content-price-number">1.500.000đ</div>
                                <Button className="detail-right-content-btn">
                                    <FaShoppingCart /> TỚI GIỎ HÀNG
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Modal>

        </>
    )
}

export default DetailModal;