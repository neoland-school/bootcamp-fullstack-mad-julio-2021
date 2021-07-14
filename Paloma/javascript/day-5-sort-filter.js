// * 1- Escribir una funcion de comparacion para ordenar un array de numeros de mayor a menor (hecho)
// * 2- Escribir una funcion de comparacion para ordenar un array de booleanos poniendo primero los false y luego los true
// * 3- Escribir una funcion de comparacion para ordenar un array de strings por su longitud de caracteres de menor a mayor
// * 4- Escribir una funcion para filtrar un array de numeros dejando solo los numeros pares
// * 5- Escribir una funcion para filtrar un array de numeros dejando solo los mayores de 30
// * 6- Escribir una funcion para filtrar un array de booleanos dejando solo los valores true
// * 7- Escribir una funcion para filtrar un array de strings dejando los que su longitud sea impar


//ejercicio1 (sort)

let firstArray = [3, 5, 6, 8, 1, 2, 0, 3, 7, 7, 8, 4]; //array que se usa
function leastToGreater (a,b){
    return a-b;
}
function greaterToleast(a,b){ //a y b son los numeros que va a comparar

    return b-a; //b tiene que ser mayor para que el numero grande vaya primero
}
console.log (firstArray.sort(greaterToleast)); //primera function + la segunda (donde se comparan los numeros)

// //ejercicio 2

let booleanarray = [true, false, false, false, true, false]; //similar al ejercicio anterior pero se le da valor booleano.

console.log (booleanarray.sort(leastToGreater));

// //ejercicio 3

let stringArray = ['pepino', 'aceituna', 'salmorejo', 'aguacate','pan'];
function lengthorder (a,b){

    return a.length-b.length;
}
console.log (stringArray.sort(lengthorder));

// //ejercicio 4 (filtros):
function onlyEvens (value){
    return value%2 === 0;
}
console.log (firstArray.filter(onlyEvens));

// //ejercicio 5
let otherArray = [400,30,20,501,298,40,65,14,21];
function greaterthan30 (value){
    return value >30;
}
console.log (otherArray.filter(greaterthan30));

// //ejercicio 6
function onlyTrue (value){
    return value !== false;
}
console.log (booleanarray.filter(onlyTrue));

//ejercicio 7
function evenString (value){
    return value.length%2===0;
}
console.log (stringArray.filter(evenString));


