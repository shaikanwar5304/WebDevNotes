import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeNote } from '../../redux/slices/noteSlice'

function ListNotes() {
    const notes = useSelector(state=>state.noteReducer.notes)
    const dispatch = useDispatch()
    function handleDelete(id){
        dispatch(removeNote(id))
    }
  return (
    <div>
        {
            notes.map(note=>{
                return <div key={note.id} >
                    <h1>
                        {note.titleValue}
                    </h1>
                    <h2>
                        id : {note.id}
                    </h2>
                    <p>
                        {note.descValue}
                    </p>
                    <button onClick={()=>{
                        handleDelete(note.id)
                    }}>
                        delete
                    </button>
                </div>
            })
        }
    </div>
  )
}

export default ListNotes