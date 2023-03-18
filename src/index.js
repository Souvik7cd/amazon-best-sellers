import React from 'react';
import { createRoot } from 'react-dom/client';

import books from './books';
import Book from './Book';

import './index.css';

const BookList = () => {
	const getBook = (id) => {
		const book = books.find(book => (id === book.id));
		console.log(book);
		return book;
	};

	return (
		<>
			<h1>Amazon Best Sellers</h1>
			<section className="booklist">
				{books.map((book, index) => {
					return <Book key={book.id} {...book} index={index} getBook={getBook} />;
				})}
			</section>
		</>
	);
};

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<BookList />);