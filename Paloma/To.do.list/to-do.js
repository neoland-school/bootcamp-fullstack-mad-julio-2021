//paso 1 ---- añadir elementos a la lista
//  - crear una lista vacia.
//      - dentro del html hacer una lista (ul - estatico por lo que no se mete en js) para poder ir metiendo los elementos deseados
//      - dentro de la lista, los (li - mover a js ya que será algo dinamico).
//  - crear input vacio dentro del HTML --- para que el usuario pueda agregar su info
//  - al lado del input agregar un boton en html que cuando se presione agregue un "task" para agregar contenido a lista
//  - crear una function que vaya añadiendo el elemento deseado a la lista 
//  - incorporar la lista en el JS
// De cada uno de estos pasos quer habeis definido,
// Sacar Que deberia hacer en el HTML para ese paso, que debería hacer en el CSS
// Que debería hacer en el JS para ese paso
/**
 * 1- crear una lista vacia.
 *    - HTML: crear un ul sin li
 *    - CSS: No tengo suficiente informacion, me falta el diseño
 *    - JS: Crear una variable con un array vacio (const ourList = [])
 *
 * 2- crear input vacio dentro del HTML --- para que el usuario pueda agregar su info
 *      - HTML: crear un input usando la etiqueta <input type="text"> y darle un Id
 *      - CSS: se estilizara cuando se sepa que diseño se quiere
 *      - JS: crear variable que almacene los datos del usuario (const ourInput = document.getElementbyId(id))
 *
 * 3- al lado del input agregar un boton en html que cuando se presione agregue un "task" para
 *  agregar contenido a lista
 *
 *   - HTML: crear <button> agregarle Id al button
 *   - CSS : ya se hara
 *   - JS : llamar const button = document.getElementbyId(buttonid)
 *        : escuchar el evento click del button con:
 *               button.addEventListener('click', function(ejem){
 *           })
 *4- function!
 *     -HTML : no se hace nada!
 *     - CSS : no se hace nada!!
 *     - JS:  crear una funcion que añada los elemnetos a la lista cada vez que se haga click (.push)
 *
 *           ¿Que necesitas? El array, el valor
 *           ¿que tipo? array, string. (objeto...?)
 *            ¿como obtengo mis parametros? (posicion del array)
 *
 *             1- recuperar el valor del input (element)
 *             2- añadirlo a la lista  (ourList.push(element))
 *             3 -crear el elmento en el DOM
 *             4-insertar en la lista el elmento creado en el paso 3
 *  
 * 5 - incorporar la lista en el JS
 *    - HTML : No se hace nada en html durante este paso.
 *    - CSS : no se hace nada en css durante este paso.
 *    - JS :   crear un elemento li para que los array que se vayan agregando se vayan incorporando a la lista 
 *              (document.createElement('li' ---- document.getElementbyId(id del li)))
 *              hacer la llamada document.body.appendchild para agregar la lista al body del HTML
 *              si hubiera otro sitio donde quisieramos meter la lista, el appendchild tendria que ser a la seccion
 *              de htmml (div, section etc) = appendchild.div/ appendchild.section y se tendria que hacer
 *              un appendchild de esa seccion al body. 

 *
 */