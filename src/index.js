import React, { Component } from 'react';
import { render } from 'react-dom';

import { createStore } from "redux";
import { connect, Provider } from "react-redux";

import './styles.scss';

const initialState = {
  count: 0
}

// to avoid misspelling, we can put the actions into a variable
// ex: const INCREMENT = 'INCREMENT' and just pass INCREMENT
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
  type: INCREMENT
})

const decrement = () => ({
  type: DECREMENT
})

const reducer = (state = initialState, action) => {
  if(action.type === INCREMENT) {
    return {
      count: state.count + 1
    }
  } else if (action.type === DECREMENT) {
    return {
      count: state.count - 1
    }
  }
  return state;
}



const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, increment, decrement } = this.props;
    console.log({ count, increment, decrement });
    return (
      <main className="Counter">
        <p className="count">{ count }</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button>Reset</button>
        </section>
      </main>
    )
  }
}


const mapStateToProps = (state) => { return state };

// pointing to store.dispatch
// because it's an object, we don't have to store it in a variable and can pass it in connect
const mapDispatchToProps = {
    increment,
    decrement
};


const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter)

render(
  <Provider store={store}>
  <CounterContainer />
  </Provider>, 
  document.getElementById('root')
  
)
