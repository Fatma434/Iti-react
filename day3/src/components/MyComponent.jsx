import axios from "axios";
import React, { Component } from "react";

export default class MyComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      done: "",
    };
    // console.log("CTOR IS RUNNING");
  }

  // handleAdd = () => {
  //   this.setState(({ count }) => {
  //     return { count: count + 1 };
  //   });
  // };

  componentDidMount() {
    // console.log("COMPONENT DID MOUNT ");
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
    });
  }

  shouldComponentUpdate() {
    // console.log("shouldComponentUpdate");
    return !false;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("ComponentDidUpdate ");
    // console.log(prevProps, prevState);
    //Not Right to setState in componentDidUpdate Or componentWillUpdate
    //Fetching data based on prop changes
    // this.setState(({ done }) => ({ done: "done" }));
  }

  componentWillUnmount() {
    // console.log("componentWillUnmount");
  }

  render() {
    // console.log("RENDER");
    // class => className
    // for =>HTMLFor
    return (
      <>
        <div>
          {this.state.count} {this.state.done}
        </div>

        <button
          onClick={() => {
            console.log(this.state.count);
            this.setState((oldstate) => ({ count: oldstate.count + 1 }));
            this.setState((o) => ({ count: o.count + 10 }));
            // this.setState({ count: this.state.count + 10 });
            // this.setState({ count: this.state.count + 1 });
          }}
        >
          both
        </button>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.setState({ count: this.state.count + 10 });
          }}
        >
          + 10{" "}
        </button>
      </>
    );
  }
}
