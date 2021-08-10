// let primos = [2, 3, 5, 7, 11, 17, 19, 13, 29]

// console.log(primos[6] * primos[3])
// let change = primos[8];
// primos[8] = primos[1];
// primos[1] = change;
// console.log(primos)

// exercise 1

// let exercise = [1, 4, 7, 8, 9]

// function numberOfarray(number, arrays) {
//     let result;
//     let i = 0;
//     let found = false;
//     while (i < arrays.length && !found) {
//         if (number === arrays[i]) {
//             result = i;
//             found = true;
//         }

//         i++;
//     }
//     if (found === false) {
//         result = -1;
//     }

//     return result
// }

// console.log(numberOfarray(6, exercise))

// exercise 2


// function paint(row) {
//     let result = " ";
//     for (let i = 0; i <= row; i++) {
//         result = " ";
//         for (let j = 0; j <= row; j++) {
//             result += "-";
//         }
//         console.log(result)
//     }
//     return result
// }

// console.log(paint(8))                   

// exercise 3

// let exercise = [
//     [1, 2, 3],
//     [3, 7, 8],
//     [4, 9, 6]
// ];

// function diagonal(array) {
//     let arrayD = []

//     if (array.length === array[0].length) {
//         for (let i = 0; i < array.length; i++) {
//             arrayD[i] = array[i][i]
//         }


//     }

//     return arrayD
// }

// console.log(diagonal(exercise))

// exercise 3
// let numbers = [23, 50, 90, 3, 5]

// function comparar(a, b) {
//     return a - b
// }

// function perm(x) {
//     result = x.sort(comparar)


//     return result
// }

// console.log(perm(numbers));

// exercise 4
// let game = ["m", "a", "t", "i"]

// function soup(array) {
//     let box = [];
//     for (i = 0; i < array.length; i++) {
//         box[i] = []

//         for (j = 0; j < array.length; j++) {
//             box[i][j] = "";

//         }

//     }
//     for (i = 0; i < array.length; i++) {
//         box[i][i] = array[i]
//     }
//     return box;
// }

// console.log(soup(game))



// let number = [1, 4, 6, 3, 50]

// function compare(a, b) {
//     return b - a
// }
// console.log(number.sort(compare))

// let booleanos = [true, false, true, false]

// function compare(a, b) {
//     if (a < b) {
//         return -1
//     }
//     if (a > b) {
//         return 1
//     }
//     return 0
// }

// console.log(booleanos.sort(compare))

// let str = ["carlos", "andreina", "alex", "mariag"]


// function compare(a, b) {
//     if (a.length < b.length) {
//         return -1
//     }
//     if (a.length > b.length) {
//         return 1
//     }
//     return 0

// }

// console.log(str.sort(compare))

// let number = [1, 4, 5, 7, 8]

// function par(value) {
//     return value % 2 === 0
// }

// console.log(number.filter(par))

// let number = [true, false, true, false, true, false]

// function booleanos(value) {
//     return !value === false
// }
// console.log(number.filter(booleanos))

// exercise 1

let number = [1, 4, 20, 7, 30]

function bigger(value, index, array) {
    return value < 10
}

console.log(number.every(bigger))
    // exercise 2

console.log(number.some(bigger))

// exercise 3
// let str = ["hola", "gato"]

// function strings(value) {
//     return value.toUpperCase()
// }
// console.log(str.map(strings))

// exercise 4
// let upper = ["salami", "pato"]

// function strings(value, i, array) {
//     array[i] = array[i].toUpperCase()
// }
// console.log(upper)
// upper.forEach(strings)
// console.log(upper)

// exercise 5
// let str = ["hola", "como", "estas", "que", "tal"]
// console.log(str.splice(Math.floor(str.length / 2), 1))
// console.log(str)

// exercise 6
// let str = ["hola", "como", "estas", "que", "tal", "perro"]


// str.splice(2, 2)
// str.splice(1, 1)
// str.splice(3, 3)
// console.log(str.join(" "))

// exercise 7

// let str = [
//     ["hola", "como", "estas"],
//     ["perro", "gato"]
// ]

// console.log(str.flat())