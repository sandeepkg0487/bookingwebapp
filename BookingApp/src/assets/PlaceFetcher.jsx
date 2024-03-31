  
  


import React from 'react'
import { useData } from '../Context/Context';
import axios from 'axios';

const PlaceFetcher = () => {
  
   const PlaceFetcher = async (url) => {
;
   const {setData,data } = useData()
  
  try {
    const response = await axios.get('http://localhost:3001/search');
    setData('response',response.data)
   

  } catch (error) {

    console.error('Error fetching data:', error);
    throw error;
  }
  }
  
}

export default PlaceFetcher






