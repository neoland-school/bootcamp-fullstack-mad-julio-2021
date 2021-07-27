/**
 * 
 * Una instrucción de programación se ejecuta en lo que se conoce como un hilo o thread.
 * En un thread SOLO se puede ejectuar una instrucción
 * Los procesadores actuales tienen más de un thread y permiten la ejecución de más de una instrucción en paralelo
 * 
 * JavaScritp es lo que se conoce como single thread, es decir, no hay posibilidad de ejecutar dos instrucciones a 
 * la vez en paralelo (a priori).
 * 
 * Desde hace unos años se craron unas utilidades de JS que se llamaron Workers (ServiceWorker, WebWorker, SharedWorker, ...). 
 * Estos workers permiten crear un nuevo hilo en JS y ejecutar instrucciones en paralelo. NO LO VAMOS A VER.
 * https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
 * 
 * Esperar de manea sincrona el numero de milisegunods que yo le indique
 * 
 * 
 */

//  function wait(ms){
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//  }


/**
 * Esperar de manera asíncrona el numero de milisegundos que yo le indique
 * 
 */
// console.log('Creo el timeout');

// setTimeout(function(){
//     console.log('A los 5 segundos');
// }, 5000);

// console.log('Despues del timeout');

/**
 * FORMAS DE GESTIONAR LA ASINCRONIA
 * 
 * 1 - Callbacks: Función que se pasa como parámetro de otra función que genera asincronía
 *          - Cuando la tarea asíncrona termina, se llama a mi función callback
 *          - Pasos:
 *              1. Necesitamos una tarea que se ejecute fuera del hilo principal, es decir, una tarea que no bloquee JS 
 *                  EJ: esperar click de usuario
 *                  EJ: Esperar 5 segundos para ejecutar algo
 *                  EJ: Solicitar recursos a un servidor
 *              2. Utilizamos una funcion que nos manda esa tarea a segundo plano
 *                  EJ: addEventListener()
 *                  EJ: setTimeout() o setInterva()
 *                  EJ: fetch() // descarga recursos de un servidor
 *              3. Necesito una forma de que me avisen cuando esas tareas en segundo plano hayan terminado. Es una funcion y se
 *                  llama CALLBACK
 * 
 * 2- Promises: Son un objeto JS que nos permite gestionar la asincronía y nos promete que va a devolver un valor que ya existe o que se está generando para el futuro.
 *      Las promeses tienen 3 posibles estados:
 *          - pending: estado inicial o que la promesa no ha termninado (la tarea asincrona sigue en ejecucion) 
 *          - fulfilled: la promesa ha terminado de ejecutarse satisfactoriamente
 *          - rejected: la promesa ha terminado con error
 * 
 *      - ¿Como se crea una promesa desde cero?
 *          * const myPromise = new Promise(function(resolve, reject){
 *              // codigo asincrono que quiero ejecutar
 *                  resolve(3) -> la promesa pasa a estado fulfilled, esta terminada ok y el valor que devuelve es un 3
 *                  reject('ERROR') -> la promesa pasa a estado rejected, esta terminada KO y el valor que devuelve es 'ERROR'
 *            });
 * 
 *      - ¿Como espero a que la promesa termine y obtenga su valor?
 *          //Los callbacks son dos funciones que reciben un parametro con el valor en cada caso
 *          * myPromise.then(callbackSuccess, callbackError)
 *              o
 *            myPromise.then(callbackOK).catch(callbackKO)
 *          //La unica diferencia es que este tambien se ejecuta con los errores de JS
 * 
 * 
 * 3- Async/await: Es un cambio de sintaxis con respecto a las promesas, pero por debajo significan lo mismo
 * 
 *          VERSION PROMESAS
 * 
 *          function hazCosasAsincronas() {
 *              myPromise.then(cbOK,cbKO);
 *          }
 * 
 *          VERSION ASYNC/AWAIT
 * 
 *          // especifico en una funcion que es o que llama a codigo asincrono
 * 
 *          async function hazCosasAsincronas (){
 *              const valueFulfilled = await myPromise;
 *          }
 * 
 * 
 * 
 * TRY/CATCH --- THROW
 */


