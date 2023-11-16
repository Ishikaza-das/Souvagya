import React from 'react';

function Header({ openSidebar }) {
  return (
    <header className='header'>
      <div className='card-header'>
        <div className='card-earnings'>
          <h3>Earnings</h3>
          <h3>$33,000</h3> {/* Consider formatting numbers for better readability */}
        </div>
        {/* You can add a button or icon to trigger the sidebar */}
        <button onClick={openSidebar}>Open Sidebar</button>
      </div>
    </header>
  );
}

export default Header;
