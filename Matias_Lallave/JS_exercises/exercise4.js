// 1 .Escribe una función que dado un número y un array, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra (Easy)
// 2. Escribe una función que pinte el siguiente patrón por consola (Easy):
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// - - - - - - - - - -
// 3. Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal (Medium)
// 4. Escribe una función que dado un array de números, lo devuelva ordenado (Hard)
// 5. Juego Sopa de letras (Legend):
//     **Escribe una función que dado un array de palabras, devuelva un array bidimensional de caracteres en la que las letras de una 
//          palabra se encuentren seguidas (diagonal, vertical u horizontal)
//     **Escribe una función que dado un array bidimensional de caracteres y un string, te diga si el string se encuentra o no en el 
//          array de letras (diagonal, vertical u horizontal)"


//----------EXERCISE1----------

console.log('\nEXERCISE 1');

function searchInArray(number, array) {
    let found = false;
    let result;
    let i = 0;
    while (i < array.length && !found) {
        if (array[i] === number) {
            result = i;
            found = true;
        }
        i++;
    }

    if (found === false) {
        result = -1;
    }

    return result;
}

let arrTest = [4, 8, 1, 0, 8, 4, 7];
let numberTest = 8;

console.log(searchInArray(numberTest, arrTest));

//----------EXERCISE2----------

console.log('\nEXERCISE 2');

function printHyphen(row, col) {
    for (i = 0; i < row; i++) {
        let hyphen = '';
        for (j = 0; j < col; j++) {
            hyphen = hyphen + '-';
        }
        console.log(hyphen);
    }

}

printHyphen(5, 5);

//----------EXERCISE3----------

console.log('\nEXERCISE 3');

function diagonalArray(array) {
    let diagonal = [];

    let isSquare = true;

    let i = 0;
    while (i < array.length && isSquare) {
        if (array.length !== array[i].length) {
            isSquare = false;
        }
        i++;
    }

    if (isSquare) {

        for (i = 0; i < array.length; i++) {
            diagonal[i] = array[i][i];
        }

        return diagonal;
    } else {
        console.log('Not a valid array');
        return diagonal;
    }
}

let testArray = [
    [5, 2, 7, 4, 0, 0],
    [8, 1, 0, 0, 0, 0],
    [1, 0, 2, 9, 1, 1],
    [9, 4, 2, 1, 1, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1]
];

console.log(testArray);

const testDiagonal = diagonalArray(testArray);

console.log(testDiagonal);

//----------EXERCISE4----------

console.log('\nEXERCISE 4');

