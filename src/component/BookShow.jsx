import React, { useState } from 'react';
import bin from "../assets/bin.png";
import pen from "../assets/pen.png";

const BookShow = ({ id, title, onDelete, onEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [renamedBook, setRenamedBook] = useState(title);
    const handleDelete = () => {
        onDelete(id);
    }
    const handleEdit = () => {
        setShowEdit((prevStatus) => !prevStatus);

    }
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    const handleChange = (e) => {
        setRenamedBook(e.target.value);
        // console.log(e.target.value);
    }
    const handleOnEdit = () => {
        onEdit(renamedBook, id);
        setShowEdit((prevStatus) => !prevStatus);
    }
    return (
        <div className='singleBook' style={{ backgroundImage: `url(https://picsum.photos/seed/${id}/200/300)` }}>
            <h3>{title}</h3>

            <div className="flex buttons">
                <button onClick={() => handleDelete(id)}>
                    <img src={bin} alt="delete" />
                </button>
                <button onClick={() => handleEdit(id)}>
                    <img src={pen} alt="edit" />
                </button>
            </div>
            {showEdit && <div className="edit-area">
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Rename book' value={renamedBook} onChange={handleChange} />
                    <button onClick={handleOnEdit}>Save</button>
                </form>
            </div>}

        </div>
    )
}

export default BookShow