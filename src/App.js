import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Navbar, HomePage, ExchangePage, Cryptocurrencies, CryptoDetails, News } from './components';
import './App.css';

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/exchanges" element={<ExchangePage />} />
                        <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />} />
                        <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
                        <Route exact path="/news" element={<News />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                    </Routes>
            </Layout>
            <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2024
                <Link to="/">
                    Cryptoverse Inc.
                </Link>
                All Rights Reserved.
            </Typography.Title>
            <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchange</Link>
                <Link to="/news">News</Link>
            </Space>
        </div>
        </div>

    </div>
  )
}

export default App
