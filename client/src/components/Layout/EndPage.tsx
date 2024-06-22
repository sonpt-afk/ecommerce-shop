import React from 'react'
import { List, Typography, Input, Button } from 'antd';

const EndPage: React.FC = () => {
    const col1Data = [
        '       Hệ Thống VANS Online',
        'Địa chỉ: Hồ Chí Minh',
        'Hotline: 0866956907'
    ]
    const col2Data = [
        '       Hệ Thống VANS Online',
        'Hệ Thống Cửa Hàng',
        'Hotline: 0866956907'
    ]
    const col3Data = [
        'Chính sách thanh toán',
        'Chính sách đổi trả'
    ]
    return (
        <div>
            <div className="email-container">
                <h1>NHẬP EMAIL
                </h1>
                <p>Để nhận tin tức khuyến mãi từ cửa hàng của chúng tôi
                </p>
                <Input className='email-input' placeholder="Nhập email của bạn" />
                <Button className='email-btn'> Gửi ngay</Button>
            </div>
            <div className="list">
                <List
                    header={<div className='footer-content'>Trải Nghiệm VANS Store Ngay Tại Nhà</div>}
                    footer={<div className='footer-content'>© Bản quyền thuộc về VANS Việt Nam | Cung cấp bởi VANS</div>}
                    dataSource={col1Data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <p className='footer-content-sublist'>{item}</p>

                        </List.Item>
                    )}
                />
                <List
                    header={<div className='footer-content'>Về Chúng Tôi</div>}

                    dataSource={col2Data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <p className='footer-content-sublist'>{item}</p>

                        </List.Item>
                    )}
                />
                <List
                    header={<div className='footer-content'>Chính Sách</div>}
                    dataSource={col3Data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <p className='footer-content-sublist'>{item}</p>

                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default EndPage