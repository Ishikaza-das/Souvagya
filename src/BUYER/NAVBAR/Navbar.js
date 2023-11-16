import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  
} from "react-router-dom";
import Home from "./MainBody/Home/Home";
import Menu from "./MainBody/Home/Menu";
// import Categories from "./MainBody/Categories/Categories";
import Blog from "./MainBody/Blog/Blog";
import Contact from "./MainBody/Contact/Contact";
import About from "./MainBody/AboutUs/About";
import "./navbar.css";
import Man from "./MainBody/Categories/Subcomponents/Man";
import Woman from "./MainBody/Categories/Subcomponents/Woman";
import Kids from "./MainBody/Categories/Subcomponents/Kids";
import Electronics from "./MainBody/Categories/Subcomponents/Electronics";
import HomeApplience from "./MainBody/Categories/Subcomponents/HomeApplience";
import BestOffer from "./MainBody/Categories/Subcomponents/BestOffer";

const Nabar = () => {
  return (
    <Router>
      <nav>
        <ul className="navbar-section">
          <li>
            <NavLink to={"/"} className="style">
              Home
            </NavLink>
          </li>
          <li>
              <Menu />
          </li>
          <li>
            <NavLink to={"/Blog"} className="style">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"} className="style">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/About"} className="style">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/Man" element={<Man />} />
          <Route path="/Woman" element={<Woman />} />
          <Route path="/Kid" element={<Kids />} />
          <Route path="/Electronic" element={<Electronics />} />
          <Route path="/Home_applience" element={<HomeApplience />} />
          <Route path="/Best_offer" element={<BestOffer />} />
        </Route>
        {/* <Route path="/Categories" element={<Categories />} /> */}
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Nabar;
