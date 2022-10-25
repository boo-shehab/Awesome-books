const bookTitle = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#submit');
const container = document.querySelector('#books-container');

class Books {
    booksArray

    constructor() {
      this.getLocalStorage();
    }

    displaybooks() {
      container.innerHTML = '';
      for (let i = 0; i < this.booksArray.length; i += 1) {
        const maindiv = document.createElement('div');
        if (i % 2 === 0) {
          maindiv.classList.add('gray');
        }

        const p = document.createElement('p');
        const removeButton = document.createElement('button');
        removeButton.addEventListener('click', () => this.remove(i));

        p.innerHTML = `"${this.booksArray[i].title}" "${this.booksArray[i].author}"`;
        removeButton.innerHTML = 'remove';

        maindiv.appendChild(p);
        maindiv.appendChild(removeButton);
        container.appendChild(maindiv);
      }
    }

    setLocalStorage() {
      localStorage.setItem('formInputs', JSON.stringify(this.booksArray));
    }

    getLocalStorage() {
      if (localStorage.getItem('formInputs') !== null) {
        this.booksArray = JSON.parse(localStorage.getItem('formInputs'));
      } else {
        this.booksArray = [];
      }
    }

    add(list) {
      this.booksArray.push(list);
    }

    remove(id) {
      this.booksArray.splice(id, 1);
      this.setLocalStorage();
      this.displaybooks();
    }
}

const books = new Books();
books.displaybooks();

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (bookTitle.value.trim() !== '' && author.value.trim() !== '') {
    const list = {
      title: bookTitle.value,
      author: author.value,
    };
    books.add(list);
    books.setLocalStorage();
    books.displaybooks(books);
  }
});