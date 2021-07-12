// // - Escribir una función que dado un numero, devuelva el número al revés
// // - Escribir una función que dado un número devuelva si es capicua o no (Hint: usar la función anterior)
// // - Escribir una función que devuelva el tipo del parámetro de entrada
// // - Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo)
// // - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes)
// //Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github. (Medium)
// //Crear una función calculadora que reciba como parametros: Dos operandos y la función que se quiera utilizar para calcular. (Hard)
// //Ejemplo calc(3,4,add) devuelve  7
// //Crear una funcion que dado un NIF o un NIE te indique si es válido o no. En la página del ministerio se explica como se valida (http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie) (Hard)

// //first and second excercise- Escribir una función que dado un numero, devuelva el número al revés
// function reverseNum(number) {
//     let reverse = 0;
//     let resto = 0;

//     while (number > 0) {
//         resto = number % 10;
//         reverse = (reverse * 10) + resto;
//         number = Math.floor(number / 10);
//     }
//     return reverse;
// }
// let newNumber = 656;
// console.log(reverseNum(newNumber));

// function capicua(numbercapi) {
//     if (reverseNum(newNumber) === numbercapi) {
//         return 'soy capicua';
//     }
//     else {
//         return 'no lo soy';
//     }
// }
// console.log(capicua(656));

// // -3rd Excercise--Escribir una función que devuelva el tipo del parámetro de entrada ==> type of

// function param(parametre) {
//     return (typeof parametre);
// }
// console.log(param(4));

// //4Th Excercise--- Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo)

// function areaTriangle(height, base) {
//     let area = (height * base) / 2;
//     return area;
// }
// function perimetreTriangle(side1, side2, side3) {
//     let perimetre = side1 + side2 + side3;
//     return perimetre;
// }
// function areaSquare(sideSquare) {
//     let area2 = sideSquare ** 2;
//     return area2;
// }
// function perimetreSquare(sideSquare1) {
//     let perimetreSquare = sideSquare1 * 4;
//     return perimetreSquare;
// }
// function areaCircle(radius) {
//     let areacircle1 = Math.PI * radius ** 2;
//     return areaCircle;
// }
// function areaRectangle(base2, height2) {
//     let areaRectangle = base2 * height2;
//     return areaRectangle;
// }
// function perimetreRectangle(base2, base3, height2, height3) {
//     let areaRectangle = base2 + base3 + height2 + height3;
//     return perimetreRectangle;
// }

// //5th excercise - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes)
// let a = 0; // not necesary to add numbers for this excercise. 
// let b = 0;
// function add(a, b) {
//     return (a + b);
// }

// function subtract(a, b) {
//     return (a - b);
// }
// function multiply(a, b) {
//     return (a * b);
// }

// function divide(a, b) {
//     return (a / b);
// }
// function percentage(a, b) {
//     return (b * a) / 100;
// }
// console.log(percentage(67, 50));

//6th excercise - Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github. (Medium)

function verification(url) {
    const search = 'github.com';
    if (url.indexOf(search) != -1) {
        return true;
    }
    else {
        return 'You wrote this wrong, thanks';
    }
}
console.log (verification ('https://github.com/PalomaReb/bootcamp-fullstack-mad-julio-2021'));