import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';
import { IoIosArrowDown } from "react-icons/io"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h3 className="dropdown-toggle" onMouseOver={toggleDropdown } >
        Categories <IoIosArrowDown/>
      </h3>
      {isOpen && (
        <ul className="dropdown-menu">
        
            <Link to="/Man" style={{textDecoration: "none", color: "#333"}}><li>Man</li></Link>
          
        
            <Link to="/Woman" style={{textDecoration: "none", color: "#333"}}><li>Woman</li></Link>
          
        
            <Link to="/Kid" style={{textDecoration: "none", color: "#333"}}><li>Kid</li></Link>
          
        
            <Link to="/Electronic" style={{textDecoration: "none", color: "#333"}}><li>Electronic</li></Link>
          
        
            <Link to="/Home_applience" style={{textDecoration: "none", color: "#333"}}><li>Home applience</li></Link>
          
        
            <Link to="/Best_offer" style={{textDecoration: "none", color: "#333"}}><li>Best Offer</li></Link>
          
        </ul>
      )}
    </div>
  );
};

export default Dropdown;