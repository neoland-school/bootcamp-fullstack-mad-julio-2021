import React from 'react';
import Pantalla from '../pantalla';
import Botones from '../botones';
import './index.css';

class Calculadora extends React.Component{

render(){
    return (
      <div className="main-calculadora">
       
       <Pantalla></Pantalla>
       <Botones></Botones>
        
      </div>
    );

}
}

export default Calculadora;