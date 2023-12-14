// Header.js
import React from 'react';
import LanguageDropdown from '../utils/LanguageDropdown';

const Header = ({ onSignInClick }) => {
  return (
    <header className="bg-white py-1">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Replace with your actual logo image */}
        <img src="../assets/logo.png" alt="Logo" className="h-20" />

        <ul className="flex bg-black rounded-lg">
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">HOME</li>
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">SHOP</li>
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">ABOUT</li>
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">BLOG</li>
        </ul>

        <ul className="flex items-center bg-black rounded-lg">
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass">SEARCH</li>
          <li className="text-white text-sm mx-10 my-1 hover:text-gray-400 cursor-pointer font-normal leading-normal font-overpass" onClick={onSignInClick}>SIGN IN</li>     
        </ul>
        <div>
          <LanguageDropdown></LanguageDropdown>
        </div>
       
      </nav>
    </header>
  );
};

export default Header;
