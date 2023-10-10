import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./nav-components/Home";
import Categories from "./nav-components/Categories";
import Sales from "./nav-components/Sales";
import Contact from "./nav-components/Contact";
import About from "./nav-components/About";
import './navbar.css';
const Nabar = () => {
  return (
    <Router>
        <nav >
            <ul className='navbar-section'>
                <li><NavLink to={"/"} className="style">Home</NavLink></li>
                <li><NavLink to={"/Categories"} className="style">Categories</NavLink></li>
                <li><NavLink to={"/Sales"} className="style">Sales</NavLink></li>
                <li><NavLink to={"/Contact"} className="style">Contact</NavLink></li>
                <li><NavLink to={"/About"} className="style">About</NavLink></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Categories' element={<Categories />} />
            <Route path='/Sales' element={<Sales />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
        </Routes>
    </Router>
  )
}

export default Nabar