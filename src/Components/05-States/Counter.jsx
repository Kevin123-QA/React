import { useState } from "react";
import ChildCounter from "./ChildCounter";

const Counter = (props) => {
  //1. count - stateful value
  //2. setCount - a function to update the stateful value
  const [count, setCount] = useState(0);
  
  let step = 10;

  const increment = () => {
    console.log("we go up");
    // count++;
    setCount((c) => c + step);
    console.log(count);
  };

  return (
    <>
      <ChildCounter count={count} />
      <p>The current value of the counter is {count}</p>
      <button onClick={increment}>++</button>
      <button onClick={() => setCount((c) => c - step)}>--</button>
    </>
  );
};

export default Counter;
