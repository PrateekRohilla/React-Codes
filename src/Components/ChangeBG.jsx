import react from 'react';
import { useState } from 'react';

const ChangeBG = () => {

    const [backgroundColor, setBackgroundColor] = useState('green');

    const handleClick = () => {
        const newColor = backgroundColor === 'green' ? 'yellow' : 'green';
        setBackgroundColor(newColor);
    }


    return (
        <>
            <h3>Click to change background color</h3>
            <div onClick={handleClick} style={{ 
                height: "100px", 
                width: "200px", 
                border: "2px solid white", 
                backgroundColor,
                cursor: 'pointer'
                }}>
                    Click me
            </div>
        </>
    )

}

export default ChangeBG;