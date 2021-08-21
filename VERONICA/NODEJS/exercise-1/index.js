// 1- Construir una aplicación en NodeJS, que pinte por pantalla (console.log) la información del proceso que ejecuta:
// PID
// Platform
// Uso de CPU
// Uso de Memoria RAM
// Ejecutarla más de una vez para ver que la información es diferente 


console.log('id del proceso: ', process.pid);
console.log('sistema operativo: ', process.platform);
console.log('Memoria Ram: ', process.memoryUsage());
console.log('CPU: ', process.cpuUsage());


// 1 - Explore node:
// como saber la version del node 

console.log('Versión de mi nodeJS: ', process.version);

// hacer un programa (.js) que imprima la version

// process.stdout.write(process.version);

// explorar el node REPL ( ej: hacer una constante con un valor y explorarla)

// Se coloca node en la consola
// Luego se coloca console.log('Cualquier cosa')
// y se le da intro

// 1.1 - explore argv input and output
// crear una app que segun el numero parametro de entrada si es par o impar haga una pregunta A o una Pregunta B y despues cada respuesta imprima
// imprima env o imprima los valores de entrada

// process.stdout.write('Escribe cualquier cosa: ');

// process.stdin.on('data', (data) => {
//     if (data.toString().trim()%2===0){
//         process.stdout.write('Cuantos años tiene?');
//     } else if(data.toString().trim()%2!==0) {
//         process.stdout.write('Donde vives?')
//     } else {
//         process.exit();
//     }
// })

// const myArgs = process.argv.slice(2);

// console.log('myArgs: ', myArgs);

// let myNumber = !isNaN(parseInt(myArgs[0]));
// //isNaN da true si es número

// process.exit(1);

// if (myNumber%2===0){
//     console.log('Cuantos años tiene?');
//     console.log(myArgs);
// } else {
//     console.log('Donde vives?')
//     console.log(myArgs);
//     process.exit();
// }

//Para mirar el ejercicio debemos hacer node index.js (Escribir cualquier cosa)


// 2 - un programa que calcule el fibonacci de 10

// var myArgs = process.argv.slice(10);

// process.stdin.on('data', (myArgs) => {
//     let numeros =[0,1];
//     for (let i = 2; i < numero; i++) {
//         myArgs[i] = numeros[i - 2] + numeros[i - 1];
//     }
//     process.stdout.write(numeros.toString());
// });

// process.stdin.on('data', (data)=>{
//     let dat = data.toString();
//     let num = parseInt(dat);
//     let i;
//     let fib = []; // Initialize array!
//     fib[0] = 0;
//     fib[1] = 1;
//     for (i = 2; i < num; i++) {
//         fib[i] = fib[i - 2] + fib[i - 1];
//         console.log(fib[i]);
//     }
//     });

// Para verlo se coloca node nombredelarchivo, darle intro y poner el número


// 2.2 - hacer una applicacion que calcule un fibonnaci con parametros de entrada
// validar que el numero de entrada no sea mayor que 100
// y si es mayor romper con error

// process.stdin.on('data', (data) => {
//     let dat = data.toString();
//     let num = parseInt(dat);
//     if (num <= 100) {
//         let i;
//         let fib = []; // Initialize array!
//         fib[0] = 0;
//         fib[1] = 1;
//         for (i = 2; i < num; i++) {
//             fib[i] = fib[i - 2] + fib[i - 1];
//             console.log(fib[i]);
//         }
//     }else {
//         process.stdout.write('error');
//         process.exit();
//     }
// });

// 3 - Hacer una aplicación de validaciones en NodeJS. La aplicación mostrará al usuario un menú para elegir lo que quiere validar. El menú tendrá las siguientes opciones (EMAIL, NIF/NIE o CIF, IBAN y Exit).

// Cuando el usuario indique una opción se le solicitará el valor a validar y el programa le indicará si es válido o no. En el caso del IBAN, le indicará a que banco pertenece.

// Como extra, implementar la versión shorcut y así no mostrar el menú (EJ: node index.js email <valor>, node index.js id <valor> o node index.js iban <valor>)