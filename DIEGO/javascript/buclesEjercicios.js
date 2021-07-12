// EJERCICIOS Sentencias condicionales y bucles
// - Escribir un programa que dado dos números imprima el mayor de ellos (Easy)
// - Escribir un programa que recorra los enteros de una variable dada y vaya imprimendo por pantalla si esos son pares o impares (Easy)
// - Escribe un programa que recorra los números del 1-100 e imprima por pantalla: (Medium)
//          Fizz, si es multiplo de 3
//          Buzz, si es múltiplo de 5
//          FizzBuzz, si es múltiplo de 3 y 5 a la vez
// -Escriba por pantalla un programa que pinte el siguiente patrón: (Hard)
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  
// * * * *  
// * * * 
// * *
// *
// - Ejercicio que calcule el valor de la sucesión de fibonacci de una variable. Implementar la solución con un while (Hard)


// PRIMER EJERCICIO

const numeroUno = 0;
const numeroDos = 6;


if (numeroUno > numeroDos) {
    console.log(`El primer número introducido es el más grande (${numeroUno})`);
} else if (numeroDos > numeroUno) {
    console.log(`El segundo número introducido es el más grande (${numeroDos})`)
} else if (numeroUno === numeroDos) {
    console.log("Los dos números son iguales.");
} else {
    console.log("Algo malo ha ocurrido.");
}

// SEGUNDO EJERCICIO

const numero = 10;

if (numero % 2 === 0) {
    console.log("El número es par.");
} else {
    console.log("El número es impar");
}

//TERCER EJERCICIO

let i = 0;

for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz' + i);
    } else if (i % 3 === 0) {
        console.log('Fizz' + i);
    } else if (i % 5 === 0) {
        console.log('Buzz' + i)
    }
}

// CUARTO EJERCICIO

for (let i = 0; i < 10; i++) {
    let str = '*';
    console.log(str.repeat(i));
    if (i === 5) {
        for (let j = 4; j > 0; j--) {
            console.log(str.repeat(j));
        }
        break;
    }
}

// QUINTO EJERCICIO

let i = 0;
let fibo = 0;
let fiboTemp1 = 0;
let fiboTemp2 = 0;
let check = 0;
const nombre = 'F';

while (i < 10) {
    if (i === 0) {
        fibo = 0;
        fiboTemp1 = fibo;
        console.log(nombre + i + (': ') + fibo);
        i++;
    } else if (i === 1) {
        fibo = 1;
        fiboTemp2 = fibo;
        console.log(nombre + i + (': ') + fibo);
        i++;
    } else {

        fibo = fiboTemp1 + fiboTemp2;
        console.log(nombre + i + (': ') + fibo);
        if (i === 2) {
            fiboTemp1 = 1;
            i++;
        } else {
            fiboTemp2 = fiboTemp1;
            fiboTemp1 = fibo;
            i++;
        }
    }

}






