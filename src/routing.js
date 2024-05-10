import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import ProductDetail from './pages/ProductDetail'
import Navbar from './components/navbar/Navbar'
import { Layout } from 'antd'

function routing() {
    return (
    <Layout className="layout">
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
    </BrowserRouter>
    </Layout>
    )
}

export default routing