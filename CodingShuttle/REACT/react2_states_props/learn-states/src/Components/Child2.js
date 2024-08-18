import React from "react";

function Child2(props) {
    let showpvt = true
  return <div>
    {showpvt && <p>this is conditional renderring</p> }
    Child2: {props.countval}</div>;
}

export default Child2; 