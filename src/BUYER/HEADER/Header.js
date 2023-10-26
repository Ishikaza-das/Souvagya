import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
// import { BiUserCircle } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
// import { IconContext } from "react-icons";
import "./Header.css";
import UserNav from "./User/UserNav";

const Header = () => {

  return (

    <div className="header-section">
      <div className="logo-section">Quick Mart and Logo</div>
      <div className="search-bar">
        <input
          placeholder="Search.."
          className="input"
          name="text"
          type="text"
        />
      </div>
      <div className="icon-section">
        <RiShoppingCartLine />
        <FaClipboardList />
        {/* <BiUserCircle /> */}
        <UserNav />
      </div>
    </div>
  );
};

export default Header;
