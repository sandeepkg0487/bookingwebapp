
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import OutsideClick from './Hooks/OutsideClick';
import { useAuth } from './AuthProtection/AuthContext';
import { useCookies } from 'react-cookie';



const NavBar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { logout, username } = useAuth()

  const [cookies] = useCookies()

  const boxRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(cookies?.isAuth);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [boxRef]);

  return (
    <div className="relative">


      <div ref={boxRef}  className={`  ${isOpen ? ' ' : 'hidden '}  absolute  right-0  top-10 z-10  bg-white  max-w-2xl px-4 sm:max-w-sm md:max-w-sm  shadow-xl rounded-lg text-gray-900`}>

        <div className="text-center mt-2">
          <h2 className="font-semibold">{sessionStorage?.getItem('username')}</h2>
          <p className="text-gray-500"></p>
        </div>
        <div className='pt-2 '>
          {
            cookies?.role === 'user' && (<>
              <Link
                to={'/profile'}
                className=" flex text-gray-500 py-2 rounded-md text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" /></svg>
                <span className='ml-2'>My Account</span>
              </Link>
            </>)
          }

          {!cookies?.isAuth && (
            <>
              <Link
                to={'/login'}
                className=" flex text-gray-500 py-2 rounded-md text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" /></svg>

                <span className='ml-2'>Login</span>
              </Link>
              <Link
                to={'/HotelLogin'}
                className=" flex text-gray-500  py-2 rounded-md text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />  <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" /></svg>

                <span className='ml-2'>Hotel Login</span>
              </Link>
            </>
          )}

          {
            cookies?.role === "Hotel" && (<>
              <Link
                to={'/HotelRoomView'}
                className=" flex text-gray-500  py-2 rounded-md text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-sliders" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" /></svg>
                <span className='ml-2'>Hotel RoomView</span>
              </Link>
              <Link
                to={'/HotelAddRoom'}
                className=" flex text-gray-500  py-2 rounded-md text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2" /></svg>
                <span className='ml-2'>Add Room</span>
              </Link>
            </>)
          }




        </div>
        {cookies?.isAuth && (
          <div className="p-4 border-t mx-8 mt-2">
            <button onClick={logout} className="block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2">Logout</button>
          </div>
        )}

      </div>
      <nav className={`bg-gray-600    `}>



        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src="/hotel-logo.png"
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


          <div  className="usericon">
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