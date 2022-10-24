const bookTitle = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#submit');
const container = document.querySelector('#books-container');


submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value.trim() !== '' && author.value.trim() !== '') {
    const list = {
      title: bookTitle.value,
      author: author.value,
    };
    booksList.push(list);
    setLocalStorage(booksList);
    console.log(getLocalStorage());
  }
});

function setLocalStorage(booksList) {
  localStorage.setItem('formInputs', JSON.stringify(booksList));
}
function getLocalStorage() {
  return JSON.parse(localStorage.getItem('formInputs'));
}

const booksList = getLocalStorage();