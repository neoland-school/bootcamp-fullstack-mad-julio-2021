// 1. Crear una app en nodejs que obtenga todos los argumentos/parámetros de entrada y se los pinte al usuario separándolos por guiones y en orden inverso. Por ejemplo:
// node my-app.js hola adios ----> adios-hola

// let datos = process.argv.slice(2);

// process.stdout.write('mis datos: ' + datos.reverse().join('-'));


// 2. Crear una app en nodejs que obtenga todos los argumentos/parámetros de entrada y se los pinte al usuario separándolos por guiones y en orden alfabético. Por ejemplo:
// node my-app.js hola abrir adios ----> abrir-adios-hola


// let datos = process.argv.slice(2);

// process.stdout.write('mis datos: ' + datos.sort().join('-'));

// 3. Crear una aplicación en nodejs que pida al usuario dos numeros y devuelva su suma y salga. Si no se introducen números, se mostrará un mensaje al usuario y se saldrá del programa.
// ej: node my-app.js
// dame el primer numero: 5
// dame el segundo numero: 6
// El resultado de su suma es: 11

// let op1, op2; 
// process.stdout.write('dame el primer numero:');
// process.stdin.on('data', data => {
//     const number =  parseInt(data.toString());
//     if(!isNaN(number)){
//         if(op1 === undefined){
//             op1 = number;
//             process.stdout.write('dame el segundo numero:');
//         }else if(op2 === undefined){
//             // deifnimos el segundo operando
//             op2 = number;
//             process.stdout.write(`El resultado de su suma es ${op1+op2}`);
//             process.exit(0);
//         } 
//     }else{
//         process.stdout.write('No has introducido un numero');
//     }
// }); 

//EJERCICIO CON EL Readline

// import Readline from 'readline';
// const Readline = require('readline');

// const rl = Readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('¿Cuantos años tienes? ', (answer) => {
//     const number = parseInt(answer);
//     if(!isNaN(number)){
//         if(number >75){
//             console.log('eres un abuelo')
//             process.exit();
//         }else{
//             console.log('A disfrutar')
//         }
//     }else{
//         console.log('Debes introducir un numero')
//     }
// });

// 1- Hacer una app nodejs que cuente el numero de tipos Number que hay en los parámetros de entrada.
// ej:
// > node app.js 3 hola 2 
//  Hay 2 parámetros numéricos


// const params = process.argv.slice(2);
// const numberCounter = (params) => {
//     let cont = 0;
//     for (let i = 0; i <= params.length; i++) {
//         if (parseInt(params[i])) cont++;
//     }
//     return cont;
// }
// console.log(`Hay ${numberCounter(params)} parámetros numéricos.`);

// const myParams = process.argv.slice(2);

// function numberCounter (myParams){
//     let para = 0;
//     for (let i=0; i<=myParams.length; i++){
//         if (parseInt(myParams[i])) 
//         para++;
//     }
//     return para;
// }

// process.stdout.write(`Hay ${numberCounter(myParams)} parámetros numéricos`);

// const myParams = process.argv.slice(2);

// const numbersAdition = myParams.filter(Number).length;

// process.stdout.write(`Hay ${numbersAdition} parámetros numéricos`);

// 2- Hacer una app que le pida al usuario un dato y lo pinte en uppercase.
// ej:
// > node app.js
// Siguiente dato: hola
// Uppercase: HOLA
// Siguiente dato: adios
// Upercase: ADIOS


// process.stdout.write('Siguiente dato:');

// process.stdin.on('data', (datos)=> {
//     if (datos.toString().trim() !== 'exit'){
//     process.stdout.write(`Uppercase: `+ datos.toString().toUpperCase());
//     process.stdout.write('Siguiente dato:');
//     }else{
//     process.exit(0);
//     }
// } );


// 3- Modificar el programa anterior para que acepte el numero de veces que se puede preguntar al usuario. Cuando pase ese número de veces el programa saldrá diciendo "has terminado tu cuota de solicitudes, cerrando aplicación..."
// ej:
// > node app.js 1
// Siguiente dato: hola
// Uppercase: HOLA
// has terminado tu cuota de solicitudes, cerrando aplicación...
// > node app.js 3
// Siguiente dato (3): hola
// Uppercase: HOLA
// Siguiente dato (2): hola
// Uppercase: HOLA
// Siguiente dato (1): hola
// Uppercase: HOLA
// has terminado tu cuota de solicitudes, cerrando aplicación...

// let contador = 1;
// process.stdout.write('Dame un parámetro:');

// process.stdin.on('data', (datos)=> {
//     if (datos.toString().trim() !== 'exit' && contador <3){
//     process.stdout.write(`Uppercase: `+ datos.toString().toUpperCase());
//     process.stdout.write('Dame un parámetro:');
//     contador = contador+1;
//     }else{
//     process.stdout.write('Has terminado tu cuota de solicitudes, cerrando aplicación...');
//     process.exit(0);
//     }



// 4- Crear una app MONEDERO que le entre por parámetro de entrada el valor actual de tu cartera. si no se mete nada el valor inicial de la cartera es 0. Nada más empezar la aplicación mostrará 3 opciones (Ingresar Dinero, Sacar Dinero, Salir).
// * Si el usuario indica la opción ingresar, el programa le pide usuario la cantidad a ingresar y actualizará la cartera con la nueva cantidad indicándosela al usuario. Hay que validar que los datos sean válidos y que se ingresen cantidades positivas
// * Si el usuario indica la opción sacar, el programa pide al usuario la cantidad a retirar y actualizará el monedero. Si no hay dinero se le mostrará un mensaje al usuario
// * Si el usuario elije salir el programa termina.
// > node app.js 30
// Bienvenido a tu monedero, actualmente tienes 30€
// 1. Ingresar Dinero
// 2. Sacar Dinero
// 3. Salir
// ¿Qué opción quieres elegir? 1
// ¿Cuánta cantidad quieres ingresar? 35

// Operación realizada con Exito, tienes 65€
// 1. Ingresar Dinero
// 2. Sacar Dinero
// 3. Salir
// ¿Qué opción quieres elegir? 2
// ¿Cuánta cantidad quieres sacar? 20

// Operación realizada con Exito, tienes 45€
// 1. Ingresar Dinero
// 2. Sacar Dinero
// 3. Salir
// ¿Qué opción quieres elegir? 2
// ¿Cuánta cantidad quieres sacar? hola
// Cantidad no valida, introduce de nuevo: 70€

// Operación fallida, Saldo insuficiente. Tu saldo es de 45€
// 1. Ingresar Dinero
// 2. Sacar Dinero
// 3. Salir
// ¿Qué opción quieres elegir? 3
// Hasta pronto, vuelva a confiar en nosotros para su dinero.
// 5- Hacer un app nodejs que duplique la funcionalidad del npm init, donde te pregunte por cada uno de los parámetros de las opciones requeridas para generar el package.json. No hace falta crear el archivo. Con imprimir por pantalla el objeto resultante es suficiente. Hint: Ejecutar el npm init para conocer las preguntas y el formato de un package.json. (editado)


