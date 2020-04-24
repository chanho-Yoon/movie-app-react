import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0,
    currentCount: 0,
  };
  add = () => {
    this.setState((current) => ({ count: current.count + 1, currentCount: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  getCurrentValue = () => {
    const currentValue = this.state.count;
    console.log(currentValue);
  };
  render() {
    return (
      <div>
        <input type="text"></input>
        <h1>The number is : {this.state.count}</h1>
        <h1>Current value is : {this.state.currentCount}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>Minus</button>
        <button onClick={this.getCurrentValue}>getCurrentValue</button>
      </div>
    );
  }
}

export default App;
