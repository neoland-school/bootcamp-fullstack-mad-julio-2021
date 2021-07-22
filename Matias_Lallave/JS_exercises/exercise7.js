// // 1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las 
//         propiedades de hora, minutos y segundos del string
// // 2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, 
//         devuelva el valor de esa propiedad
// // 3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, 
//         elimine esa propiedad del objeto
// // 4- 4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto 
//          encapsulando cada propiedad por ()
// // 5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
//         devuelva el precio total de todos los productos
// // 6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), 
//         devuelva cuantos tipos de producto existen

//-----EXERCISE1-----

console.log('\nEXERCISE 1');

const setTime = (time) => {return {hour: time.split(':')[0], minutes: time.split(':')[1], seconds: time.split(':')[2]}}

const testTime = '16:44:50';

console.log(setTime(testTime));

//-----EXERCISE2-----

console.log('\nEXERCISE 2')

const getProperty = (obj, str) => obj[str]

let testObj = {
    property: 'this is a property',
}

const testStr = 'property';

console.log(getProperty(testObj, testStr));

//-----EXERCISE3-----

console.log('\nEXERCISE 3')

const deleteProperty = (obj, str) => delete obj[str]

let anotherTestObj = {
    property: 'this is a property',
    anotherProperty: 'this is another property'
}

deleteProperty(anotherTestObj, testStr);

console.log(anotherTestObj);

//-----EXERCISE4-----

console.log('\nEXERCISE 4')

function printObject (obj) {
    Object.entries(obj).forEach(v => console.log('(' + v + ')\n'))
}

anotherTestObj = {
    property: 'this is a property',
    anotherProperty: 'this is another property',
    thirdProperty: 'third property'
}

printObject(anotherTestObj);

//-----EXERCISE5-----

console.log('\nEXERCISE 5')

let product1 = {
    id: '65534P0-HC',
    name: 'SEGA Saturn',
    type: 'home console',
    price: 400
}

let product2 = {
    id: '94534P1-HC',
    name: 'SEGA Dreamcast',
    type: 'home console',
    price: 299
}

let product3 = {
    id: '77532P2-HC',
    name: 'SEGA Mega Drive',
    type: 'home console',
    price: 350
}

let product4 = {
    id: '99912P2-HC',
    name: 'SEGA Mark-3',
    type: 'home console',
    price: 375
}

let product5 = {
    id: '99112Q2-HH',
    name: 'SEGA Mark-3',
    type: 'handheld',
    price: 275
}

let product6 = {
    id: '10002L2-EC',
    name: 'SEGA PiCO',
    type: 'educactional',
    price: 175
}

const testArray = [product1, product2, product3, product4, product5, product6];

const getTotalPrice = arr => arr.reduce((acc, v) => (acc + v.price), 0);

console.log('Total Price = ' + getTotalPrice(testArray));

//-----EXERCISE6-----

console.log('\nEXERCISE 6')

function everyTypeValue (array) {
    let arrTypes = [];
    
    arrTypes = array.map(v => v.type); 

    let arrResult = [arrTypes[0]];
    let current = arrTypes[0];
    for (let i = 0; i < arrTypes.length; i++) {
        if (arrTypes[i] !== current) {
                arrResult.push(arrTypes[i]);
                current = arrTypes[i];
        }
    }

    return arrResult;
}

console.log(everyTypeValue(testArray));