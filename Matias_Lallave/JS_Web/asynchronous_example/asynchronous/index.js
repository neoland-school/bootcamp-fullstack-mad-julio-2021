/**
 * ASINCRONIA
 *
 * Una instrucción de programación se ejecuta en lo que se conoce como
 * hilo o thread.
 * En un thread SOLO se puede ejecutar una instrucción
 * Los procesadores actuales tienen mas de un thread y permiten la ejecucion
 * de mas de una instruccion en paralelo.
 *
 * JavaScript es lo que se conoce como Single Thread, es decir,
 * (apriori) no hay posibilidad de ejecutar dos instrucciones a la vez (en paralelo)
 *
 * Desde hace unos años se crearon unas utilidades de JavaScript que se llamaron Workers
 * (ServiceWorker, Web Worker, SharedWorker, ...). Estos workers permiten crear un nuevo
 * hilo en JS y ejecutar instrucciones en paralelo. NO LO VAMOS A VER
 * (https://developer.mozilla.org/es/docs/Web/API/Web_Workers_API/Using_web_workers)
 *
 *
 * 1- Callbacks: Función que se pasa como parámetro de otra función que genera asincronia
 *              Cuando la tarea asincrona termina, se llama a mi funcion callback
 *    Pasos tenemos:
 *          1- Necesitamos una tarea que se ejecute fuera del hilo principal
 *                  ** Tarea que no bloquee JavaScript
 *                  EJ: Esperar a cada click de un usuario
 *                  EJ: Esperar 5 segundos para ejecutar algo
 *                  EJ: Solicitar recursos a un servidor
 *          2- Utilizamos una funcion que nos manda esa tarea a segundo plano
 *                  EJ: addEventListener()
 *                  EJ: setTimeout()
 *                  EJ: fetch() // descarga recursos de un servidor
 *
 *          3- Necesito una forma de que me avisen cuando esas en segundo plano
 *             hayan terminado. Es una funcion y se le llama CALLBACK
 *
 * */