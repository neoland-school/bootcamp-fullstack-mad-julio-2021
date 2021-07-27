// console.log('HELLO PROMPT');

// // const myPInstance = document.getElementsByTagName('p');

// // for (i = 0; i < myPInstance.length; i++) {
// //     if (i % 2 === 0) {
// //         myPInstance[i].style.color = 'red';
// //     } else {
// //         myPInstance[i].style.color = 'blue';
// //     }
// // }

// const myPInstanceWithQuery = document.querySelectorAll('p');

// myPInstanceWithQuery.forEach((e, i) => e.style.color = i % 2 === 0 ? 'red' : 'blue');

// //CREATE ELEMENTS

// const anotherP = document.createElement('p');

// anotherP.textContent = 'Paragraph from JS';

// // ADD ELEMENTS TO DOM

// //1. Get the parent element

// const container = document.getElementById('firstID');
// //2. add the element created to that element using append child
// container.appendChild(anotherP);

// document.body.appendChild(anotherP.cloneNode(true));

// // anotherP.remove();

// console.log(anotherP.nextSibling());


// Con un HTML vacio, añadir un div. A ese div añadir 1 paragraph, 1 enlace a google 
// y una lista de marcas de coches (SEAT, FORD, CITROEN)

const newDiv = document.createElement('div');

const newP = document.createElement('p');
newP.textContent = 'This is a paragraph';
const newA = document.createElement('a');
newA.href = 'https://www.google.com/';
newA.target = '_blank';
newA.textContent = 'GOOGLE';
const newUL = document.createElement('ul');
const newLI1 = document.createElement('li');
newLI1.textContent = 'SEAT';
const newLI2 = document.createElement('li');
newLI2.textContent = 'FORD';
const newLI3 = document.createElement('li');
newLI3.textContent = 'CITROEN';


newDiv.appendChild(newP);
newDiv.appendChild(newA);
newDiv.appendChild(newUL);
newUL.appendChild(newLI1);
newUL.appendChild(newLI2);
newUL.appendChild(newLI3);
document.body.appendChild(newDiv);