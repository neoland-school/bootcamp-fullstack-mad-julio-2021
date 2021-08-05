import React from "react";
import { Link } from "react-router-dom";
import PaginaDos from "../pagina-dos";
import Task from "../../components/task";
import ContadorButton from '../../components/contadorHook';
import MyBox from '../../components/exercise_hook2';
import ExerciseHookCustom from '../../components/ej_hook_customizado';
import './style.css';
  

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
    </div>
  );
}

export default PaginaUno;
