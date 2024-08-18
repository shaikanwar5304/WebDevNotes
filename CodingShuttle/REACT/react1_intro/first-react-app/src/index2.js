import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));//root is the entry point of the react app

const x = <h1>hi this is jsx</h1>;

// const y = <h1>we can only have one root for var</h1> <p>not possible</p>
// const z = (
//   <h1>we can only have one root for var</h1> <p>not possible</p>
// )

const z = {
    color: "purple",
    backgroundColor: "yellow"
}

const y = (
  <div>
    <h1 style={{backgroundColor:"red", color: "green"}}>we can only have one root in jsx {x}</h1>
    <p style={z} className="insteadOfClass">as class is reserved keyword in js</p>
    <p >calculate 5+5 = {5+5}</p>
  </div>
);


const flag = true;
let str = ""
if(flag){
  str="flag is true"
}else{
  str= "flag is false"
}

//we should not write if else statement in jsx use ternary operator and we can write in body of js instead
root.render(
  <div>
    <p>{flag ? "true" : "false"}</p>
    <p>str</p>
  </div>
);


function clock(){
  root.render(//good practice is to render the page once
    <div>
    <h2>
      time : { new Date().toLocaleTimeString()}{/**only this part of time will render*/}
      
      <p>inside h2</p>
    </h2>
    <h3>sibling for h2</h3>
    </div>
  )
  setTimeout(clock,1000)
}
// clock()




// root.render(
//   // <React.StrictMode>
//   //   <App />
//   // </React.StrictMode>
// );
