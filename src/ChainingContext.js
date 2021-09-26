import React from "react";
import ClassContext from "./ClassContext";
import { CounterContext } from "./Context";
import { CountryContext } from "./Context";
export default function ChainingContext() {
  return (
    <>
      <div className="App">
        <h2>Context chaining Component</h2>
        {/* chainning context */}
        <CounterContext.Consumer>
          {(context) => {
            console.log(context);
            return (
              <CountryContext.Consumer>
                {(country) => {
                  console.log(country);
                  return (
                    <>
                      <p>
                        <b>Count:</b>
                        {context.count}
                      </p>
                      <p>
                        <b>Country:</b>
                        {country.name}
                      </p>
                      <div className="App">
                        <ClassContext />
                      </div>
                    </>
                  );
                }}
              </CountryContext.Consumer>
            );
          }}
        </CounterContext.Consumer>
      </div>
    </>
  );
}
