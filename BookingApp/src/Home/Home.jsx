import React, { useEffect, useState } from 'react'
import Searchbar from '../assets/Searchbar'
import CardSetter from './CardSetter'
import useDataCollection from '../Hooks/useDataCollection'
import { useData } from '../Context/Context'

const Home = () => {

  const [searchstr, setSearchstr] = useState()
  const { data, handleFormSubmit, inputEventHandler } = useDataCollection()
  const {search } = useData()

useEffect(()=>{
  console.log(search);
},[search])
  const updateSearchData = (e) => {
    e.preventDefault()
     setSearchstr(search.searchInput)
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
