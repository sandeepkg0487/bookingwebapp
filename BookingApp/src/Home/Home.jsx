import React, { useEffect, useState } from 'react'
import Searchbar from '../assets/Searchbar'
import CardSetter from './CardSetter'
import useDataCollection from '../Hooks/useDataCollection'

const Home = () => {

  const [searchToggle, setSearchToggle] = useState()
  const { data, handleFormSubmit, inputEventHandler } = useDataCollection()



  const updateSearchData = (e) => {
    e.preventDefault()
    
    setSearchToggle(!searchToggle)
  };
  return (
    <>
      <Searchbar
        propdata={{ updateSearchData, data, handleFormSubmit, inputEventHandler }}

      />
      <div className="min-h-screen p-5  bg-gray-50">

        <CardSetter searchParam = {searchToggle} />



      </div>


    </>
  )
}

export default Home
