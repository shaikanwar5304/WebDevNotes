import React,{useEffect, useState} from 'react'
let track = 0;
//useEffect useState useRef these are hooks (will implement when something is triggered)
function UseEffectHook() {
    const [counter, setCounter] = useState(0)
    const [name, setName] = useState('name')
    let local = 0; 
    function onUnMounting(){//i.e before rerendering firstly unmounting of current obj happens
        console.log("called on unMounting basically used to clean up unwanted properties");   
    }
    useEffect(()=>{//in strict mode mounting+1 and re-mounting is done to check (cz of strictmode) for side effects and then render+1 will happen so 2 times the function will be called
        console.log(track++);
        console.log("useEffect inner function");
        console.log(counter, name, local);
        return onUnMounting;
    } ,
    [counter, local])//on changing any of these values the inner funciton will be called
    useEffect(()=>{
        console.log("'with no arr:'called on mounting and any rerendering");
        
    })
    useEffect(() => {
      console.log("'with []:'called on mounting only (use for api calls)");
    },[]);
 
 function changeLocal(){
    local++;
 }
 function changeName(){
    setName(name+name)
 }
 function changeCounter(){
    setCounter(counter + 1)
 }
  return (
    <div>
      <button onClick={changeCounter}>increment counter : {counter}</button>
      <button onClick={changeName}>change name : {name} </button>
      {/**useEffect can't be called by this */}
      <button onClick={changeLocal}>change local : {local}</button>
      {/**useEffect can't be called by this and even though local changes and after when clicked on increment counter the variable is redeclared */}
    </div>
  );
}

export default UseEffectHook
// 0
// useEffect inner function
// 0 'name' 0
// 'with no arr:'called on mounting and any rerendering
// 'with []:'called on mounting only (use for api calls)

// called on unMounting basically used to clean up unwanted properties
// 1
// useEffect inner function
// 0 'name' 0
// 'with no arr:'called on mounting and any rerendering
// 'with []:'called on mounting only (use for api calls)

// called on unMounting basically used to clean up unwanted properties
// 2
// useEffect inner function
// 1 'name' 0
// 'with no arr:'called on mounting and any rerendering