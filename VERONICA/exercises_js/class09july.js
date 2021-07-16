// let sumAcc = 0;
// // sumAcc += 1; sumAcc + sumAcc = 1
// // sumAcc += 2; // SumAcc + sumAcc = 2; Es equivalente
// // sumAcc += 3; //SumAcc + sumAcc = 3;
// // sumAcc += 4; //
// // sumAcc += 5;
// // sumAcc += 6;
// // sumAcc += 7;
// // sumAcc += 8;
// // sumAcc += 9;
// sumAcc += 10;

// console.log(sumAcc);

/**
 * Una carretera tiene como limite de velocidad 90Km/h
 * En funcion de la contaminación que haya se reduce la velocidad a 70km/h
 * Si la contaminación es superior a 65%
 * Construir una aplicación que me diga a que velocidad tengo que ir por la 
 * carretera en funcion de la contaminación
 * 
 * 
 * 
 * limite de 90 km/h
 * se reduce la velocidad a 70 km/h si la contaminacion es superior 65%
 * 
 * velocidad a la que tengo que ir por la carretera en funcion de la contaminacion
 */

// const ACTUAL_SPEED = 80;
// const PORCENTAJE = 65 * ACTUAL_SPEED /100 ;
// const LIMITE = 90;
// const MUST_REDUCE = PORCENTAJE < LIMITE ; //true

// console.log(MUST_NOT_REDUCE);

// if (MUST_REDUCE){
//     console.log("Debes reducir velocidad");
// }
// else{
//     console.log("Puedes seguir");
// }


// * A traffic light can be 'green', 'flashing amber', 'amber' or 'red'.
// * Build and algorithm that prints if a car must stop or can go on.
// * PD: flashing amber you can go on
// * PD: amber you must stop
// */

// let traffic_light = 'gren';

// if (traffic_light === 'green' || traffic_light === 'flashing amber'){
//     console.log('Can go on');
// } else if (traffic_light === 'amber' || traffic_light === 'red'){
//     console.log('Must stop');
// } else {
//     console.log('The traffic light is broken');
// }

//////////////////////// Doing with Switch 

// switch (traffic_light){
//     case 'green':
//     case 'flashing amber':
//     console.log ('Can go on');
//     break;
//     case 'amber':
//     case 'red':
//     console.log('Must stop');
//     break;
//     default:
//     console.log ('The traffic light is broken');
// }

// * Given a subject result, build an algorithm that prints your result in letters:
// * SUSPENSA (<5)
// * APROBADA(5-<7),
// * NOTABLE(7-<9),
// * SOBRESALIENTE(9-<10)
// * MATRICULA DE HONOR (10)
// */

// let subjectResult = 8;

// if (subjectResult < 5){
//     console.log('Suspensa');
// } else if (5 <= subjectResult && subjectResult < 7){
//     console.log('Aprobada');
// } else if (7 <= subjectResult && subjectResult < 9){
//     console.log ('Notable');
// } else if (9 <= subjectResult && subjectResult < 10){
//     console.log ('Sobresaliente');
// } else{
//     console.log('Matricula de honor');
// }

//////////////// Doing with switch

// switch (subjectResult) {
//     case 1:
//         console.log('Suspensa');
//         break;
//     case 2:
//         console.log('Suspensa');
//         break;
//     case 3:
//         console.log('Suspensa');
//         break;
//     case 4:
//         console.log('Suspensa');
//         break;
//     case 5:
//         console.log('Aprobada');
//         break;
//     case 6:
//         console.log('Aprobada');
//         break;
//     case 7:
//         console.log('Notable');
//         break;
//     case 8:
//         console.log('Notable');
//         break;
//     case 9:
//         console.log('Sobresaliente');
//         break;
//     case 10:
//         console.log('MATRICULA DE HONOR');
//         break;
//     default:
//         console.log ('You didnt the examen')
// }

// // - Escribir un programa que dado dos números imprima el mayor de ellos (Easy)

// numberOne = 2;
// numberTwo = 6;

// let MAYOR = numberOne > numberTwo; //TRUE
// let MENOR = numberOne < numberTwo; //FALSE

// if (MAYOR >= MENOR)
// {
//   console.log("Es el numero mayor");
// } 
// else {
//   console.log("Es el numero menor");
// }

// Given a number, loop from 0 to that number printing if it's even or odd

// let justA_number = 15;

// for (let i = 1; i <= justA_number; i++){
//     if (i%2===0){
//         console.log(i + ' ' + 'Par');
//     }
//     else {
//         console.log(i + ' ' + 'Impar');
//     }
// }

// Build an algorithm that loops over numbers from 1 to 100 and prints:
//  *  - 'Fizz' if the current number is multiple of 3
//  *  - 'Buzz' if the current number is multiple of 5
//  *  - 'FizzBuzz' if the current number is multiple of 3 and 5


// for (let i = 0; i <= 100; i++){
//     if (i%3 === 0 && i%5 === 0){
//         console.log(i + ' FizzBuzz');
//     } else if (i%5===0){
//         console.log(i + ' Buzz');
//     } else if (i%3===0){
//         console.log(i + ' Fizz');
//     } else{
//         console.log(i);
//     }
// }
// print the following pattern. It must be printed using loops

// *      *
// *      **
// *      ***
// *      ****
// *      *****
// *      ****
// *      ***
// *      **
// *      *



for (let i = 0; i < 5; i++) {
    i+=i = i+=i;
    console.log('*');
}

