// 1.- .Escribe una función que dado un número y un array, te devuelva la posición donde se encuentra el número o -1 si no lo encuentra (Easy)

function checkPosition(num, array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === num) {

            return i;
        }
    }
    return -1;
}

console.log(checkPosition(11, [1, 2, 3, 4, 5, 6, 7, 8, 9]));


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

let paint = '- - - - - - - - - - -';
let patternRepetition = 10;

function paintPattern(num, array) {
    while (num > 0) {
        console.log(array);
        num--;
    }
}

paintPattern(patternRepetition, paint);


// 3. Escribe una función que dado un array bidimensional, devuelva un array con los valores de la diagonal (Medium)

let biDimArray = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6], [4, 5, 6, 7]];

/**
 * [1, 2, 3, 4]
 * [2, 3, 4, 5]
 * [3, 4, 5, 6]
 * [4, 5, 6, 7]
 */

function findsDiagonalonBiDimArray(array) {
    let diagonalIndex = 0;
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            newArray[diagonalIndex] = array[i][diagonalIndex]
        }
        diagonalIndex++;
    }

    return newArray;
}

console.log(findsDiagonalonBiDimArray(biDimArray));


// 4. Escribe una función que dado un array de números, lo devuelva ordenado (Hard)

let unOrderedArray = [9, 6, 2, 5, 3, 8, 4, 1, 7];

// function letsOrderThisShit(array) {

//     let temp = 0;

//     for (let i = 1; i < array.length; i++) {

//         temp = array[i]
//         let j = i - 1;

//         while (j > 0 && array[j] > temp) {
//             array[j + 1] = array[j];
//             j--;
//         }
//         if (i === 1) {
//             array[j] = temp;
//         } else {
//             array[j + 1] = temp;
//         }

//     }


//     return array;

// }
// console.log(letsOrderThisShit(unOrderedArray));


function compareAscendent(num1, num2) {
    // if (num1 < num2) {
    //     return -1;
    // } else if (num1 === num2) {
    //     return 0;
    // } else {
    //     return 1;
    // }
    return num1 - num2;
}
function compareDescendent(num1, num2) {
    return num2 - num1;
}

console.log(unOrderedArray.sort(compareDescendent));


// 5. Juego Sopa de letras (Legend):
//     **Escribe una función que dado un array de palabras, devuelva un array bidimensional de caracteres en la que las letras de una palabra se encuentren seguidas (diagonal, vertical u horizontal)
//     **Escribe una función que dado un array bidimensional de caracteres y un string, te diga si el string se encuentra o no en el array de letras (diagonal, vertical u horizontal)"

let wordsArray = ['python', 'salami', 'futbol', 'zapato', 'cazado', 'jabali'];

function sopaLetra(array) {

    let letterBiDimArray = [];

    for (let i = 0; i < array.length; i++) {
        letterBiDimArray[i] = []; // cada vez que vayamos a crear un elemento tipo array del array biDim, tenemos que definirlo previamente.
        for (let j = 0; j < array[i].length; j++) {
            letra = array[i][j];
            letterBiDimArray[i][j] = letra;
        }
    }


    return letterBiDimArray;

}




let word = 'aza';
let cont = 0;
let foundWord = '';
let foundLetter = false;
let myGameArray = sopaLetra(wordsArray);
let cuentaBusquedas = 0;

function finPartida() {
    console.log(myGameArray);
    console.log('La palabra ha sido encontrada :D');
    process.exit();

}

/**
 * 
 * @param {*} i -> es la posicion i del candidato
 * @param {*} j -> es la posicion j del candidato
 * @param {*} cont -> es la posicion de la letra que buscamos en word
 */
