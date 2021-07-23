/** JS Exercises - 9th-July-2021 
* Marta Pérez Romero
* EJERCICIOS Sentencias condicionales y bucles
*/

/**************************************************/
/*  Exercise 1: write a program that, given two numbers, prints out the highest one (Easy) */
console.log('---------------------------');
console.log('-------- Exercise ' + 1 + '--------');

let n1 = 1;
let n2 = 0;

if (n1<n2) { 
  console.log('The highest number is n2: ' + n2);
} else 
if (n1>n2){ 
  console.log('The highest number is n1: ' + n1);	
}
else{
  console.log('Both numbers are the same: n1 = ' + n1 + '; n2 = ');	
}

/**************************************************/
/* Exercise 2: write a program that goes through the int numbers of a given variable and prints out if it is even or odd (Easy) */
console.log('---------------------------');
console.log('-------- Exercise ' + 2 + '--------');

let variable = 9;

  if (variable % 2 == 0) {
    console.log('The number ' + variable + ' is even.');
  } else 
  {
    console.log('The number ' + variable + ' is odd.');
  } 

/**************************************************/
/* Exercise 3: write a program that goes through the numbers between 0 and 100 and prints out:
*  Fizz, if it multiple of 3
*  Buzz, if it multiple of 5
*  FizzBuzz, if it multiple of 3 and 5 at the same time
*/
console.log('---------------------------');
console.log('-------- Exercise ' + 3 + '--------');

for(let i = 0;i <= 100;i++){
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('Number + ' + i + ' : FizzBuzz');
  } else 
    if (i % 3 == 0) {
      console.log('Number + ' + i + ' : Fizz');
    }  
    else {
      if (i % 5 == 0) {
        console.log('Number + ' + i + ' : Buzz');
      }
    } 
}

/**************************************************/
/* Exercise 4: write a program that draws the following pattern (Hard)
*  
* *  
* * *  
* * * *  
* * * * *
* * * *
* * *
* *
*  
*/

console.log('---------------------------');
console.log('-------- Exercise ' + 4 + '--------');
let asterisk = '*';
console.log('---------------------------');

for (let i = 0; i <= 4; i++) {
  let asterisk = " ";
  for (let x = 0; x <= i; x++) {
      asterisk += "*";
  }
  console.log(asterisk)
}
for (let i = 1; i <= 4; i++) {
  let asterisk = " ";
  for (let x = 4; x >= i; x--) {
      asterisk += "*";
  }
  console.log(asterisk)
}

/**************************************************/
/* - Exercise 5: write a program that calcules the value of fibonacci numbers of a given variable. (Hard)*/
console.log('---------------------------');
console.log('-------- Exercise ' + 5 + '--------');
console.log('---------------------------');

let i = 0 
let j = 1;
var count = 2 ;
var fib ;

while(count++ <=20){
    var fib = i + j ;
    i = j ;
    j = fib;
    console.log(fib);
}

