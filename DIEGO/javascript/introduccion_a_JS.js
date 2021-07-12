/**
 * Crear dos variables numéricas y realizar su suma, resta multiplicación y division
14:22
Crear dos variables string y concatenarlas
14:23
Imprimir la longitud del string resultante del ejercicio anterior
14:23
Ejercicio que guarde en una variable los grados Celsius (X) e imprima por pantalla sus correspondientes grados Farenheit "X ºC son YºF"
14:23
Imprimir por consola 'true' o 'false' si una variable número está entre 10 y 100
14:25
Con el ejercicio de la calculadora de grados celsius, imprimir si una variable en ºC temperatura esta es mayor de 87 ºF
 */


// EJERCICIO PRIMERO
let num1 = 10;
let num2 = 4;

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;

console.log('Numero1: ' + num1 + ' Numero2: ' + num2 + ' Suma: ' + suma + ' Resta: ' + resta + ' Multiplicacion: ' + multiplicacion + ' División: ' + division);

//EJERCICIO SEGUNDO
let nombre = 'Diego';
let apellido = ' Tellez';

console.log(nombre + apellido);

//EJERCICIO TERCERO

let nombreCompleto = 'Diego Tellez';
console.log(nombreCompleto.length);

//EJERCICIO CUARTO

a = input('Temperatura: ');
console.log(a);

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Welcome to our Celsius to Farenheit conversion engine.")
console.log("Please insert a temperature in º Celsius ")
readline.question('Temperature: ', temp => {

    tempF = (temp * 9 / 5) + 32;
    console.log(`${temp} grados Celsius son ${tempF} grados Farenheit!`);
    readline.close();
});

// EJERCICIO DE SALARIO ANUAL

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Welcome to our Hacienda Paradise App.")
console.log("Please insert your anual salary. ")
readline.question('Anual Salary: ', salary => {

    let monthly_pay = salary / 12;
    let monthly_pay_after_taxes = monthly_pay - (monthly_pay * 0.15);
    // let dollar_sign = ' $.';
    console.log(`Your gross monthly pay is: ${monthly_pay} €`);
    console.log(`After taxes (15%) you'll be earning: ${monthly_pay_after_taxes} €`);
    console.log(`You paid: ${monthly_pay * 0.15} €/month in taxes which makes a total of ${salary * 0.15} € per annum.`);
    readline.close();
});

//EJERCICIO SEXTO


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Welcome to our Celsius to Farenheit conversion engine.")
console.log("Please insert a temperature in º Celsius ")
readline.question('Temperature: ', temp => {

    let tempF = (temp * 9 / 5) + 32;
    console.log(`${temp} grados Celsius son ${tempF} grados Farenheit!`);
    readline.close();
    let check = tempF > 87;
    console.log("¿Son mas de 87 grados Farenheit?: ");
    console.log(check);
});

// EJERCIO SEPTIMO BECA



const ASIGNATURAS_TOTALES = 8;
let asignaturas_aprobadas = 7;

let nota1 = 6;
let nota2 = 6;
let nota3 = 6;
let nota4 = 6;
let nota5 = 10;
let nota6 = 10;
let nota7 = 6;
let nota8 = 6;


const MEDIA_NOTAS = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8) / 8;

check = (asignaturas_aprobadas > 6.4 && MEDIA_NOTAS >= 6.5);

console.log("Asignaturas aprobadas: " + asignaturas_aprobadas + " Nota media: " + MEDIA_NOTAS + " Beca asignada:" + check);

// //EJERCICIO MEDIUM

let saldo = 790;

let tomates = 200;
let pescado = 200;
let fruta = 200;
let dulces = 200;

const PRECIO_TOTAL = tomates + pescado + fruta + dulces;
let check = PRECIO_TOTAL <= saldo;

console.log("Puedes pagar la cuenta: " + check);

// EJERCICIO EASY

let num = 3;

console.log("El numero es par: " + (num % 2 == 0));

//****************************************************** */

let hijos = 3;

console.log("Es familia numerosa: " + (hijos > 2 && hijos < 5));


//****************************************************** */

let peso = 120;
let altura = 1.85;

let imc = peso / (altura ** 2);

console.log("Tiene obesidad grado II: " + (imc >= 35 && imc <= 39.9));

