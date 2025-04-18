import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import Cart from './suby/pages/Cart'
import { CartProvider } from "./suby/components/CartContext";


import Login from './suby/pages/Login'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'

const App = () => {
  return (
    <CartProvider>
    <div>
      <Routes>
      <Route path='/cart' element={<Cart />} />
          <Route path='/' element = { <LandingPage />} />
          <Route path='/products/:firmId/:firmName' element={<ProductMenu />} />
          <Route path="/login" element={<Login />} />


          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
    
    </div>
    </CartProvider>
  )
}

export default App