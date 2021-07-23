// - Escribir una función que dado un numero, devuelva el número al revés (EJ: 3456 => 6543) (Medium)

function reverseNumber(numero) {

    numString = numero.toString();

    numString = numString.split("");

    numeroDelReves = numString.reverse();

    numeroDelReves = numeroDelReves.join("");

    return parseInt(numeroDelReves);

}

console.log(reverseNumber(56789));


// - Escribir una función que dado un número devuelva si es capicua o no (Hint: usar la función anterior) (Easy con la función anterior)

function esCapicua(numero) {

    if (reverseNumber(numero) === numero) {
        return true;
    } else {
        return false;
    }

}

num = 242;

if (esCapicua(num)) {
    console.log("Es capicúa.")
} else {
    console.log("No es capicúa.")
}


// - Escribir una función que devuelva el tipo del parámetro de entrada (Easy)

function parameterTell(param) {
    return typeof (param);
}

console.log(parameterTell(456));

// - Escribir varias funciones que calculen área y perímetro de diferentes figuras geometricas (Rectángulo, Cuadrado, triángulo y Círculo) (Easy)

function areaPerimRectangulo(ancho, largo) {

    let objeto = 'rectángulo';
    let area = ancho * largo;
    let perimetro = ancho * 2 + largo * 2;

    imprimeResultado(area, perimetro, objeto);
}
function areaPerimCuadrado(lado) {
    let objeto = 'cuadrado';
    let area = lado ** 2;
    let perimetro = 4 * lado;
    imprimeResultado(area, perimetro, objeto);
}
function areaPerimTriangulo(baseLado1, lado2, lado3, altura) {
    let objeto = 'triangulo';
    let area = (baseLado1 * altura) / 2;
    let perimetro = baseLado1 + lado2 + lado3;
    imprimeResultado(area, perimetro, objeto);
}
function areaPerimCirculo(radio) {
    let objeto = 'circulo';
    let area = Math.PI * (radio ** 2)
    let perimetro = 2 * radio * Math.PI;
    imprimeResultado(area, perimetro, objeto);
}
function imprimeResultado(area, perimetro, objeto) {
    console.log(`El area del ${objeto} es: ${area}`);
    console.log(`El perimetro del ${objeto} es: ${perimetro}`);
    console.log('********************************************');
}


areaPerimRectangulo(2, 3);
areaPerimCuadrado(3);
areaPerimTriangulo(3, 6, 2, 4);
areaPerimCirculo(6);

// - Crear las funciones que simulen una calculadora (Suma, Resta, multiplicaciones, divisiones y porcentajes) (Easy)

function sumaNum(num1, num2) {
    result = num1 + num2;
    return result;
}
function restaNum(num1, num2) {
    result = num1 - num2;
    return result;
}
function multiplicaNum(num1, num2) {
    result = num1 * num2;
    return result;
}
function divideNum(num1, num2) {
    result = num1 / num2;
    return result;
}
function porcentaje(num, parte) {
    parte = parte / 100;
    result = num * parte;
    return result;
}


// - Crear una función que dado una URL (Se representa con un string) me diga o no si pertenece al dominio de github. (Medium)

function compruebaUrl(url) {

    if (url.includes("github.com")) {
        console.log("It is a github domain.")
    } else {
        console.log("It is not a github domain");
    }

}

compruebaUrl("www.hola.github.com");

// - Crear una función calculadora que reciba como parametros: Dos operandos y la función que se quiera utilizar para calcular. (Hard)

function myFirstCalculator(num1, num2, operation) {

    switch (operation) {
        case 'add':
            console.log(sumaNum(num1, num2));
            break;
        case 'subtract':
            console.log(restaNum(num1, num2));
            break;
        case 'multiply':
            console.log(multiplicaNum(num1, num2));
            break;
        case 'divide':
            console.log(divideNum(num1, num2));
            break;
    }

}
myFirstCalculator(2, 3, "add");
myFirstCalculator(2, 3, "subtract");
myFirstCalculator(2, 3, "multiply");
myFirstCalculator(8, 2, "divide");


// 	Ejemplo calc(3,4,add) devuelve  7

// - Crear una funcion que dado un NIF o un NIE te indique si es válido o no. En la página del ministerio se explica como se valida (http://www.interior.gob.es/web/servicios-al-ciudadano/dni/calculo-del-digito-de-control-del-nif-nie) (Hard)



