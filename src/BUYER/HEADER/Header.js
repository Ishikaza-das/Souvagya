import React from 'react'
import { RiShoppingCartLine } from 'react-icons/ri';
import { BiNotification, BiUserCircle } from 'react-icons/bi';
// import { IconContext } from "react-icons";
import "./Header.css";


const Header = () => {
  return (

    <div className ='header-section'>
      <div className='logo-section'>
        Quick Mart and Logo
      </div>
       <div className='search-bar'> 
      <input placeholder="Search.."  className="input" name="text" type="text" />
      </div>
    <div className='icon-section'>
        <RiShoppingCartLine />
        <BiNotification />
        <BiUserCircle />
    </div>
    </div>

  )
}

export default Header