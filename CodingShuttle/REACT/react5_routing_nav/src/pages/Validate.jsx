import React from 'react'
import { Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Validate() {
    let haveAccess = false
  return (
    <>{
        haveAccess ? <Outlet/> : <Navigate to="/Login"/> /**similar to useNavigate but used for the sake of jsx */
    }</>
  )
}

export default Validate