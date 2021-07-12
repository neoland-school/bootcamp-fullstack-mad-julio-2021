// // //  - Escribir un programa que dado dos números imprima el mayor de ellos (Easy)
// // //  - Escribir un programa que recorra los enteros de una variable dada y vaya imprimendo por pantalla si esos son pares o impares (Easy)
// // //  - Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
// // //          Fizz, si es multiplo de 3
// // //        Buzz, si es múltiplo de 5
// // //         FizzBuzz, si es múltiplo de 3 y 5 a la vez
// // // -Escriba por pantalla un programa que pinte el siguiente patrón: (Hard)
// // // *  
// // // * *  
// // // * * *  
// // // * * * *  
// // // * * * * *  
// // // * * * *  
// // // * * * 
// // // * *
// // // *
//Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while (Hard)

// // // // //ejercicio 1

let num1 = 54;
let num2 = 54;

if (num1 > num2) {
    console.log(num1);
}
else if (num1 === num2) {
    console.log('Same number, sorry loser');
}
else {
    console.log(num2);
}

// // // // //ejercicio 2

let numfor = 6;
for (let i = 1; i <= numfor; i++) {
    if (i % 2 === 0) {
        console.log(i + ' even');
    }
    else {
        console.log(i + ' odd');
    }
}
// // // // //ejercicio3

let numEx3 = 100;
for (let i = 0; i <= numEx3; i++) {
    console.log(i);
    if (i % 3 === 0) {
        console.log('Fizz');
    }
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log('BuzzFizz');
    }
}

for (let i = 1; i < 100; i++) {
    let output = '';
    if (i % 3 === 0) {
    }
    output += 'fizz';
    if (i % 5 === 0) {
        output += 'buzz';
    }
    console.log(output);
}
//Ejercicio 4

///////////////////////////

let star = "";
for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        star += "* ";
    }
    star += "\n";
}
for (let v = 0; v < 5; v++) {
    for (let s = 4; s > v; s--) {
        star += "* ";
    }
    star += "\n";
}
console.log(star);

//ejercicio fibo "otro"

// let fibNum0 = 0;
// let fibNum1 = 1;
// let positionFib = 1;
// let i = 2;
// let result = 0;// = fibNum1 + fibNum0; // => fibNum2.

// if (positionFib < i) {
//     result = positionFib;
// } else {
//     while (i <= positionFib) {
//         result = fibNum1 + fibNum0;
//         fibNum0 = fibNum1;
//         fibNum1 = result;
//         i++;
//     }
// }
// console.log('the ' + positionFib + 'th position of the fibonacci scale is ' + result);

//ejercicio fibo

//  let fibNum0 = 0;
//  let fibNum1 = 1;
//  let positionFib = 2;
//  let i = 1;
//  let result = fibNum1 + fibNum0; // => fibNum2.
//  while ((i < positionFib) && (positionFib > 0))
//  {
//    result = result + fibNum0;
//    fibNum0 = fibNum1;
//    fibNum1 = result;
//    // console.log (result); 
//    i++;
//  }
//  if (positionFib === 0){
//    result = fibNum0;
//  }
//  console.log ('the ' +positionFib+ 'th position of the fibonacci scale is '+ result);
//Both excercises have the same variable so one is commented in order to not disrupt the solutions for any of the 2 ways I have resolved the excercise.

// excercise fibo pt3. 
//fib2 = fib1 + fib0
// fib3 = fib2 + fib1
//fib(n) = fib(n-1) * fib(n-2)
//fib(0) = 0
//fib(1) = 1
//fib(2) = 1
//fib(3) = 2
//fib(0) = 3
//fib(1) = 5
//fib(2) = 8
//fib(3) = 13

const numberFibo = 43;
let fibResult;
let fibPrev_1 = 0;
let fibPrev_2 = 1;


if (numberFibo === 0) {
    fibResult = 0;
    console.log(0);
}
if (numberFibo === 1) {
    fibResult = 1;
}

for (let i = 2; i<= numberFibo; i++) {
    fibResult = fibPrev_2 + fibPrev_1;
    fibPrev_2 = fibPrev_1;
    fibPrev_1 = fibResult;
}

///
let i =3;
while (i = fibResult && i <= i>100) {
    fibResult = fibPrev_2 + fibPrev_1;
    fibPrev_2 = fibPrev_1;
    fibPrev_1 = fibResult;
    i++;
}

console.log ('Fibonnaci (' + numberFibo + '): ' + fibResult);