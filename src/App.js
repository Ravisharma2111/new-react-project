import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SingleBlog from './Component/singleBlog/SingleBlog';
import ProductDetailPage from './Component/productDetails/ProductDetailPage';
import Product from './Component/product/Product';
import Index2 from './Component/index2/Index2';
import ContactUs from './Component/contactUs/ContactUs';
import CheckoutPage from './Component/checkoutPage/CheckoutPage';
import CategoryPage from './Component/categoryPage/CategoryPage';
import CartPage from './Component/cartPage/CartPage';
import BlogPage from './Component/blogPage/BlogPage';
import Index from './Component/index/Index'
 import Login from './Component/login/Login'
 import About from './Component/about/About'





function App() {
  return (
  <div>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<Index/>}/>
    <Route exact path='/login' element={<Login/>}/>
  <Route exact path='/about' element={<About/>}/>
  <Route exact path='/blogPage' element={<BlogPage />}/>
  <Route exact path='/cartPage' element={<CartPage />}/>
  <Route exact path='/categoryPage' element={<CategoryPage />}/>
  <Route exact path='/checkoutPage' element={<CheckoutPage/>}/>
  <Route exact path='/contactUs' element={<ContactUs/>}/>
  <Route exact path='/index2' element={<Index2/>}/>
  <Route exact path='/product' element={<Product/>}/>
  <Route exact path='/productDetailPage' element={<ProductDetailPage/>}/>
  <Route exact path='/singleBlog' element={<SingleBlog/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  )
}


export default App