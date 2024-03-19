
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';


const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
useEffect(()=>{
  // console.log(isOpen);
},[isOpen])

  return (
    <div className="relative">
      <div className="fixed top-6 right-6 sm:hidden">
        <button onClick={toggleMenu} className="block text-gray-500 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav className={`bg-gray-600    `}>
        {/* <nav className="bg-gray-600"> */}
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row">
        <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                alt="Workflow"
              />
            </div>
          <div className="flex items-center justify-between ">
            
            <div onClick={toggleMenu} className={` sm:block  flex-col sm:flex-row sm:ml-6 flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ${!isOpen && 'hidden'} `}>


              <Link
                to={'/'}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to={'/login'}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
              <Link
                to={'/profile'}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                My Account
              </Link>


              <Link
                to={''}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </Link>


            </div>
          </div>
        </div>
      </nav>
    </div>
  );


};

export default NavBar;
