// 1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido())

// class Perro {
//      constructor(nombre, edad, color){
//          this.nombre = nombre;
//          this.edad= edad;
//          this.numeroDePatas;
//          this.color=color;

//      }

//      hacerSonido(){
//         return `${this.nombre} hace Wauff Wauff`;
//      }

// }

// 2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())

// class Gato {
//     constructor(nombre, edad, color){
//         this.nombre = nombre;
//         this.edad= edad;
//         this.numeroDePatas;
//         this.color=color;

//     }

//     hacerSonido(){
//        return `${this.nombre} hace Meauw Meauw`;
//     }

// }

// 3- Crear una clase animal que represente un animal. El gato y el perro deberá heredar de animal


class Animal {
    constructor(nombre, edad, color, numeroDePatas){
        this.nombre = nombre;
        this.edad= edad;
        this.numeroDePatas=numeroDePatas;
        this.color=color;

    }

}

class Gato extends Animal {
    constructor(nombre, edad, color){
        super(nombre,edad,color,4); //el 4 quiere decir que 
    }
    hacerSonido(){
       return `${this.nombre} hace Meauw Meauw`;
    }

}

class Perro extends Animal {
    constructor(nombre, edad, color){
        super(nombre,edad,color,4);
    }
    hacerSonido(){
       return `${this.nombre} hace Wauff Wauff`;
    }

}


// 4- Crear una clase pollito que represente un pollito

class Pollito extends Animal{
    constructor(nombre, edad, color){
        super(nombre, edad, color, 2);
    }

    hacerSonido(){
       return `${this.nombre} hace Pio Pio Pio`;
    }
}

// 5- Crear un objeto de cada clase e imprimir el sonido que hace

let perrito = new Perro('Kitty', 5, 'blanco'); 
perrito.hacerSonido();
let patito =  new Gato('Pelu', 2, 'Gris');
patito.hacerSonido();
let pollito = new Pollito('Tati', 1, 'Amarillo');
pollito.hacerSonido();