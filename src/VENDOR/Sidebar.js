import React from 'react';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill,
  BsPeopleFill, BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
} from 'react-icons/bs';


function Sidebar({ openSidebarToggle, OpenSidebar }) {
  // Replace these with the actual user information
  const userLogoSrc = "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png";
//    <svg width="62" height="73" viewBox="0 0 62 73" fill="none" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">
// <ellipse cx="30.7353" cy="36.5" rx="30.7353" ry="36.5" fill="url(#pattern0)" />
// <defs>
// <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use href="#image0_253_21" transform="translate(-0.0106961 -0.594187) scale(0.00117647)" />
// </pattern>

// </defs>
// </svg>
  
  const username = "Monkey D. Luffy";

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div onClick={OpenSidebar} className="close-btn" />
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div className="header-info ms-3">
            <div className="user-logo">
              <img src={userLogoSrc} width="50" height="50" alt="User" className='userlogo' />
            </div>
            <div className="user-details">
              <span className="font-w600" >Hi, {username}</span>
              
            </div>
          </div>
         
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="">
            Dashboard
          </a>
         
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Products
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
             ORDER
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
             Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
             Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
             Coupons
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            Withdraw
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            VENDOR Profile
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
