import React from 'react'
import { StoreLogo } from '~/assets'
import { Row, Col, Menu, Drawer, Badge } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchComponent from '~/components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Space } from 'antd';
import { DownOutlined, SmileOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Flex } from "antd";
import type { MenuProps } from 'antd';

const NavBar: React.FC = () => {
    const [isOpenSearch, setIsOpenSearch] = useState(false);
    const [isDrawerOpen, setIsOpenDrawer] = useState(false);
    const dispatch = useDispatch()

    const showDrawer = () => {
        setIsOpenDrawer(true);
    };
    const closeDrawer = () => {
        setIsOpenDrawer(false);
    };


    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <Link to='/vans-classic'>
                    VANS CLASSIC
                </Link>

            ),
        },
        {
            key: '2',
            label: (
                <Link to='/vans-slip-on'>
                    VANS SLIP-ON
                </Link>


            ),
        },
        {
            key: '3',
            label: (
                <Link to='/vans-era'>
                    VANS ERA
                </Link>

            ),
        },

    ];

    const menuItems = [
        {
            key: 1,
            label: <Link to='/shoes'>
                <Dropdown menu={{ items }}>
                    <a onClick={(e) => e.preventDefault()}>
                        <Space>
                            SHOES
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>
            </Link>

        },
        {
            key: 2,
            label: <Link to='/new-arrivals'>NEW ARRIVALS</Link>

        },
        {
            key: 3,
            label: <Link to='/accessories'>ACCESSORIES</Link>

        },

    ];

    const menuHorizontal = (
        <Menu
            className='hide-on-mobile'
            mode='horizontal'
            items={menuItems}
        />
    )

    const menuVertical = (
        <Drawer
            className='drawer-menu'
            title="Basic Drawer" placement="left" onClose={closeDrawer} open={isDrawerOpen}
            style={{ width: '70%' }}
        >
            <Menu
                items={menuItems}
            />
        </Drawer>
    )



    return (
        <div className="app-header">
            <Row justify={'space-between'} align={'middle'}>
                <Col xs={2} md={2} >

                    <img src={StoreLogo} alt="logo" className="app-logo" />
                </Col>
                <Col xs={0} md={10}>
                    {menuHorizontal}
                    {menuVertical}
                </Col>
                <Col xs={2} md={2} className='show-on-mobile'>
                    <MenuOutlined id="menu-icon" onClick={showDrawer} />
                </Col>

                <Col xs={16} md={10}>
                    <Space>
                        <SearchComponent />
                        <Link to='/cart'>
                            <Badge count={0}>
                                <ShoppingCartOutlined className='app-icon' />
                            </Badge>
                        </Link>
                        <UserOutlined className='app-icon' />
                    </Space>

                </Col>
            </Row>

        </div>
    )
}

export default NavBar