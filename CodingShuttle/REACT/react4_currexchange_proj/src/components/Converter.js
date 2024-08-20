import React, { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";
import "./converter.css";

function Converter() {
  const [loading, setloading] = useState(true);
  const [data, setData] = useState();
  const [val1, setValue1] = useState(1);
  const [val2, setValue2] = useState(0);
  const [num, setNum] = useState(0);

  async function getData() {
    let resp = await fetch("https://api.coingecko.com/api/v3/exchange_rates", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    let jsonData = await resp.json();
    setData(jsonData.rates);
    setloading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  if (loading) {
    return <h1>loading...</h1>;
  }
  let names = Object.keys(data).map((elem, index) => {
    return { value: data[elem].value, label: data[elem].name, key: index };
  });
  return (
    <div className="container ">
      <Card className="crypto-card" title={"Crypto Coverter"}>
        <Form>
          <Input className=""
            onChange={(value) => {
              console.log("input changed ", value.target.value);
              setNum(value.target.value);
            }}
          ></Input>
        </Form>
        <div className="select div">
          <Select
            key={1}
            placeholder="select a coin"
            onChange={(value) => {
              console.log(value, "select1 changed");
              setValue1(value);
            }}
            options={names}
          ></Select>
          <Select
            key={2}
            placeholder="select a coin"
            onChange={(value) => {
              console.log(value, "select2 changed");
              setValue2(value);
            }}
            options={names}
          ></Select>
        </div>
        <div className="result div">{(val2 * num) / val1}</div>
      </Card>
    </div>
  );
}
export default Converter;
