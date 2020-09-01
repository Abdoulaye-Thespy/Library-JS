
const myLibrary = fetch();

const cont = document.getElementById('books');
const createButton = document.getElementById('create');
const deleteButton = document.getElementById('books');
const readBtn = document.getElementById('boxbox');


function Book(name, author, numberOfPages) {
  // the constructor...
  this.name = name;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

Book.prototype.readStatus = 'Not read';
function save() {
  const JSONReadymyLibrary = JSON.stringify(myLibrary);
  (localStorage.setItem('books', JSONReadymyLibrary));
}

function fetch() {
  if (localStorage.getItem('books') == null) {
    localStorage.setItem('books', JSON.stringify([]));
    return JSON.parse(localStorage.books);
  }

  return JSON.parse(localStorage.books);
}

createButton.onclick = function addBookToLibrary() {
  // do stuff here
  if (validateForm()) {
    const name = document.getElementById('orangeForm-name').value;
    const author = document.getElementById('orangeForm-author').value;
    const numberOfPages = document.getElementById('orangeForm-np').value;
    const newBook = new Book(name, author, numberOfPages);
    myLibrary.push(newBook);
    render(name, author, numberOfPages);
    save();

    for (let i = 0, len = cont.children.length; i < len; i++) {
      (function () {
        cont.children[i].onclick = function (e) {
          if (e.target.className === 'btn btn-danger bbd') {
            confirm('Deleted Book?');
            const book = e.target.parentElement.parentElement.parentElement;
            cont.removeChild(book);
            myLibrary.splice(i, 1);
            save();
          }
        };
      }(i));
    }
  }
};


function validateForm() {
  const name = document.getElementById('orangeForm-name').value;
  const author = document.getElementById('orangeForm-author').value;
  const numberOfPages = document.getElementById('orangeForm-np').value;
  if (name === '' || author === '' || numberOfPages === '') {
    alert('All the fields must be filled out');
    return false;
  }
  return true;
}


readBtn.onclick = function deleteBook(e) {
  if (e.target.className === 'btn btn-success') {
    e.target.innerHTML = 'READ';
  }
};


for (let i = 0; i < myLibrary.length; i += 1) {
  const { name } = myLibrary[i];
  const { author } = myLibrary[i];
  const { numberOfPages } = myLibrary[i];
  render(name, author, numberOfPages);
}

function render(name, author, numberOfPages) {
  const box = document.createElement('div');
  box.className = 'col-md-4';
  cont.appendChild(box);
  const card = document.createElement('div');
  card.className = 'card';
  box.appendChild(card);
  const image = document.createElement('img');
  image.className = 'card-img-top picture';
  image.setAttribute('src', './images/43.jpg');
  card.appendChild(image);
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  card.appendChild(cardBody);
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'card-title';
  cardTitle.appendChild(document.createTextNode(name));
  cardBody.appendChild(cardTitle);
  const bookDescription = document.createElement('p');
  bookDescription.className = 'card-text';
  bookDescription.appendChild(document.createTextNode(`Author: ${author}`));
  cardBody.appendChild(bookDescription);
  const numPage = document.createElement('h4');
  numPage.className = 'card-title';
  numPage.appendChild(document.createTextNode(`${numberOfPages} PAGES.`));
  cardBody.appendChild(numPage);
  const del = document.createElement('a');
  del.className = 'btn btn-danger bbd';
  del.appendChild(document.createTextNode('Delete'));
  cardBody.appendChild(del);
  const readOrNot = document.createElement('a');
  readOrNot.className = 'btn btn-success';
  readOrNot.appendChild(document.createTextNode('NOT READ'));
  cardBody.appendChild(readOrNot);
}

//   for (let i = 0, len = cont.children.length; i < len; i++)
// {

//     (function(){
//         cont.children[i].onclick = function(e){
//             if (e.target.className === 'btn btn-danger bbd')
//               {confirm("Deleted Book?");
//             const book = e.target.parentElement.parentElement.parentElement;
//             cont.removeChild(book);
//             myLibrary.splice(i,1);
//             save();
//             }       }
//     })(i);
// }