function searchAdjacents(i, j, cont) {

    if (foundWord === word) {
        console.log("Se ha encontrado la palabra " + word + "!");
        console.log(myGameArray);

    } else if (i === myGameArray.length - 1 && j === myGameArray.length - 1) {
        console.log("La palabra no existe en la sopa de letras!");
        process.exit();

    } else {

        if (i === 0 && j !== 0 && j !== (myGameArray.length - 1)) {

            searchOne(i, j, cont);
            searchFive(i, j, cont);
            searchSix(i, j, cont);
            searchSeven(i, j, cont);
            searchEight(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);

        } else if (j === 0 && i !== 0 && i !== (myGameArray.length - 1)) {

            searchThree(i, j, cont);
            searchFour(i, j, cont);
            searchFive(i, j, cont);
            searchSix(i, j, cont);
            searchSeven(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);


        } else if (i === 0 && j === 0) {

            searchFive(i, j, cont);
            searchSix(i, j, cont);
            searchSeven(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);



        } else if (i === (myGameArray.length - 1) && j !== (myGameArray.length - 1)) {

            searchOne(i, j, cont);
            searchTwo(i, j, cont);
            searchThree(i, j, cont);
            searchFour(i, j, cont);
            searchFive(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);


        } else if (j === (myGameArray.length - 1) && i !== (myGameArray.length - 1)) {

            searchOne(i, j, cont);
            searchTwo(i, j, cont);
            searchThree(i, j, cont);
            searchSeven(i, j, cont);
            searchEight(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);

        } else if (i === (myGameArray.length - 1) && j === (myGameArray.length - 1)) {

            searchOne(i, j, cont);
            searchTwo(i, j, cont);
            searchThree(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);


        } else {

            searchOne(i, j, cont);
            searchTwo(i, j, cont);
            searchThree(i, j, cont);
            searchFour(i, j, cont);
            searchFive(i, j, cont);
            searchSix(i, j, cont);
            searchSeven(i, j, cont);
            searchEight(i, j, cont);
            myGameArray = sopaLetra(wordsArray);
            searchForWord(i, j);

        }


    }

}



function searchForWord(i, j) {


    let temp = '';
    foundWord = '';
    for (indx = i; indx < myGameArray.length; indx++) {

        for (indy = j; indy < myGameArray.length; indy++) {

            if (myGameArray[indx][indy] === word[cont]) {
                temp = myGameArray[indx][indy];
                foundWord += myGameArray[indx][indy]
                myGameArray[indx][indy] += '*'
                cont++;
                searchAdjacents(indx, indy, cont);
            } else {
                cont = 0;
                foundWord = '';
                //searchForWord(indx, indy);
            }
            if (indy === myGameArray.length - 1) {
                searchForWord(i + 1, 0)
            }

        }

    }

}

/**
 * El patron de busquedas es el siguiente:
 * 
 *         2 3 4  
 *         1 x 5  
 *         8 7 6
 * 
 *  Donde:
 *      x es el candidato
 *     1 a 8 son las funciones de busqueda adyacente numeradas igual
 *          
 * 
 */


