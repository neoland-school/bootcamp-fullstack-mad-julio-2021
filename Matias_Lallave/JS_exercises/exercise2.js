/**EJERCICIOS Sentencias condicionales y bucles
- Escribir un programa que dado dos números imprima el mayor de ellos
- Escribir un programa que recorra los enteros de una variable dada y vaya imprimendo por pantalla si esos son pares o impares
- Escribe un programa que recorra los números del 1-100 e imprima por pantalla:
         Fizz, si es multiplo de 3
         Buzz, si es múltiplo de 5
         FizzBuzz, si es múltiplo de 3 y 5 a la vez
-Escriba por pantalla un programa que pinte el siguiente patrón:
*  
* *  
* * *  
* * * *  
* * * * *  
* * * *  
* * * 
* *
*
- Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while */

// EXERCISE 1

console.log("\nEXERCISE 1");

const number = 9;
const anotherNumber = 9;

if (number === anotherNumber) {
    console.log(number + ' is equal to ' + anotherNumber);
} else if  (number > anotherNumber) {
    console.log(number + ' is higher than ' + anotherNumber);
} else {
    console.log(anotherNumber + 'is higher than ' + number);
}

// EXERCISE 2

console.log("\nEXERCISE 2");

const printEvenOrOdd = 18;

for (let i = 0; i <= printEvenOrOdd; i++) {
    if (i % 2 === 0) {
        console.log(i + " is even\n");
    } else {
        console.log(i + " is odd\n");
    }
}

// EXERCISE 3

console.log("\nEXERCISE 3");

for (let i = 1; i <= 100; i++) {
    let message = '';

    if (i % 3 === 0) {
        message = message + 'Fizz';
    }
    if (i % 5 === 0) {
        message = message + 'Buzz';
    }

    console.log(i + ' ' + message);
}

// EXERCISE 4

console.log("\nEXERCISE 4");

// You can draw any triangle if intialising j = (i top margin)-1 

for (let i = 1; i <= 5; i++){           
    let asterisk = '';
    for (let k = 1; k <= i ; k++){
        asterisk = asterisk + '*';
    }
    console.log(asterisk);
}

for (let j = 4; j >= 1; j--){
    let asterisk = '';
    for (let k = 1; k <= j ; k++){
        asterisk = asterisk + '*';
    }
    console.log(asterisk);
}

// EXERCISE 5

console.log("\nEXERCISE 5");

const fibonacciN = 70;

let iter = 2;

let fibonacciValue = null;

let n = 0;
let m = 1;

if (fibonacciN < 0) {
    console.log('ERROR: Introduce a positive integer only');
} else if (fibonacciN === 0) {
    console.log('F(' + fibonacciN + ') = 0'); 
} else if (fibonacciN === 1) {
    console.log('F(' + fibonacciN + ') = 1'); 
} else {
    while (iter <= fibonacciN){
        fibonacciValue = n + m;
        n = m;
        m = fibonacciValue;
        iter++;
    }
    console.log('F(' + fibonacciN + ') = ' + fibonacciValue);
}