function verificaDni(dni) {

    let letraControl = dni[8];

    let check = false;

    if (parseInt(dni[0])) {

        let dniModificado = dni.slice(0, -1);

        let controlVeracidad = dniModificado % 23;

        switch (controlVeracidad) {
            case 0:
                if (letraControl === 'T') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 1:
                if (letraControl === 'R') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 2:
                if (letraControl === 'W') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 3:
                if (letraControl === 'A') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 4:
                if (letraControl === 'G') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 5:
                if (letraControl === 'M') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 6:
                if (letraControl === 'Y') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 7:
                if (letraControl === 'F') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 8:
                if (letraControl === 'P') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 9:
                if (letraControl === 'D') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 10:
                if (letraControl === 'X') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 11:
                if (letraControl === 'B') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 12:
                if (letraControl === 'N') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 13:
                if (letraControl === 'J') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 14:
                if (letraControl === 'Z') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 15:
                if (letraControl === 'S') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 16:
                if (letraControl === 'Q') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 17:
                if (letraControl === 'V') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 18:
                if (letraControl === 'H') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 19:
                if (letraControl === 'L') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 20:
                if (letraControl === 'C') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 21:
                if (letraControl === 'K') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 22:
                if (letraControl === 'E') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
        }

    } else {
        if (dni[0] == 'X') {
            dniExtranjero = dni.substring(1);
            dniExtranjero = '0' + dniExtranjero;
        } else if (dni[0] == 'Y') {
            dniExtranjero = dni.substring(1);
            dniExtranjero = '1' + dniExtranjero;
        } else if (dni[0] == 'Z') {
            dniExtranjero = dni.substring(1);
            dniExtranjero = '2' + dniExtranjero;
        }
        let dniModificado = dniExtranjero.slice(0, -1);

        let controlVeracidad = dniModificado % 23;
        switch (controlVeracidad) {
            case 0:
                if (letraControl === 'T') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 1:
                if (letraControl === 'R') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 2:
                if (letraControl === 'W') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 3:
                if (letraControl === 'A') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 4:
                if (letraControl === 'G') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 5:
                if (letraControl === 'M') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 6:
                if (letraControl === 'Y') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 7:
                if (letraControl === 'F') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 8:
                if (letraControl === 'P') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 9:
                if (letraControl === 'D') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 10:
                if (letraControl === 'X') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 11:
                if (letraControl === 'B') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 12:
                if (letraControl === 'N') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 13:
                if (letraControl === 'J') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 14:
                if (letraControl === 'Z') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 15:
                if (letraControl === 'S') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 16:
                if (letraControl === 'Q') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 17:
                if (letraControl === 'V') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 18:
                if (letraControl === 'H') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 19:
                if (letraControl === 'L') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 20:
                if (letraControl === 'C') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 21:
                if (letraControl === 'K') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
            case 22:
                if (letraControl === 'E') {
                    console.log("El DNI es correcto");
                    check = true;
                }
                break;
        }
    }

    if (!check) {
        console.log("El DNI introducido es FALSO.")
    }

}

verificaDni("Z4196330P");


//EXTRAS:

// - Crear una función que cuente los espacios que hay en un string que te proporcionen por parámetro


function cuentaEspacios(mensaje) {
    let cont = 0;

    for (let i = 0; i <= mensaje.length; i++) {
        if (mensaje[i] === ' ') {
            cont += 1;
        }
    }
    console.log(`La frase "${mensaje}" tiene ${cont} espacios.`);
}

cuentaEspacios("Esta es una frase con 8 espacios en blanco.");

// // - Crear una función que calcule el Maximo Comun Divisor (Hint: Utilizar el algoritmo de euclides)


function algoritmoEuclides(numero1, numero2) {

    let check = numero1 % numero2;

    while (check !== 0) {
        checkTemp = check;
        check = numero2 % checkTemp;
    }
    return checkTemp;
}
console.log(algoritmoEuclides(1728, 842));

// //Given a string of words or phrases, count the number of vowels.

function cuentaVocales(palabra) {

    let contador = 0;

    for (let i = 0; i <= palabra.length; i++) {
        if (palabra[i] === 'a' || palabra[i] === 'e' || palabra[i] === 'i' || palabra[i] === 'o' || palabra[i] === 'u') {
            contador += 1;
        }
    }

    return contador;

}
mensaje = "Hola, ¿sabes cuantas vocales tengo? pues, unas cuantas";
console.log(`La frase "${mensaje}" tiene ${cuentaVocales(mensaje)} vocales.`);

// //Given an array and a size, split the array items into a list of arrays of the given size.

function troceaFrases(sentence, size) {

    let chunck = '';
    let cont = 0;

    while (sentence.length > size) {

        for (let i = 0; i < size; i++) {

            chunck = chunck + sentence[i];
            console.log(`Chunck ${cont}: ${chunck}`);
            sentence = sentence.slice(0, size);
            cont++;
        }

    }
    if (sentence.length > 0 && sentence.length < size) {
        console.log(`Chunck ${cont}: ${chunck}`);
    }
}

troceaFrases("Vamos a ver cuantos trozos salen", 2);


