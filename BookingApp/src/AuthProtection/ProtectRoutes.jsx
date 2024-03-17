import React from 'react'
import { useAuth } from './AuthContext'
import { Navigate, Outlet, useLocation } from 'react-router'

const ProtectRoutes = () => {

const { cookies, } = useAuth()
const location =  useLocation()

  return (
    cookies.token ? <Outlet/> :<Navigate to = 'login'  state={{from:location}}/>
  )
}

export default ProtectRoutes