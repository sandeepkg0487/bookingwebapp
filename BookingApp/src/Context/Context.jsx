// DataContext.js
import React, { createContext, useState, useContext } from 'react';

// Step 1: Create a context
const DataContext = createContext();

// Step 2: Create a provider
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);


  // You can have any other state or functions related to data management here

  return (
    <DataContext.Provider value={{ data, setData ,isLoading, setIsLoading, error, setError }}>
      {children}
    </DataContext.Provider>
  );
};

// Step 3: Create a custom hook to consume the context
export const useData = () => {
  return useContext(DataContext);
};
