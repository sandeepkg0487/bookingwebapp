import React from 'react'

import { Navigate, Outlet, useLocation } from 'react-router'
import { useCookies } from 'react-cookie'

const HotelProtect = () => {

  const [cookies, setCookie, removeCookie] = useCookies(['role']);
const location =  useLocation()
  return (
    cookies?.role === 'Hotel' ? <Outlet/> :<Navigate to = 'login'  state={{from:location}}/>
  )
}

export default HotelProtect