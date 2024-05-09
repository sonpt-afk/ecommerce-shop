import React from 'react'
import { List, Typography } from 'antd';

const EndPage: React.FC = () => {
    const col1Data = [
        '       Hệ Thống VANS Online',
        'Địa chỉ: Hồ Chí Minh',
        'Hotline: 0866956907'
    ]
    return (
        <div>
            <List
                header={<div>Trải Nghiệm VANS Store Ngay Tại Nhà</div>}
                footer={<div>Footer</div>}
                bordered
                dataSource={col1Data}
                renderItem={(item) => (
                    <List.Item>
                        <Typography.Text mark>[ITEM]</Typography.Text> {item}
                    </List.Item>
                )}
            />
            foot
        </div>
    )
}

export default EndPage