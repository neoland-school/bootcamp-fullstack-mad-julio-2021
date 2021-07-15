// - Escribir una función que dado un numero, devuelva el número al revés (EJ: 3456 => 6543) (Medium)
// - Escribir una función que dado un número devuelva si es capicua o no (Hint: usar la función anterior) (Easy con la función anterior)
// - Escribir una función que devuelva el tipo del parámetro de entrada (Easy)
// - Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo) (Easy)
// - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes) (Easy)
// - Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github. (Medium)
// - Crear una función calculadora que reciba como parametros: Dos operandos y la función que se quiera utilizar para calcular. (Hard)
// 	Ejemplo calc(3,4,add) devuelve  7
// - Crear una funcion que dado un NIF o un NIE te indique si es válido o no. En la página del ministerio se explica como se valida (http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie) (Hard)

// ------EXERCISE 1------

console.log("\nEXERCISE 1");

function invertNumber(number) {
    let numberToString = number.toString();
    let numberToStringChanged = "";

    for (i = numberToString.length; i >= 0; i--) {
        numberToStringChanged = numberToStringChanged + numberToString.charAt(i);
    }

    return parseInt(numberToStringChanged);
}

let testNumber = 4568;

console.log(invertNumber(testNumber));

// ------EXERCISE 2------

console.log("\nEXERCISE 2");

function isPalindromic(number) {
    return number === invertNumber(number);
}

testNumber = 10001;
console.log(
    "Is " + testNumber + " a palindromic number?: " + isPalindromic(testNumber)
);

// ------EXERCISE 3------

console.log("\nEXERCISE 3");

function dataType(data) {
    return typeof data;
}

const test = 7464;

console.log("What type is " + test + "?: " + dataType(test));

// ------EXERCISE 4------

console.log("\nEXERCISE 4");

function rectangleArea(w, h) {
    return h * w;
}

function rectanglePerimeter(w, h) {
    return 2 * h + 2 * w;
}

function squareArea(l) {
    return l ** 2;
}

function squarePerimeter(l) {
    return 4 * l;
}

function triangleArea(w, h) {
    return (w * h) / 2;
}

function trianglePerimeter(l1, l2, b) {
    return l1 + l2 + b;
}

function circleArea(r) {
    return Math.PI * r ** 2;
}

function circlePerimeter(r) {
    return 2 * Math.PI * r;
}

const height = 5;
const width = 6;

const squareSide = 6;

const triangleSide1 = 6;
const triangleSide2 = 16;
const triangleSide3 = 8;

const circleRadius = 7;

console.log(
    "Given a rectangle with a height of " +
    height +
    " and a width of " +
    width +
    ", its area is " +
    rectangleArea(height, width) +
    " and its perimeter is " +
    rectanglePerimeter(height, width)
);

console.log(
    "Given a square with a side of " +
    squareSide +
    ", its area is " +
    squareArea(squareSide) +
    " and its perimeter is " +
    squarePerimeter(squareSide)
);

console.log(
    "Given a triangle with a height of " +
    height +
    " and a width of " +
    width +
    ", its area is " +
    triangleArea(height, width) +
    " and given a triangle with its width sides of " +
    triangleSide1 +
    ", " +
    triangleSide2 +
    " and " +
    triangleSide3 +
    " its perimeter is " +
    trianglePerimeter(triangleSide1, triangleSide2, triangleSide3)
);

console.log(
    "Given a circle with a radius of " +
    circleRadius +
    ", its area is " +
    circleArea(circleRadius) +
    " and its perimeter is " +
    circlePerimeter(circleRadius)
);

// ------EXERCISE 5------

console.log("\nEXERCISE 5");

function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function percentage(a, b) {
    return b * (a / 100);
}

// ------EXERCISE 6------

console.log("\nEXERCISE 6");

function itsGitHub(url) {
    const github = "https://github.com/";
    return url.includes(github);
}

const urltest = "https://github.com/matiaslallave?tab=repositories";

console.log("Is this url a GitHub url?: " + itsGitHub(urltest));

// ------EXERCISE 7------

console.log("\nEXERCISE 7");

function calculator(a, b, operation) {
    return operation(a,b);
}

const numberA = 40;
const numberB = 8;

console.log("CALCULATOR: " + numberA + " " + '% of' + " " + numberB + " = " + calculator(numberA, numberB, percentage));

// ------EXERCISE 7------

console.log("\nEXERCISE 7");

function validDNI(dni) {

    // Converting a NIE to a regular NIF

    switch (dni.charAt(0)) {
        case 'X':
            dni = dni.replace('X', '0');
            break;
        case 'x':
            dni = dni.replace('x', '0');
            break;
        case 'Y':
            dni = dni.replace('Y', '1');
            break;
        case 'y':
            dni = dni.replace('y', '1');
            break;
        case 'Z':
            dni = dni.replace('Z', '2');
            break;
        case 'x':
            dni = dni.replace('z', '2');
            break;
        default:
            break;
    }

    // Intializing NIF and DC separatedly

    const controlDigitDNI = dni.charAt(8);
    let numberToStringDNI = '';
    let valid;

    for (let i = 0; i <= 7; i++) {
        numberToStringDNI = numberToStringDNI + dni.charAt(i);
    }

    const numberDNI = parseInt(numberToStringDNI);

    //Checking validation with data provided by Spanish Government (case-resistant)

    switch (controlDigitDNI.toLowerCase()) {
        case "t":
            valid = numberDNI % 23 === 0;
            break;
        case "r":
            valid = numberDNI % 23 === 1;
            break;
        case "w":
            valid = numberDNI % 23 === 2;
            break;
        case "a":
            valid = numberDNI % 23 === 3;
            break;
        case "g":
            valid = numberDNI % 23 === 4;
            break;
        case "m":
            valid = numberDNI % 23 === 5;
            break;
        case "y":
            valid = numberDNI % 23 === 6;
            break;
        case "f":
            valid = numberDNI % 23 === 7;
            break;
        case "p":
            valid = numberDNI % 23 === 8;
            break;
        case "d":
            valid = numberDNI % 23 === 9;
            break;
        case "x":
            valid = numberDNI % 23 === 10;
            break;
        case "b":
            valid = numberDNI % 23 === 11;
            break;
        case "n":
            valid = numberDNI % 23 === 12;
            break;
        case "j":
            valid = numberDNI % 23 === 13;
            break;
        case "z":
            valid = numberDNI % 23 === 14;
            break;
        case "s":
            valid = numberDNI % 23 === 15;
            break;
        case "q":
            valid = numberDNI % 23 === 16;
            break;
        case "v":
            valid = numberDNI % 23 === 17;
            break;
        case "h":
            valid = numberDNI % 23 === 18;
            break;
        case "l":
            valid = numberDNI % 23 === 19;
            break;
        case "c":
            valid = numberDNI % 23 === 20;
            break;
        case "k":
            valid = numberDNI % 23 === 21;
            break;
        case "e":
            valid = numberDNI % 23 === 22;
            break;
        default:
            break;
    }

    return valid;
}

let testDNI = 'Y5471820L';

console.log('Is ' + testDNI + ' a valid DNI?: ' + validDNI(testDNI));
