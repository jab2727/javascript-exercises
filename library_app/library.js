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
  info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(library, book) {
  library.push(book.info());
  return library;
}

let myLibrary = [];

// These functions test validity, borrowed from: https://www.javascripttutorial.net/javascript-dom/javascript-form-validation/
const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

// This function shows an error message
const showError = (input, message) => {
  // get the form-field element
  const formField = input.parentElement;
  
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};

// This function hides the error message.
const showSuccess = (input) => {
  // get the form-field element
  const formField = input.parentElement;
  

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

// Here we're checking to see if the title is ok.
const checkTitle = () => {
  let valid = false;
  const min = 3,
      max = 50;
  const title = document.getElementById("title").value;

  if (!isRequired(title)) {
      showError(document.getElementById("title"), 'Title cannot be blank.');
  } else if (!isBetween(title.length, min, max)) {
      showError(document.getElementById("title"), `Title must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(document.getElementById("title"));
      valid = true;
  }
  return valid;
}

// Here we're checking to see if the author is ok.
const checkAuthor = () => {
  let valid = false;
  const min = 3,
      max = 30;
  const author = document.getElementById("author").value;

  if (!isRequired(author)) {
      showError(document.getElementById("author"), 'Author cannot be blank.');
  } else if (!isBetween(author.length, min, max)) {
      showError(document.getElementById("author"), `Author must be between ${min} and ${max} characters.`)
  } else {
      showSuccess(document.getElementById("author"));
      valid = true;
  }
  return valid;
}

// Here we're checking to see if the page number is ok.
const checkPages = () => {
  let valid = false;
  const min = 1,
      max = 1000;
  const pages = document.getElementById("pages").value;

  if (!isRequired(pages)) {
      showError(document.getElementById("pages"), 'Pages cannot be blank.');
  } else if (isNaN(pages)){
      showError(document.getElementById("pages"), `Pages must be a number...`)
  }else if (!isBetween(pages, min, max)) {
      showError(document.getElementById("pages"), `Pages must be between ${min} and ${max}.`)
  } else {
      showSuccess(document.getElementById("pages"));
      valid = true;
  }
  return valid;
}

// Finally we're checking the radio buttons.
const checkRadio = () => {
  let valid = false;

  if (!document.getElementById("yes").checked && !document.getElementById("no").checked) {
      showError(document.getElementById("yes"), 'Have you read it or not?');
  } else {
      showSuccess(document.getElementById("yes"));
      valid = true;
  }
  return valid;
}


document.getElementById("submit").addEventListener("click", function (e) {
  e.preventDefault();

  let isTitleValid = checkTitle(), 
    isAuthorValid = checkAuthor(),
    isPagesValid = checkPages(),
    isRadioValid = checkRadio();

  let isFormValid = isTitleValid && isAuthorValid && isPagesValid && isRadioValid;

  if (isFormValid) {
    let a = document.getElementById("title").value;
    let b = document.getElementById("author").value;
    let c = document.getElementById("pages").value;
    let d = document.querySelector('input[name="read"]:checked').value;

    document.getElementsByClassName("form")[0].reset();

    const newBook = new Book(a, b, c, d);
    addBookToLibrary(myLibrary, newBook);
    console.log(myLibrary);

    const bookEntry = document.createElement("li");
    const node = document.createTextNode(newBook.info());
    bookEntry.appendChild(node);
    const button = document.createElement("button");
    button.innerText = "Delete";
    button.style = "margin: 4px;";
    button.addEventListener("click", () => {
      bookEntry.remove();
    });
    bookEntry.appendChild(button);
    const list = document.getElementById("book_list");
    list.appendChild(bookEntry);
  }
});
