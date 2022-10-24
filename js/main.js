const bookTitle = document.querySelector('#title');
const author = document.querySelector('#author');
const submitButton = document.querySelector('#submit');
const container =document.querySelector('#books-container');

BooksList = [];


submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    if(bookTitle.textContent ==='' && author.textContent === ''){
        list = {title: bookTitle.textContent,
                author: author.textContent   
        };
        BooksList.push(list);
        console.log(bookTitle.innerHTML);

    }
})

