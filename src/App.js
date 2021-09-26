import { useState } from "react";
import "./App.css";
import { CounterContext } from "./Context";
import Muthu from "./Muthu";
import Test from "./Test";

function App({ name, comp }) {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <div className="App">
        <h2>
          Welcome to {name} General counter {comp}
        </h2>
        <p>Count: {count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <CounterContext.Provider
        value={{
          count: count,
          name: "Muthu",
          increment: inc,
          decrement: dec,
          reset: reset,
        }}
      >
        <Test />
        <Muthu />
      </CounterContext.Provider>
    </>
  );
}

export default App;
