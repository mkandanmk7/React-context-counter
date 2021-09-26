import { useState } from "react";
import "./App.css";
import { CounterContext } from "./Context";
import Test from "./Test";

function App({ name }) {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);
  const reset = () => setCount(0);
  return (
    <>
      <div className="App">
        <h2>Welcome to {name} Component</h2>
        <p>Count: {count}</p>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      <CounterContext.Provider
        value={{ count: count, increment: inc, decrement: dec, reset: reset }}
      >
        <Test />
      </CounterContext.Provider>
    </>
  );
}

export default App;
