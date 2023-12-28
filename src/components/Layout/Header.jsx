import {Row, Col, Menu, Button, Space, Drawer} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import { useState } from 'react';
export default function Header(){
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    let menuHorizontal = (
        <Menu
            className='hide-on-mobile'
            mode='horizontal'
            items={[{
                key: 1,
                label: 'Trang chu'
            },
            {
                key: 2,
                label: 'Danh sach'
            }]}
        />
    )

    let menuVertical = (
        <Drawer
            className='drawer-menu'
            title="Basic Drawer" placement="left" onClose={onClose} open={open}
            style={{width: '70%'}}
        >
            <Menu
            items={[{
                key: 1,
                label: 'Trang chu'
            },
            {
                key: 2,
                label: 'Danh sach'
            }]}
            />
        </Drawer>
    )

    return (
        <Row justify={'space-between'}>  
            <Col className='logo'><img src="/vite.svg" alt="" /></Col>
            <Col>
                {menuHorizontal}
                {menuVertical}
            </Col>
            <Col className='show-on-mobile'><MenuOutlined onClick={showDrawer}/></Col>
        </Row>
    )
}