import React from "react";
import { useState } from "react";

const ToDo1 = () => {

    const [inputData, setInputData] = useState('');

    const [listItems, setListItems] = useState([]);

    const addTodo = () => {
        if (inputData !== '') {
            setListItems([...listItems, inputData]);
            setInputData('');
        }
    }

    const deleteTodo = (indexToDelete) => {
        const updatedItems = listItems.filter((_, index) => index != indexToDelete);
        setListItems(updatedItems);
    }

    return (
        <>
            <h3>Todo - Add / Delete</h3>
            <div>
                <div className="addTodo">
                    <input type="text" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <button onClick={addTodo}>add</button>
                </div>
                <div className="itemList" style={{ "marginTop": "50px" }}>
                    <ul style={{ "listStyleType": "none" }}>
                        {listItems.map((item, index) => {
                            return <div>
                                <li key={index}>{item}</li>
                                <button onClick={() => deleteTodo(index)}>delete</button>
                            </div>
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ToDo1;