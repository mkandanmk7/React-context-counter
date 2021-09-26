import { CounterContext } from "./Context";

export default function Test() {
  return (
    <>
      <CounterContext.Consumer>
        {(context) => {
          console.log(context);

          return (
            <div>
              <p>Hello</p>
              <p>Count: {context.count}</p>
            </div>
          );
        }}
      </CounterContext.Consumer>
    </>
  );
}
