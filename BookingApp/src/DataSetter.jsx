
import React, { useState, useEffect } from 'react';
//import PlaceFetcher from './assets/PlaceFetcher';
import { useData } from './Context/Context';
import axios from 'axios';


function DataSetter(WrappedComponent, url) {
  return function DataFetcher(props) {
    // const [data, setData] = useState(null);
    
    const {isLoading,error,data } = useData()




    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return <WrappedComponent {...props} data={data} />;
  };
}
export default DataSetter;