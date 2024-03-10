import React, { useEffect } from 'react'
import HomeCard from '../assets/HomeCard'
import Searchbar from '../assets/Searchbar'
import Fetch from '../Fetch'
import CardSetter from './CardSetter'

const Home = () => {
  useEffect(() => {
    Fetch('')
    
  }, [])
  return (
    <>
      <Searchbar />
      <div className="min-h-screen p-5  bg-gray-50">

        <CardSetter />



      </div>


    </>
  )
}

export default Home
