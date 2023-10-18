import React, { useState } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { BsBoxSeam } from 'react-icons/bs';
// import { IconContext } from "react-icons";
import "./Header.css";
import { SearchResultsList } from './SearchComponents/SearchResultsList';
import { SearchBar } from './SearchComponents/SearchBar';


const Header = () => {
  const [results, setResults] = useState([]);
  return (

    <div className ='header-section'>
      <div className='logo-section'>
        Quick Mart and Logo
      </div>

      <div className="search-bar-container">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      </div>
      
    <div className='icon-section'>
        <RiShoppingCartLine />
        <BsBoxSeam />
        <BiUserCircle />
    </div>
    </div>

  )
}

export default Header