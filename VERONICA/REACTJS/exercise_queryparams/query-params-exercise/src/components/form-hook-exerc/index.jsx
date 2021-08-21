// crear un componente formulario que tenga un input y un botón. El componente tendrá una lista de tareas. Cuando se pulse al botón se añadirá una tarea a la lista. Por ultimo el componente tiene que pintar la lista de tareas (no maquetar nada solo HTML)
import React from 'react';
import {useState} from 'react';


function ListaComponent (){
    const [lista, addLista] = useState([]);


    return (
        <React.Fragment>
        <form onSubmit={(event)=>{
          event.preventDefault();
          console.log(event);
         addLista([...lista,{title: event.target[0].value}]);
        }}>
        <input type='text'></input>
        <button type='submit'>Add</button>
        </form>
        <ol>
         {lista.map((value, index)=> <li key={index}>{value.title}</li> //Devuelve nodo del DOM vacio
          )}
        </ol>
        </React.Fragment>
       );
    }
    
    export default ListaComponent;