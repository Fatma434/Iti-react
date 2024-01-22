import { PureComponent } from "react";

class Greeting extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
      count2: props.count,
      count3: 4,
    };
    // console.log(props);
  }

  handleAdd = () => {
    this.setState(({ count, ...rr }) => {
      console.log("LOG :", rr);
      return { count: count + 1 };
    });
  };

  handleRemove = () => {
    this.setState(({ count }) => {
      return { count: count - 1 };
    });
  };

  render() {
    return (
      <>
        <p> hello ya {this.props.name}</p>
        <div>count : {this.state.count}</div>
        <div>count : {this.state.count3}</div>
        <br />
        <button onClick={this.handleAdd}> + </button>
        <br />
        <br />
        <button onClick={this.handleRemove}> - </button>
      </>
    );
  }
}

export default Greeting;
