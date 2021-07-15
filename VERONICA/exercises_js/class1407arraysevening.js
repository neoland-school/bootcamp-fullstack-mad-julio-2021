// 1- (Easy) Crear una funcion que dado un array numeros me diga si todos los numeros son mayores que 10


// let arrNumberOne = [101, 9, 160, 30, 120,];

// function greatherThanTen (arr){
//    return arr > 10;
// }

// console.log(arrNumberOne.every(greatherThanTen));

// 2- (Easy) Crear una funcion que dado un array numeros me diga si hay alguno mayor que 10

// let arrNumberTwo = [5, 6, 7, 2, 1, 4, 8];

// function anythingwith10(value){
//     return value > 10;
// }

// console.log(arrNumberTwo.some(anythingwith10));

// 3- (Easy) Crear una funcion que dado un array de strings, devuelva un array sin modificar el de entrada, con todos los strings en mayúsculas

// let arrStr = ['Uno', 'Dos', 'Tres', 'Cuatro','Cinco'];

// function modificationUpperCase (value){
//     return value.toUpperCase();
// }

// console.log(arrStr.map(modificationUpperCase)); //.map(); sin modifica la primera es decir la de arriba;

// 4- (Easy) Crear una funcion que dado un array de strings, modifique el array con todos los strings en mayúsculas

// let arrStrTwo = ['Rock', 'Metal', 'Pop', 'Electrónica'];

// for (let i = 0; i<arrStrTwo.length; i++){
//     arrStrTwo[i]=arrStrTwo[i].toLocaleUpperCase();
// }

// console.log(arrStrTwo);




// 5- (Easy) Crear una función que dado un array elimine el elemento que se encuentra en la mitad (redondeada hacia abajo)

let arrStrThree = ['enero', 'febrero', 'Marzo', 'Abril', 'Mayo'];

// eliminar
// ubicado en la mitad
// redondeado hacia abajo


function removeMiddleElemt (arr){
    
    for (i = 0; i<arr.lenght-1; i++){
         if ()
    }
}



// console.log(arrStrThree.findIndex[]);

// console.log(Math.floor(5.263));




// 6- (Medium) Crear una funcion que dado un array de strings, me devuelva los strings de la posicion de la mitad del array, los dos anteriores y los dos siguientes, en un mismo string separados por espacios
// 7- (Medium) Crear una funcion que dado un array bidimensional de strings, lo convierta a un array unidimensional con todos los strings consegutivos.
//    EJ: [['a','b'], ['c','d']] => ['a','b','c','d']
// 8- (Hard)Cuando vamos a urgencias, nos atienden en recepción y nos asignan un orden para ser atendido.
//   Este orden va en funcion de dos factores:
//      1.- Orden de llegada a urgencias
//      2.- Criticidad de la urgencia
//   Construir una función "siguientePaciente" que dados dos arrays de la misma longitud
//    - EL primer array es el de los nombres de los pacientes en orden de llegada
//    - El segundo array representa la criticidad asociada a cada paciente
//   El array de criticidad está asociado con el array de nombres por su posicion de forma que:
//   El paciente en la primera posicion del array de nombres tiene la criticidad de la primera 
//   posicion del array de criticidades.
//   La función "siguientePaciente" debe eliminar y devolver el nombre del siguiente paciente
//   que hay que atender en urgencias