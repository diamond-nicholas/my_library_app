/* eslint-disable max-len */
const alert = document.querySelector('.alert');
const form = document.querySelector('#book-form');
const mainTitle = document.querySelector('#title');
const mainAuthor = document.querySelector('#author');
const mainPages = document.querySelector('#pages');
const mainRead = document.querySelector('#read');
const submitBtn = document.querySelector('.submit');

// const container = document.querySelector('.book-container');
const bookList = document.querySelector('.book-list');

let editElement;
let editElementTitle;
let editElementAuthor;
let editElementPages;
let editFlag = false;
// let editID = '';

function setBackToDefault() {
  mainTitle.value = '';
  mainAuthor.value = '';
  mainPages.value = '';
  mainRead.value = '';
  editFlag = false;
  // editID = '';
  submitBtn.textContent = 'submit';
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.style.color = action;
  setTimeout(() => {
    alert.textContent = '';
    alert.style.color = '';
  }, 2000);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement;
  // const id = element.dataset;
  bookList.removeChild(element);
  displayAlert('item removed', 'red');
  setBackToDefault();
}

function editItem(e) {
  // eslint-disable-next-line no-unused-vars
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement;
  editElementTitle = e.currentTarget.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;

  editElementAuthor = e.currentTarget.parentElement.previousElementSibling.previousElementSibling;

  editElementPages = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  mainRead.value = editElement.textContent;
  mainTitle.value = editElementTitle.textContent;
  mainAuthor.value = editElementAuthor.textContent;
  mainPages.value = editElementPages.textContent;
  editFlag = true;
  // editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

function addItem(e) {
  e.preventDefault();
  const valueTitle = mainTitle.value;
  const valueAuthor = mainAuthor.value;
  const valuePages = mainPages.value;
  const valueRead = mainRead.value;
  const id = new Date().getTime().toString();
  if (valueTitle && valueAuthor && valuePages && valueRead && !editFlag) {
    const element = document.createElement('article');
    element.classList.add('book-item');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<div class="titleValue">${valueTitle}</div>
                <div class="authorValue">${valueAuthor}</div>
                <div class="pagesValue">${valuePages}</div>
                <div class="readStatus">${valueRead}<button type="button" class="edit-btn">
                  <i class="far fa-edit"></i>
                </button></div>
                <button type="button" class="delete-btn">
                  <i class="far fa-trash"></i>
                </button>`;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    bookList.appendChild(element);
    displayAlert('succesfully added', 'green');
    setBackToDefault();
  } else if (valueTitle && valueAuthor && valuePages && valueRead && editFlag) {
    editElement.innerHTML = valueRead;
    displayAlert('succesfully edited', 'green');
    setBackToDefault();
  } else {
    displayAlert('please fill the form', 'red');
  }
}

form.addEventListener('submit', addItem);
