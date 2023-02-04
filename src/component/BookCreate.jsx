import React, { useState } from 'react';

const BookCreate = ({ onCreateBook }) => {
    const [title, setTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreateBook(title);
        setTitle("");
    }
    const handleChange = (e) => {
        setTitle(e.target.value);
    }
    return (
        <div className='BookCreate book-create'>
            <form action="" onSubmit={handleSubmit}>
                <label>Add Book {title.length > 0 && <span>: {title}</span>}</label>

                <input type="text" value={title} onChange={handleChange} placeholder="Add Book" />
                <br />

                <button>Add Book</button>
            </form>
        </div>
    )
}

export default BookCreate