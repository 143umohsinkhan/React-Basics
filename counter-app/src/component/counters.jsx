import React, { Component } from "react";
import Counter from "./Counter.jsx";

export default class Counters extends Component {
  state = {
    tags: [
      {
        id: 0,
        value: 1
      },
      {
        id: 1,
        value: 2
      },
      {
        id: 2,
        value: 3
      },
      {
        id: 3,
        value: 0
      }
    ]
  };

  onDelete = counterid => {
    console.log(counterid);
    const counters = this.state.tags.filter(c => c.id !== counterid);
    this.setState({ tags: counters });
  };

  OnIncrement = counter => {
    console.log("Enter on increment");
    counter.value++;
    this.setState({ tag });
  };

  onReset = () => {
    console.log("Enter in reset");
    console.log(this.state.tags.length);
    const counters = this.state.tags.map(m => {
      m.value = 0;
      return m;
    });
    this.setState({ tags: counters });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.onReset} className="btn-primary btn sm m-2">
          Reset
        </button>
        {this.state.tags.map(tag => (
          <Counter
            key={tag.id}
            countervalue={tag}
            OnIncrement={this.OnIncrement}
            onDelete={this.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}
