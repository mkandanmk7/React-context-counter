// context using Class component:

import { Component } from "react";
import { CounterContext } from "./Context";

export default class ClassContext extends Component {
  static contextType = CounterContext;

  render() {
    return (
      <div className="App">
        <h2>Context Using class Component </h2>
        <p>
          <b> Class Count</b>
          {this.context.count}
        </p>
        <button onClick={this.context.increment}> Class Inc</button>
        <button onClick={this.context.decrement}> Class Dec</button>
        <button onClick={this.context.reset}> Class Reset</button>
      </div>
    );
  }
}
