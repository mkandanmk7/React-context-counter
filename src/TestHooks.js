import React, { useContext } from "react";
import ChainingContext from "./ChainingContext";
import { CounterContext } from "./Context";

export default function TestHooks() {
  const context = useContext(CounterContext);
  console.log(context);
  return (
    <>
      <div className="App">
        <h2>Test Hooks Component </h2>
        <p>
          <b>Count by Hooks : </b>
          {context.count}
        </p>
        <button onClick={context.increment}>Hooks Inc</button>
        <button onClick={context.decrement}>Hooks Dec</button>
        <button onClick={context.reset}>Hooks Reset</button>
      </div>
      <ChainingContext />
    </>
  );
}
