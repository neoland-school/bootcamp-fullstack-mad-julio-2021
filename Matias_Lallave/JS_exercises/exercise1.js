// ----------------------EXERCISE 1----------------------

console.log('\nExercise 1');

const numFirst = 34;
const numSecnd = 9245;

console.log(numFirst + numSecnd);
console.log(numFirst - numSecnd);
console.log(numFirst * numSecnd);
console.log(numFirst / numSecnd);
console.log(numFirst % numSecnd);

// ----------------------EXERCISE 2----------------------

console.log('\nExercise 2');

const strFirst = 'Hola ';
const strSecnd = 'Caracola';

console.log(strFirst + strSecnd);

// ----------------------EXERCISE 3----------------------

console.log('\nExercise 3');

console.log((strFirst + strSecnd).length);

// ----------------------EXERCISE 4----------------------

console.log('\nExercise 4');

const numCelsius = 40;

const numFarenh = (numCelsius * 9/5) + 32;

console.log(numCelsius + 'ºC is equal to ' + numFarenh + ' ºF');

// ----------------------EXERCISE 5----------------------

console.log('\nExercise 5');

console.log('Is ' + numFirst + ' between 10 and 100? ' + ((numFirst >= 10) && (numFirst<=100)));

// ----------------------EXERCISE 6----------------------

console.log('\nExercise 6');

const askCelsius = 30;

const boolCelsius = ((askCelsius * 9/5) + 32) > 87;

console.log('Is ' + askCelsius + ' ºC higher than 87 ºF? ' + boolCelsius);

// ----------------------EXERCISE 7----------------------

console.log('\nExercise 7');

const numIsEven = 6;

console.log('Is ' + numIsEven + ' even? ' + (numIsEven%2 == 0));

// ----------------------EXERCISE 8----------------------

console.log('\nExercise 8');

const numFamily = 4;

console.log('Is a familiy with ' + numFamily + ' child/children a numerous family? ' + (numFamily >= 3));

// ----------------------EXERCISE 9----------------------

console.log('\nExercise 9');

const numHeight = 1.80;
const numWeight = 120;

const BMI = numWeight / (numHeight**2);

console.log('Has a person with ' + numWeight + ' kg and ' + numHeight + ' m tall obesity type II according to OMS? ' + ((BMI >= 35) && (BMI <= 39.9)));

// ----------------------EXERCISE 10----------------------

console.log('\nExercise 10');

const balance = 50;

const article1 = 15;
const article2 = 9;
const article3 = 22;
const article4 = 5;

const total = article1 + article2 + article3 + article4;

console.log('Do I have enough money to buy my shopping cart of ' + total + ' € with my balance of ' + balance + ' €? ' + (balance >= total));

// ----------------------EXERCISE 11----------------------

console.log('\nExercise 11');

const grossSalary = 24000;

const contributionSS = grossSalary * 0.0635;
const contributionMinimun = 5500;

const taxBase = grossSalary - contributionSS - contributionMinimun;

let intialIRPFValue = taxBase;
let resultIRPFValue;

// First IRPG rank value

resultIRPFValue = Math.max(intialIRPFValue - (12450 - 0), 0);
const firstIRPFrank = (intialIRPFValue - resultIRPFValue) * 0.19;

// Second IRPG rank value

intialIRPFValue = resultIRPFValue;
resultIRPFValue = Math.max(intialIRPFValue - (20200 - 12450), 0);
const secondIRPFrank = (intialIRPFValue - resultIRPFValue) * 0.24;

// Third IRPG rank value

intialIRPFValue = resultIRPFValue;
resultIRPFValue = Math.max(intialIRPFValue - (35200-20200), 0);
const thirdIRPFrank = (intialIRPFValue - resultIRPFValue) * 0.3;

// Fourth IRPG rank value

intialIRPFValue = resultIRPFValue;
resultIRPFValue = Math.max(intialIRPFValue - (60000-35200), 0);
const fourthIRPFrank = (intialIRPFValue - resultIRPFValue) * 0.37;

// Fifth IRPG rank value

intialIRPFValue = resultIRPFValue;
resultIRPFValue = Math.max(intialIRPFValue - (300000-60000), 0);
const fifthIRPFrank = (intialIRPFValue - resultIRPFValue) * 0.45;

// Onward IRPG rank value

const onwardIRPFrank = resultIRPFValue * 0.47;

// Total values and per month

const totalIRPF = firstIRPFrank + secondIRPFrank + thirdIRPFrank + fourthIRPFrank + fifthIRPFrank + onwardIRPFrank;
const totalIRPFpercentage = (totalIRPF * 100) / grossSalary;
const totalIRPFperMonth = totalIRPF / 12;
const netSalary = grossSalary - contributionSS - totalIRPF;
const netSalaryperMonth = netSalary / 12;

console.log('Gross Salary: ' + grossSalary + ' €');
console.log('Net Salary Per Month: ' + netSalaryperMonth + ' €');
console.log('IRPF Per Month: ' + totalIRPFperMonth + ' €');

// ----------------------EXERCISE 12----------------------

console.log('\nExercise 12');

const subjectA = 6.7;
const subjectB = 8.7;
const subjectC = 7.4;
const subjectD = 9.9;
const subjectE = 8.2;
const subjectF = 6.0;
const subjectG = 8.3;
const subjectH = 9.7;
const subjectI = 7.4;
// const subjectJ = 8.9;

const numTotalSubject = 9;

const averageScore = (subjectA + subjectB + subjectC + subjectD + subjectE + subjectF + subjectG + subjectH + subjectI) / numTotalSubject;

const boolScore = (subjectA >= 5.0) + (subjectB >= 5.0) + (subjectC >= 5.0) + (subjectD >= 5.0) + (subjectF >= 5.0) + (subjectG >= 5.0) + (subjectH >= 5.0) + (subjectI >= 5.0) + 0;

const scolarship = (averageScore >= 6.5) && (boolScore >= (numTotalSubject * 0.8));

console.log('The average score of this student is ' + averageScore);
console.log('Has this student passed 80% of the subjects? ' + (boolScore >= (numTotalSubject * 0.8)));
console.log('Will this student be eligible for a scholarship? ' + scolarship);