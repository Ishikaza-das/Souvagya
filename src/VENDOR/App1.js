import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Vendorpage.css';
import ProductRegistration from './ProductRegistration';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home1';
import Products from './Products';
import Profile from './../BUYER/HEADER/User/Pages/Profile';
import Home1 from './Home1';

function App1() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
        <Route path="/"  >
        <Route index element={<Home1/>} />
          <Route path="/product-registration" element={<ProductRegistration />} />
          <Route path='/Dashboard' element={<Home1/>} />
          <Route path="/Products" element={<Products/>} />

          {/* <Route path="*" element={<Order/>} /> */}
          {/* <Route path="*" element={<Reports/>} />
          <Route path="*" element={<Coupons />} />
          <Route path="*" element={<Withdraw />} />
          <Route path="*" element={<Vendor Profile />} /> */}

          
          
          
          

          

           </Route>
      
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App1;
