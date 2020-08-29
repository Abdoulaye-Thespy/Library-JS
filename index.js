


let myLibrary = [
{ name: "LEs miserables",
  author: "Victor Hugo",
  numberOfPages: 1600
} ,  
{ name: "LEs miserables",
  author: "Victor Hugo",
  numberOfPages: 1600
} ,  
{ name: "LEs miserables",
  author: "Victor Hugo",
  numberOfPages: 1600
} ,  
{ name: "LEs miserables",
  author: "Victor Hugo",
  numberOfPages: 1600
}
    
];

function render() {
 let box =  document.createElement('div');
 box.className = 'col-md-4';
 let card = document.createElement('div');
 card.className='card';
 box.appendChild(card);
 let image = document.getElementById('imgg');
 img.src ="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
 card.appendChild(image);
 console.log(card);
};
