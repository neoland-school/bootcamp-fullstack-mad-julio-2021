// 1- Definir en un comentario un tipo objeto que represente una asignatura. Sus propiedades son (nombre, curso, titulacion, temario, profesor, departamento). Crear una variable y darle valor a una asignatura (inventaros los datos si quereis)
//     * ¿De que tipo de datos es cada una de las propiedades? (escribirlo con un comentario al lado

// Creando un objeto de una asignatura (Inglés en mi caso)

let asig_English = {
    nombre: 'Inglés', //dato de tipo string
    curso: 'Curso 1', //Dato de tipo número
    titulacion: 'Certificado B1', //Dato tipo string
    nota: 9,
    temario : [ // Dato tipo objeto
       {
           unidad : 1,
           nombre : 'Introducción a la tecnologia web',
           subtemas: [
               'Perspectiva historica del internet',
                'Protocolo HTTP', //DUDA AQUI
               'Introduccion al HTML'
           ]
       },
       {
           unidad: 2,
           nombre: 'Desarrollo de aplicaciones Web',
           subtemas: [
               'Arquitectura de las aplicaciones Web',
               'Lenguaje de programación al lado del cliente',
               'Lenguaje de programación al lado del servidor'
           ]
       },{
           unidad: 3,
           nombre: 'Programador al lado del servidor',
           subtemas: [
               'Procesamiento al lado del servidor',
               'Conceptos básicos de la herramienta de desarrollo',
               'Operadores'
           ]
       },
    ],
    profesor: [// Ahora es un array
        { //Objeto
          nombre: 'Gabriel', //string
          email: 'gabo@gmail.com'
        },
        { //Objeto
          nombre: 'Camille',
          email: 'Camille@gmail.com'
        }
],
    departamento: 'Lenguas Extranjeras' //Dato tipo string
}



// 2- Tenemos que cambiar la variable para que acepte mas de un profesor. Que tipo de datos es ahora la propiedad profesor?

// let asig_CienciasSociales = {
//     nombre: 'Inglés', //dato de tipo string
//     curso: 1, //Dato de tipo número
//     titulacion: 'Certificado B1', //Dato tipo string
//     temario : { // Dato tipo objeto
//         primer_modulo: 'Greetings', //Dato tipo string
//         segundo_modulo: 'Cities', //Dato tipo string
//         tercer_modulo: 'Fruits' //Dato tipo string
//     },
//     profesores : ['Camila', 'Pedro', 'Juan'],
//     departamento: 'Lenguas Extranjeras' //Dato tipo string
// }



// // 3- Ahora tenemos que permitir que cada profesor tenga email y nombre. Cambiar la variable para ello. Que tipo de datos es ahora la propiedad profesor?


// let asig_Music = {
//         nombre: 'Inglés', //dato de tipo string
//         curso: 1, //Dato de tipo número
//         titulacion: 'Certificado B1', //Dato tipo string
//         temario : { // Dato tipo objeto
//             primer_modulo: 'Greetings', //Dato tipo string
//             segundo_modulo: 'Cities', //Dato tipo string
//             tercer_modulo: 'Fruits' //Dato tipo string
//         },
//         profesores : [// Ahora es un array
//                 { //Objeto
//                   nombre: 'Gabriel', //string
//                   email: 'gabo@gmail.com'
//                 },
//                 { //Objeto
//                   nombre: 'Camille',
//                   email: 'Camille@gmail.com'
//                 }
//         ],
//         departamento: 'Lenguas Extranjeras' //Dato tipo string
//     },



// 4- Vamos a pintar un título (h1) en el HTML con el nombre de la asignatura desde JS

// const HEADER = document.createElement('h1');
// HEADER.textContent = asig_English.nombre;
// document.body.appendChild(HEADER);


// // 5- Vamos a pintar el curso (p) de la asignatura

// const PARRAFO = document.createElement('p');
// PARRAFO.textContent = asig_English.curso;
// document.body.appendChild(PARRAFO);


// // 6- Tenemos que pintar el primer profesor de la asignatura (nombre(p) email(p))

// const PROFESOR_NOMBRE = document.createElement('p');
// PROFESOR_NOMBRE.textContent = asig_English.profesor[0].nombre;
// document.body.appendChild(PROFESOR_NOMBRE);

// const PROFESOR_EMAIL = document.createElement('p');
// PROFESOR_EMAIL.textContent = asig_English.profesor[0].email;
// document.body.appendChild(PROFESOR_EMAIL);

// // 7- Tenemos que pintar todos los profesores de la asignatura

 

  for (const property in object) {

    const primerProf = document.createElement('p');
    primerProf.textContent = `${property}: ${asig_English[property]}`;
     document.body.appendChild(primerProf);  
  }


// const primerProf = document.createElement('p');
// primerProf.textContent = asig_English.profesor[0].nombre + ': ' + asig_English.profesor[0].email;
// document.body.appendChild(primerProf);

// const segundoProf = document.createElement('p');
// segundoProf.textContent = asig_English.profesor[1].nombre + ': ' + asig_English.profesor[1].email;
// document.body.appendChild(segundoProf);




// 8- Añadir la nota como propiedad al tipo de la asignatura

// Aquí añadi la nota como propiedad de la asig


// 9- Crear una funcion que imprima por pantalla la nota de una asignatura que reciba
 
// crear funcion 
// debe tener un parámetro
// imprimir por pantalla la nota

function notaAsignatura (nota){
    return nota;
}

console.log(notaAsignatura(asig_English.nota));



// 10- Crear una funcion que devuelva "SUSPENSO" si la nota de la asignatura que reciba es menor que 5

function notaSuspenso (nota){
    if(nota < 5){
        console.log('SUSPENSO');
    }
}

notaSuspenso(asig_English.nota);



// 11- Crear una función que pinte en el HTML "SUSPENSO" o "APROBADO" si la asignatura está suspensa o no

function result (nota){
   
    if(nota >= 5 && nota <=10){
        const APROBADA = document.createElement('span');
        APROBADA.textContent ='APROBADA';
        document.body.appendChild(APROBADA);
    } else{
        const SUSPENSO = document.createElement('span');
        SUSPENSO.textContent ='SUSPENSO';
        document.body.appendChild(SUSPENSO);
        
    }   
}

result(asig_English.nota);
