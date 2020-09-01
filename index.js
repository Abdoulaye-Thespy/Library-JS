
 let myLibrary = fetch();

let cont = document.getElementById('books');
let createButton = document.getElementById('create');
let deleteButton = document.getElementById('books');
let readBtn = document.getElementById('boxbox');


function Book(name, author, numberOfPages) {
  // the constructor...
 this.name=name;
 this.author=author;
 this.numberOfPages=numberOfPages;
}

Book.prototype.readStatus= "Not read";

createButton.onclick = function addBookToLibrary() {
  // do stuff here
  if (validateForm()) {
  let name = document.getElementById('orangeForm-name').value
  let author = document.getElementById('orangeForm-author').value
  let numberOfPages = document.getElementById('orangeForm-np').value;
  let newBook = new Book(name, author, numberOfPages);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render(name, author, numberOfPages);
  
  save();
}
}


function validateForm() {
  let name = document.getElementById('orangeForm-name').value
  let author = document.getElementById('orangeForm-author').value
  let numberOfPages = document.getElementById('orangeForm-np').value;
  if (name == "" || author === ""|| numberOfPages=== "") {
    alert("All the fields must be filled out");
    return false;
  }
  return true;
} 

deleteButton.onclick = function delete_book(e) {
      if(e.target.className == 'btn btn-danger bbd'){
    if(confirm('Are You Sure?')){
        let book = e.target.parentElement.parentElement.parentElement;
        cont.removeChild(book);
    }
  }
}

readBtn.onclick = function delete_book(e) {
      if(e.target.className=='btn btn-success'){
        e.target.innerHTML="READ";
  }
}


 for (let i=0; i < myLibrary.length; i++) {
     let name = myLibrary[i].name;
     let author = myLibrary[i].author;
     let numberOfPages = myLibrary[i].numberOfPages;
     let readstatus = myLibrary[i].readStatus;
     console.log(readstatus);
     render(name, author, numberOfPages, readstatus);
 }
 
function render(name, author, numberOfPages, readstatus) {

 let box =  document.createElement('div');
 box.className = 'col-md-4';
 cont.appendChild(box);
 let card = document.createElement('div');
 card.className='card';
 box.appendChild(card);
 let image = document.createElement('img');
 image.className = 'card-img-top picture';
 image.setAttribute("src", "https://mdbootstrap.com/img/Photos/Others/images/43.jpg");
 card.appendChild(image);
 let cardBody = document.createElement('div');
 cardBody.className = 'card-body';
 card.appendChild(cardBody);
 let cardTitle = document.createElement('h3');
 cardTitle.className = 'card-title';
 cardTitle.appendChild(document.createTextNode(name));
 cardBody.appendChild(cardTitle);
 let bookDescription = document.createElement('p');
 bookDescription.className = 'card-text';
 bookDescription.appendChild(document.createTextNode(`Author: ${author}`));
 cardBody.appendChild(bookDescription);
 let numPage = document.createElement('h4');
 numPage.className = 'card-title';
 numPage.appendChild(document.createTextNode(`${numberOfPages} PAGES.`));
 cardBody.appendChild(numPage);
 let del = document.createElement('a');
 del.className = 'btn btn-danger bbd';
 del.appendChild(document.createTextNode('Delete'));
 cardBody.appendChild(del);
 let readOrNot = document.createElement('a');
 readOrNot.className = 'btn btn-success';
 readOrNot.appendChild(document.createTextNode("NOT READ"));
 cardBody.appendChild(readOrNot);


};

function save() {
  let JSONReadymyLibrary = JSON.stringify(myLibrary);
  (localStorage.setItem('books', JSONReadymyLibrary));
}

function fetch() {
if (localStorage.getItem('books') == null){
     localStorage.setItem('books', JSON.stringify([]));
     return JSON.parse(localStorage['books']);
}
else {
 return JSON.parse(localStorage['books']);
 console.log("inside fetch");
}
}