import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment } from './Action/counteraction';

function Counter1() {
const counter=useSelector((state)=>state.counter)
const dispatch=useDispatch();
const onIncrement=()=>{
    
    dispatch(Increment());
}
const onDecrement=()=>{
    dispatch(Decrement());
}

  return (
    <div>
        <h1>counter1</h1>

        <button onClick={onIncrement}>Increment</button>
        <h4>{counter}</h4>
        <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter1