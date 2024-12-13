import React from 'react';
import {useState} from 'react'

const UserInput = () => {

    const [input, setInput] = useState('');

    return (
        <>
            <h3>Display User input in Real time</h3>
            <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}} />
            <p>User typed: {input}</p>
        </>
    );
}

export default UserInput;