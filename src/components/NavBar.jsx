import  { useState } from 'react';
import logo from '../assets/fulllogo.png'; // Import your logo image here
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" border-gray-200 bg-violet-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <p href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-12" alt="BrainBooster" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">BrainBooster</span>
        </p>
        <button 
          data-collapse-toggle="navbar-default" 
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-violet-950 dark:bg-gray-800 md:dark:bg-violet-950 dark:border-gray-700 ">
          <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-gray-400 hover:dark:text-blue-500'}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-gray-400 hover:dark:text-blue-500'}>About</NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-gray-400 hover:dark:text-blue-500'}>FAQ</NavLink>
            </li>
            <li>
              <NavLink to="/donate" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-gray-400 hover:dark:text-blue-500'}>Donate</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500' : 'block py-2 px-3 text-gray-900 rounded md:bg-transparent md:text-gray-900 md:p-0 dark:text-white md:dark:text-gray-400 hover:dark:text-blue-500'}>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
