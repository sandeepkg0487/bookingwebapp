import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router';
import { useData } from '../Context/Context';
import api from '../Services/api';


const Reservation = () => {



    const { Rid, hid, noOfRoom } = useParams()
    console.log("Rid ,hid ,noOfRoom", Rid, hid, noOfRoom);
    const { search } = useData()
    console.log(Rid);
    const [slip, setSlip] = useState()

  
    

    const fetch = async () => {
        try {
            const response = await api.post('/booknow/getPrice', {
                roomId: Rid,
                noOfRomm: noOfRoom,
                start_date: search.startDate,
                end_date: search.endDate

            })
            setSlip(response.data)
            console.log(data);
        } catch (error) {
            console.log(error.message);
        }


    }


    useEffect(() => {

        fetch()
        return () => {

        }
    }, [])



    return (

        <>


            <div className="pt-8 max-w-6xl mx-auto w-full px-2 sm:px-4 md:px-8 flex content-start justify-center flex-col sm:flex-row">
                <div className="p-2  flex-1  ">
                    <h1 className='text-4xl'>BILLING DETAILS</h1>
                    <div className="mt-4 text-left">
                        <label htmlFor="Country" className='mb-4' >Country*</label>
                        <input id='Country' type="text" className='w-full mt-2' />
                    </div>
                    <div className="text-left flex flex-row  mt-4">
                        <div className='flex-1 w-1/2'>
                            <label htmlFor="Last_Name" className='mb-4' > First Name* </label>
                            <input id='Last_Name' className='w-full mr-2' type="text" />

                        </div>

                        <div className='flex-1 w-1/2 ' >
                            <label htmlFor="Last_Name " className='mb-4  ml-2' > Last Name *</label>
                            <input className='w-full ml-2' type="text" />
                        </div>

                    </div>
                    <div className="mt-4 text-left">
                        <label htmlFor="Address" className='mb-4' >Address**</label>
                        <input id='Address' type="text" className='w-full mt-2 mb-3' />
                        <input id='Country' type="text" className='w-full' />
                    </div>
                    <div className="mt-4 text-left">
                        <label htmlFor="Password" className='mb-4' > Order Notes </label>
                        <textarea rows={3} id='Password' type="text" className='w-full mt-2' />
                    </div>
                    <div className="mt-4 text-left">
                        <label htmlFor="Password" className='mb-4' >Account Password</label>
                        <input id='Password' type="text" className='w-full mt-2' />
                    </div>


                </div>
                <div className="p-2 flex-1 ">

                    <h1 className='text-4xl mt-4'>YOUR PAYMENT DETAILS</h1>
                    <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">2 days - 3 rooms </p>

                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">10-5-2024</p>

                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">LUXURY ROOM</p>

                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">₹ {slip?.price}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Reservation