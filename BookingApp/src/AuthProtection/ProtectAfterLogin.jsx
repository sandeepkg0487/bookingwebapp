import React from 'react'
import { useData } from '../Context/Context'
import { Navigate, Outlet } from 'react-router'
import { useAuth } from './AuthContext'

const ProtectAfterLogin = () => {

  const { cookies, } = useAuth()


  return (
    cookies?.isAuth ? <Navigate to="/" /> : <Outlet  />  
  )
    
}

export default ProtectAfterLogin