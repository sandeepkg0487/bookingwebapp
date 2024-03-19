import React, { useEffect, useState } from 'react'
import Searchbar from '../assets/Searchbar'
import CardSetter from './CardSetter'
import useDataCollection from '../Hooks/useDataCollection'

const Home = () => {

  const [searchstr, setSearchstr] = useState()
  const { data, handleFormSubmit, inputEventHandler } = useDataCollection()

  useEffect(() => {
    console.log('search',searchstr);
  }, [data,searchstr])

  const updateSearchData = () => {
    console.log('click');
    setSearchstr((prev)=>data.search)
  };
  return (
    <>
      <Searchbar
        propdata={{ updateSearchData, data, handleFormSubmit, inputEventHandler }}

      />
      <div className="min-h-screen p-5  bg-gray-50">

        <CardSetter searchParam = {searchstr} />



      </div>


    </>
  )
}

export default Home
