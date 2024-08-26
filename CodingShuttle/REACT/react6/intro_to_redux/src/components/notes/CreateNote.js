import React, {useRef} from "react"
import { useDispatch } from "react-redux"
import { addNote } from "../../redux/slices/noteSlice"
import { nanoid } from "@reduxjs/toolkit"
function CreateNote(){
    const title = useRef(null)
    const desc = useRef(null)
    const dispatch = useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        let titleValue = title.current.value
        let descValue = desc.current.value
        dispatch(addNote({
            titleValue,
            descValue,
            id:nanoid(10)//returns a id of size 10
        }))
    }
    return <form onSubmit={handleSubmit}>
        <input type="text" required ref={title}  />
        <input type="text" required  ref={desc} />
        <input type="submit" />
    </form>
}
export default CreateNote