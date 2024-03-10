import React from 'react'


const AccountBooking = () => {
    return (
        <>
            <div className="flex justify-between items-center py-5">
                
                    <h1>⌚ Friday, 1 March 2024 from  12:31 pm 1:31 pm</h1>
                

                <div className="flex">
                <div className="p-1">
                <p className='bg-yellow-300 p-2 rounded-full text-sm'>✔️ Approved</p>
                </div>
                <div className="p-1">
                <button  className='bg-gray-300 p-2 rounded-full text-sm'>Cancel Booking</button>
                </div>

                    
                    
                </div>


            </div>
        </>
    )
}

export default AccountBooking
