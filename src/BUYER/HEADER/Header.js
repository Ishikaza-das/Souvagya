import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
// import { BiUserCircle } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
// import { IconContext } from "react-icons";
import "./Header.css";
import UserNav from "./User/UserNav";

const Header = ({onCartClick}) => {
  
  
  return (
    <>

    <div className="header-section">
      <div className="logo-section">
        <img src="Quick_Mart_Logo.png" alt="img"/>
      </div>
      <div className="search-bar">
        <input
          placeholder="Search.."
          className="input"
          name="text"
          type="text"
        />
      </div>
      <div className="icon-section">
        <ul>
          <li>
          <i onClick={onCartClick}><RiShoppingCartLine /></i>
          </li>
          <li>
          <FaClipboardList />
          </li>
          <li>
          <UserNav />
          </li>
        </ul>







      
        
      </div>
     
    </div>
    
    </>
  );
};

export default Header;
