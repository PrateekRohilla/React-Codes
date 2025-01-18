import react, { useState } from 'react';

const SearchBar = () => {

    const fruits = [
        "Apple",
        "Banana",
        "Orange",
        "Mango",
        "Strawberry",
        "Pineapple",
        "Grapes",
        "Watermelon",
        "Cherry",
        "Blueberry",
        "Peach",
        "Kiwi",
        "Papaya",
        "Guava",
        "Lemon",
        "Pomegranate",
        "Coconut",
        "Raspberry",
        "Lychee",
        "Apricot"
    ];

    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = fruits.filter((item) => {
        item.toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <>
            <h3>Search Bar</h3>
            <p>
                that filters list of items based on user input
            </p>
            <br /><br />
            <input type="text" placeholder='Search Fruits ...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <ul>
            {filteredItems.map((item, index) => {
                <li key={index}>{item}</li>
            })}
            </ul>
            {console.log(searchTerm, filteredItems)}
        </>
    )

}

export default SearchBar;