import React from "react";
import { CounterContext } from "./Context";

const Muthu = () => {
  return (
    <>
      <div className="App">
        <h1>Welcome to Muthu</h1>

        <CounterContext.Consumer>
          {({ name, count, increment, decrement, reset }) => {
            return (
              <>
                <p>Name: {name}</p>
                <p>Count:{count}</p>
                <button onClick={increment}>Muthu Inc</button>
                <button onClick={decrement}>Muthu Dec</button>
                <button onClick={reset}>Muthu Reset</button>
              </>
            );
          }}
        </CounterContext.Consumer>
        <h2>Ended Consumer</h2>
      </div>
    </>
  );
};

export default Muthu;
