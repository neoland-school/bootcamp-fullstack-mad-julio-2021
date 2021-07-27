// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido())
// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())
// 3- Crear una clase animal que represente un animal. El gato y el perro deberá heredar de animal
// 4- Crear una clase pollito que represente un pollito
// 5- Crear un objeto de cada clase e imprimir el sonido que hace

class Animal {
    constructor(name, age, color, pawNum) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.pawNum = pawNum;
    }
}

class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4);
    }

    makeNoise() {
        console.log('woof woof');
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4);
    }

    makeNoise() {
        console.log('meow meow');
    }
}
 
class Chick extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 2);
    }

    makeNoise() {
        console.log('peep peep');
    }
}

let newDog = new Dog('rocky', 'white', 3);
newDog.makeNoise();

let newCat = new Cat('isidoro', 'orange', 5);
newCat.makeNoise();

let newChick = new Chick('calimero', 'black', 10);
newChick.makeNoise();