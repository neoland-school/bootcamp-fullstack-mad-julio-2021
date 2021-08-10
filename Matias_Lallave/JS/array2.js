// * 1- Escribir una funcion de comparacion para ordenar un array de numeros de mayor a menor
// * 2- Escribir una funcion de comparacion para ordenar un array de booleanos poniendo primero los false y luego los true
// * 3- Escribir una funcion de comparacion para ordenar un array de strings por su longitud de caracteres de menor a mayor
// * 4- Escribir una funcion para filtrar un array de numeros dejando solo los numeros pares
// * 5- Escribir una funcion para filtrar un array de numeros dejando solo los mayores de 30
// * 6- Escribir una funcion para filtrar un array de booleanos dejando solo los valores true
// * 7- Escribir una funcion para filtrar un array de strings dejando los que su longitud sea impar

// EXERCISE 1
function greaterToLeast (a, b) {
    return b - a;
}

let testArray = [23,6,88,2,3,85,23,4,67,13];

console.log(testArray.sort(greaterToLeast));

// EXERCISE 2

function leastToGreater (a, b) {
    return a - b;
}

testArray = [true, false, false, true, true, false, false, false];

console.log(testArray.sort(leastToGreater));

// EXERCISE 3

function leastToGreaterLength (a, b) {
    return a.length - b.length;
}

testArray = ['pepinillos', 'picantes', 'con', 'salsa', 'de', 'alcaparras'];

console.log(testArray.sort(leastToGreaterLength));

// EXERCISE 4

function evenOnly (value) {
    return value % 2 === 0;
}

testArray = [6, 12, 8, 1, 9, 43, 99, 31];

console.log(testArray.filter(evenOnly));

// EXERCISE 5

function greaterThan30 (value) {
    return value > 30;
}

console.log(testArray.filter(greaterThan30));

// EXERCISE 6

function onlyTrue (value) {
    return value;
}

testArray = [true, false, false, true, true, false, false, false];

console.log(testArray.filter(onlyTrue));

// EXERCISE 7

function onlyEvenLength (value) {
    return !(value.length % 2);
}

testArray = ['pepinillos', 'picantes', 'con', 'salsa', 'de', 'alcaparras'];

console.log(testArray.filter(onlyEvenLength));

