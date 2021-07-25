let arrayPrime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

console.log(arrayPrime);

console.log(arrayPrime[2]);

console.log(arrayPrime[6] * arrayPrime[2]);

let box = arrayPrime[9];

arrayPrime[9] = arrayPrime[1];

arrayPrime[1] = box;

console.log(arrayPrime);

box = 0;

for (let i = 0; i < arrayPrime.length; i++){
    box = box + arrayPrime[i];
}

console.log(box);