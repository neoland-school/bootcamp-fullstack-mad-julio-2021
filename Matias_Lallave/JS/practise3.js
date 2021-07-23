// funcion que multiplique dos numeros

function multiplication(operand1, operand2) {
  result = operand1 * operand2;
  return result;
}

let number = 4;
let anotherNumber = 7;

console.log(multiplication(number, anotherNumber));

// funcion que concatene "hola" a un string de entrada

function addString(string) {
  string = "Hola " + string;
  return string;
}

let sentence = "Caracola";
console.log(addString(sentence));

// funcion que dados dos booleanos devuelva el AND de estos

function andBool(boolA, boolB) {
  result = boolA && boolB;
  return result;
}

let oneBoolean = true;
let anotherBoolean = false;

console.log(andBool(oneBoolean, anotherBoolean));

// funcion que devuelva tantos asteriscos como indique un parámetro de entrada

function printAsterisk(n) {
  let asterisk = "";
  for (let i = 1; i <= n; i++) {
    asterisk = asterisk + "*";
  }
  return asterisk;
}

let numberOfAsterisks = 6;

console.log(printAsterisk(numberOfAsterisks));

// function que multiplique dos numeros sin usar *

function multiplWithoutAsterisk(operand1, operand2) {
  let sum = 0;

  const operand1IsNegative = operand1 < 0;
  const operand2IsNegative = operand2 < 0;
  operand1 = Math.abs(operand1);
  operand2 = Math.abs(operand2);

  for (let i = 1; i <= operand2; i++) {
    sum = sum + operand1;
  }

  if (
    (operand1IsNegative && !operand2IsNegative) ||
    (!operand1IsNegative && operand2IsNegative)
  ) {
    sum = -sum;
  }

  return sum;
}

number = 6;
anotherNumber = -5;

console.log(multiplWithoutAsterisk(number, anotherNumber));
