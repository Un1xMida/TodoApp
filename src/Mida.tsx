import React, { FC, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';

interface State {
  count: number
}

type Action = { type: 'increment' } | { type: 'decrement' } | { type: 'set', payload: number }

const initialValue: State = {
  count: 0
}

const counterReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count + 1 }
    case 'set':
      return { count: action.payload }
    default:
      throw new Error();
  }
}

const mida: FC = () => {
  const [counter, dispatch] = useReducer(counterReducer, initialValue)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>{counter.count}</div>
        <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        <input value={counter.count} onChange={e => dispatch({ type: 'set', payload: parseInt(e.target.value) })} />
      </header>
    </div>
  );
}

export default mida;