import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onAdd, onReset, counters, onIncrement, onDelete } = this.props;
    console.log("Counters - Rendered");
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>

        <button onClick={onAdd} className="btn btn-primary btn-sm m-2">
          Add
        </button>

        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onAdd={onAdd}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
