import React, { useState } from "react";

function Notes() {
  const [noteArr, setNoteArr] = useState([]);
  //const inp = document.getElementById("input");//not a good practice to use dom inside react
  //will return null as we are trying to access the element before renderirng
  function addNote() {
    const inp = document.getElementById("input"); //accessing after it rendered
    console.log(inp.value);
    setNoteArr([...noteArr, inp.value]);//works similarly to objects (...)
    inp.value = "";
  }

  return (  
    <>
      {" "}
      <br />
      <input type="text" id="input" />
      <button onClick={addNote}>Submit</button>
      <div>
        {noteArr.map((element,i) => {
          //return <div>{element}</div>; //to increase preformance react requires every li to have a key
          //Notes.js:19 Warning: Each child in a list should have a unique "key" prop.
          return <div key={i}>{element}</div>
        })}
      </div>
    </>
  );
}
export default Notes;
