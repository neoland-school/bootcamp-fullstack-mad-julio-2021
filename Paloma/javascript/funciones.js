//ex1-multiplique 2 numeros:

let a = 5; // not necesary to add numbers for this excercise. 
let b = 3;
function multiply(a, b) {
    return (a * b);
}
console.log(multiply(a, b));

//ex2-concatene hola a un string de entrada

function myString(stringvalue) { //al stringvalue, cuando se haga el console.log se le da el valor. 
    return stringvalue + 'Hola';
}
console.log(myString('este es un ejemplo'));

//dependiendo de que se le meta al valor stringvalue luego eso se le suma el hola.
/////////////////////////////////////////////////////////////////////////////////////////////////////

//ex3-function que los dados dos booleanos devuelva el AND (&&) de estos
function and(bool1, bool2) {
    return bool1 && bool2;
}
console.log(and(true, false));

//ex4-function que devuelva tantos asteriscos como indique un parametro de entrada

function asterix(numbers) {
    let result = '';

    for (let i = 1; i < numbers; i++) {
        result += '*';
    }
    return result;
}
asterix(23)
//ex5-function que multiplique dos numeros sin usar *

let result = 0;
function multiwithout(a, b) {
    for (let i = 1; i <= b; i++) {
        result += a;
    }
    return result;
}
