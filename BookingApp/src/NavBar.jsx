
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClick from './Hooks/OutsideClick';
import { useAuth } from './AuthProtection/AuthContext';



const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const boxRef = useRef(null);
  // boxOutsideClick will be true on outside click
  const boxOutsideClick = OutsideClick(boxRef);

  useEffect(() => {

    console.log("is open ,outside", isOpen, boxOutsideClick);
  }, [isOpen, boxOutsideClick])

  return (
    <div className="relative">


      <div className={`  ${isOpen ? ' ' : 'hidden '}  absolute  right-0  top-10 z-10  bg-white  max-w-2xl px-4 sm:max-w-sm md:max-w-sm  shadow-xl rounded-lg text-gray-900`}>

        <div className="text-center mt-2">
          <h2 className="font-semibold">Sarah Smith</h2>
          <p className="text-gray-500">Freelance Web Designer</p>
        </div>
        <div className='pt-2 '>

          <Link
            to={'/profile'}
            className=" flex text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g stroke="#2a353d" strokeWidth="1.5"><rect height="10" rx="2" width="8" x="2" y="2" /><rect height="6" rx="2" width="8" x="2" y="16" /><rect height="10" rx="2" width="8" x="14" y="12" /><rect height="6" rx="2" width="8" x="14" y="2" /></g></svg>
            My Account
          </Link>

          <Link
            to={'/HotelLogin'}
            className=" flex text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Hotel Login
          </Link>
          <Link
            to={'/HotelRoomView'}
            className=" flex text-gray-500 px-3 py-2 rounded-md text-sm font-medium"
          >
            Hotel RoomView
          </Link>



        </div>

        <div className="p-4 border-t mx-8 mt-2">
          <button onClick={logout} className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Logout</button>
        </div>
      </div>

      <nav className={`bg-gray-600    `}>



        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex">
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
            <div  >

              <Link
                to={'/'}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>

            </div>
          </div>


          <div ref={boxRef} className="usericon">
            <button onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>
            </button>

          </div>
        </div>
      </nav>
    </div>
  );


};

export default NavBar;





// <Link
//                 to={'/login'}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Login
//               </Link>
//               


//               <Link
//                 to={''}
//                 className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
//               >
//                 Contact
//               </Link>