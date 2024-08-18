import React, { useState } from "react";
function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0); //we are not changing the value of count, we are creating new
   /////count when re-rendering and assigning count+1 not count++ which will throw error
  //useState gives you two values, one is curr state and anoter is function to update the state
  //when you call the function, it will update the state and re-render the component
  //as it works with component it should be called inside the component
  return (
    <>
      {/**this is allowed jst a invisible cover */}
      <p>Counter {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
          // count = count + 1;//by this the component will not re-render
          console.log(count);
        }}
      >
        Increment
      </button>
    </>
  );
}

export default Counter;
