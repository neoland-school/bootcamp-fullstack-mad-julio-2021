import React from "react";
import { Link } from "react-router-dom";
import PaginaDos from "../pagina-dos";
import Task from "../../components/task";
import ContadorButton from '../../components/contadorHook';
import MyBox from '../../components/exercise_hook2';
import ExerciseHookCustom from '../../components/ej_hook_customizado';
import ExercisesUseState from '../../components/exercises_useState';
import ParrafoUseState from '../../components/another-useStateExerc';
import ListaComponent from '../../components/form-hook-exerc';
import { styled } from '@material-ui/core/styles'; //API de Styled components
import Button from '@material-ui/core/Button';
import './style.css';

const MyButton = styled(Button)({
  background: 'aqua',
  color: 'black',
  '&:hover': {
    background: 'red',
}
});


function PaginaUno() {


  //El que envia
  return (
    <div className="main-container">
    <div>
      <h2 className='mini-container'>Mi enlace con Query Params</h2>

      <Link to="/pages/PaginaDos/?parrafo=Veronica">Mi pagina dos</Link>
      <PaginaDos />
      </div>
      <div className='mini-container'>
      <h3 className="title-container">Esta es mi cajita de la task haciendo comunicación padre a hijo con las props</h3>
      <Task title="Debo volver a repasar la algoritmia" id="1" date="03/08/2021 20:30:11" status="done"></Task>
      <Task title="Debo estudiar más" id="2" date="04/08/2021 20:30:11" status="undone"></Task>
      </div>
      <div className="mini-container">
      <h3 className="title-container">Este es mi contador con el Hook useState</h3>
        <ContadorButton></ContadorButton>
        </div>
        <div className="mini-container">
        <h3 className="title-container">Este es mi cambio de color en el div con el Hook useState y el useEffect (Tengo dos ejercicios aquí)</h3>
        <MyBox></MyBox>
        </div>
        <div className="mini-container">
        <h3 className="title-container">Este es un ejercicio con Hook Custom</h3>
        <ExerciseHookCustom></ExerciseHookCustom>
        </div>
        <div className="mini-container">
        <h2>MIS EJERCICIOS DEL USE STATE</h2>
        <h3 className="title-container">Crear un componente que tenga un botón que cuando se pulse actualice el color de fondo del botón a rojo</h3>
         <ExercisesUseState></ExercisesUseState>
        </div>
        <div className="mini-container">
        <h3 className="title-container">Crear un componente que pinte en un p lo que el usuario vaya introduciendo en un input</h3>
         <ParrafoUseState></ParrafoUseState>
        </div>
        <div className="mini-container">
        <h3 className="title-container">crear un componente formulario que tenga un input y un botón. El componente tendrá una lista de tareas. Cuando se pulse al botón se añadirá una tarea a la lista. Por ultimo el componente tiene que pintar la lista de tareas (no maquetar nada solo HTML)</h3>
        <ListaComponent></ListaComponent>
        </div>       
        <div className="mini-container">
        <h2>Ejercicio con Material UI</h2>
        <h3 className="title-container">Mi hola mundo de Material UI</h3>
        <MyButton container='variant' color="primary">First Button</MyButton>
        </div>       
    </div>
  );
}

export default PaginaUno;
