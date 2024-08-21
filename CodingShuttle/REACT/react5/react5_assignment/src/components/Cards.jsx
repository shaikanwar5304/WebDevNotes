import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

function Cards() {
  return (
    <div>
        <Nav/>
        <Outlet/>
    </div>
  )
}

export default Cards