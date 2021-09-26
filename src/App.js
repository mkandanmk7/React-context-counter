import { useState } from "react";
import "./App.css";
import { Test } from "./Test";

function App({ name }) {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h2>Welcome to {name} Component</h2>
      <p>Count: {count}</p>
      <Test name={name} count={count} />
    </div>
  );
}

export default App;
