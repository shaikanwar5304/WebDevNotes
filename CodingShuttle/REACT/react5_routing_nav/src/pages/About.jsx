import React from 'react'
import { useLocation } from 'react-router-dom'
function About() {
   let location = useLocation()
   console.log(location.state)
  return (
    <div>About : {
    }</div>
  )
}

export default About