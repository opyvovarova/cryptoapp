import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  const menuItems = [
    { key: 'home', icon: <HomeOutlined />, text: 'Home', to: '/' },
    { key: 'cryptocurrencies', icon: <FundOutlined />, text: 'Cryptocurrencies', to: '/cryptocurrencies' },
    { key: 'exchanges', icon: <MoneyCollectOutlined />, text: 'Exchanges', to: '/exchanges' },
    { key: 'news', icon: <BulbOutlined />, text: 'News', to: '/news' },
  ];

  return (
    <div className="nav-container">
      <Avatar src={icon} size="large" />
      <Typography.Title level={2} className="logo">
        <Link to="/">Cryptoverse</Link>
      </Typography.Title>
      <Menu theme='dark' mode='vertical'>
        {menuItems.map(item => (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.to}>{item.text}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default Navbar
