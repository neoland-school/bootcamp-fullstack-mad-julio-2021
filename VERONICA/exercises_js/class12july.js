//Multiplicando con funciones

// function multNumber(numberOne, numbertwo){
//     return numberOne * numbertwo;
// }

// console.log(multNumber (5,3));

// function que concatene 'hola' a un string de entrada

// function string (stringWord){
//     return stringWord + 'Hola';
// }

// console.log (string('Hello'));

// Function que dado dos boleanos devuelva el AND de estos

// function myBoolean (wordTrue,wordFalse){
// //     wordTrue = 5; // true
// //     wordFalse = 11; // false
//     console.log (wordTrue >= 5 && wordFalse <= 10); // true && false = false
// }
// myBoolean(5,11);

// function que devuelva tantos asterisco como indique un parametro de entrada


// function asterisco(cuantity) {
//     let astRisco ='';

//     for (let i=1; i<=cuantity; i++) {
//         astRisco= astRisco + '*'; // o se podria astRisco += ''
//     }
//     return astRisco;
// }

// console.log(asterisco(5));

//function que multiplique dos numeros sin usar

// function myResult (a,b){
//     myResult = 0;
//     for (let i = 0; i < b; i++){
//         myResult += a;
//     }
//     return myResult;
// }

// myResult(5,3);

// - Escribir una función que dado un numero, devuelva el número al revés

// function reverse (number){
//     const numberToString = number + '';
//     let result = '';
//     for ( let i=numberToString.length-1; i>=0; i--){
//         const charRemove = numberToString.charAt(i);
//         result = result + charRemove;  
//     }
//     return parseInt(result);
// }
// console.log (reverse(1001));


// - Escribir una función que dado un número devuelva si es capicua o no (Hint: usar la función anterior)

// function reverse (number){
//     const numberToString = number + '';
//     let result = '';
//     for ( let i=numberToString.length-1; i>=0; i--){
//         const charRemove = numberToString.charAt(i);
//         result = result + charRemove;  
//         if (charRemove.charAt(i)=== 0){
//             console.log('Es capicua');
//         } else {
//             console.log('No es capicua');
//         }
//     }
//     return parseInt(result);
    
// }
// console.log (reverse(563));

// Escribir una función que devuelva el tipo del parámetro de entrada (Easy)

// function typeData (a){
//     return typeof a;
// }

// console.log(typeData(5));

// - Escribir una función que devuelva el tipo del parámetro de entrada

// Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo) (Easy)

//CUADRADO

// function area (a,b){
//     return a * b;
// }

// console.log(area (12,12));

// function perimetre (a,b){
//     return a*2 + b*2;
// }

// console.log(perimetre(12,12));

// //TRIANGULO 

// function perimetroT (a,b,c){
//     return a+b+c;

// }
// console.log (perimetroT(10,20,30));

// function areaT (a,b){
//     return (a*b)/2 ;
// }
// console.log (areaT(10,50));

// //CIRCULO

// function perimetroC (a){
//     return 2 * Math.PI * a;
// }
// console.log(perimetroC(10));

// function areaC (a){
//     return Math.PI * (a**2);
// }
// console.log(areaC(10));

// //RECTANGULO

// function areaRectangle(base,altura) {
//     return base*altura;
// }

// function perimetroRectagle(base, altura) {
//     return 2*base + 2*altura;
// }

// console.log(areaRectangle(2,5));
// console.log(perimetroRectagle(2,5));


// - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes)

function addition (a,b){
    return a + b;
}


