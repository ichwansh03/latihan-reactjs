import React, { useState } from 'react'

export default function Counter03() {

    //[value, set to value/method]
    const [counter, setCounter] = useState(0);

    const increment =()=>{
        setCounter(counter+1)
    }

    const decrement =()=>{
        setCounter(counter-1)
    }

  return (
    <div>
        <h2>Counter with Hook : {counter}</h2>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
  )
}
