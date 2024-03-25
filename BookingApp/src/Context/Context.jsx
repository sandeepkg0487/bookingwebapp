
import React, { createContext, useState, useContext } from 'react';


const DataContext = createContext();


export const DataProvider = ({ children }) => {

  const today = new Date().toISOString().split('T')[0]; //set default date today
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1); // Increment the date by 1 to get tomorrow's date
  const tomorrowString = tomorrow.toISOString().split('T')[0];



  const [search, setSearch] = useState({ startDate: today, endDate: tomorrowString })
  const [apidata, setApidata] = useState([])




  // set search location date  data on context 
  const setSearchparam = (e) => {
    const { value, name } = e.target
    setSearch(prevPageData => ({
      ...prevPageData,
      [name]: value
    }));


  }

  const getApidataByRoomId = (roomId) => {
   
    const result = apidata?.find(item => {
   
      return item._id.avilableRoom === roomId});

    if (result) {
      return result
    } else {
     return null
    }

  }

  // gives requested page data
  // const getPageData = (pageName) => {
  //   return pageProp[pageName] || null;
  // };





  // You can have any other state or functions related to data management here

  return (
    <DataContext.Provider value={{ setSearchparam, search, today, tomorrowString, setApidata ,getApidataByRoomId}}>
      {children}
    </DataContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};
