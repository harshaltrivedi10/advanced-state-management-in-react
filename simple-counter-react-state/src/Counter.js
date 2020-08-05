import React, { Component } from 'react';

const getStateFromDocumentTitle = () => {
  const storage = document.title;
  console.log(storage);
  if (storage[0] === '{') return storage;
  return { count: 0 };
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = getStateFromDocumentTitle();
  }

  increment = () => {
    this.setState(
      (state, props) => {
        const { max, step } = props;
        if (state.count >= max) return;
        return { count: state.count + step };
      },
      () => {
        document.title = this.state.count;
      },
    );
  };

  decrement = () => {
    this.setState(
      (state) => {
        return { count: state.count - 1 };
      },
      () => {
        document.title = this.state.count;
      },
    );
  };

  reset = () => {
    this.setState(
      () => {
        return { count: 0 };
      },
      () => {
        document.title = this.state.count;
      },
    );
  };

  render() {
    document.title = this.state.count;
    const { count } = this.state;
    return (
      <div className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          <button onClick={this.reset}>Reset</button>
        </section>
      </div>
    );
  }
}

export default Counter;
