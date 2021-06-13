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

    //instantiate a book
    const book = new Book(title, author, pages, read);
 

});






















//add book to library
// const usersData = function addBookToLibrary(e) {
//     e.preventDefault(); //prevents the forms normal behaviour from submitting
//     let data = {
//         formTitle: document.querySelector('#title').value,
//         formAuthor: document.querySelector('#author').value,
//         formPages: document.querySelector('#pages').value,
//         formRead: document.querySelector('#read').value
//     }
//     myLibrary.push(data);
//     const formData = document.querySelector('#book-form');
//     // formData.reset(); //resets the form value 

//     console.log('added', {myLibrary});
//     console.log(Object.values(myLibrary));
//     console.log(myLibrary[0].formTitle);


    //append to html
//     const newBook = document.querySelector('#msg pre')
//     newBook.textContent = '\n' + JSON.stringify(Object.values(myLibrary), '\t', 2)


//     //saving to local storage
//     function getBooks() {
//         let books;
//         if(localStorage.getItem('books') === null) {
//             books = []
//         } else {
//             boooks = JSON.parse(localStorage.getItem(books));
//         }

//         return books;
//     }

//     //add to local storage
//     function addBook(book) {
//         const books = getBooks();
//         books.push(book);
//         localStorage.setItem('books', JSON.stringify(myLibrary))
//     }


//     // let storedData = JSON.parse);
//     // console.log(storedData);


//     //
//     const show = document.querySelector('.store article');
//     show.textContent = storedData;
// }

// document.addEventListener('DOMContentLoaded', () =>{
//     document.querySelector('.submit').addEventListener('click', usersData);
// });