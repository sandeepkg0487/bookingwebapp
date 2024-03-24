import React, { useEffect, useState } from 'react';
import AccountBooking from './AccountBooking';
import api from '../Services/api';
import { useCookies } from 'react-cookie';

const UpcomingPage = () => {
  const [reservations, setReservations] = useState([]);
  const [cookies] = useCookies(['token']);

  const fetchData = async () => {
    try {
      console.log(cookies.token);
      const response = await api.get('/user/getBooking',
      {
        headers: {"Authorization" : `Bearer ${cookies.token}`}
      });
      setReservations(response.data);
      console.log(response.data); // Logging the response data after setting the state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(); // Call fetchData inside useEffect to fetch data when the component mounts
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div className="max-w-7xl min-h-80 sm:px-6 lg:px-9 mx-auto">
      <h1 className="text-2xl font-medium text-left py-4">3 Upcoming bookings</h1>
      {Array.isArray(reservations) && reservations.length > 0 ? (
        reservations.map((reservation) => (
          <AccountBooking key={reservation.id} data={reservation} /> // Pass reservation as prop, not data
        ))
      ) : (
        <p>No reservations found</p>
      )}
    </div>
  );
};

export default UpcomingPage;
