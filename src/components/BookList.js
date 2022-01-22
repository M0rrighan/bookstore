import React from 'react';
import BookItem from './BookItem';

const BookList = () => {
  const exampleBookList = [
    {
      id: '01',
      title: 'ExampleTitle 1',
      author: 'Author 1 here',
      category: 'example Category 1',
      progressPercent: '10',
      chapter: 'chapter 1',
    },
    {
      id: '02',
      title: 'ExampleTitle 2',
      author: 'Author 2 here',
      category: 'example Category 2',
      progressPercent: '20',
      chapter: 'chapter 11',
    },
  ];

  const books = exampleBookList.map((book) => (
    <li key={book.id}>
      <BookItem
        title={book.title}
        author={book.author}
        category={book.category}
        progressPercent={book.progressPercent}
        chapter={book.chapter}
      />
    </li>
  ));

  return (
    <ul className="books-ul">
      {books}
    </ul>
  );
};

export default BookList;
