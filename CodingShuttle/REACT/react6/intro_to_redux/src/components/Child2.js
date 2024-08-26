import React from 'react'
import { useSelector } from 'react-redux'
 function Child2() {
  const msg = useSelector(state => state.msgReducer.message)
  return (
    <div>the data from child1 is : {msg}</div>
  )
}

export default Child2