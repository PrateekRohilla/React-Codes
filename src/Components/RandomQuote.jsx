import React, {useEffect, useState} from 'react';

const RandomQuote = () => {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(jsonData => setQuote(jsonData.quote));
    },[])

    return(
        <>
            <h3>Random Quote</h3>
            <div>{quote}</div>
        </>
    )
}

export default RandomQuote;