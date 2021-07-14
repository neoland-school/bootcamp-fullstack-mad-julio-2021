// // /*
// // //  * Una carretera tiene como limite de velocidad 90Km/h
// // //  * En funcion de la contaminación que haya se reduce la velocidad a 70km/h
// // //  * Si la contaminación es superior a 65%
// // //  * Construir una aplicación que me diga a que velocidad tengo que ir por la 
// // //  * carretera en funcion de la contaminación
// // //  * 
// // //  */
// // const Pollution=12;

// // if (Pollution >= 65) {
// //     console.log('tienes que ir a 70Km/h');
// // }
// // else {
// //     console.log('tienes que ir a 90Km/h');
// // }

// // // /*
// // // * Un semáforo puede estar verde, ambar fijo, ambar intermitente o rojo
// // // * Construir una aplicación que me indique si puedo pasar o no por el semaforo
// // // * PD: Supuestamente Ambar Fijo deberías frenar y no pasar.
// // // * PD: Supuestamente Ambar Intermitente podrías pasar
// // // */
// // // //Ejemplo 1
// // const Stoplight1 = 'purple';
// // if (Stoplight1 ==='green' || Stoplight1==='Blinking') {
// //    console.log ('You can pass the light');
// // }
// // else if (Stoplight1 ==='red' || Stoplight1 === 'yellow') {
// //     console.log ('You MUST stop');
// // }
// // else {
// //     console.log ('The world is ending, go home')
// // }
// // /*_________________________________________________________________________________________
// // *Ejemplo 2
// // */

// // const Stoplight = 'purple';
// // const Greenlight = Stoplight=== 'green' || Stoplight === 'YellowBlinking';
// // const Redlight = Stoplight=== 'red' || Stoplight === 'Yellowfixed';

// // if (Greenlight) {
// //     console.log ('You are free to go');
// // }
// // else if (Redlight) {
// //     console.log ('You must stop');
// // }
// // else {
// //     console.log ('Error, go home!!!!!!!')
// // }

// // // //ejemplo 2 es mas facil de leer cuando se esta programando

// // // /*
// // // * Construir una aplicación que a partir de la nota de una asignatura me diga si 
// // // * la asignatura está 
// // // * SUSPENSA (<5), 
// // // * APROBADA(5-<7), 
// // // * NOTABLE(7-<9), 
// // // * SOBRESALIENTE(9-<10)
// // // * MATRICULA DE HONOR (10)
// // // */

// // const mark =10;
// // if (mark >= 0.0 && mark < 5.0)
// // {
// //     console.log ('You have failed...loser');
// // }
// // else if (mark >= 5.0 && mark < 7.0)
// // { 
// //     console.log('You kinda passed...but not well');
// // }
// // else if (mark >= 7.0 && mark < 9.0)
// // {
// //     console.log('Good job, you nerd. You passed with a high mark');
// // }
// // else if (mark >= 9.0 && mark < 10.0)
// // {
// //     console.log ('good job smarty pants, you recieved a great mark!');
// // }
// // else if (mark ===10.0)
// // {
// //     console.log ('You are a genius, good job!!!!!!');
// // }

// // /* CAMBIO A SWITCH */

// // const Stoplight = 'purple';
// // const Greenlight = Stoplight=== 'green' || Stoplight === 'YellowBlinking';
// // const Redlight = Stoplight=== 'red' || Stoplight === 'YellowFixed';

// // switch (Stoplight){
// //     case 'green':
// //     case 'YellowBlinking': console.log('puedes pasar'); break;
// //     case 'YellowFixed':
// //     case 'red': console.log('no puedes pasar'); break;
// //     default: console.log('Vete a casa');
// // }

// //Practica Bucle
// // let SumAcc = 0;
// // SumAcc += 1;
// // SumAcc += 2;
// // SumAcc += 3;
// // SumAcc += 4;
// // SumAcc += 5;
// // SumAcc += 6;
// // SumAcc += 7;
// // SumAcc += 8;
// // SumAcc += 9;
// // SumAcc += 10;
// // console.log(SumAcc);

// let SumAcc =0;

// for(let i=0; i<=5; i++)    
// {
// SumAcc += i;
// }
// console.log (SumAcc);
// let SumAcc = 0;
// let i=0;
// while (i<=10000){
//     SumAcc += i;
//     i++;
// }
// console.log(SumAcc);



//FUNCIONES//

// function convert ()


// let myArray = ['gatos', 'perros', 'cucarachas', 'pájaro'] //para acceder a una posición... se abre corchetes dentro
// console.log (myArray[3])

//array bidimension:

// let unidiensionalArray = [1,2,3,4,5] //dentro de esta array se puede tener arrays dentro. 
let bidimensionalArray = [[1,2,3],[2,3,4],[2,3,5]]
// this looks like
// 1  2  3 
// 2  3  4
// 2  3  5 
//cuando se quiere saber de que array se habla, es como unas coordinadas 
// el numero 3 de la primera fila, serìa console.log (bidimensionalArray [0][2]

for (let i=0; i>bidimensionalArray.length; i++){ //filas de array
    for (let j=0; j<bidimensionalArray[i].length; j++){// columnas{
    }

}
console.log (bidimensionalArray[i][j]);