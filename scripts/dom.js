function toggle() {
  const statusElement = document.getElementById('status');
  if (statusElement.innerHTML == 'true') {
    statusElement.innerHTML = 'false';
  } else {
    statusElement.innerHTML = 'true';
  }
}
const x = document.querySelector('.textView');
if (x) {
  addEventListener('click', toggle);
}

function addBookToList(book) {
  const list = document.querySelector('#book-list');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td id="status" class='textView'>${book.read}</td>
    <td><a href="#" class="delete">X</a></td>
    `;
  list.appendChild(row);
}

// this clears the form field

function clearFields() {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
  document.querySelector('#read').value = '';
}

export { addBookToList, clearFields };
