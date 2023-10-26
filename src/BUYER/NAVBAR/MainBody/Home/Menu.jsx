import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <h3 className="dropdown-toggle" onClick={toggleDropdown}>
        Categories 
      </h3>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/Man" style={{textDecoration: "none", color: "#333"}}>Man</Link>
          </li>
          <li>
            <Link to="/Woman" style={{textDecoration: "none", color: "#333"}}>Woman</Link>
          </li>
          <li>
            <Link to="/Kid" style={{textDecoration: "none", color: "#333"}}>Kid</Link>
          </li>
          <li>
            <Link to="/Electronic" style={{textDecoration: "none", color: "#333"}}>Electronic</Link>
          </li>
          <li>
            <Link to="/Home_applience" style={{textDecoration: "none", color: "#333"}}>Home applience</Link>
          </li>
          <li>
            <Link to="/Best_offer" style={{textDecoration: "none", color: "#333"}}>Best Offer</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;