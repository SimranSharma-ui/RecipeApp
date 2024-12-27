import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-gray-800 py-4">
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className='flex flex-row space-x-2'>
          <img src='src\assets\cup-cake.png' alt='Delicious Hub' className="h-8 w-8 hover:scale-110 transition-transform duration-300 cursor-pointer"/>
            <h1 className="text-white text-3xl font-bold ">Delicious Hub</h1>
          </div>
          <ul className="flex space-x-8">
            <li>
              <Link
                to={"/"}
                className="text-white text-lg uppercase cursor-pointer hover:text-teal-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to={"/Recipes"}
                className="text-white text-lg uppercase cursor-pointer hover:text-teal-500"
              >
                Recipes
              </Link>
            </li>

            <li>
              <Link
                to={"/about"}
                className="text-white text-lg uppercase cursor-pointer hover:text-teal-500"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to={"/contact"}
                className="text-white text-lg uppercase cursor-pointer hover:text-teal-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
