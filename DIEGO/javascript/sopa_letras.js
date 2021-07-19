// 5. Juego Sopa de letras (Legend):
//     **Escribe una función que dado un array de palabras, devuelva un array bidimensional de caracteres en la que las letras de una palabra se encuentren seguidas (diagonal, vertical u horizontal)
//     **Escribe una función que dado un array bidimensional de caracteres y un string, te diga si el string se encuentra o no en el array de letras (diagonal, vertical u horizontal)"

// VARIABLES
let wordsArray = ['python', 'salami', 'futbol', 'zapato', 'cazado', 'jabali'/*, 'cazado', 'jabali'*/]; // 'pyth', 'sala', 'futb', 'zapa'
let word = 'diego'; // 'tapa' works strange 'tuf' too
let cont = 0;
let foundWord = '';
let myGameArray = sopaLetra(wordsArray);
let cuentaBusquedas = 0;

//FUNCIONES
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

function finPartida() {
    console.log(myGameArray);
    console.log('La palabra ha sido encontrada :D--');
    process.exit();

}
function cleanSearch(i, j) {
    foundWord = foundWord.slice(0, cont);
    myGameArray = sopaLetra(wordsArray);
    myGameArray[i][j] += '*';
    cuentaBusquedas = 0;
};

/**
 * 
 * @param {*} i -> es la posicion i del candidato
 * @param {*} j -> es la posicion j del candidato
 * @param {*} cont -> es la posicion de la letra que buscamos en word
 */
