import React from 'react'

const HotelRoomView = () => {
    return (
        <div className="m-2 max-w-60">

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
                <p className="mt-1 text-sm">Use filters to further refine search</p>
                <div className="mt-8 ">


                    <div className="flex flex-col">

                        <input type="date" id="date" className="my-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                    </div>

                    <div className="flex flex-col">


                        <select id="status" className="my-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                            <option>Dispached Out</option>
                            <option>In Warehouse</option>
                            <option>Being Brought In</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 ">
                    <button className="active:scale-95 rounded-lg m-4 bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">Reset</button>
                    <button className="active:scale-95 rounded-lg m-4 bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Search</button>
                </div>
            </div>
        </div>

    )
}

export default HotelRoomView