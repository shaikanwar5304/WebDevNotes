import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [name, setName] = useState()
    let Navigate = useNavigate()
    function handleChange(e){
        e.preventDefault()
        console.log(name);
        if(name=== "anwar"){
            Navigate("/user/anwar");/**navigates to the path giver */
        }
    }
  return (
    <div>
      Login :
      <form onSubmit={handleChange}>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
      </form>
    </div>
  );
}

export default Login