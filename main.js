let myLibrary = [];

// book constructor
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

//add book to library
const usersData = function addBookToLibrary(e) {
    e.preventDefault(); //prevents the forms normal behaviour from submitting
    let data = {
        formTitle: document.querySelector('#title').value,
        formAuthor: document.querySelector('#author').value,
        formPages: document.querySelector('#pages').value,
        formRead: document.querySelector('#read').value
    }
    myLibrary.push(data);
    const formData = document.querySelector('#book-form');
    formData.reset(); //resets the form value 

    // console.log('added', {myLibrary});
    // console.log(Object.values(myLibrary));


    //append to html
    const newBook = document.querySelector('#msg pre')
    newBook.textContent = '\n' + JSON.stringify(Object.values(myLibrary), '\t', 2)


    //saving to local storage
    let storedData = localStorage.setItem('MyLibrabyList', JSON.stringify(myLibrary));
    // console.log(storedData);


    //
    const show = document.querySelector('.store article');
    show.textContent = storedData;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector('.submit').addEventListener('click', usersData);
});