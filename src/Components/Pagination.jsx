import react, { useState } from 'react';

const Pagination = ({ items, itemsPerPage }) => {

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const pageNumbers = [];
    for (let i = 1; i < Math.ceil(items.length / itemsPerPage); i++)
        pageNumbers.push(i);

    return (
        <>
            <h3>This is Pagination</h3>
            {
                currentItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
            {/* <button onClick={() => setCurrentPage(currentPage - 1)}>prev</button> */}
            <button onClick={() => {currentPage > 1 ? setCurrentPage(currentPage - 1) : ""}}>
                prev
            </button>
            <button onClick={() => {currentPage <= pageNumbers.length ? setCurrentPage(currentPage + 1) : ""}}>
                next
            </button>
            {console.log(items)}
        </>
    )

}

export default Pagination;