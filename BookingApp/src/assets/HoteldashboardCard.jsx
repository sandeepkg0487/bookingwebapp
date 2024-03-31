import React from 'react'

const HoteldashboardCard = ({ roomstatus }) => {
  const dateString1 = roomstatus?.booking[0]?.start
  const dateString2 = roomstatus?.booking[0]?.start
  console.log(dateString1);
  const date1 = new Date(dateString1);
  const date2 = new Date(dateString2);

  // Format the date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const startdate = date1.toLocaleDateString('en-US', options);
  const enddate = date2.toLocaleDateString('en-US', options);
  console.log(roomstatus);
  const disable = roomstatus.booking.length === 0


  return (
    <section className={` mt-4 text-gray-600 p-4 max-w-2xl mx-auto  ${ disable ?'bg-gray-600' :'bg-green-500'}  shadow-lg rounded-lg px-6 py-5`}  >
      <div className="">


        <div className="w-full flex justify-between items-center mb-3">
          <div>
            <h2 className="text-2xl leading-snug font-extrabold text-gray-50 truncate mb-1 sm:mb-0">{roomstatus?.booking[0]?.name}</h2>
            <p>{roomstatus?.booking[0]?.phone}</p>
          </div>
          <div className="rounded-l-full border-double border-2 border-zinc-200 w-20  h-10 text-white bg-orange-600 flex items-center justify-center ">{roomstatus.roomNumber}</div>
        </div>


        <div className="max-w-md text-indigo-100">
          <p className="mb-2">start:<span className='text-blue-800'>{startdate}</span>  <span>end:{enddate}</span></p>
        </div>



      </div>
    </section>

  )
}

export default HoteldashboardCard

