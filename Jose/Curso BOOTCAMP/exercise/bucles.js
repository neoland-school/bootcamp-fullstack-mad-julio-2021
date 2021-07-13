// easy

// let number = 14;
// let number2 = 15;
// if (number < number2) {
//     console.log(number2)
// } else {
//     console.log(number)
// }
// 

// let number = 14;
// for (i = 0; i <= number; i++) {
//     if (i % 2 === 0) {
//         console.log(i + 'es par')
//     } else {
//         console.log(i + 'es inpar')
//     }
// }

// medium

// for (i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i + " " + 'fizzbuzz')
//     } else if (i % 3 === 0) {
//         console.log(i + " " + 'fizz')
//     } else if (i % 5 === 0) {
//         console.log(i + " " + 'buzz')
//     } else {
//         console.log(i)
//     }
// }


// hard
// asterisk
// for (i = 0; i <= 4; i++) {
//     let asterisk = " ";
//     for (i = 0; i <= 4; i++) {
//         asterisk += "*";
//         console.log(asterisk)
//     }

// }

// for (i = 0; i <= 4; i++) {
//     let asterisk = " ";
//     for (x = 0; x <= i; x++) {
//         asterisk += "*";


//     }

//     console.log(asterisk)

// }
// for (i = 0; i <= 3; i++) {
//     let asterisk = "*";
//     for (x = 3; x >= i; x--) {
//         asterisk += "*";


//     }

//     console.log(asterisk)

// }

// fibonacci
let number = 70;
let fibo1 = 0;
let fibo2 = 1;


while (fibo1 < number && fibo2 < number) {
    if (fibo1 < fibo2) {
        fibo1 += fibo2


    } else {

        fibo2 += fibo1

        // if (fibo2 > number) {
        //     break
        // }
    }

    console.log(fibo1 + fibo2)
}