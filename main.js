let myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

// handles task
function displayBooks() {
    const StoredBoooks = [
       {
        title: 'book one',
        author: 'nicholas',
        pages: 59,
        read: true
       },
       {
        title: 'book two',
        author: 'diamond',
        pages: 80,
        read: false
       }
    ];
    const books = StoredBoooks;


    //loop through the books

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

    list.appendChild(row)
};
//this deletes a book
function deleteBook(ele) {
    if(ele.classList.contains('delete')) {
        ele.parentElement.parentElement.remove();
    }
};

// this clears the form field

function clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').value = '';
}

// storage

// Events: display books
document.addEventListener('DOMContentLoaded', displayBooks);


// Event: add a book
document.querySelector('#book-form').addEventListener('submit', (e) => {
    //prevent default
    e.preventDefault();

    //gets the value
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    //validate
    if(title === '' || author === '' || pages === '' || read === '') {
        alert('please fill in all fields');
    } else {
        //instantiate a book
        const book = new Book(title, author, pages, read);
        // add book to list
        addBookToList(book);
        // clear form field
        clearFields();
    }


});

//Event: remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
    deleteBook(e.target);
});
