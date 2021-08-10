// function multiply(a, b) {

//     return a * b;

// }
// console.log(multiply(2, 3))

// function string(strings) {
//     return "hola" +
//         " " + strings;
// }
// console.log(string("matias"))

// function booleano(booleano1, boleano2) {

//     return booleano1 && boleano2
// }
// console.log(booleano(2, 3))


// function asterisk(n) {
//     for (i = 0; i <= n; i++) {
//         let asterisk = " ";
//         for (i = 0; i <= n; i++) {
//             asterisk += "*";
//         }

//         return asterisk
//     }
// }
// console.log(asterisk(9))

// function calculator(a, b) {
//     let result = 0;
//     for (i = 1; i <= b; i++) {

//         result += a
//     }
//     return result
// }
// console.log(calculator(10, 3))


// exercise 1

function invertir(num) {
    let invertido = 0
    let resto = num
    while (resto > 0) {
        invertido = invertido * 10 + (resto % 10)
        resto = Math.floor(resto / 10)
    }

    return invertido
}

function capicua(n) {

    return n === invertir(n)

}
console.log(capicua(162))

function type(input) {
    return typeof(input);
}
console.log(type(162))

function circle(r) {
    let perimetro = Math.PI * 2 * r;
    let area = Math.PI * r ** 2;


    return "area" + " " + area + " " + "perimetro" + " " + perimetro


}
console.log(circle(3))

function triangule(l) {
    let perimetro = l * 3;
    let area = (l * l) / 2;


    return "area" + " " + area + " " + "perimetro" + " " + perimetro


}
console.log(triangule(4))

function square(l) {
    let perimetro = l * 4;
    let area = l ** 2;


    return "area" + " " + area + " " + "perimetro" + " " + perimetro


}
console.log(square(6))

function rectangule(l1, l2) {
    let perimetro = 2 * l1 + 2 * l2;
    let area = l1 * l2;


    return "area" + " " + area + " " + "perimetro" + " " + perimetro


}
console.log(rectangule(6, 8))

function summ(n, x) {
    return n + x
}

function rest(n, x) {
    return n - x
}

function mult(n, x) {
    return n * x
}

function div(n, x) {
    return n / x
}

function porc(n, x) {
    return n % x
}
console.log(div(10, 2))

function github(strings) {
    let result = " ";
    if (strings.includes("https://github.com")) {
        result = "si";
    } else {
        result = "no";
    }

    return result

}
console.log(github("https://github.com/neoland-school/bootcamp-fullstack-mad-julio-2021/pulls"))
    // calculadora
function calculator(a, b, c) {
    let result;

    if (c == summ) {
        result = summ(a, b);
    } else if (c == rest) {
        result = rest(a, b);
    } else if (c == mult) {
        result = mult(a, b);
    } else {
        result = div(a, b)
    }


    return result
}
console.log(calculator(2, 3, summ))

function validation(nie) {
    let result;
    if (nie % 23 === 0) {
        result = nie + "t";
    } else if (nie % 23 === 2) {
        result = nie + "r";
    } else if (nie % 23 === 3) {
        result = nie + "w";
    } else if (nie % 23 === 4) {
        result = nie + "a";
    } else if (nie % 23 === 5) {
        result = nie + "g";
    } else if (nie % 23 === 6) {
        result = nie + "m";
    } else if (nie % 23 === 7) {
        result = nie + "y";
    } else if (nie % 23 === 8) {
        result = nie + "f";
    } else if (nie % 23 === 9) {
        result = nie + "p";
    } else if (nie % 23 === 10) {
        result = nie + "d";
    } else if (nie % 23 === 11) {
        result = nie + "x";
    } else if (nie % 23 === 12) {
        result = nie + "b";
    } else if (nie % 23 === 13) {
        result = nie + "N";
    } else if (nie % 23 === 14) {
        result = nie + "J";
    } else if (nie % 23 === 15) {
        result = nie + "Z";
    } else if (nie % 23 === 16) {
        result = nie + "S";
    } else if (nie % 23 === 17) {
        result = nie + "Q";
    } else if (nie % 23 === 18) {
        result = nie + "V";
    } else if (nie % 23 === 19) {
        result = nie + "H";
    } else if (nie % 23 === 20) {
        result = nie + "L";
    } else if (nie % 23 === 21) {
        result = nie + "C";
    } else {
        result = nie + "K"
    }
    return result
}
console.log(validation(1234567))