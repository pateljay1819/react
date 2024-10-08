import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      time: new Date().toLocaleTimeString() // Initialize time
    };
  }

  // Lifecycle method: called after the component is mounted
  componentDidMount() {
    console.log('Counter component mounted');
    this.timeInterval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() }); // Update time every second
    }, 1000);
  }

  // Lifecycle method: called before the component is removed from the DOM
  componentWillUnmount() {
    console.log('Counter component will unmount');
    clearInterval(this.timeInterval); // Clear interval to avoid memory leaks
  }

  // Method to increment the counter
  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  // Method to decrement the counter
  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h2>{this.state.time}</h2>/ {/* Display current time */}
      </div>
    );
  }
}

export default Counter;