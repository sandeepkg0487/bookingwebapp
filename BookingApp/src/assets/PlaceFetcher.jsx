// import axios from "axios";

// import react from 'react'
// import { useData } from "../Context/Context";



// const PlaceFetcher = async (url) => {
  
  
//   console.log('working');
  
//   try {
//     const {setData,data } = useData()
//     console.log(url, "url");
//     const response = await axios.get(url);
//     setData(response.data)
//     console.log("response_data", response.data);

//   } catch (error) {

//     console.error('Error fetching data:', error);
//     throw error;
//   }
//   return(<></>)
// };

// export default PlaceFetcher;

import React from 'react'
import { useData } from '../Context/Context';
import axios from 'axios';

const PlaceFetcher = () => {
  
   const PlaceFetcher = async (url) => {
  onsole.log('working');
  // const {setData,data } = useData()
  
  try {
    console.log(url, "url");
    const response = await axios.get('http://localhost:3001/search');
    setData('response',response.data)
    console.log("response_data", response.data);

  } catch (error) {

    console.error('Error fetching data:', error);
    throw error;
  }
  }
  
}

export default PlaceFetcher






