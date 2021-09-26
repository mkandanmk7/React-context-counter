import { CounterContext } from "./Context";
import TestHooks from "./TestHooks";

export default function Test() {
  return (
    <>
      <CounterContext.Consumer>
        {(context) => {
          console.log(context); // all values available here from app component;

          return (
            <>
              <div className="App">
                <hr />
                <h2>Welcome to Test Component</h2>
                <p>Count: {context.count}</p>
                <button onClick={context.increment}>Test Inc</button>
                <button onClick={context.decrement}>Test Dec</button>
                <button onClick={context.reset}>Test Reset</button>
              </div>
              <TestHooks />
            </>
          );
        }}
      </CounterContext.Consumer>
    </>
  );
}
