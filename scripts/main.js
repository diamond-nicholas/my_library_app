// eslint-disable-next-line import/extensions
import { addBookToList, clearFields } from './dom.js';

// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// storage
function getBook() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

function addBook(book) {
  const books = getBook();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(title) {
  const books = getBook();
  books.forEach((book, index) => {
    if (book.title === title) {
      books.splice(index, 1);
    }
  });
  localStorage.setItem('books', JSON.stringify(books));
}

// handles task
function displayBooks() {
  const books = getBook();

  // loop through the books

  books.forEach((book) => addBookToList(book));
}
// this deletes a book
function deleteBook(ele) {
  if (ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}

// Events: display books
document.addEventListener('DOMContentLoaded', displayBooks);

document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent default
  e.preventDefault();

  // gets the value
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;
  // instantiate a book
  const book = new Book(title, author, pages, read);

  // console.log(book);
  // add book to list
  addBookToList(book);

  // add book to store
  addBook(book);

  // clear form field
  clearFields();
});

// Event: remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from page
  deleteBook(e.target);
  // remove book from store
  removeBook(e.target.parentElement.previousElementSibling.parentElementSibling.parentElementSiblingtextContent);
});
