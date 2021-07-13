let arrayOdd =[2,3,5,7,11,13,17,19,23,29];
let sum =0;

for(let i=0; i<arrayOdd.length; i++);
{
    sum += arrayOdd [i];
}

console.log (sum);

const positionChange = arrayOdd[9];
arrayOdd [9] = arrayOdd [1];
arrayOdd [1] = positionChange;
console.log(arrayOdd);

console.log (arrayOdd[3]*[7]);
arrayOdd [9] = arrayOdd[1];
console.log (arrayOdd);
