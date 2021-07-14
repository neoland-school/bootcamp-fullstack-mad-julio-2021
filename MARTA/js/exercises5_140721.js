/**
 * Ejercicios de la mañana
 * Marta Pérez Romero
 */

/**************************************************/
/* Exercise 1: write a comparison function to descending sort a numeric array  */
console.log('---------------------------');
console.log('-------- Exercise ' + 1 + '--------');

const array1 = [2, 16, 4, 21, 28, 7];
array1.sort(function (a, b) { return b - a }); 
console.log(array1);


/**************************************************/
/*  Exercise 2: write a comparison function to sort a boolean array with false first and true after */
console.log('---------------------------');
console.log('-------- Exercise ' + 2 + '--------');

const array2 = [false, false, true, false, true, true, true, false];
array2.sort(
    function (a, b) 
        { return b - a }); 
console.log(array2);

/**************************************************/
/*  Exercise 3: write a comparison function to sort an array of strings by the lenght of the charts (lower to higher) */
console.log('---------------------------');
console.log('-------- Exercise ' + 3 + '--------');

const array3 = ['madrid', 'dublin', 'london', 'stockholm', 'warsaw', 'amsterdam', 'rome', 'istanbul'];
const cities = array3.sort((a,b) => a.length - b.length);
console.log(cities);

/**************************************************/
/*  Exercise 4: Write a function to filter a numeric array, keeping only the even ones */
console.log('---------------------------');
console.log('-------- Exercise ' + 4 + '--------');

const array4 = [2, 16, 4, 21, 28, 7];

var evens = array4.filter(x => x % 2 === 0);

console.log(evens);


/**************************************************/
/*  Exercise 5: write a function to filter a numeric array, keeping only the ones higher than 30 */
console.log('---------------------------');
console.log('-------- Exercise ' + 5 + '--------');

const array5 = [2, 36, 16, 49, 42, 21, 28,, 33, 7, 50];
const higher30 = array5.filter(z => (z > 30));
console.log(higher30);


/**************************************************/
/*  Exercise 6: write a function to filter a boolean array, keeping only the true ones */
console.log('---------------------------');
console.log('-------- Exercise ' + 6 + '--------');

const array6 = [false, false, true, false, true, true, true, false];
const trues = array6.filter(x => x === true);

console.log(trues);

/**************************************************/
/*  Exercise 7: write a function to filter a string array, keeping the even ones (in terms of lenght) */
console.log('---------------------------');
console.log('-------- Exercise ' + 7 + '--------');

const array7 = ['madrid', 'dublin', 'london', 'stockholm', 'warsaw', 'amsterdam', 'rome', 'istanbul'];
const evenLenght = array7.filter(z => z.length % 2 === 0);
console.log(evenLenght);

/**
 * Ejercicios de la tarde
 * Marta Pérez Romero
 */

/**************************************************/
/* Exercise 1: write a comparison function to descending sort a numeric array  */
console.log('---------------------------');
console.log('-------- Exercise ' + 1 + '--------');
