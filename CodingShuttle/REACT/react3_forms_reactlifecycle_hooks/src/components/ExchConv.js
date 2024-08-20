import React, { useEffect, useState, useRef } from "react";
import DropDown from "./DropDown";
import "./ExchConv.css";
import { BsCashCoin } from "react-icons/bs";
function ExchConv() {
  const [menu, setMenu] = useState();
  const [num, setNum] = useState(1);
  const [val1, setVal1] = useState("btc");
  const [val2, setVal2] = useState("btc");

  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      let resp = await fetch("https://api.coingecko.com/api/v3/exchange_rates");
      let jsonData = await resp.json();
      console.log("before setMenu");
      setMenu(jsonData.rates);
      console.log("before setLoading");
      setLoading(false);
      console.log("after setLoading");
    } catch (e) {
      console.log(e);
    }
  }
  function func() {
    getData();
  }
  console.log(" beforeuseEffect(func, []);");
  useEffect(func, []);
  console.log("after useEffect(func, []);");

  //  useEffect(getData,[])//we can't directly pass async funcs to useEffect
  //bcz they expect the callback to return nothing or return some cleanup function
  //but not a promise or anything else

  if (loading) {
    console.log("inside loading");
    return <h1>loading</h1>;
  }

  return (
    <div>
      {console.log("inside original comp")}
      <BsCashCoin />
      <input
        type="number"
        value={num}
        onChange={(e) => {
          console.log("before num");
          setNum(e.target.value);
          console.log("after num");
        }}
      />
      <DropDown coins={Object.keys(menu)} setVal={setVal1} />=
      <span className="output">
        {num * (menu[val2].value / menu[val1].value)}
      </span>
      <DropDown coins={Object.keys(menu)} setVal={setVal2} />
    </div>
  );
}
export default ExchConv;