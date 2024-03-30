import React from 'react'
import { useData } from '../Context/Context'

const Counter = () => {
    const { handleCounterClick, count } = useData()

    return (<>




        <div className="group relative cursor-pointer ">

            <div className="flex items-center justify-between space-x-5 bg-white px-4">
                <a className="menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4" onClick="">
                    No of Rooms {count}
                </a>
                {/* <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </span> */}
            </div>



            <div  className='  invisible  absolute z-50 flex flex-row w-full  bg-gray-100 py-1 px-4 shadow-xl group-hover:visible text-black  border-pink-950  border-2 rounded-md' >
                <div onClick={handleCounterClick} className="my-2 flex  border-b border-gray-100  font-semibold text-gray-500 hover:text-black md:mx-2">
                    <button type='button' className='p-1 text-2xl px-4 ' data-action="decrement">-</button>
                    <span>{count}</span>
                    <button type='button' className='p-1 text-2xl px-4' data-action="increment"> +</button>
                </div>

            </div>


        </div>



    </>
    )
}

export default Counter