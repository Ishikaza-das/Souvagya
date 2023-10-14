import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./MainBody/Home/Home";
import Categories from "./MainBody/Categories/Categories";
import Blog from "./MainBody/Blog/Blog";
import Contact from "./MainBody/Contact/Contact";
import About from "./MainBody/AboutUs/About";
import './navbar.css';
const Nabar = () => {
  return (
    <Router>
        <nav >
            <ul className='navbar-section'>
                <li><NavLink to={"/"} className="style">Home</NavLink></li>
                <li><NavLink to={"/Categories"} className="style">Categories</NavLink></li>
                <li><NavLink to={"/Blog"} className="style">Blog</NavLink></li>
                <li><NavLink to={"/Contact"} className="style">Contact</NavLink></li>
                <li><NavLink to={"/About"} className="style">About</NavLink></li>
            </ul>
        </nav>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Categories' element={<Categories />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
        </Routes>
    </Router>
  )
}

export default Nabar