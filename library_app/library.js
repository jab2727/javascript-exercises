// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function() {
//       return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
//     };
// }

class Book {
    constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }
    info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
}

function addBookToLibrary(library, book) {
    library.push(book.info());
    return library;
}

let myLibrary = [];
console.log(myLibrary)

document.getElementById("submit").addEventListener("click", function() {
    let a = document.getElementById('title').value;
    document.getElementById('title').reset;
    let b = document.getElementById('author').value;
    document.getElementById('author').reset;
    let c = document.getElementById('pages').value;
    document.getElementById('pages').reset;
    let d = document.querySelector('input[name="read"]:checked').value;
    document.querySelector('input[name="read"]:checked').reset;

    const newBook = new Book(a, b, c, d);
    addBookToLibrary(myLibrary, newBook);
    console.log(myLibrary);

    const bookEntry = document.createElement('li');
    const node = document.createTextNode(newBook.info());
    bookEntry.appendChild(node);
    const button = document.createElement('button');
    button.innerText = "Delete";
    button.style = "margin: 4px;"
    button.addEventListener('click', () => {
        bookEntry.remove();
    });
    bookEntry.appendChild(button);
    const list = document.getElementById("book_list");
    list.appendChild(bookEntry);

});


