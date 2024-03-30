
import React, { createContext, useState, useContext } from 'react';


const DataContext = createContext();


export const DataProvider = ({ children }) => {

  const today = new Date().toISOString().split('T')[0]; //set default date today
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment the date by 1 to get tomorrow's date
  const tomorrowString = tomorrow.toISOString().split('T')[0];




  const [searchParam, setSearchParam] = useState('uganda')
  const [count, setCount] = useState(1)
  const [dates, setDates] = useState({
    startDate: today,
    endDate: tomorrowString
  });


  const handleDateChange = (newValue) => {
    console.log("newValue:", newValue);
    setDates(newValue);

  }

  const handleCounterClick = (e) => {
    if (e.target.dataset.action === 'increment') {

      setCount(count + 1);

    } else if (e.target.dataset.action === 'decrement' && count > 1) {
      setCount(count - 1);
    }
  }



  return (
    <DataContext.Provider value={{ today, tomorrowString, searchParam, setSearchParam, handleDateChange, dates, count, handleCounterClick }}>
      {children}
    </DataContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};
