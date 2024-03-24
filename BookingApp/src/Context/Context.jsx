// DataContext.js
import React, { createContext, useState, useContext } from 'react';

// Step 1: Create a context
const DataContext = createContext();

// Step 2: Create a provider
export const DataProvider = ({ children }) => {
  const [pageProp, setPageProp] = useState({})


  // set each page data on context 
  const setPageData = (pageName, data) => {

    setPageProp(prevPageData => ({
      ...prevPageData,
      [pageName]: data
    }));


  }

  // gives requested page data
  const getPageData  = (pageName) => {
        return pageProp[pageName] || null;
      };





  // You can have any other state or functions related to data management here

  return (
    <DataContext.Provider value={{ setPageData, getPageData }}>
      {children}
    </DataContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};
