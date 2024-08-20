import React from 'react'
import { useParams } from 'react-router-dom'

function Projects() {
    let params = useParams()
  return (
       <>
       <div>
        Name : {params.userId}
       </div>
       <div>Project : {params.project}</div>

       </>
  )
}

export default Projects