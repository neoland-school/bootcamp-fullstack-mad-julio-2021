import './style.css';
import Casilla from '../casilla';
import React from 'react';


class Fila extends React.Component{
    render(){

        let myRow = Array(8).fill(<Casilla></Casilla>);

                      
          return (<div className='fila_css' >{myRow}</div>);
}
}

export default Fila;

