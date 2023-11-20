import React from 'react';
import { Link } from 'react-router-dom';



function Sidebar({ openSidebarToggle, OpenSidebar }) {
 
  const userLogoSrc = "https://www.freeiconspng.com/thumbs/profile-icon-png/am-a-19-year-old-multimedia-artist-student-from-manila--21.png";

  
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
          <Link to='/Dashboard'>
            Dashboard
          </Link>
         
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Products'>
            Products
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Orders'>
            Orders
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Dashboard'>
            Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Reports'>
            Reports
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Coupons'>
          Coupons
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Withdraw'>
            Withdraw
          </Link>
        </li>
        <li className='sidebar-list-item'>
        <Link to='/Vendorprofile'>
          Vendor profile
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
