import React from 'react';
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onEdit }) => {
    const SingleBook = books.map(book => <BookShow key={book.id} id={book.id} title={book.title} onDelete={onDelete} onEdit={onEdit} />)
    return (
        <div>
            {SingleBook}
        </div>
    )
}

export default BookList