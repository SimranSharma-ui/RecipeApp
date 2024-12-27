import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
       
        <div className="flex justify-center space-x-8 mb-6">
          <Link
            to={"/"}
            className="text-lg uppercase cursor-pointer hover:text-teal-500 transition duration-300"
          >
            Home
          </Link>
          <Link
            to={"/Recipes"}
            className="text-lg uppercase cursor-pointer hover:text-teal-500 transition duration-300"
          >
            Recipes
          </Link>
          <Link
            to={"/about"}
            className="text-lg uppercase cursor-pointer hover:text-teal-500 transition duration-300"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-lg uppercase cursor-pointer hover:text-teal-500 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-center text-sm text-gray-400 mb-6">
          <p>&copy; {new Date().getFullYear()} DeliciousHub. All Rights Reserved.</p>
        </div>

        
        <div className="flex justify-center space-x-6">
          <img
            src="src/assets/instagram.png"
            alt="Instagram"
            className="h-8 w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <img
            src="src/assets/logo.png"
            alt="Logo"
            className="h-8 w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <img
            src="src/assets/facebook.png"
            alt="Facebook"
            className="h-8 w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
          <img
            src="src/assets/linkedin.png"
            alt="LinkedIn"
            className="h-8 w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
