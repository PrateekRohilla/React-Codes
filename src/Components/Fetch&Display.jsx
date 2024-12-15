import React, { useEffect } from 'react'
import { useState } from 'react';

const FetchDisplay = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then(jsonData => setData(jsonData))
    },[])

    return (
        <>
            <h3>Fetch Data from API & Display it</h3>
            <div>
                {
                    data ? (
                        <div>
                            <p>Title: {data.title}</p>
                            <p>Body: {data.body}</p>
                        </div>
                    ) : 
                    (
                        <p>Loading...</p>
                    )
                }
            </div>
        </>
    )
}

export default FetchDisplay;