function orderArray(array) {
    let aux;

    for (i = 1; i < array.length; i++) {
        for (j = 0; j < (array.length - i); j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    return array;
}

testArray = [5, 9, 1, 4, 12, 4, 0];

console.log(orderArray(testArray));

//----------EXERCISE5----------

console.log('\nEXERCISE 5');

function setWordHorizontal(array) {
    let gameBox = [];

    for (let i = 0; i < array.length; i++) {
        gameBox[i] = [];
        for (let j = 0; j < array.length; j++) {
            gameBox[i][j] = '';
        }
    }

    for (let i = 0; i < array.length; i++) {
        gameBox[0][i] = array[i];
    }

    return gameBox;
}

function setWordVertical(array) {
    let gameBox = [];

    for (let i = 0; i < array.length; i++) {
        gameBox[i] = [];
        for (let j = 0; j < array.length; j++) {
            gameBox[i][j] = '';
        }
    }

    for (let i = 0; i < array.length; i++) {
        gameBox[i][0] = array[i];
    }

    return gameBox;
}

function setWordDiagonal(array) {
    let gameBox = [];

    for (let i = 0; i < array.length; i++) {
        gameBox[i] = [];
        for (let j = 0; j < array.length; j++) {
            gameBox[i][j] = '';
        }
    }

    for (let i = 0; i < array.length; i++) {
        gameBox[i][i] = array[i];
    }

    return gameBox;
}

let testWord = ['M', 'a', 't', 'i', 'a', 's'];

console.log(setWordHorizontal(testWord));

console.log(setWordVertical(testWord));

console.log(setWordDiagonal(testWord));

// ------------------------------------------

// function wordSearch (word, gameBox) {
//     let compareWord;
//     let found = false;

//     let i;
//     let j;

//     // Horizontal regular search
//     i = 0;
//     while (i < gameBox.length && !found) {
//         compareWord = '';
//         j = 0;
//         while (j < gameBox.length && !found) {
//             compareWord = compareWord + gameBox[i][j]; 
//             j++;
//         }
//         if (compareWord.includes(word)) {
//             found = true;
//             return found;
//         }
//         i++;
//     }

//     // Horizontal inverted search
//     i = 0;
//     while (i < gameBox.length && !found) {
//         compareWord = '';
//         j = gameBox.length - 1;
//         while (j >= 0 && !found) {
//             compareWord = compareWord + gameBox[i][j]; 
//             j--;
//         }
//         if (compareWord.includes(word)) {
//             found = true;
//             return found;
//         }
//         i++;
//     }

//     // Vertical regular search
//     j = 0;
//     while (j < gameBox.length && !found) {
//         compareWord = '';
//         i = 0;
//         while (i < gameBox.length && !found) {
//             compareWord = compareWord + gameBox[i][j]; 
//             i++
//         }
//         if (compareWord.includes(word)) {
//             found = true;
//             return found;
//         }
//         j++;
//     }

//     // Vertical inverted search
//     j = 0;
//     while (j < gameBox.length && !found) {
//         compareWord = '';
//         i = gameBox.length - 1;
//         while (i >= 0 && !found) {
//             compareWord = compareWord + gameBox[i][j]; 
//             i--;
//         }
//         if (compareWord.includes(word)) {
//             found = true;
//             return found;
//         }
//         j++;
//     }
//     return found;
// }

function wordSearch(word, gameBox) {
    let found = false;
    let compareWord;

    const charCandidate = word.charAt(0);

    let i = 0;
    while (i < gameBox.length && !found) {
        let j = 0;
        while (j < gameBox[i].length && !found) {
            if (gameBox[i][j] === charCandidate) {
                //Horizontal search
                compareWord = '';
                k = j;
                while (k < gameBox[i].length && !found) {
                    compareWord = compareWord + gameBox[i][k];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k++;
                }
                //Horizontal backwards search
                compareWord = '';
                k = j;
                while (k >= 0 && !found) {
                    compareWord = compareWord + gameBox[i][k];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k--;
                }
                //Vertical search
                compareWord = '';
                k = i;
                while (k < gameBox.length && !found) {
                    compareWord = compareWord + gameBox[k][j];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k++;
                }
                //Vertical backward search
                compareWord = '';
                k = i;
                while (k >= 0 && !found) {
                    compareWord = compareWord + gameBox[k][j];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k--;
                }
                //Horizontal down search
                compareWord = '';
                k = i;
                l = j;
                while (k < gameBox.length && l < gameBox[i].length && !found) {
                    compareWord = compareWord + gameBox[k][l];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k++;
                    l++;
                }
                //Horizontal down backward search
                compareWord = '';
                k = i;
                l = j;
                while (k < gameBox.length && l >= 0 && !found) {
                    compareWord = compareWord + gameBox[k][l];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k++;
                    l--;
                }
                //Horizontal up search
                compareWord = '';
                k = i;
                l = j;
                while (k >= 0 && l < gameBox[i].length && !found) {
                    compareWord = compareWord + gameBox[k][l];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k--;
                    l++;
                }
                //Horizontal up backward search
                compareWord = '';
                k = i;
                l = j;
                while (k >= 0 && l >=0 && !found) {
                    compareWord = compareWord + gameBox[k][l];
                    if (compareWord.includes(word)) {
                        found = true;
                        return found;
                    }
                    k--;
                    l--;
                }
            }
            j++;
        }
        i++;
    }



    return found;
}

const testGameBox = [
    ['e', 'h', 'v', 'h', 'h', 'm'],
    ['a', 'v', 'v', 'a', 'v', 'q'],
    ['n', 'v', 'a', 'a', 'l', 'q'],
    ['l', 'q', 'a', 'l', 'h', 'v'],
    ['a', 'o', 'l', 'b', 'l', 'm']
];
testWord = 'llave';

console.log(testGameBox, testWord);

console.log(wordSearch(testWord, testGameBox));