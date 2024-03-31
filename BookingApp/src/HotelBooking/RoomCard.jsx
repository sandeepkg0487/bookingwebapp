import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Counetr from '../assets/Counter';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RoomCard = ({ data }) => {
  
    const [count, setCount] = useState(1)
    const handleClick = (e) => {
        if (e.target.dataset.action === 'increment') {
            if (count < data?.avilableRoom?.length) {
                setCount(count + 1);
            }
            else {
                toast.error("No more Room available !", {
                    position: "top-left"
                });
            }
        } else if (e.target.dataset.action === 'decrement' && count > 1) {
            setCount(count - 1);
        }
    }
   

    return (
        <>  <ToastContainer />
      
            <div className="relative my-4 flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md w-full  flex-col sm:flex-row">
                <div className="relative w-full sm:w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
                    <img
                        src={data?.images[0]?.RoomImage}
                        alt="card-image" className="object-cover w-full h-full rounded-xl " />
                </div>


                <div className="relative flex flex-col w-full p-2 md:p4  ">
                    <p className="block font-sans text-lg antialiased font-normal leading-normal text-black uppercase">
                        {data.roomType}
                    </p>

                    <div
                        className="relative pb-2 md:pb-4 m-0 mb-2 md:mb-4 overflow-hidden text-center ">

                        <h1 className="flex float-right justify-center gap-1 mt-2 md:mt-4 font-sans antialiased font-normal tracking-normal text-gray text-2xl sm:text-5xl">
                            <span className="text-xl sm:text-3xl">₹</span>{data.price}
                            <span className="self-end text-xl sm:text-3xl">/mo</span>
                        </h1>
                    </div>
                    <div className="p-0 flex ">
                        <ul className="flex flex-col">
                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base  antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base antialiased font-normal leading-relaxed text-inherit">
                                    double bed
                                </p>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base  antialiased font-normal leading-relaxed text-inherit">
                                    Air conditioning

                                </p>
                            </li>




                        </ul>
                        <ul className=" hidden ml-4 sm:flex flex-col">
                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base  antialiased font-normal leading-relaxed text-inherit">
                                    Free Welcome Drink on Arrival
                                </p>
                            </li>
                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base antialiased font-normal leading-relaxed text-inherit">
                                    Book with ₹0 Payment
                                </p>
                            </li>

                            <li className="flex items-center gap-1">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20"><svg xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg></span>
                                <p className="block font-sans text-sm sm:text-base  antialiased font-normal leading-relaxed text-inherit">
                                    Air conditioning

                                </p>
                            </li>




                        </ul>
                        
                        <Counetr handleClick={handleClick} count={count} />
                    </div>


                    <div className=" p-0 mt-4 ">
                        <Link to={`./Reservation/${data?._id?.roomid}/${count}`} >
                            <button
                                className="float-right align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-blue-700 text-white  hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                type="button">
                                Book Now
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RoomCard