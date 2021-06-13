// book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// handles task
function displayBooks() {
  const books = getBook();

  // loop through the books

  books.forEach((book) => addBookToList(book));
}

function addBookToList(book) {
  const list = document.querySelector('#book-list');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

  list.appendChild(row);
}
// this deletes a book
function deleteBook(ele) {
  if (ele.classList.contains('delete')) {
    ele.parentElement.parentElement.remove();
  }
}

// this clears the form field

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').value = '';
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

// Events: display books
document.addEventListener('DOMContentLoaded', displayBooks);

// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // prevent default
  e.preventDefault();

  // gets the value
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').value;

  // validate
  if (title === '' || author === '' || pages === '' || read === '') {
    alert('please fill in all fields');
  } else {
    // instantiate a book
    const book = new Book(title, author, pages, read);
    // add book to list
    addBookToList(book);

    // add book to store
    addBook(book);

    // clear form field
    clearFields();
  }
});

// Event: remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
  // remove book from page
  deleteBook(e.target);

  // remove book from store
  removeBook(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
});
