


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


createButton.onclick = function Book() {
  // the constructor...
  console.log("Welcome to consructor")
}

function addBookToLibrary() {
  // do stuff here
}


function render() {
 
 for (let i=0; i < myLibrary.length; i++) {
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
 cardTitle.appendChild(document.createTextNode(myLibrary[i].name));
 cardBody.appendChild(cardTitle);
 let bookDescription = document.createElement('p');
 bookDescription.className = 'card-text';
 bookDescription.appendChild(document.createTextNode(myLibrary[i].numberOfPages));
 cardBody.appendChild(bookDescription);
 let del = document.createElement('a');
 del.className = 'btn btn-danger';
 del.appendChild(document.createTextNode('Delete'));
 cardBody.appendChild(del);
 }
 
};

