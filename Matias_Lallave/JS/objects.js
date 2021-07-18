// 1- Hello World. Crear un objeto que tenga un propiedad de tipo number. 
//      Imprimir solo la propiedad por pantalla 
//      Imprimir todo el objeto por pantalla
//      Repetir el proceso pero con propiedades que tengan los tipos de datos string, boolean, 
//          null, undefined , array, function, objects

let object = {
    number: 8,
}

console.log(object.number);

console.log(object);

let object2 = {
    number: 10,
    string: 'hola',
    boolean: true,
    null: null,
    undefined: undefined,
    array: [5, 3, 7, 1],
    function: (a, b) => a + b,
    anotherObject: {
        what: 'ʕ•ᴥ•ʔ',
        the: '(͡ ͡° ͜ つ ͡͡°)',
        fuck: '(ಥ﹏ಥ)',
    },
}

console.log(object2);

console.log(object2.function(6, 4));

console.log(object2.anotherObject);

// * 2- Crear un objeto que represente un coche y tenga las propiedades marca, modelo, matricula, 
//        velocidad actual y algo que me indique si está encendido o apagado
// * 
// * 3- Crear un array de objetos coche
// * 
// * 4- Imprimir por pantalla la velocidad del 4º coche
// * 
// * 5- Hacer una funcion que devuelva un array con los coches de una marca que se le pasa por parametro
// * 
// * 6- Hacer una funcion que me indque si hay algun coche encendido
// * 
// * 7- Hacer una funcion que me devuelva la velocidad media de todos los coches

//-> EXERC.2

let car1 = {
    brand: 'Subaru',
    model: 'Impreza',
    plate: '12345XY',
    speed: 140,
    turnOn: false,
}

let car2 = {
    brand: 'Toyota',
    model: 'Celica',
    plate: '75356UGG',
    speed: 120,
    turnOn: false,
}

let car3 = {
    brand: 'Lancia',
    model: 'Delta',
    plate: '88239ZI',
    speed: 186,
    turnOn: false,
}

let car4 = {
    brand: 'Lancia',
    model: 'Stratos',
    plate: '18222KL',
    speed: 111,
    turnOn: false,
}

//-> EXERC.3

let testArrayCars = [car1, car2, car3, car4];

//-> EXERC.4

console.log(testArrayCars[3].speed);

//-> EXERC.5

const whatBrand = (brand, arrayCars) => arrayCars.filter(v => v.brand === brand);

console.log(whatBrand('Lancia', testArrayCars));

//-> EXERC.6

const isAnyOn = arrayCars => arrayCars.some(v => v.turnOn === true);

console.log(isAnyOn(testArrayCars));

//-> EXERC.7

const averageSpeed = arrayCars => arrayCars.reduce((acc, v) => acc + v.speed,0)/arrayCars.length;

console.log(averageSpeed(testArrayCars));



