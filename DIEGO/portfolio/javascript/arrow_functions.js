
//  1- crear una funcion que reciba dos numeros y devuelva la suma de ellos

const a = 10;
const b = 20;

const sumaNums = (num1, num2) => num1 + num2

console.log(sumaNums(a, b));



//   2- crear una funcion que reciba un string y devuelva el string en mayusculaç


let myWord = 'hola';

const toUpper = (str) => str.toUpperCase();

console.log(toUpper(myWord));


//   3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres

let myOtherWord = 'progammer';

const cutWord = (str) => str.slice(0, 3);

console.log(cutWord(myOtherWord));


//   4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10

let myNumbers = [6, 8, 90, 4, 3, 2, 60, 5, 3];

const filteringNumbers = (array) => array.filter(higherThanTen);

const higherThanTen = (value) => value > 10;

console.log(filteringNumbers(myNumbers));

//   5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
//        ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
//            ['Gato', 'perro'] -> ['Gato', 'Perro]
//            ['gAto', 'peRRo'] -> ['Gato', 'Perro]


let myWordArray = ['zapAto', 'CALCETIN', 'Pantalon', 'camiSA'];

const capitaliceArray = (array) => {

    let secondArray = [];

    secondArray = array.map((value, pos, array) => array[pos].toLowerCase());

    secondArray = secondArray.map((value, pos, array) => array[pos].charAt(0).toUpperCase() + value.slice(1));

    return secondArray;

}

console.log(capitaliceArray(myWordArray));

// 2- Escribe una función que calcule el máximo de todos los números que entren por argumento. Realizar las dos versiones, argument y rest parameters (easy)

function calcMaxNumber() {

    let maxNumber = 0;

    for (let i = 0; i < arguments.length; i++) {

        if (arguments[i] > maxNumber) {
            maxNumber = arguments[i]
        }

    }

    return maxNumber;

}

const calcMaxNumberRest = (...params) => {

    let maxNumber = 0;

    params.forEach(element => {
        if (element > maxNumber) {
            maxNumber = element;
        }
    });

    return maxNumber;
}

console.log(calcMaxNumber(1, 2, 3, 5, 62, 8, 9, 34, 23, 91, 23, 43, 54));
console.log(calcMaxNumberRest(1, 2, 3, 5, 62, 8, 91, 34, 23, 21, 23, 43, 54));

