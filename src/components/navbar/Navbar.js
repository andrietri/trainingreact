import React from 'react'
import {Layout, Menu} from 'antd';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;

function Navbar() {
    const navigate = useNavigate()
    return (
    <Header>
        <div className="logo" />
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
        >
            <Menu.Item 
                onClick={() => {
                    navigate("/")
                }} 
                key={"home"}
            >
                Home
            </Menu.Item>
            <Menu.Item 
            onClick={() => {
                navigate("/products")
            }} 
            key={"products"}
            >
                Products
            </Menu.Item>
        </Menu> 
    </Header>
    )
}

export default Navbar