// import Counter from "./Components/Counter";
// import Fruits from "./Components/Fruits";
// import TextTracker from "./Components/TextTracker";
// import Notes from "./Components/Notes"
// import {Child1, Child2} from "./Components";
import Child1 from "./Components/Child1";
import Child2 from "./Components/Child2";
import { useState } from "react";
function App() {
  let [parentCount, setparentCount] = useState();
  function callback(val) {
    setparentCount(val);
  }
  return (
    <div>
      {/* <Counter/> */}
      {/* <Fruits/> */}
      {/* <TextTracker /> */}
      {/* <Notes/> */}
      <p>parent: {parentCount}</p>
      <Child1 property={callback} />
      <Child2 countval={parentCount} />
    </div>
  );
}
export default App;
