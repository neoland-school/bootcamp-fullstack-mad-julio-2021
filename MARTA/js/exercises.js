/** JS Exercises - 8th-July-2021 
* Marta Pérez Romero
*/

/* Declaration of a few frequently used variables */
let endSeparator = '----------------------------';

/**************************************************/
/*  Exercise 1: Create 2 numerical variables and do the following operations: add, substract, multiplication and division */
console.log(endSeparator);
console.log('-------- Exercise ' + 1 + '--------');
let num1 = 2;
let num2 = 16;
console.log(endSeparator);

/* Add */
console.log('Sum = ' + num1 + num2);
/* Substract */
console.log('Substract = ' + num1 + num2);
/* Multiplication */
console.log('Multiplication = ' + num1 + num2);
/* Division */
console.log('Division = ' + num1 + num2);
/* Module */
console.log('Module = ' + num1 + num2);

/* End */
console.log(endSeparator);

/********************************************************/
/* Exercise 2: Create two strings and put them together */
console.log('-------- Exercise ' + 2 + '--------');
console.log(endSeparator);

let String1 = 'Hello, ';
let String2 = 'Dolly.';
let concat = String1 + String2;
let result2 = 'Exercise 2 result: ' + concat;
console.log(result2);

/* End */
console.log(endSeparator);

/****************************************************/
/* Exercise 3: Show lenght of the exercise 2 result */
console.log('-------- Exercise ' + 3 + '--------');
console.log(endSeparator);

console.log('The total lenght of the previous string is ' + concat.length + '.');
/* End */
console.log(endSeparator);

/**************************************************************************************/
/* Exercise 4: save Celsius degrees in a var and show the corresponding Farenheit ºF" */
console.log('-------- Exercise ' + 4 + '--------');
console.log(endSeparator);

let Celsius = 12;
let Farenheit = (Celsius * 1.8) + 32;
console.log(Celsius + 'ºC equals ' + Farenheit + 'ºF');
/* End */
console.log(endSeparator);

/***********************************************************************************/
/* Exercise 5: Print 'true' or 'false' if the variable value is between 10 and 100 */
console.log('-------- Exercise ' + 5 + '--------');
console.log(endSeparator);

let num3 = 25;
let max = 100;
let min = 10;

console.log('The value of the entered number is between 10 and 100:');
console.log(min < num3 && num3 < max);
/* End */
console.log(endSeparator);

/*****************************************************************************************/
/* Exercise 6: using exercise 4 logic determine if a Celsis variable is higher than 87ºF */
console.log('-------- Exercise ' + 6 + '--------');
console.log(endSeparator);

Celsius = 75;
Fahrenheit = 15;

cRounded = Math.floor((Celsius - 32) / 1.8);
console.log('The value of the Cº is higher than 87ºF:');
console.log(cRounded > + Farenheit);
/* End */
console.log(endSeparator);

/***********************************************************************/
/* Exercise 7: create a numeric variable and show if it is even or odd */
console.log('-------- Exercise ' + 7 + '--------');
console.log(endSeparator);

let num4 = 28;
let division = num4%2;
console.log('The value introduced is even:');
console.log (division == 0);

/* End */
console.log(endSeparator);

/*******************************************************************************************/
/* Exercise 8: create a variable with the num of children and show if it is a large family */
console.log('-------- Exercise ' + 8 + '--------');
console.log(endSeparator);

let children = 1;
let large = (children > 2);
console.log('This family is a large family:');
console.log(large);
/* End */
console.log(endSeparator);

/*******************************************************************************************/
/* Exercise 9: create 2 variables (weight and height) and determine if the person suffers from "Obesidad de Clas II" */
console.log('-------- Exercise ' + 9 + '--------');
console.log(endSeparator);

let weight = 53;
let height = 1.64;
let imc = weight/height;
let imcmax = 39.9;
let imcmin = 35;
console.log('The person suffers from "Obesidad de Clas II":');
console.log(imc > imcmin && imc < imcmax);
/* End */
console.log(endSeparator);

/**************************************************************************************************************************************/
/* Exercise 10: create a var with your bank account balance and 4 var for food categories and prices and show if the balance is enough*/
console.log('-------- Exercise ' + 10 + '--------');
console.log(endSeparator);

