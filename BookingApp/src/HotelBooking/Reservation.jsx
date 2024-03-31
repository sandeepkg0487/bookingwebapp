import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router';
import { useData } from '../Context/Context';
import api from '../Services/api';
import useDataCollection from '../Hooks/useDataCollection';
import { useAuth } from '../AuthProtection/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useProtectedFetch from '../Services/AxiosBuilder';


const Reservation = () => {



    const { dates, count } = useData()//count is no of rooms 
    const { Rid, hid } = useParams()
    const [slip, setSlip] = useState({})

    const { inputEventHandler, data } = useDataCollection()
    const { cookies } = useAuth()


    const fetchProtectedData = useProtectedFetch()

    const navigate = useNavigate()



    const fetch = async () => {
        try {
            const response = await api.post('/booknow/getPrice', {
                roomId: Rid,
                numberOfRooms: count,
                start_date: dates.startDate,
                end_date: dates.endDate

            })
            setSlip(response.data)
            console.log(response.data);
        } catch (error) {
            console.log(error.message);
        }


    }

    const reserveNow = async () => {


        try {
            const resp = await fetchProtectedData('/booknow/book-room', 'POST', {
                formdata: data,
                roomId: Rid,
                hotelId: hid,
                numberOfRooms: count,
                start_date: dates.startDate,
                end_date: dates.endDate,
                total: slip.total

            })
            console.log(resp);
            if (resp) {
                toast.success("Reservation Completed Successfully", {
                    position: "top-left"
                });
                setTimeout(() => {
                    navigate('/profile')
                }, 4000)
            }

        } catch (error) {
            toast.error("oops... Something went Wrong ", {
                position: "top-left"
            });
            console.log(error.message);
            setTimeout(() => {
                navigate('/')
            }, 4000)

        }


    }
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        reserveNow()
    }


    useEffect(() => {

        fetch()
        return () => {

        }
    }, [])



    return (

        <>

            <ToastContainer />
            <div className="pt-8 max-w-6xl mx-auto w-full px-2 sm:px-4 md:px-8 flex content-start justify-center flex-col md:flex-row">
                <div className="p-2 flex-1  ">
                    <form onSubmit={formSubmit} className=' ' >


                        <h1 className='text-4xl'>BILLING DETAILS</h1>
                        <div className="mt-4 text-left">
                            <label htmlFor="Country" className='mb-4' >Country*</label>
                            <input onChange={inputEventHandler} id='Country' name='countyy' type="text" className='w-full rounded-sm border-gray-400 border-2 bg-gray-300  mt-2  p-2' />
                        </div>
                        <div className="text-left flex flex-row  mt-4">
                            <div className='flex-1 w-1/2'>
                                <label htmlFor="fname" className='mb-4' > First Name* </label>
                                <input onChange={inputEventHandler} id='fname' name='firstName' className='w-full rounded-sm border-gray-400 border-2 bg-gray-300  mr-2 p-2' type="text" />

                            </div>

                            <div className='flex-1 w-1/2 ' >
                                <label htmlFor="Last_Name " className='mb-4  ml-2' > Last Name *</label>
                                <input onChange={inputEventHandler} name='lastName' className='w-full bg-gray-300 border-gray-400 border-2 rounded-sm ml-2 p-2' type="text" />
                            </div>

                        </div>
                        <div className="mt-4 text-left">
                            <label htmlFor="Address" className='mb-4' >Address**</label>
                            <input onChange={inputEventHandler} name='address1' id='Address' type="text" className='w-full  rounded-sm bg-gray-300 border-gray-400 border-2 mt-2 p-2 mb-3' />
                            <input onChange={inputEventHandler} name='address2' id='Country' type="text" className='w-full rounded-sm bg-gray-300 border-gray-400 border-2  p-2' />
                        </div>
                        <div className="mt-4 text-left">
                            <label htmlFor="Password" className='mb-4' > Order Notes </label>
                            <textarea onChange={inputEventHandler} rows={3} id='Password' type="text" name='orderNote' className='w-full rounded-sm bg-gray-300 border-gray-400 border-2 mt-2 p-2' />
                        </div>
                        <div className="mt-4 text-left">
                            <label htmlFor="Password" className='mb-4' >Account Password</label>
                            <input onChange={inputEventHandler} id='Password' name='password' type="password" className='w-full bg-gray-300   border-gray-400 border-2 rounded-sm mt-2 p-2' />
                        </div>


                        <button
                            className="mt-5 float-right align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3.5 px-7 rounded-lg bg-blue-700 text-white  hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                            type="submit">
                            Reserve Now
                        </button>
                    </form>
                </div>
                <div className="p-2 flex-1 ml-5 ">

                    <h1 className='text-4xl mt-4'>YOUR PAYMENT DETAILS</h1>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Room Price/Day</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">₹{slip.price}</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">{slip.noOfDay} days - {slip.numberOfRooms} rooms </p>

                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">{slip?.start_date?.split('T')[0]} To {slip?.end_date?.split('T')[0]}</p>

                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">LUXURY ROOM</p>

                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₹ {slip?.total}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Reservation