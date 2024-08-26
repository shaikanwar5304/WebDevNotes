import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import {setMsgExport} from '../redux/slices/messageSlice';

function Child1() {
    const inputRef = useRef(null);
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        let inputValue = inputRef.current.value
        dispatch(setMsgExport(inputValue))
    }
  return (
    <form onSubmit={handleSubmit} >
        <input type="text" ref={inputRef} />
    </form>
  )
}

export default Child1