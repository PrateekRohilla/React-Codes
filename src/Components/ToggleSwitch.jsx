import React from 'react'
import { useState } from 'react'

const ToggleSwitch = () => {

    const [checked, setChecked] = useState(false);

    const handleToggle = () =>{
        setChecked(!checked);
    }

    return(
        <>
            <h3>Toggle</h3>
            <input type="checkbox" onChange={handleToggle} />
            <p>{checked? "On": "Off"}</p>
        </>
    )
}

export default ToggleSwitch;