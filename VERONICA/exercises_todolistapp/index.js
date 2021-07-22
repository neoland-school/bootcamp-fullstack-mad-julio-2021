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
 *      <ul></ul>
 *    - CSS: No tengo suficiente informacion, me falta el diseño
 *    - JS: Crear una variable con un array vacio 
 *      const ourList = [myInput];
 * 
 * 2- crear input vacio dentro del HTML --- para que el usuario pueda agregar su info
 *      - HTML: crear un input usando la etiqueta <input type="text" id=input__Id> 
 *      - CSS: se estilizara cuando se sepa que diseño se quiere
 *      - JS: crear variable que almacene los datos del usuario (const ourInput = document.getElementbyId(input__Id)) 
 * 
 * 3- al lado del input agregar un boton en html que cuando se presione agregue un "task" para
 *  agregar contenido a lista
 * 
 *   - HTML: crear <button id=myBtn></button> agregarle Id al button
 *   - CSS : ya se hara
 *   - JS : llamar const myAddBtn = document.getElementbyId(myBtn)
 *        : escuchar el evento click del button con:
 *               button.addEventListener('click', newElement);
 *          
 *4- function!
 *     -HTML : no se hace nada!
 *     - CSS : no se hace nada!!
 *     - JS:  crear una funcion que añada los elemnetos a la lista cada vez que se haga click (.push)
 *           function newElement(){}; no necesitamos parametros
 *             1- recuperar el valor del input (element) 
 *             let valueInput = document.getElementById('input__Id').value;
 *             let noSeQuePoner = document.createTextNode(valueInput);
 *             2- añadirlo a la lista  
 *             (ourList.push(valueInput))
 *             3 -crear el elmento en el DOM 
 *             const myInput = document.createElement('input');
 *             4-insertar en la lista el elmento creado en el paso 3
 *             myInput.appenchild(ourList.push(valueInput));
 *          
 *             al final de la funcion debe ir  document.getElementById("myInput").valueInput = "";
 * 
 * 5- incorporar la lista en el JS:
 *     -HTML: No se hace nada
 *     - CSS: Tampoco
 *     - JS: 1. se crea la constante para crear el elemento li 
 *          const LIST_ITEM = document.createElement('li');
 *           2. se hace el appenchild con el body
 *          document.body.appenchild(LIST__ITEM);
 * 
 * 
 * 
 *   
 */

 const ourList = [myInput];