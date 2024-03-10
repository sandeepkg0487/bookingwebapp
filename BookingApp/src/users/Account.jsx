import React, { useState } from 'react';
import UpcommingPage from '../assets/UpcommingPage';
import BookingHisttory from '../assets/BookingHisttory';
import EditProfile from '../assets/EditProfile';
import Addplaces from '../assets/AddPlaces';
import PlaceAproval from '../Admin/PlaceAproval';



const Account = () => {

  let [toggle, setToggle] = useState('upcommingbooking');

  const bookingToogle = (e) => {
    setToggle(e.target.value)
    console.log(toggle);
  }
  return (
    <>
      <div className="bg-zinc-400">
        <div className="max-w-7xl mx-auto  text-center flex justify-between sm:justify-start items-center sm:px-6 lg:px-8 ">

          <button className={` h-10 text-xs px-3 border-none ${toggle == 'upcommingbooking' ? 'bg-white' : 'bg-zinc-300'} `} value={'upcommingbooking'} onClick={bookingToogle} > &#x1F4C5; Upcomming booking</button>
          <button className={` h-10  text-xs px-3 border-none ${toggle == 'bookingHistory' ? 'bg-white' : 'bg-zinc-300'} `} value={'bookingHistory'} onClick={bookingToogle} > ⏳  Booking History</button>
          <button className={` h-10 text-xs px-3 border-none ${toggle == 'EditProfile' ? 'bg-white' : 'bg-zinc-300'} `} value={'EditProfile'} onClick={bookingToogle} > 🖊️ Edit Profile</button>
          <button className={` h-10 text-xs px-3 border-none ${toggle == 'Add' ? 'bg-white' : 'bg-zinc-300'} `} value={'Add'} onClick={bookingToogle} > ➕ Add Places</button>
          <button className={` h-10 text-xs px-3 border-none ${toggle == 'Aproval' ? 'bg-white' : 'bg-zinc-300'} `} value={'Aproval'} onClick={bookingToogle} >✅ Booking aproval</button>

        </div>
      </div>
      {toggle == 'upcommingbooking' && <UpcommingPage />}
      {toggle == 'bookingHistory' && <BookingHisttory />}
      {toggle == 'EditProfile' && <EditProfile />}
      {toggle == 'Add' && <Addplaces />}
      {toggle == 'Aproval' && <PlaceAproval />}



    </>
  );
};

export default Account;
