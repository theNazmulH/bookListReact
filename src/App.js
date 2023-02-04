import { useState } from "react";
import BookCreate from "./component/BookCreate";
import BookList from "./component/BookList";

function App() {
	const [book, setBook] = useState([]);
	const createBook = title => {
		const updatedBook = [
			...book,
			{
				title,
				id: Math.round(Math.random() * 10000),
			},
		];
		setBook(updatedBook);
	};
	const deleteBookById = id => {
		// console.log("Deleted", id);
		const updatedBook = book.filter(b => {
			return b.id !== id;
		});
		setBook(updatedBook);
	};
	const editById = (renamedBook, id) => {
		const updatedBook = book.map(b => {
			if (b.id === id) {
				return {
					...b,
					title: renamedBook,
				};
			}
			console.log(id);

			return b;
		});
		setBook(updatedBook);
	};
	return (
		<div className="App">
			<header className="App-header">
				<h2>Book List</h2>
				<BookCreate onCreateBook={createBook} />
			</header>
			<div className="bookLists">
				<BookList
					books={book}
					onDelete={deleteBookById}
					onEdit={editById}
				/>
			</div>
		</div>
	);
}

export default App;
