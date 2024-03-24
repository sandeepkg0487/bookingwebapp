import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useDataCollection from '../Hooks/useDataCollection'
import { useAuth } from '../AuthProtection/AuthContext'

const Signup = () => {

  const {
    phoneNumber,
    phoneEventHandler,
    inputEventHandler,
    data,
    handleFormSubmit
  } = useDataCollection({
    lastName: ''
  })
  const { signup } = useAuth()
  
const handleSignup = () => { 

  signup(data.firstname, data.lastname, data.email, data.password, phoneNumber)

 }

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up for an account</h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit} >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="first-name" className="sr-only">First Name</label>
                <input onChange={(e) => inputEventHandler(e)} id="first-name" name="firstname" type="text" autoComplete="given-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="First Name" />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">Last Name</label>
                <input onChange={inputEventHandler} id="last-name" name="lastname" type="text" autoComplete="family-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Last Name" />
              </div>
              <div>
                <label  htmlFor="email" className="sr-only">Email address</label>
                <input onChange={inputEventHandler} id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label htmlFor="username" className="sr-only">Phone</label>
                <input id="username" value={phoneNumber} onChange={phoneEventHandler} name="username" type="text" maxLength={10} pattern="[0-9]*" autoComplete="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone " />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input onChange={inputEventHandler} id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>

            <div>
              <button onClick={handleSignup} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M13.414 8l2.293-2.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 101.414-1.414L13.414 9H17a1 1 0 000-2h-3.586zM7 2a1 1 0 00-1 1v3.586L2.707 4.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0 1 1 0 000-1.414L3.414 7H7a1 1 0 001-1V3a1 1 0 00-1-1zM6 18a1 1 0 100 2 1 1 0 000-2zM17 14a1 1 0 001-1V10a1 1 0 00-1-1h-3.586l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L13.414 13H17a1 1 0 001-1z" clipRule="evenodd" />
                  </svg>
                </span>
                Sign up
              </button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-600">Already have an account? <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup
