/** JS Exercises - 12th-July-2021 
* Marta Pérez Romero
* EJERCICIOS Sentencias condicionales y bucles
*/

/**************************************************/
/*  Exercise 1: write a function that, given a numer, return the same in the opposite order (Easy) */
console.log('---------------------------');
console.log('-------- Exercise ' + 1 + '--------');

function invertNum(num)
{ 
  let inverted = 0
  let module = num
  while (module > 0) {
    inverted = inverted * 10 + (module % 10)
    module = Math.floor(module / 10)
  } 
  return inverted
}

console.log(invertNum(728));
console.log(invertNum(987456754));

/**************************************************/
/*  Exercise 2: write a function that, given a numer, tells us if it is palindronic or not */

console.log('---------------------------');
console.log('-------- Exercise ' + 2 + '--------');

function capic(n){
    let result = true;
    
    if (invertNum(n) === n) {
        result = true;
    } else {
        result = false;
    } 
    return result
}

console.log(capic(3443));

/**************************************************/
/*  Exercise 3: write a function that tells us the typeof the input*/
console.log('---------------------------');
console.log('-------- Exercise ' + 3 + '--------');

function inputType(input){
    console.log(typeof input);
}

console.log(inputType('palabra'));

/**************************************************/
/*  Exercise 4: write a number of functions that calculate the area and perimeter of diferent geometrics (rectangule, square, triangle and circle)*/

console.log('---------------------------');
console.log('-------- Exercise ' + 4 + '--------');

/* Rectángulo */
function areaRect(b, h){
    return b * h / 2
} 
function perimeterRect(l1, l2, l3){
    return l1 + l2 +l3;
}
console.log("El área del rectángulo es " + areaRect(3, 4) + " y su perímetro es " + perimeterCircle(2,4,5));

/* Cuadrado */
function areaSquare(l){
    return l ** 2;
} 
function perimeterSquare(l){
    return l*4;
}
console.log("El área del cuadrado es " + areaSquare(3, 4) + " y su perímetro es " + perimeterSquare(3));

/* Triángulo */
function areaTriangle(b, h){
    return b * h;
} 
function perimeterTriangle(l1, l2, l3){
    return l1 + l2 +l3;
}
console.log("El área del triángulo es " + areaTriangle(3, 4) + " y su perímetro es " + perimeterTriangle(2,4,5));

/* Circunferencia */
function areaCircle(radio){
    return Math.PI * radio ** 2
} 
function perimeterCircle(radio){
    return Math.PI * radio * 2;
}
console.log("El área del cículo es " + areaCircle(3) + " y su perímetro es " + perimeterCircle(3));


/**************************************************/
/*  Exercise 5: create a function that simulates a calculator (add, substract, mult or div) */

console.log('---------------------------');
console.log('-------- Exercise ' + 5 + '--------');

function add(operand1, operand2){
    console.log (operand1 + operand2);
 }

function substract(operand1, operand2){
    console.log (operand1 - operand2);
}
substract(9,4);

function mult(a,b) {
    const result = a*b;
    return a*b;
}
console.log(mult(3,7));

function div(a,b) {
    const result = a/b;
    return a/b;
}
console.log(div(12,4));

/**************************************************/
/*  Exercise 6: create a function that, given an URL (String) tells us if it belongs to github domain */

console.log('---------------------------');
console.log('-------- Exercise ' + 6 + '--------');

function within(text) {
    let url = "github.com";
    let url2 = " ";
    
    if (url.indexOf(url2) != 0) {
        console.log("The URL is in the string.");
    } else {
        console.log("TThe URL is not in the string.");
    }
}
console.log(within("https://github.com/emetepe/bootcamp-fullstack-mad-julio-2021"));

/**************************************************/
/*  Exercise 7: create a calculator function that has two operands and the operation. Ejemplo calc(3,4,add) devuelve  7 */

console.log('---------------------------');
console.log('-------- Exercise ' + 7 + '--------');

function calculator(number1,number2,operation) {
    result = operation(a,b);                           
}
// two operators and the operation (add, substract, mult or div)
console.log(add(3,4,add));

/**************************************************/
/*  Exercise 8: create a function that given a NIF or NIE tells us if it is valid or not. http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie */

console.log('---------------------------');
console.log('-------- Exercise ' + 8 + '--------');

function validator(dni) {
    var num;
    var letr;
    var letra;
    var expresion_regular_dni;
   
    letter = dni.substr(dni.length-1,1);
    num = dni.substr(0,dni.length-1);
    num = num % 23;
    letras='TRWAGMYFPDXBNJZSQVHLCKET';
    letras=letras.substring(num,num+1);
        if (letras!=letter.toUpperCase()) {
            console.log('La letra del DNI no es correcta. El documento no es válido.');
        }else{
            console.log('La letra del DNI es correcta.');
        }
    }
    console.log(validator("46866674B"));