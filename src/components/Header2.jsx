// Header.js
import React from 'react';
import LanguageDropdown from '../utils/LanguageDropdown';

const Header2 = ({ onSignInClick }) => {
  return (
    <header className="bg-white py-4">
      <nav className="container flex items-center justify-between">
        <div className='flex'>
        <img src="/assets/logo.png" alt="Logo" className="h-20" />
        <img src="/assets/textname.png" alt="Logo" className="h-20" />
        </div>
        <div>
          <LanguageDropdown></LanguageDropdown>
        </div>
       
      </nav>
    </header>
  );
};

export default Header2;
