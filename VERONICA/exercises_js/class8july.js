// 1. Escribir un archivo que pinte por pantalla HOLA MUNDO

console.log("HOLA MUNDO");

// 2. Escribir el typeof de cada variable 

let myName ='Verónica';
let myAge = 27;
let myFirstBoolean = true;
let mySecondBoolean = false;
const HELLO_WORLD = 'Hello World';
let isNull = null;
const JUST_NUMBERS = 12345;
let notFound;
const HELLO_WORLD = 'Hello Bad Const'; //No se debe repetir una variable CONST

console.log(myName);
console.log(typeof myName); //String

console.log(myAge);
console.log(typeof myAge); //Number

console.log(myFirstBoolean);
console.log(typeof myFirstBoolean); //Boolean

console.log(mySecondBoolean);
console.log(typeof mySecondBoolean); //Boolean

console.log(HELLO_WORLD);
console.log(typeof HELLO_WORLD); //String

console.log(isNull);
console.log(typeof isNull);

console.log(HELLO_WORLD);
console.log(typeof HELLO_WORLD);

console.log(JUST_NUMBERS);
console.log(typeof JUST_NUMBERS);

console.log(notFound);
console.log(typeof notFound);


// Sumar una variable de tipo string con una de tipo número

let typeString = 'Este es mi tipo de dato string';
let typeNumber = 5;

let myResult = typeString + typeNumber;

console.log(myResult);
console.log(typeof myResult);
////////////////////////////////////////////////////// Siguiendo con las mismas variables

typeString = '21';
typeNumbe = 5;

myResult= typeString + typeNumber;

console.log(myResult);
console.log(typeof myResult);


//Crear dos variables numéricas y realizar su suma, resta multiplicación y division

let numbOne = 30;
let numbTwo = 15;

console.log(numbOne + numbTwo);
console.log(numbOne - numbTwo);
console.log(numbOne * numbTwo);
console.log(numbOne / numbTwo);

// //Crear dos variables string y concatenarlas

let firstString = 'Esta es';
let secondString = 'Cadena';

let firstConcatenation = firstString + ' ' + 'mi primera' + ' ' + secondString;
console.log(firstConcatenation);

// //Imprimir la longitud del string resultante del ejercicio anterior

console.log(firstConcatenation.length);

//Ejercicio que guarde en una variable los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit "X ºC son YºF"

let x = 6;

let operation = (x * 9 / 5) + 32;


let resultGrade= x +''+ 'ºC' + '' + 'son' + '' + operation + '' + 'ºF';
console.log(resultGrade);

//Imprimir por consola 'true' o 'false' si una variable número está entre 10 y 100

let myNumber = 9;

let lessThan100 = myNumber <= 100; //True
let moreThan10 = myNumber >= 10; //true

console.log (lessThan100&&moreThan10); //true


//Con el ejercicio de la calculadora de grados celsius, imprimir si una variable en ºC temperatura esta es mayor de 87 ºF

let x = 30;
 
let operation = (x * 9 / 5) + 32; //95 ºF siendo x = 35

console.log(operation > 87);

//Crear una variable numerica y proporcionarle un valor. imprimir por pantalla si es par o impar


let myNumber = 8;

let operation = myNumber % 2;


if (operation === 0){
    console.log('par');
}
else {
    console.log('impar');
}


//Crear una variable que represente el numero de hijos e indicar por pantalla si es familia numerosa o no

let childNumber = 4;


if (childNumber > 3){
    console.log ('FAMILIA NUMEROSA');
}
else {
    console.log ('NO ES FAMILIA NUMEROSA');
}


// Crear dos variables que representen el peso y la altura e indicar por pantalla si esa persona tiene "Obesidad de clase II" o no según la OMS

const myWeight = 74;
const myHeight = 1.8;

const IMC = myWeight/ myHeight ** 2;

 console.log(IMC  >= 30);


// Crear Una variable que represente el saldo de tu cuenta. Crear 4 variables numéricas que cada una represente un item de tu cesta (ej: tomates, pescado, etc) de la compra y dales un precio. Imprimir por pantalla si tienes saldo suficiente o no para pagar la compra.

let myMoney = 10;

const mytomato = 2;
const myOnion = 1;
const myOrange = 3;
const myJuice = 4;

mylistShopping = mytomato + myOnion + myOrange + myJuice;

console.log(mylistShopping <= myMoney);







