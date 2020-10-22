import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onSubmit = (e) => {
      e.preventDefault();
    setCounter(counter + 1);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit}>
        <lable>Counter : {counter}</lable>
        <br />
        <button onClick={e => onSubmit(e)}>Increment</button>
      </form>
    </div>
  );
};

export default Counter;
