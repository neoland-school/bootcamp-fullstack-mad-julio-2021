const element = document.getElementById('button')
const pList = document.querySelectorAll('p');

let nextValue = 'Hola mundo';
let clickCounts = 1;

function printHiAgain (a){
//Cambiando contenido
    let actualBtn = element.textContent;
    element.textContent = nextValue;
    nextValue = actualBtn;
    
  //Sumando en cada click
    clickCounts++;
    pList[0].textContent = clickCounts;
}

element.addEventListener('click', printHiAgain);



