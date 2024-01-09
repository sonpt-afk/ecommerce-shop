import {Row, Col, Menu, Button, Space, Drawer} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header(){
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
    const menuItems = [{
        key: 1,
        label: <Link to='/'>Trang chu</Link>
    },
    {
        key: 2,
        label: <Link to='/danh-muc/san-pham-moi'>San pham moi</Link>
    }]
    let menuHorizontal = (
        <Menu
            className='hide-on-mobile'
            mode='horizontal'
            items={menuItems}
        />
    )

    let menuVertical = (
        <Drawer
            className='drawer-menu'
            title="Basic Drawer" placement="left" onClose={onClose} open={open}
            style={{width: '70%'}}
        >
            <Menu
            items={menuItems}
            />
        </Drawer>
    )

    return (
        <Row justify={'space-between'}>  
            <Col span={4} className='logo'><Link to='/'><img src="/vite.svg" alt="" /></Link></Col>
            <Col span={18}>
                {menuHorizontal}
                {menuVertical}
            </Col>
            <Col className='show-on-mobile'><MenuOutlined onClick={showDrawer}/></Col>
        </Row>
    )
}