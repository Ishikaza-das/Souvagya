import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Vendorpage.css';
import ProductRegistration from './ProductRegistration';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './home';

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
        <Home />
      </div>
      <Routes>
      <Route path="ProductRegistration" element={<ProductRegistration />} />
      <Route path='/products' />
  {/* <Route path="/add-product" element={<ProductRegistration />} /> Add this line */}
  
</Routes>

    </BrowserRouter>
  );
}

export default App1;
