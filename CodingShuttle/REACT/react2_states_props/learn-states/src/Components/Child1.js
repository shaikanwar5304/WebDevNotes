import React, {useState} from 'react'

function Child1(props) {
    let [count, setCount]=useState(0)
    props.property(count)
  return (
    <div>Child1: {count} <button onClick={()=>{
        setCount(count+1)  
    }} >increment in 1</button></div>
  )
}
export default Child1