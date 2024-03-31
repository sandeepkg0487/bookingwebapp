import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useDataCollection from '../Hooks/useDataCollection';
import api from '../Services/api';

const HotelSignup = () => {
    const navigate = useNavigate()

    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const selectedFile = e.target.files[0];
        setImage(selectedFile);

    };

    const { inputEventHandler, data, handleFormSubmit } = useDataCollection()

    const submit = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append("my_file", image)
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
        })

        const result = await api.post('/hotel/signup', formData, { headers: { 'Content-Type': 'multipart/form-data' } })
        console.log(result);
        if(result){
            navigate('/HotelLogin')
        }
    }

    useEffect(() => {

    }, [data])



    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
                    </div>
                    <form onSubmit={submit} encType="multipart/form-data" className="mt-8 space-y-6" >
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="userName" className="sr-only">userName</label>
                                <input onChange={inputEventHandler} id="userName" name="userName" type="text" autoComplete="given-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="User Name" />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">password</label>
                                <input onChange={inputEventHandler} id="password" name="password" type="password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="password" />
                            </div>
                            <div>
                                <label htmlFor="hotelName" className="sr-only">hotelName</label>
                                <input onChange={inputEventHandler} id="hotelName" name="hotelName" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="hotelName" />
                            </div>
                            <div>
                                <label htmlFor="location" className="sr-only">location</label>
                                <input onChange={inputEventHandler} id="location" name="location" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="location" />
                            </div>
                            <div>
                                <label htmlFor="Address" className="sr-only">Address</label>
                                <textarea onChange={inputEventHandler} id="Address" name="Address" type="text" required className=" resize-none appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Address" />
                            </div>
                            <div>
                                <label htmlFor="hotelName" className="sr-only">hotelName</label>

                                <input type="file" name='my_file' accept="image/*" onChange={handleImageChange} required className="appearance-none rounded-none relative block w-full  border bg-white border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="hotelName" />
                            </div>

                            <div>
                                <label htmlFor="discription" className="sr-only">discription</label>
                                <textarea onChange={inputEventHandler} id="discription" name="discription" type="text " autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="discription" />
                            </div>
                        </div>





                        <div>
                            <button onClick={submit} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                    <div className="text-center">
                        <p className="text-sm text-gray-600">Already have an account? <Link to="/hotelLogin" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HotelSignup