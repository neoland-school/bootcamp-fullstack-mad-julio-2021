// 1- Escribe una función que dado un string con una hora (EJ: 14:36:57) devuelva un objeto con las propiedades de hora, minutos y segundos del string

let time = '14:36:57';

function getTime() {
    let actualTime = {
        hours: '',
        minutes: '',
        seconds: ''
    }
    let cont = 0;

    let timeArray = time.split(':');

    Object.keys(actualTime).forEach(e => {

        actualTime[e] = timeArray[cont];
        cont++;

    });

    return actualTime;

}
console.log(getTime(time));

// 2- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, devuelva el valor de esa propiedad

let persona = {
    name: 'Jhon',
    surname: 'Shur',
    age: 128,
}

function getObjectProperty(obj, prop) {

    return obj[prop];

}

console.log(getObjectProperty(persona, 'age'));




// 3- Escribe una función que dado un objeto y un string que representa el nombre de la propiedad de ese objeto, elimine esa propiedad del objeto


function deleteObjectProperty(obj, prop) {

    delete obj[prop];
    return obj;

}

// console.log(deleteObjectProperty(persona, 'age'));


// 4- Escribe una función que imprima por pantalla el `nombre:valor` de cada propiedad de un objeto

function showObjectProperties(obj) {

    propertiesArray = Object.entries(obj);

    propertiesArray.forEach(e => console.log(e.join(':')));

}

showObjectProperties(persona);


// 5- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva el precio total de todos los productos

let producto1 = {
    id: '01',
    name: 'pepper',
    type: 'vegetable',
    price: 100
}
let producto2 = {
    id: '02',
    name: 'cucumber',
    type: 'vegetable',
    price: 80
}
let producto3 = {
    id: '03',
    name: 'apple',
    type: 'fruit',
    price: 20
}
let producto4 = {
    id: '04',
    name: 'carrot',
    type: 'vegetable',
    price: 60
}

let productsArray = [producto1, producto2, producto3, producto4];

function getTotalProductPrice() {

    let sum = 0;
    productsArray.forEach(e => sum += e.price);
    return sum;

}

console.log(getTotalProductPrice());





// 6- Escribe una función que dado un array de objetos "producto", que contiene (id, nombre, tipo y precio), devuelva cuantos tipos de producto existen

function checkProductTypes() {

    let cont = 0;
    let tipo = [];
    productsArray.forEach(e => {
        if (!tipo.some(v => v === e.type)) {
            tipo[cont] = e.type;
            cont++;
        }
    }
    );
    return cont;

}

console.log(checkProductTypes());

//EXTRA:7- A la definición de coche de esta mañana añadiremos 4 operaciones que podamos hacer con ellos (arrancar, apagar, acelerar, frenar). Tanto aceleración como frenado sumarian/restarian 10 a la velocidad actual

let carObject1 = {
    brand: 'tesla',
    model: 'apache',
    plate: '123fcs',
    current_speed: 120,
    engine_on: false,
    arrancar: function () {
        if (this.engine_on === true) {
            console.log('Car already on')
        } else {
            this.engine_on = true;
        }
    },
    apagar: function () {
        if (this.engine_on === false) {
            console.log('Car already off')
        } else {
            this.engine_on = false;
            this.current_speed = 0;
        }

    },
    acelerar: function () {
        if (this.engine_on === false) {
            console.log("Car is off. Cant speed up.")
        } else {
            this.current_speed += 10;
        }
    },
    frenar: function () {
        if (this.engine_on === false) {
            console.log("Car is off. Cant speed down.")
        } else {
            this.current_speed -= 10;
            if (this.current_speed === 0) {
                this.engine_on = false;
            }
        }
    }
}
carObject1.arrancar();
console.log(carObject1);
carObject1.acelerar();
console.log(carObject1);
carObject1.frenar();
console.log(carObject1);
carObject1.apagar();
console.log(carObject1);



// 8- (Hard)
//    Write a function which prints every properties of an input object line by line with the next pattern
//    If the property to be printed is an object, it must prints its properties line by line with a tab.
//    this must be repeated for objects of objects
//  * EJ: 
//  * INPUT => {
//  *          key:'value',
//  *          childObj: {
//  *              keyChild:'ValueChild',
//  *              childOfChild: {
//  *                  keyChildOfChild: 'valueChildOfChild'
//  *              }
//  *          }
//  *      }
//  * 
//  * OUTPUT
//  * key-value
//  * childObj-object
//  *      keyChild-ValueChild
//  *      childOfChild-object
//  *          keyChildOfChild-valueChildOfChild

let obj1 = {
    key: 'value',
    childObj: {
        keyChild: 'valueChild',
        childChildObj: {
            keyChildOfChild: 'valueChildOfChild'
        }
    }
}

function outputsObj(obj) {

    let newObj = Object.entries(obj);

    newObj.forEach(e => {
        if (typeof e === 'object') {
            e.forEach(v => {
                console.log(v.join('-'))
            });
        } else {
            console.log(e.join('-'));
        }

    }
}

outputsObj(obj1);