import { useData } from '../Context/Context';
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Counter from './Counter';


const Searchbar = ({ propdata }) => {




    const { searchParam, setSearchParam, today, tomorrowString, handleDateChange, dates } = useData()

    console.log(searchParam);
    return (
        <section className="mt-1">
            <div className="bg-teal-500 text-white -skew-y-1">
                <div className=" mx-auto skew-y-1">
                    <div className="flex flex-col items-center py-2 text-center lg:py-4">
                        <div className="w-full px-4  lg:w-3/4">
                            <div className="mb-8">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-3">
                                    Looking for a Place?
                                </h2>
                                <p className="text-lg lg:text-xl opacity-80">
                                    Where Adventure Awaits
                                </p>
                            </div>

                            <div className="mb-10">
                                <form onSubmit={propdata.updateSearchData}  >
                                    <div className="flex flex-col sm:flex-row ">

                                        <div className="relative flex-1" >
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <svg className="w-4 h-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true"> <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"> </path> </svg>
                                            </div>
                                            <input onChange={e => { setSearchParam(e.target.value) }} value={searchParam} type="text" name="searchInput" placeholder="Search here for threads" required className="p-4 pl-10 text-gray-600 rounded w-full border-gray-100" />
                                        </div>

                                        <div className="flex-1">
                                            <Datepicker
                                                inputClassName=" border-x-2 border-gray-500 p-4  text-gray-600 rounded w-full border-gray-100  "
                                                minDate={today}
                                                popoverDirection="down"
                                                required
                                                value={dates}
                                                onChange={handleDateChange}
                                            />
                                        </div>

                                        <div className="flex-1  ">
                                            <Counter />
                                        </div>

                                        <div className="flex-1">
                                            <button type='submit' className="w-full bg-blue-700 hover:bg-blue-500 text-white font-bold p-4 pl-10 border-gray-100 rounded focus:outline-none focus:shadow-outline">
                                                Search
                                            </button>
                                        </div>

                                    </div>

                                </form>

                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchbar
