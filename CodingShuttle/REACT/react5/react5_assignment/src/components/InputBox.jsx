import React,{useState} from "react";

function InputBox(props) {
  let [resp , setResp ]= useState()
  function handleSubmit(e) {
    e.preventDefault();
    let input = e.target.elements[0].value
    if (input === "valid") {
      localStorage.setItem("login", "true");
      setResp(props.callBack(true))
    } else {
      setResp(props.callBack(false))
    }
  }
  if(resp)return resp
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
        />
      </form>
    </div>
  );
}

export default InputBox; 