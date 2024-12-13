import React from 'react'
import {useState} from 'react'

const Counter = () => {

    const [count, setCount] = useState(0);

    return(
        <>
            <h3>Counter</h3>
            <button onClick={() => {count? setCount(count-1): ""}}>-</button>
            <span>{count}</span>
            <button onClick={() => {setCount(count+1)}}>+</button>
        </>
    )
}

export default Counter;