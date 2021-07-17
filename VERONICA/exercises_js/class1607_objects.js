// Crear un objeto que tenga un propiedad de tipo number. 

let orion = {
    name: 'Orion',
    age: 6,
}

// Imprimir solo la propiedad por pantalla 

console.log(orion.age);

// Imprimir todo el objeto por pantalla

console.log(orion);

// Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, null, undefined , array, function, objects

let veronica = {
    name: 'Verónica',
    surname: 'Veka', //string
    age : 27,
    numberOfChild: 1, //number
    isMother : this.numberOfChild !== 0, //boolean
    childName: [orion], //array
    // job, // undefined
    single:null, //null
    pays : { // object
       colombia : 'si',
       belgium : 'si',
       france : 'si',
       spain: 'si',
       germany: 'no',
    },
    anyFunction : function () { //Function
        console.log('Mi funcion');
    },
}

console.log(veronica);
// console.log(veronica.name);
// console.log(veronica.age);
// console.log(veronica.pays);
// console.log(veronica.mother);
// console.log(veronica.childName);
// console.log(veronica.single);
// console.log(veronica.pays);
// console.log(veronica.anyFunction);

// 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, velocidad actual y algo que me indique si está encendido o apagado
//  * 

let coche1 = {
    marca : 'toyota',
    modelo: 'AIGO x-play',
    matricula: '3YU2',
    velocidad: 50,
    encendido: true,
    apagado : false,
}


//  * 3- Crear un array de objetos coche

let coche2 = {
    marca : 'Ford',
    modelo: 'x-play',
    matricula: '5BJW',
    velocidad: 70,
    encendido: true,
    apagado : false,
}

let coche3 = {
    marca : 'Jaguar',
    modelo: 'Model2021',
    matricula: '3YAI',
    velocidad: 80,
    encendido: true,
    apagado : false,
}

let coche4 = {
    marca : 'Toyota',
    modelo: 'Mode21',
    matricula: '35AK',
    velocidad: 65,
    encendido: true,
    apagado : false,
}

let coche = [coche1,coche2,coche3,coche4];

// console.log(coche);

//  * 
//  * 4- Imprimir por pantalla la velocidad del 4º coche

// console.log(coche[3].velocidad);

//  * 
//  * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro
//  * 

//NO COMPLETADO

// function myFunc(theObject) {
//     return theObject.marca = "Toyota";
//   }
  
// console.log(coche.filter(myFunc));


//  * 6- Hacer una funcion que me indque si hay algun coche encendido

const ENCENDIDO = (value, i) => coche[i].encendido===true;

// console.log(coche.some(ENCENDIDO));

//  * 
//  * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches

// EJERCICIOS DE LA TARDE


// 1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las propiedades de hora, minutos y segundos del string (Hint: use the split function of strings)

let myStringHour = '14:36:57';

function obWithHour (hour) {0
    let obj = {
        'hour' : '',
        'minute' : '',
        'seg' : '',
    }
    const HOUR_ARRAY = hour.split(':');

    obj.hour = HOUR_ARRAY[0];
    obj.minute = HOUR_ARRAY[1];
    obj.seg = HOUR_ARRAY[2];

    return obj;
}

console.log(obWithHour(myStringHour));


// 2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, devuelva el valor de esa propiedad
// crear funcion - deben darle objeto y string 
// 1. crear un objeto y un string (debe representar el nombre de la propiedad de ese objeto)
// 2. devolver el valor de propiedad

let myFamily = {
    'Mother' : 'Irene',
    'Father' : 'Gustavo',
    'Sisters' : 'Natalia and Valeri',
    'Brothers' : 'Francisco and Santiago',
}

function retValueofObj (value){
    
}


// 3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto
// 4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto
// 5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva el precio total de todos los productos
// 6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva cuantos tipos de producto existen