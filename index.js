


let myLibrary = [
{ name: "Les miserables",
  author: "Victor Hugo",
  numberOfPages: 1600
} ,  
{ name: "Une saison blanche et Seche",
  author: "André Brink",
  numberOfPages: 1600
} ,  
{ name: "Père inconnu",
  author: "Victor Hugo",
  numberOfPages: 1600
} ,  
{ name: "La Croix du Sud",
  author: "Joseph Ngoué",
  numberOfPages: 1600
}
 ,  
{ name: "Sous la cendre le feu",
  author: "Evelyne Mpoudi Ngollé",
  numberOfPages: 1600
}
   
    
];

let cont = document.getElementById('books');
let createButton = document.getElementById('create');


function Book(name, author, numberOfPages) {
  // the constructor...
 this.name=name;
 this.author=author;
 this.numberOfPages=numberOfPages;
}

createButton.onclick = function addBookToLibrary() {
  // do stuff here
  let name = document.getElementById('orangeForm-name').value
  let author = document.getElementById('orangeForm-author').value
  let numberOfPages = document.getElementById('orangeForm-np').value;
  let newBook = new Book(name, author, numberOfPages);
  myLibrary.push(newBook);
  console.log(myLibrary);
  render(name, author, numberOfPages);
}


 for (let i=0; i < myLibrary.length; i++) {
     let name = myLibrary[i].name;
     let author = myLibrary[i].author;
     let numberOfPages = myLibrary[i].numberOfPages;
     render(name, author, numberOfPages);
 }
 
function render(name, author, numberOfPages) {
 

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
 let cardTitle = document.createElement('h4');
 cardTitle.className = 'card-title';
 cardTitle.appendChild(document.createTextNode(name));
 cardBody.appendChild(cardTitle);
 let bookDescription = document.createElement('p');
 bookDescription.className = 'card-text';
 bookDescription.appendChild(document.createTextNode(author));
 cardBody.appendChild(bookDescription);
 let del = document.createElement('a');
 del.className = 'btn btn-danger';
 del.appendChild(document.createTextNode('Delete'));
 cardBody.appendChild(del);

 
};

