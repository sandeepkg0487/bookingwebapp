import React, { useEffect, useState } from 'react';
import api from '../Services/api';
import { useAuth } from '../AuthProtection/AuthContext';
import HoteldashboardCard from '../assets/HoteldashboardCard';

const HotelRoomView = () => {
    const { cookies } = useAuth();
    const [rooms, setRooms] = useState([]);
    const [sel, setSel] = useState('')

    const handlInput = (event) => {
        const { name, value } = event.target;
        setSel(prev => ({
            ...prev,
            [name]: value
        }));
    }


    const headers = {
        
            'Authorization': `Bearer ${cookies.token}`,
            'Content-Type': 'application/json'
        }
    

    const fetchHotel = async () => {
        try {
            const response = await api.get('/hotel/getBooking', {headers:headers});
            console.log(response.data);
            setRooms(response.data.data);
        } catch (error) {
            console.log(error.message);
        }
    };

    const fetchRoom = async () => {

        const params = {
            roomid: sel.roomid,
            date: sel.date
        }
        console.log(params);
        try {
            const response = await api.get('/hotel/getBookingByRoom',{headers :headers,params:params} );
            console.log(response.data);
           
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        fetchHotel();
    }, []); // Empty dependency array to run once on component mount

    return (

        <>
            <div className="flex ">

                <div className="m-2 max-w-60">
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
                        <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
                        <p className="mt-1 text-sm">Use filters to further refine search</p>
                        <div className="mt-8">
                            <div className="flex flex-col">
                                <input onChange={handlInput} name='date' type="date" id="date" className="my-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
                            </div>
                            <div className="flex flex-col">
                                <select onChange={handlInput} name='roomid' id="status" className="my-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
                                    {Array.isArray(rooms) && rooms.map((singleroom, index) => (
                                        <option key={singleroom._id} value={singleroom._id}>{singleroom.roomType}</option>
                                    ))}

                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <button className="active:scale-95 rounded-lg m-4 bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">Reset</button>
                            <button onClick={()=>{fetchRoom()}} className="active:scale-95 rounded-lg m-4 bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Search</button>
                        </div>
                    </div>
                </div>
                <div>

                    <HoteldashboardCard />
                </div>
            </div>
        </>
    );
};

export default HotelRoomView;
