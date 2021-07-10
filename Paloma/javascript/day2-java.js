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

// // // // //ejercicio 1
// let num1= 54;
// let num2= 54;

// if (num1 > num2) {
//     console.log (num1);
// }
// else if (num1 === num2) {
//     console.log ('Same number, sorry loser');
// }
// else {
//     console.log (num2);
// }

// // // // //ejercicio 2
// let numfor =6;

// for (i=1; i<=numfor; i++){
//     if (i%2===0){
//         console.log (i + ' even');
//     }
//     else {
//         console.log (i + ' odd');
//     }
// // } 
// // // // //ejercicio3

// let numEx3 =100;
// for( i=0; i<=numEx3; i++) {
//     console.log (i);
//     if ( i%3===0) {
//         console.log ('Fizz');
//     }
// if ( i%5===0) {
//     console.log ('Buzz');
// }
//  if (i%3===0 && i%5===0) {
//      console.log ('BuzzFizz');
//  }
// }

// for (let i=1; i<100; i++) 
// {
// let output ='';
// if ( i%3===0){
// }
// output +='fizz';
// if ( i%5===0){
// output += 'buzz';}
// console.log (output);
// }
//Ejercicio 4

///////////////////////////

let star = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    star+= "* ";
  }
  star += "\n";
}
 for (let v=0; v<5; v++) {
     for (let s=4; s>v; s--){
         star += "* ";
     }
     star += "\n";
 }
 console.log (star);