// Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="border-t border-gray-700 pt-4 flex flex-col items-center">
          <img src="./src/assets/logofoot.png" alt="Logo" className="h-20 mb-4" />
          
          <div className="flex justify-center w-full my-4 space-x-10">
            <a href="mailto:admin@greenbluebrown.in" className="hover:text-gray-300">admin@greenbluebrown.in</a>
            <span className="text-gray-400">|</span>
            <p>Plot 404, New Paharpur, Anisabad, Patna, Bihar, INDIA</p>
            <span className="text-gray-400">|</span>
            <p>+91-6204116511</p>
          </div>

          <p className="text-gray-400 my-4">Follow us on:</p>
          
          <div className="flex space-x-5 mb-4">
            <a href="https://facebook.com" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="https://twitter.com" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-gray-300"><FaLinkedinIn /></a>
            <a href="https://instagram.com" className="hover:text-gray-300"><FaInstagram /></a>
          </div>
        </div>
        
        <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-700 mt-4">
          © 2023 Greenbluebrown Apparels Pvt. Ltd
        </div>
      </div>
    </footer>
  );
};

export default Footer;
