// console.log('HELLO WORLD');


// // PARA SELECCIONAR EL ELEMENTO 
// const myFourthP = document.getElementsByTagName('p');
// console.log(myFourthP[3].textContent);


// // solo los 

// const modifyColor = document.querySelectorAll('p');

// for (let i = 0; i < modifyColor.length; i++) {
//     if (i%2 === 0) {
//         modifyColor[i].style.color = 'blue';
//     } else {
//         modifyColor[i].style.color = 'red';
//     }
// }

// con un html vacio añadir div dentro enlace a google, paragraph y lista de marca de coches ('SEAT', FORD Y CITROEN)

// CREANDO ELEMENTOS

const div = document.createElement('div');
const paragraph = document.createElement('p');
const link = document.createElement('a');
const list = document.createElement('ul');
const other = document.createElement('li');
const otherTwo = document.createElement('li');
const otherThree = document.createElement('li');


paragraph.textContent ='Nam tempor sapien vitae neque rutrum, at accumsan leo mattis. Vivamus vitae lacus in odio convallis imperdiet.';
link.textContent = 'Busca en Google';
link.href = 'https://www.google.com/';
list.textContent ='Marca de coches';
other.textContent ='SEAT';
otherTwo.textContent ='FORD';
otherThree.textContent ='CITROEN';

div.appendChild(paragraph);
div.appendChild(link);
div.appendChild(list);
list.appendChild(other);
list.appendChild(otherTwo);
list.appendChild(otherThree);

document.body.appendChild(div); // agregando al body para poder mostrar el div