/**
 * 
 * PROTOCOLO HTTP(S)
 * 
 *  - HyperText Transfer Protocol (Secure)
 *  - Request === Petición que yo le hago a quien le pido la info
 * 
 *     * URL -> Representa a quien le pido la información y qué información le pido
 *          - Estructura: (http(s)://<adress>:<port>/<path>?<queryParams>#<hashName>)
 *              ** <address> => Dirección del destino (la máquina). Puede ser un dominio DNS o una dirección IP
 *              ** <port> => Es la "dársena" donde está la aplicación a la que quiero acceder en el destino.
 *                          Es un número que puede ir desde el 1 al 65635.
 *                          Por defecto (y lo más habitual en "producción")
 *                              - http -> 80
 *                              - https -> 443
 *                              ** El navegador nos introduce automáticamente el puerto estándar del protocolo
 *                          * Si yo quiero una aplicación en un puerto <1024 necesito permisos de administrador>
 *                          * Otros protocolos también tienen puertos por defecto: SSH -> 22
 *              ** <path> => Originalmente era el directorio/ruta donde se encontraba el archivo que yo quería recuperar
 *                           Cada nivel de directorio se ponía con una barra /
 *                           Hoy en día representa la información que yo quiero y no tiene por qué ser un archivo
 *                           **Mejor no poner espacios (los sustituirá por caracteres como '%20'), usar guiones medios o bajos
 *                           **Son importantes para el SEO
 *              ** <queryParams> => Se utiliza para mandar información al servidor destino
 *                      - pares <clave> = <valor>
 *                      - entre parametros se separa con un & ç
 *                      - Acotan la información que yo quiero. pero el tipo de info es el mismo
 *                      - ejemplo: <url>?demo=pruebaValor&otherParam=otherValue
 *              ** <hashName> => Se utiliza para posicionarme dentro de una misma pagina web
 *                      - Cargar la página web en un punto concreto de la misma
 *                      ej: https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_messages
 *                          Coincide con el id del elemento html
 *                      - Enrutado en cliente (diferentes paginas web solo yendo al servidor una vez)
 *                          ** Esto se conoce como SPA (Single Page Application) (React JS)
 * 
 *      * Methods (Métodos): Indican al servidor web el tipo de operación que yo quiero hacer con la información (CRUD)
 *              - GET -> represeta la obtención/lectura de la información
 *                  ** Cuando ponemos una url en el navegador, ES UN GET por defecto
 *              - POST -> representa la creación de la información
 *              - PUT -> Representa la actualización del contenido, sustituyendo el valor anterior
 *              - PATCH -> Representa la actualización del contenido, solo acutalizando las propiedades de la info que yo quiera
 *                      ** Partial Update
 *              - DELETE -> Representa la eliminación del contenido
 * 
 *      * Headers (cabeceras): Representan información extra de la petición 
 *              - <clave>:<valor>
 *              - Cabeceras básicas que van en todas las peticiones:
 *                  - origin: es la dirección de quien está haciendo la petición
 *                  - content-type: indica el formato en el que va la petición
 *              - Cookies: Se mandas solas por el navegador 
 *              - Cabeceras de autenticación: (veremos más tarde)
 * 
 *      * Body (cuerpo): Datos de la petición 
 *              - Hay varios formatos. El más típico actualmente es JSON.
 * 
 *  - Response === Repuesta del que le pedi la información
 * 
 *      * Código/status de respuesta: Código numérico
 *          100-199: Es una respuesta informativa
 *          200-299: OK. La petición se ha realizado corretamente
 *          300-399: Redirección o caché
 *          400-499: Error "del usuario (cliente)"
 *          500-599: Error "del servidor"
 *      * Cabeceras: Idem a las de petición pero para la respuesta
 *      * Cuerpo de la respuesta: Información del recurso que estoy solicitando
 *              ** Es decir los datos.
 * 
 * 
 * 
 *  ** ¿Cómo puedo hacer operaciones con los datos en mi web?
 *          - Realizar una llamada HTTP(S)
 * 
 *  ** ¿Cómo realizo una llamada HTTP en la web?
 *          - utilizando el método "fetch"
 *          - existe otra forma (antigua) que es "XMLHttpRequest"
 *          - Una petición HTTP en un navegador es ASINCRONA
 *              - fetch soluciona la asincronia utilizando "promesas"
 *              - XMLHttpRequest soluciona la asincronía utilizanod "callbacks"
 * 
 *  ** fetch - método para realizar peticiones HTTP y solicitudes de operaciones sobre información.
 *          - Es una función. typeOf de fetch === 'function'
 *          - ¿Qué puedo hacer con una función? "Cosas de funciones"
 *              - Invocarla/llamarla
 *              - Enviar parámetros de entrada
 *              - Recuperar su parámetro de salida
 *          - ¿Cuáles son sus parmámetros de entrada?
 *              - URL: String o request
 *              - Options: Object
 *                  - Método HTTP: String 
 *                  - Cabeceras: Objectde tipo headers
 *                  - Body: JSON.stringify(object). Suele ir solo en POST, PUT o PATCH
 *          - ¿Qué respuesta devuelve la función 'fetch'?
 *                  - Devuelve una promesa
 *                  - .then() nos ayuda a gestionar esa promesa
 *                      - callbackOK, callbackKO
 *                  - .catch() nos ayuda a gestionar excepciones
 *                  - Si yo tengo alguna acción que depende de la respuesta del servidor, como es asíncrono debo meterlo dentro del then
 *                  - En el primer then TENEMOS la respuesta pero NO tenemos los datos-
 *                      * Tenemosque ejecutar el método para procesar el formato
 *                              ** res.json() // formatea la respuedta en JSON
 *                              ** res.text() // formatea la respuesta en texto plano
 *                      * Este método de formato devuelve una PROMESA
 *                              ** Por ese motivo para tener los datos en un fetch hay que hacer 2 then encadenados
 * 
 *  ** CORS y method options
 *  
 */                 



console.log('antes del Fetch');
fetch('https://www.google.com').then(console.log);
console.log('Despues del fetch');