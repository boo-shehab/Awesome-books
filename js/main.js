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
    if(localStorage.getItem('formInputs'));
        return JSON.parse(localStorage.getItem('formInputs'));
    return [];
}

const booksList = getLocalStorage();

function displaybooks(book){
    const maindiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const removeButton = document.createElement('button');
    h2.innerHTML=book.title;
    p.innerHTML=book.author;
    removeButton.innerHTML = `remove`;
    maindiv.appendChild(h2);
    maindiv.appendChild(p);
    maindiv.appendChild(removeButton);
    container.appendChild(maindiv);

}
for(let i=0; i<booksList.length; i++){
    displaybooks(booksList[i]);
};
