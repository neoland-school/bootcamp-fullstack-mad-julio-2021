// let arrayOdd =[2,3,5,7,11,13,17,19,23,29];
// let sum =0;

// for(let i=0; i<arrayOdd.length; i++);
// {
//     sum += arrayOdd [i];
// }

// console.log (sum);

// const positionChange = arrayOdd[9];
// arrayOdd [9] = arrayOdd [1];
// arrayOdd [1] = positionChange;
// console.log(arrayOdd);

// console.log (arrayOdd[3]*[7]);
// arrayOdd [9] = arrayOdd[1];
// console.log (arrayOdd);

//ejercicio1

let array1 = [2, 5, 7, 8, 2, 6, 1];
function findposition(array1, position) {
    let box;
    let found = false;
    let i = 0;
    while (i < array1.length && !found) {
        if (array1[i] === position) {
            box = i;
            found = true;
        }
        i++;
    }
    if (found === false) {
        box = -1;
    }
    return box;
}
console.log(findposition(array1, 8));

//ejercicio 2
let dash = 10;
for (i = 0; i < dash; i++) {
    let dash2 = " ";
    for (j = 0; j < dash; j++) {
        dash2 += ' - ';
    }
    console.log(dash2);
}
//
// 2 4 5 
// 8 7 3
// 1 4 2

let array2 = [[2, 4, 5], [8, 7, 3], [1, 4, 2]]; //solution only works for cubes.
function diagonalArray(bidimensionalArray) {
    let result = [];
    for (let i = 0; i < bidimensionalArray.length; i++) {
        for (let j = 0; j < bidimensionalArray[i].length; j++) {
            if (i === j) {
                result.push(bidimensionalArray[i][j]);
                // console.log(bidimensionalArray[i][j]);
            }
        }
    }
    return result;
}
console.log(diagonalArray(array2));

// ejercicio 4
let array3 = [ 3, 6, 5, 4, 7, 10, 1, 234, 2];
function orderArray(newArray) {
    let memory;
    //newArray.sort(function(a,b){return a - b}); 
    for (let i = 0; i <= newArray.length; i++) {
        if (newArray[i] > newArray[i + 1]) {
            memory = newArray[i];
            newArray[i] = newArray[i+1];
            newArray[i+1] = memory;
            i = -1;
        }
    }
    return newArray;
}
console.log(orderArray(array3));


