//ARRAY DE NUMEROS PRIMOS

// let primo =[2,3,5,7,11,13,17,19,23,29];

// console.log(primo[2]); //Mostrando lo que hay en la posicion 2

// console.log(primo[2]*[7]); // Multiplicando la posicion 2 con la 7

//Intercambiando valor de 9 a 1 y de 1 a 9
// let nwValue = primo[9];
// primo[9]=primo[1];
// primo[1]=nwValue;
// console.log(primo); //Intercambiando valor de 9 a 1 y de 1 a 9

//Sumando los caracteres del array
// let addition = 0;
// for (let i = 0; i < primo.length; i++){ 
//      addition = addition + primo[i]; // i va cambiando cuando va recorriendo cada ciclo // Puede ser asi o addition += primo[i];
// }
// console.log(addition);


// ARRAY DE NUMEROS PARES

// let par = [2,4,6,8,10,12,14,16,18];

// console.log(par[2]);


// 1 .Escribe una función que dado un número y un array, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra (Easy)


// let myArray = [1,2,3,4,5];

// function find (myNumber,myArray){
//     for (let i = 0; i<myArray.length;i++){
//         if (myArray[i]===myNumber){
//             return i;
//         } 
        
//     }
//     return -1;
// }
// console.log(find(6,myArray));

// 2. Escribe una función que pinte el siguiente patrón por consola (Easy):
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - -                                                                                           
// - - - - - - - - - - 


// NO RESUELTO AUN
function guion (){
    dibujo= '';
    for (let i=0; i<10;i++){
      dibujo+='- ';
      for (let j=0; j<10;j++){
        console.log(dibujo);
      }
    } 
}

guion();




// Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal (Medium)

//Escribir una funcion
// dandole un array bidimensional
// devuelva un array con los valores de la diagonal

// let arrayBidi = [[1,2,3],[4,5,6],[7,8,9]];

// function devolver (arrayBidi){

    
// }

// console.log(arrayBidi[a,b,c]);


//PRACTICANDO IF/ELSE

// let day = 'Sunday';

// if (day === 'Saturday' || day === 'Sunday') {
//     console.log('Enjoy the weekend!');
//   } else {
//     console.log('Do some work.');
//   }