function searchOne(i, j, cont) {

    if (myGameArray[i][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {

        foundWord += myGameArray[i][j - 1];
        myGameArray[i][j - 1] += '*';
        cuentaBusquedas++;
        cont++;


        if (foundWord === word) {
            finPartida();
        } else {
            if (j !== 0) {
                searchOne(i, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i, j + reset)
            }
        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }



}
function searchTwo(i, j, cont) {
    if (myGameArray[i - 1][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j - 1];
        myGameArray[i - 1][j - 1] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== 0 && j !== 0) {
                searchTwo(i - 1, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i + reset, j + reset);
            }

        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();
    }

}
function searchThree(i, j, cont) {
    if (myGameArray[i - 1][j] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j];
        myGameArray[i - 1][j] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== 0) {
                searchThree(i - 1, j, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i + reset, j);
            }

        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}
function searchFour(i, j, cont) {
    if (myGameArray[i - 1][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j + 1];
        myGameArray[i - 1][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== 0 && j !== myGameArray.length - 1) {
                searchFour(i - 1, j + 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i + reset, j - reset);
            }
        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}
function searchFive(i, j, cont) {
    if (myGameArray[i][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i][j + 1];
        myGameArray[i][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (j !== myGameArray.length - 1) {
                searchFive(i, j + 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i, j - reset);
            }

        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}
function searchSix(i, j, cont) {
    if (myGameArray[i + 1][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j + 1];
        myGameArray[i + 1][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== myGameArray.length - 1 && j !== myGameArray.length - 1) {
                searchSix(i + 1, j + 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i - reset, j - reset);
            }

        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}
function searchSeven(i, j, cont) {
    let cuentaBusquedas = 0;

    if (myGameArray[i + 1][j] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j];
        myGameArray[i + 1][j] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== myGameArray.length - 1) {
                searchSeven(i + 1, j, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i - reset, j);
            }

        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}
function searchEight(i, j, cont) {

    if (myGameArray[i + 1][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j - 1];
        myGameArray[i + 1][j - 1] += '*';
        cuentaBusquedas++;
        cont++;
        if (foundWord === word) {
            finPartida();
        } else {
            if (i !== myGameArray.length - 1 && j !== 0) {
                searchEight(i + 1, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                searchForWord(i - reset, j + reset);
            }
        }

    } else if (foundWord === word) {
        console.log("Palabra encontrada!")
        console.log(myGameArray);
        finPartida();

    }

}

searchForWord(0, 0);

// function findWordHorizontal() {

//     let cont = word.length;
//     let foundLetter = false;
//     let foundWord = '';

//     while (cont > 0 && !found) {
//         for (let i = 0; i < array.length; i++) {

//             for (let j = 0; j < array[i].length; j++) {

//                 for (let k = 0; k < word.length; k++) {
//                     if (foundWord.length >= word.length) {
//                         cont = 0;
//                         found = true;
//                         break;
//                     } else if (array[i][j] === word[k]) {
//                         foundWord += array[i][j]
//                         array[i][j] += '*';
//                         cont--;
//                         //lets check if next letter needed is found on adjacent places:
//                         if (i >= 1 && j >= 1) {
//                             if (array[i - 1][j] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i - 1][j + 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i][j + 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i + 1][j + 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i + 1][j] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i + 1][j - 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i][j - 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             } else if (array[i - 1][j - 1] === word[k + 1]) {
//                                 foundWord += array[i - 1][j]
//                                 array[i - 1][j] += '*';
//                                 cont--;
//                                 //break;
//                             }

//                         }

//                     }

//                 }
//             }

//         }

//     }
//     console.log(word, foundWord);
//     return array;
// }

// let foundArray = findWordHorizontal('pata', sopaLetra(wordsArray));

// console.log(foundArray);



// // console.log(myGameArray);

// // function lookWordInArray() {


// //     for (let i = 0; i < myGameArray.length; i++) {

// //         for (let j = 0; j < myGameArray.length; j++) {

// //             if (myGameArray[i][j] === word[cont]) {
// //                 let hor = lookHorizontal(i, j);
// //                 if (hor === true && foundWord !== word) {
// //                     foundWord[cont] += myGameArray[i][j];
// //                     myGameArray[i][j] = myGameArray[i][j] + '*';
// //                     cont++;
// //                     lookHorizontal(i + 1, j)
// //                 } else {
// //                     // lookVertical(i, j);
// //                 }
// //             }

// //         }
// //     }
// // }


// // function lookHorizontal(indx, indy) {

// //     if (myGameArray[indx + 1][indy] === word[cont]) {
// //         return true;
// //     } else {
// //         return false;
// //     }


// // }

// // lookWordInArray();

// // console.log(myGameArray);
// // console.log(foundWord);














// // let posSearch = 0;
// // let posFound = 0;
// // let row = 0;
// // let found = false;

// // console.log(myGameArray);

// // //function for looking horizontal way

// // /**
// //  * 
// //  * @param {*} array -> the full array // myGameArray //
// //  * @param {*} word -> the word we are looking for
// //  * @param {*} posSearch -> position where we start the search from
// //  * @param {*} posFound -> position in the word that we need to find
// //  * @param {*} row -> first index of the array
// //  */

// // function lookForIt() {

// // }

// // function letsLookHorizontalRight() { //on first search no pos is given


// //     for (let i = posSearch; i < myGameArray.length; i++) {

// //         if (myGameArray[row][i] === word[posFound]) {

// //             myGameArray[row][i] = myGameArray[row][i] + '*';
// //             posFound++;
// //             posSearch = i;
// //             if (word.length === posFound) {
// //                 found = true;
// //             }
// //             return true;
// //         }
// //     }
// //     row++;
// //     return false;
// // }



// // while (found !== true) {
// //     letsLookHorizontalRight();
// //     console.log(posSearch, posFound, row);
// // }


// // console.log(myGameArray);






// // // this functions gets the array already converted to bidimensiaonal by later function
// // // function addCharactersMatrix(array) {

// //     let maxLength = 0;

// //     for (let i = 0; i < array.length; i++) {
// //         for (let j = 0; j < array[i].length; j++) {
// //             if (array[i].length > maxLength) {
// //                 maxLength = array[i].length
// //             } else if (array[i].push('*') < maxLength) {

// //                 break;

// //             }
// //         }
// //     }

// // }
// // let array = sopaLetra(wordsArray);
// // let word = 'pata'


