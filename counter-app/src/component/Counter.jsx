import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   count: this.props.countervalue.value
  // };

  // onButtonClick = () => {
  //   console.log("Enter");
  //   this.state.count = this.state.count + 1;
  //   this.setState({ count: this.state.count });
  // };

  render() {
    console.log(this.props.countervalue.id);

    return (
      <React.Fragment>
        <div className="m-2">
          <h1 className={this.renderClass()}>{this.renderCount()}</h1>
          <button
            onClick={() => this.props.OnIncrement(this.props.countervalue)}
            className="btn btn-primary"
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.countervalue.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }

  renderCount() {
    const { value } = this.props.countervalue;
    return value == 0 ? "Zero" : value;
  }

  renderClass() {
    let classset = "badge m-2 badge-";
    return (classset +=
      this.props.countervalue.value == 0 ? "warning" : "primary");
  }
}
