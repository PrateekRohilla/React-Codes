import React, { useEffect } from 'react'
import {useState} from 'react'

/*
Timer that counts down from a specified time
Start - 60
60 59 58 57 ...
*/

const Timer = () => {

    const [time, setTime] = useState(60);

    useEffect(() => {
      if(time > 0){
        const timer = setTimeout(() => setTime(time-1),1000);
        return () => clearTimeout(timer);
      }

    },[time])

    return (
        <>
            <h3>Timer</h3>
            <p>Time Left: {time} second</p>
        </>
    )
}

export default Timer;