import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    setHasShadow(window.scrollY > 50);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (darkMode) {
      document.body.classList.add('bg-gray-900', 'text-white');
    } else {
      document.body.classList.remove('bg-gray-900', 'text-white');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? 'bg-gray-800 text-white' : 'bg-slate-50'
      } ${hasShadow ? 'shadow-md' : ''} rounded-md sticky top-0 z-50 transition-shadow duration-300`}
    >
      <div className="flex justify-between items-center p-3">
        <h1 className="font-bold text-xl cursor-pointer">
          node<span className="font-bold text-3xl text-pink-800">Hunter</span>
        </h1>
        <div className="flex items-center gap-6">
          {/* Dark mode toggle button (visible on both desktop and mobile) */}
          

          {/* Mobile menu toggle button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 focus:outline-none"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex gap-6 font-bold">
            <li>
              <Link to="/" className="cursor-pointer hover:text-pink-700 hover:underline">home</Link>
            </li>
            <li className="relative group">
              <Link
                to="/course"
                className="cursor-pointer hover:text-pink-700 hover:underline"
              >
                course
              </Link>
              {/* Dropdown Menu */}
              <ul
                className={`absolute top-full mt-2 w-40 ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
                } shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              >
                <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                  <Link to="/c">C</Link>
                </li>
                <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                  <Link to="/python">Python</Link>
                </li>
                <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                  <Link to="/javascript">Javascript</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/about" className="cursor-pointer hover:text-pink-700 hover:underline">about</Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer hover:text-pink-700 hover:underline">contact</Link>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="p-2 bg-gray-200 rounded-full focus:outline-none transition-all duration-300"
              >
                {darkMode ? '🌙' : '☀️'}
              </button>
            </li>
            <li>
              <button className="m-2 p-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition duration-200">
                login
              </button>
            </li>
          </ul>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'} shadow`}>
        <ul className="flex flex-col gap-3 p-4 font-bold">
          <li>
            <Link to="/" className="cursor-pointer hover:text-pink-700 hover:underline">home</Link>
          </li>
          <li className="relative group">
            <Link
              to="/course"
              className="cursor-pointer hover:text-pink-700 hover:underline"
            >
              course
            </Link>
            {/* Dropdown for mobile */}
            <ul
              className={`mt-2 ml-4 ${darkMode ? 'bg-gray-700 text-white' : 'bg-slate-50 text-gray-800'} shadow-lg rounded-md p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
            >
              <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                <Link to="/c">C</Link>
              </li>
              <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                <Link to="/python">Python</Link>
              </li>
              <li className="hover:bg-pink-700 hover:text-white rounded-md p-2">
                <Link to="/javascript">Javascript</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/about" className="cursor-pointer hover:text-pink-700 hover:underline">about</Link>
          </li>
          <li>
            <Link to="/contact" className="cursor-pointer hover:text-pink-700 hover:underline">contact</Link>
          </li>
          <li>
            <button
              onClick={toggleDarkMode}
              className="p-2 bg-gray-200 rounded-full focus:outline-none transition-all duration-300"
            >
              {darkMode ? '🌙' : '☀️'}
            </button>
          </li>
          <li>
            <button className="w-full p-2 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition duration-200">
              login
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