let balance = 10;
let vn1 = 2.8;
let vn2 = 1.86;
let vn3 = 5.03;
let vn4 = 6.8;
let totalprice = vn1 + vn2 + vn3 + vn4;
let result = balance - totalprice;
console.log('Final balance = ' + result);
console.log('Balance is enough to get those items:');
console.log(result > totalprice);
/* End */
console.log(endSeparator);

/*******************************************************************************************************************************************************/
/**  Exercise 11: create a var with your yearly gross income. Show the monthly gross (with '€' symbol) and the monthly taxes based on these particulars: 
* Single, no children, younger than 30, 12 monthly payments, the contract is in the General System, prof category is Engineers&Graduated
*/
console.log('-------- Exercise ' + 11 + '--------');
console.log(endSeparator);

let salary = 88800;
let individualContr = 5500;
let ss = 0.0635 * salary;
let payslipNum = 12;
let monthTax = (salary - individualContr - ss) / payslipNum;
console.log('The gross monthly salary is ' + monthTax + '€');
/* Particulars */
let single = 0;
let noChildren = 0;
let age = 0;
let system = 0;
let category = 0;
/* Get irpf figure */
let irpf = 0.45;
let totalIRPF = 0;
let thresholdInit = monthTax;
let resultIRPFTier = 0;
/* Threshold 1 */
irpfResult = Math.max(thresholdInit - (12450-0), 0);
const threshold1 = (thresholdInit - irpfResult) * 0.19;
/* Threshold 2 */
thresholdInit = irpfResult;
irpfResult = Math.max(thresholdInit - (20200-12450), 0);
const threshold2 = (thresholdInit - irpfResult) * 0.24;
/* Threshold 3 */
thresholdInit = irpfResult;
irpfResult = Math.max(thresholdInit - (35200-20200), 0);
const threshold3 = (thresholdInit - irpfResult) * 0.3;
/* Threshold 4 */
thresholdInit = irpfResult;
irpfResult = Math.max(thresholdInit - (60000-35200), 0);
const threshold4 = (thresholdInit - irpfResult) * 0.37;
/* Threshold 5 */
threshold5 = irpfResult;
irpfResult = Math.max(thresholdInit - (300000-60000), 0);
const fifthIRPFTierTaxes = (thresholdInit - irpfResult) * 0.45;
/* Threshold (final) */
const thresholdFinal = irpfResult * 0.47;

const irpfTaxes = threshold1 + threshold2 + threshold3 + threshold4 + threshold5 + thresholdFinal;
const irpfPercent = irpfTaxes*100/salary;
const totalIRPFTaxesPerMonth = irpfTaxes/12;
const totalNetSalary = salary - ss - irpfTaxes;
const totalNetSalaryPerMonth = totalNetSalary/12;

let taxes = (totalIRPF * (single + noChildren + age + system + category))/payslipNum;
let total = monthTax - taxes;
console.log('Monthly taxes are ' + taxes + '€');
console.log('Therefore, the net monthly wage will be ' + total + '€');
/* End */
console.log(endSeparator);

/*************************************************************************************/
/**  Exercise 12: in order to get a schoolarship there are a few requirements:
* - Student need to pass at least 80% of the subjects taken.
* - The average mark for those subjects must be > or = than 6.5.
* Marks for at least 12 subjects will be stores in variables.
* Determine if with the given information the student would receive the schoolarship.
*/
console.log('-------- Exercise ' + 12 + '--------');
console.log(endSeparator);

let var1 = 6;
let var2 = 8;
let var3 = 5;
let var4 = 7.5;
let var5 = 9;
let var6 = 6.5;
let var7 = 7;
let var8 = 8.25;
let subjectNum = 8
let marksAverage = (var1 + var2 + var3 + var4 + var5 + var6 + var7 + var8) / subjectNum;
let percentage = 0.8 * marksAverage;
console.log('Marks average is ' + marksAverage);
console.log('Percentage of passed subjects is ' + percentage);
console.log('Schoolarship: ');
console.log(marksAverage >= 6.5 && percentage > 0.8);
/* End */
console.log(endSeparator);