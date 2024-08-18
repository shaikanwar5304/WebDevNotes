import React, { useState } from "react";
function Fruits() {
  let fruits = ["Apple", "Mango", "Guava", "Apricod", "Banana"];
  function  getRandomFruit(){
      return fruits[Math.floor(Math.random() * 5)];
    }
    let [fruit, setFruit] = useState(getRandomFruit());
  return (
    <>
      <h2>this is {fruit}</h2>
      <button
        onClick={() => {
          setFruit(getRandomFruit());
        }}
      >
        Change Fruit
      </button>
    </>
  );
}
export default Fruits;
