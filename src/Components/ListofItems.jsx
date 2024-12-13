import React from 'react'
import {useState} from 'react'

const ListofItems = () => {

    const items = ['a','b','c','d','e'];

    return (
        <>
            <h3>List of Items</h3>
            <ul>
                {
                    items.map((item,index) => {
                     return <li key={index}>{item}</li>   
                    })
                }
            </ul>
        </>
    )

}

export default ListofItems;