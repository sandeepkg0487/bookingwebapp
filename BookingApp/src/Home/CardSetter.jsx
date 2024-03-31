import React from 'react'
import HomeCard from '../assets/HomeCard'
import DataFetcher from '../Fetch'

const CardSetter = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto text-center flex justify-between sm:justify-start items-center sm:px-6 lg:px-8">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2  gap-4">
        {data.map((item,index) => (
          <HomeCard key={index} item={item} />
        ))}
      </div>
    </div>

  )
}


export default DataFetcher(CardSetter, '/booknow/findRoom'); 
