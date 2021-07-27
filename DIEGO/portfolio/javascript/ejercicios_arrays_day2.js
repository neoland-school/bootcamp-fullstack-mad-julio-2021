// * 1- Escribir una funcion de comparacion para ordenar un array de numeros de mayor a menor
const array = [2, 4, 1, 6, 9, 8, 4, 5, 10];

function compareDescendent(num1, num2) {
    return num2 - num1;
}

console.log(array.sort(compareDescendent));



//  * 2- Escribir una funcion de comparacion para ordenar un array de booleanos poniendo primero los false y luego los true

const booleansArray = [true, false, false, true, true, true, false, true, false];

function compareBooleans(a, b) {
    if (a === false) {
        return -1;
    } else if (b === false) {
        return 1;
    } else {
        return 0;
    }
}

console.log(booleansArray.sort(compareBooleans));

//  * 3- Escribir una funcion de comparacion para ordenar un array de strings por su longitud de caracteres de menor a mayor

const stringsArray = ['caramelo', 'calamar', 'pez', 'oso', 'gato', 'murcielago'];

function compareLength(a, b) {
    return a.length - b.length;
}

console.log(stringsArray.sort(compareLength));



//  * 4- Escribir una funcion para filtrar un array de numeros dejando solo los numeros pares
const array2 = [2, 4, 1, 6, 9, 8, 4, 5, 10];
function filterOdds(value) {
    return value % 2 === 0;
}

console.log(array2.filter(filterOdds));



//  * 5- Escribir una funcion para filtrar un array de numeros dejando solo los mayores de 30

const array3 = [2, 4, 100, 6, 9, 82, 4, 5, 10];

function filterHigh(value) {
    return value > 30;
}

console.log(array3.filter(filterHigh));



//  * 6- Escribir una funcion para filtrar un array de booleanos dejando solo los valores true

function filterTrue(value) {
    return value === true;
}

console.log(booleansArray.filter(filterTrue));


//  * 7- Escribir una funcion para filtrar un array de strings dejando los que su longitud sea impar

function filterPairLength(value) {
    return value.length % 2 !== 0;
}
console.log(stringsArray.filter(filterPairLength));

//EXTRA Diego un ejercicio, para cuando te aburras. hacer una funcion que cambie los espacios por guiones de un string. No puedes usar replace ni replaceAll. Tendrás que usar funciones que no hemos visto en clase

const myWord = 'this is the sentences i am working with right now';

function swapSpaces(word) {

    let swapableWord = '';

    for (let i = 0; i < word.length; i++) {

        if (word[i] === ' ') {
            swapableWord += '-';
        } else {
            swapableWord += word[i];
        }
    }

    return swapableWord;

}
function chunkString(myWord) {
    let wordArray = [];
    let auxWord = '';
    let cont = 0;

    for (let i = 0; i < myWord.length; i++) {
        if (myWord[i] === ' ') {
            wordArray[cont] = auxWord;
            cont++;
            auxWord = '';
        } else {
            auxWord += myWord[i];
        }
    }

    return wordArray;

}

//HACER LO MISMO USANDO SPLIT PARA STRINGS Y JOIN PARA ARRAYS
//EXTRA Diego un ejercicio, para cuando te aburras. hacer una funcion que cambie los espacios por guiones de un string. No puedes usar replace ni replaceAll. Tendrás que usar funciones que no hemos visto en clase


function swapSpaces(word) {



}
console.log(swapSpaces(myWord));
console.log(chunkString(myWord));