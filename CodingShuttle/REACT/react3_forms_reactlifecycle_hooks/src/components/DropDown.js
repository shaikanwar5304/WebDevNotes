import React  from "react";
function DropDown(props) {
  return (
    <select
      onChange={(e) => {
        console.log("select in DropDown changed to ",e.target.value);
        props.setVal(e.target.value);
      }}>
      {props.coins.map((elem,i) => {
        return <option key={i} value={elem}>{elem}</option>;
      })}
    </select>
  );
}
export default DropDown;
