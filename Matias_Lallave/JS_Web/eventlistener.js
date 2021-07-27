const buttonElem = document.querySelector('button');
let counter = document.getElementById('counter');
let clickCounts = 1;

const helloworld = function (event){
    console.log('HELLO WORLD');
    console.log(event);

    counter.textContent = clickCounts++;

    buttonElem.textContent = 'CLICKED';
}

buttonElem.addEventListener('click', helloworld);