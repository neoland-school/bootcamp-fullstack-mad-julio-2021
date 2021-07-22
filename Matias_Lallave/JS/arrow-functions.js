/**
 * 1- crear una funcion que reciba dos numeros y devuelva la suma de ellos
 * 2- crear una funcion que reciba un string y devuelva el string en mayusculaç
 * 3- crear una funcion que reciba un string y devuelva los 3 primeros caracteres
 * 4- crear una funcion que reciba un array de numeros y devuelva un array con los que son mayores que 10
 * 5- crear una funcion que reciba un array de strings y devuelva un array con los strings capitalized
 *      ej-> ['gato', 'perro'] -> ['Gato', 'Perro]
 *          ['Gato', 'perro'] -> ['Gato', 'Perro]
 *          ['gAto', 'peRRo'] -> ['Gato', 'Perro]
 */

// EXERCISE 1

let varA = 5;
let varB = 10;

const add = (a, b) => a + b;

console.log(add(varA, varB));

// EXERCISE 2

varA = 'matias';

const upper = a => a.toUpperCase();

console.log(upper(varA));

// EXERCISE 3

const first3char = a => a.slice(0, 3);

console.log(first3char(varA));

// EXERCISE 4

varA = [78, 4, 7, 22, 90, 56, 1, 3, 0, 0];

const onlyHigherThan10 = arr => arr.filter(value => value > 10);

console.log(onlyHigherThan10(varA));

// EXERCISE 5

varA = ['marta','joSe','jean','Jorge','matias'];

const capitalized = arr => arr.map(value => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase());

console.log(capitalized(varA));