function searchAdjacents(i, j, cont) {

    /* if (foundWord === word) {
         console.log("Se ha encontrado la palabra " + word + "!");
         console.log(myGameArray);
     } else if (i === myGameArray.length - 1 && j === myGameArray.length - 1) {
         console.log("La palabra no existe en la sopa de letras!");
         process.exit();
     } else {*/
    if (i === 0 && j !== 0 && j !== (myGameArray.length - 1)) {
        searchOne(i, j, cont);
        cleanSearch(i, j);
        searchFive(i, j, cont);
        cleanSearch(i, j);
        searchSix(i, j, cont);
        cleanSearch(i, j);
        searchSeven(i, j, cont);
        cleanSearch(i, j);
        searchEight(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else if (j === 0 && i !== 0 && i !== (myGameArray.length - 1)) {
        searchThree(i, j, cont);
        cleanSearch(i, j);
        searchFour(i, j, cont);
        cleanSearch(i, j);
        searchFive(i, j, cont);
        cleanSearch(i, j);
        searchSix(i, j, cont);
        cleanSearch(i, j);
        searchSeven(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else if (i === 0 && j === 0) {
        searchFive(i, j, cont);
        cleanSearch(i, j);
        searchSix(i, j, cont);
        cleanSearch(i, j);
        searchSeven(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else if (i === (myGameArray.length - 1) && j !== (myGameArray.length - 1)) {
        searchOne(i, j, cont);
        cleanSearch(i, j);
        searchTwo(i, j, cont);
        cleanSearch(i, j);
        searchThree(i, j, cont);
        cleanSearch(i, j);
        searchFour(i, j, cont);
        cleanSearch(i, j);
        searchFive(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else if (j === (myGameArray.length - 1) && i !== (myGameArray.length - 1)) {
        searchOne(i, j, cont);
        cleanSearch(i, j);
        searchTwo(i, j, cont);
        cleanSearch(i, j);
        searchThree(i, j, cont);
        cleanSearch(i, j);
        searchSeven(i, j, cont);
        cleanSearch(i, j);
        searchEight(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else if (i === (myGameArray.length - 1) && j === (myGameArray.length - 1)) {
        searchOne(i, j, cont);
        cleanSearch(i, j);
        searchTwo(i, j, cont);
        cleanSearch(i, j);
        searchThree(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    } else {
        searchOne(i, j, cont);
        cleanSearch(i, j);
        searchTwo(i, j, cont);
        cleanSearch(i, j);
        searchThree(i, j, cont);
        cleanSearch(i, j);
        searchFour(i, j, cont);
        cleanSearch(i, j);
        searchFive(i, j, cont);
        cleanSearch(i, j);
        searchSix(i, j, cont);
        cleanSearch(i, j);
        searchSeven(i, j, cont);
        cleanSearch(i, j);
        searchEight(i, j, cont);
        cleanSearch(i, j);
        foundWord = '';
        searchForWord(i, j);
    }
}


function searchForWord(i, j) {
    let temp = '';
    foundWord = foundWord.slice(0, cont);
    //cleanSearch(i, j);
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
            if (indy === myGameArray.length - 1 && indx !== myGameArray.length - 1) {
                searchForWord(i + 1, 0)
            } else if (indy === myGameArray.length - 1 && indx === myGameArray.length - 1) {
                console.log(`Palabra buscada: ${word}`);
                myGameArray = sopaLetra(wordsArray);
                console.log(myGameArray);
                console.log("La palabra no existe en la sopa de letras!");
                process.exit();
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
 *      1 - searchOne()
 *      2 - searchTwo()          
 *      3 - searchThree()
 *      4 - searchFour()
 *      5 - searchFive()
 *      6 - searchSix()
 *      7 - searchSeven()
 *      8 - searchEigth()
 * 
 */

function searchOne(i, j, cont) {

    if (myGameArray[i][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {

        foundWord += myGameArray[i][j - 1];
        myGameArray[i][j - 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;

        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (j - 1 !== 0 && foundWord.length < word.length && niceSearch === true) {
                searchOne(i, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i, j);
            }
        }
    }

}
function searchTwo(i, j, cont) {
    if (myGameArray[i - 1][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j - 1];
        myGameArray[i - 1][j - 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i - 1 !== 0 && j - 1 !== 0 && foundWord.length < word.length && niceSearch === true) {
                searchTwo(i - 1, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i + reset, j + reset);
            }
        }
    }
}
function searchThree(i, j, cont) {
    if (myGameArray[i - 1][j] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j];
        myGameArray[i - 1][j] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i - 1 !== 0 && foundWord.length < word.length && niceSearch === true) {
                searchThree(i - 1, j, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i + reset, j);
            }
        }
    }
}
function searchFour(i, j, cont) {
    if (myGameArray[i - 1][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i - 1][j + 1];
        myGameArray[i - 1][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i - 1 !== 0 && j !== myGameArray.length - 1 && foundWord.length < word.length && niceSearch === true) {
                searchFour(i - 1, j + 1, cont);

            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i + reset, j - reset);
            }
        }
    }
}
function searchFive(i, j, cont) {
    if (myGameArray[i][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i][j + 1];
        myGameArray[i][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (j !== myGameArray.length - 1 && foundWord.length < word.length && niceSearch === true) {
                searchFive(i, j + 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i, j - reset);
            }
        }
    }
}
function searchSix(i, j, cont) {
    if (i === myGameArray.length - 1 || j === myGameArray.length - 1) {
        let reset = cuentaBusquedas;
        cuentaBusquedas = 0;
        foundWord = foundWord.slice(0, cont);
        searchForWord(i - reset, j - reset);
    } else if (myGameArray[i + 1][j + 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j + 1];
        myGameArray[i + 1][j + 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i !== myGameArray.length - 1 && j !== myGameArray.length - 1 && foundWord.length < word.length && niceSearch === true) {
                searchSix(i + 1, j + 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i - reset, j - reset);
            }
        }
    }
}
function searchSeven(i, j, cont) {
    let cuentaBusquedas = 0;

    if (myGameArray[i + 1][j] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j];
        myGameArray[i + 1][j] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i !== myGameArray.length - 1 && foundWord.length < word.length && niceSearch === true) {
                searchSeven(i + 1, j, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i - reset, j);
            }
        }
    }
}
function searchEight(i, j, cont) {
    if (i === myGameArray.length - 1) {
        let reset = cuentaBusquedas;
        cuentaBusquedas = 0;
        foundWord = foundWord.slice(0, cont);
        searchForWord(i - reset, j + reset);
    } else if (myGameArray[i + 1][j - 1] === word[cont] && foundWord !== word && foundWord !== '') {
        foundWord += myGameArray[i + 1][j - 1];
        myGameArray[i + 1][j - 1] += '*';
        cuentaBusquedas++;
        cont++;
        let niceSearch = true;
        if (foundWord === word) {
            finPartida();
        } else {
            for (let h = 0; h < foundWord.length; h++) {
                if (foundWord[h] !== word[h]) {
                    niceSearch = false;
                }
            }
            if (i !== myGameArray.length - 1 && j !== 0 && foundWord.length < word.length && niceSearch === true) {
                searchEight(i + 1, j - 1, cont);
            } else {
                let reset = cuentaBusquedas;
                cuentaBusquedas = 0;
                foundWord = foundWord.slice(0, cont);
                myGameArray = sopaLetra(wordsArray);
                searchForWord(i - reset, j + reset);
            }
        }
    }
}

searchForWord(0, 0);