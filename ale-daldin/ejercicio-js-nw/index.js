
console.log('\t----- Ejercicio 1-----');
/** Ejercicio 1
 * Una carretera tiene como limite de velocidad 90Km/h
 * En funcion de la contaminación que haya se reduce la velocidad a 70km/h
 * Si la contaminación es superior a 65%
 * Construir una aplicación que me diga a que velocidad tengo que ir por la 
 * carretera en funcion de la contaminación*/

let polution = 66;
if (polution >= 65) {
   console.log('Debes reducir tu velocidad a 70km/h');
} else {
    console.log('Puedes ir hasta 90km/h');
}

console.log('\t----- Ejercicio 2 -----');
/* Un semáforo puede estar verde, ambar fijo, ambar intermitente o rojo
* Construir una aplicación que me indique si puedo pasar o no por el semaforo
* PD: Supuestamente Ambar Fijo deberías frenar y no pasar.
* PD: Supuestamente Ambar Intermitente podrías pasar*/


const trafficLight = '';

switch (trafficLight) {
  case 'green':
  case 'flashing yellow':
    console.log('Puedes Pasar');
    break;
  case 'red':
  case 'yellow':
    console.log('Tienes que Parar');
    break;
  default:
    console.log('No se lo que debo hacer aqui');
}

console.log('\t----- Ejercicio 2 -----');
/* Construir una aplicación que a partir de la nota de una asignatura me diga si 
* la asignatura está 
* SUSPENSA (<5), 
* APROBADA(5-<7), 
* NOTABLE(7-<9), 
* SOBRESALIENTE(9-<10)
* MATRICULA DE HONOR (10)*/

let score = 4;

if (score < 5) {
 }else if(5<=score && score<7){
    console.log('APROBADA');
}else if(7<=score && score<9){
    console.log('NOTABLE');
}else if(9<=score && score<10){
    console.log('SOBRESALIENTE');
}else{
    console.log('MATRICULA DE HONOR');
}



console.log('\t----- Ejercicio 3 -----');
/*Escribir un programa que dado dos números imprima el mayor de ellos */
let firstNumberChoice = 4;
let secondNumberChoice =12;

if (firstNumberChoice>secondNumberChoice) {
    console.log (firstNumberChoice);
} else {
    console.log (secondNumberChoice);
}


console.log('\t----- Ejercicio 4 -----');
/*Escribir un programa que recorra los enteros de una variable dada y vaya imprimendo por pantalla si esos son pares o impares*/
/*RESOLUCION FINAL*/
const integerNumber = 4;

for(let i=0; i<=integerNumber; i++){
    if(i%2===0){
        console.log(i+' is odd');
    }else{
        console.log(i+' is even');
    }
}

console.log('\t----- Ejercicio 5 -----');
/*This loop will print numbers 0-9, will stop when condition is met (i = 10)*/
/*RESOLUCION MIA*/
let addANumber = 1;
for (i=0; i<11 ; i++) {
    console.log (i);
}

console.log('\t----- Ejercicio 6 -----');
/*Escribe un programa que recorra los números del 1-100 e imprima por pantalla:
         Fizz, si es multiplo de 3
         Buzz, si es múltiplo de 5
         FizzBuzz, si es múltiplo de 3 y 5 a la vez */

for (let i = 1; i <= 100; i++) {
  let output = '';
  if (i % 3 === 0) {
    output += 'Fizz';
  }
  if (i % 5 === 0) {
    output += 'Buzz';
  }
  console.log(i+': ' + output);
}

console.log('\t----- Ejercicio 7 -----');
/*-Escriba por pantalla un programa que pinte el siguiente patrón:
*  
* *  
* * *  
* * * *  
* * * * *  
* * * *  
* * * 
* *
*
*/
const maxTriangleWidth =5;
for(let i=1; i<=tringleHeight; i++){
     let asterics = '';
     for(let j=1; j<=i; j++){
         asterics+='*';
     }
     console.log(asterics);
 }
 ​
 
 for(let i=tringleHeight-1; i>0; i--){
     let asterics = '';
     for(let j=1; j<=i; j++){
         asterics+='*';
     }
     console.log(asterics);
 }



console.log('\t----- Ejercicio 8 -----');
​/*Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while */
const fibNumber = 8; 
​
​
let result_while; 
let fib_prev_2_while = 0; 
let fib_prev_1_while = 1; 
​
if(fibNumber===0){ 
    result_while = fib_prev_2_while;
}
​
if(fibNumber===1){ 
    result_while = fib_prev_1_while;
}
​
let i_exercise8=2;
while( i_exercise8<=fibNumber){ 
    result_while = fib_prev_1_while + fib_prev_2_while; 
    fib_prev_2_while = fib_prev_1_while; 
    fib_prev_1_while = result_while; 
    i_exercise8++;
}
​
console.log('Fibonacci ' + fibNumber + ': ' + result_while);