//1- Crear una clase que represente un perro (nombre, edad, numero de patas, color, hacerSonido())

// class Perro { 
//     // definicion de propiedades//
//     constructor(nombre,edad,numeroDePatas,color){ 
//     this.nombre= nombre;
//     this.edad= edad;
//     this.numeroDePatas= numeroDePatas;
//     this.color= color;
//     }

//     //definicion de metodos//
//     hacerSonido(){
//         console.log ('guau');
//     }
// }


// //2- Crear una clase que represente un gato (nombre, edad, numero de patas, color, hacerSonido())

// class Gato { 
//     // definicion de propiedades//
//     constructor(nombre,edad,numeroDePatas,color){ 
//     this.nombre= nombre;
//     this.edad= edad;
//     this.numeroDePatas= numeroDePatas;
//     this.color= color;
//     }

//     //definicion de metodos//
//     hacerSonido(){
//         console.log ('miau');
//     }
// }


//3- Crear una clase animal que represente un animal. El gato y el perro deberá heredar de animal


class Animal {
    constructor(nombre,edad,numeroDePatas,color,sonido){ 
    this.nombre= nombre;
    this.edad= edad;
    this.numeroDePatas= numeroDePatas;
    this.color= color;
    this.sonido = sonido;
    }
    
    //definicion de metodos//
    hacerSonido(){
        console.log (this.sonido);
    } 
}

class Perro extends Animal {
    constructor(nombre,edad,color){
        super(nombre,edad,4, color,'guau')
    }
}
let tobi = new Perro ('tobi', 5, 'negro');
tobi.hacerSonido()


class Gato extends Animal {
    constructor(nombre,edad,color){
        super(nombre,edad,4, color,'miau')
    }
}
let michi = new Gato ('michi', 3, 'gris');
michi.hacerSonido()


//4- Crear una clase pollito que represente un pollito
class Pollito extends Animal {
    constructor(nombre,edad,color){
        super(nombre,edad,2, color,'pio')
    }
}
let polluelo = new Pollito ('polluelo', 1, 'amarillo');
polluelo.hacerSonido()


console.log(tobi);
console.log(michi);
console.log(polluelo);
