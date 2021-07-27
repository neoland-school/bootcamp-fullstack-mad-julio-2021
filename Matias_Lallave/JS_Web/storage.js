// Storage en el navegador

// Cuando refrescamos la página -> Perdemos nuestro progreso
// Necesito un sitio donde guardar la información cuando cierre el navegador

/**
 * 
 * 1- Cookies -> Son unos archivos pequeños que guardan información de mi dominio web. <clave>:<valor>
 *          - clave: nombre de la cookie
 *          - valor: String con la información que queremos almacenar
 * 
 *      Para interaccionar/usar las cookies se utiliza:
 *          document.cookie (es un string)
 * 
 *      Además las cookies tienen una serie de atributos/características
 * 
 *          - A qué dominio pertenecen (domain)
 *          - A qué path pertenecen (Lo que va después de la primera /)
 *          - Fecha de expiración (expire)
 *          - secure (boolean)
 *          - httpOnly (boolean)
 *                  Si true solo un servifor HTTP puede leerlos, no se podrían leer desde JS
 * 
 *      ¿Cúando se usan?
 *          - Sesion del Login (identificar al usuario) 
 *              * Tip: esta cookie httpOnly
 *          - Cuando necesito que el servidor conozca una información sobre la navegación del usuario
 * 
 * 2- Session Storage -> 
 *          - Asociado a dominio
 *          - <clave>:<valor> => de tipo string
 *          - Cuando se cierra la pestañase elimina
 *          - No se comparte entre pestañas
 *          - Casos de uso:
 *              - Compartir información entre páginas dentro de la misma pestaña
 *              - Cuando quiero refrescar la misma pestaña y mantener la información guardada
 * 
 *          - Cómo se usa
 *              - window.sessionStorage o sessionStorage
 *              - sessionStorage.getItem('<clave>') -> recupera el valor en string de esa clave
 *              - sessionStorage.setItem('<clave>', <valor>) -> Insert este dato en el storage
 *                  - Si el valor es un number (ej: 3) -> '3';
 *                  - Si el valor es un boolean (ej: true) "true"
 *                  - Si el valor es un objeto (ej: {a:3}) "[object Object]"
 *                  - Si el valor es un array (ej: [3,4]) "3,4"
 *                  - Si el valor es un function (ej: () => {}) "function ()"
 *                  ** Para funciones, no podemos guardarlas
 *                  ** Para objetos y arrays hay una utilidad en window 
 *                      JSON.stringify(<obj> o <arr>) => string
 *                      JSON.parse(<string>) => obj o array
 *              - sessionStorage.removeItem('<clave>') -> elimina la fila con su valor
 *              - sessionStorage.clear() -> elimina todo el session
 * 
 * 3- Local Storage.
 *          - Igual que el session, pero toda la vida o hasta que el usuario lo borre
 *          - en vex de utilizar le objeto sessionStorage, utilizaremmos el objeto localStorage
 *          - se comparte entre pestañas
 *          - no se elimina al cerra el navegador
 *          - Casos de uso:
 *              - Información que NO es sensible    
 *              - Compartir información entre pestañas y al cerrar y abrir el browser
 *              - Datos que casi nunca cambian (EJ: códigos postales, ciudades, países)
 */             

/**
 *  Otros: IndexedDB -> es una base de datos y es más potente pero más complicado
 */