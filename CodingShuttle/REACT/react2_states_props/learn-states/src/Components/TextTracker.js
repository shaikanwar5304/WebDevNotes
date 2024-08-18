import React, {useState} from "react"
function TextTracker(){
    const [text, setText]=useState('')
    return <>
    <p>Text you are typing is {text}</p>
    <input type="text" onChange={
        (e)=>{
            setText(e.target.value)
        }
    } />
    </>
}
export default TextTracker