import React from 'react'


const AccountBooking = ({reservation}) => {

    return (
        <><div className="bg-white shadow-lg rounded-lg overflow-hidden m-4">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{}</div>
          <div className="text-gray-600 mb-4">{}</div>
          <div className="border-b border-gray-200 mb-4"></div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="text-gray-600 font-semibold mb-1">Starts From:</div>
              <div>{reservation.startFrom}</div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="text-gray-600 font-semibold mb-1">Ends On:</div>
              <div>{reservation.endsOn}</div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="text-gray-600 font-semibold mb-1">Number of Rooms:</div>
              <div>{reservation.numberOfRoom}</div>
            </div>
            <div className="w-full md:w-1/2 px-2 mb-4">
              <div className="text-gray-600 font-semibold mb-1">Amount to be Paid:</div>
              <div>${reservation?.amountTobePayed}</div>
            </div>
            <div className="w-full px-2">
              <div className="text-gray-600 font-semibold mb-1">Created On:</div>
              <div>{reservation.created_on}</div>
            </div>
          </div>
        </div>
      </div>
        
        </>
    )
}

export default AccountBooking
