import React from 'react';
import './index.css';

class Botones extends React.Component{

    render(){
        return (
            <div className="container-botones">
          
            <button className="button button_1">C</button>
            <button className="button button_2">%</button>
            <button className="button button_3">/</button>
            <button className="button button_4">*</button>
            
            <button className="button button_5">7</button>
            <button className="button button_6">8</button>
            <button className="button button_7">9</button>        
            <button className="button button_8">-</button>
            
            <button className="button button_9">4</button>
            <button className="button button_10">5</button>
            <button className="button button_11">6</button>
            <button className="button button_12 button_add">+</button>
  
    
            <button className="button button_13">1</button>
            <button className="button button_14">2</button>
            <button className="button button_15">3</button>
            <button className="button button_16 button_igual">=</button>
          
  
            <button className="button button_17">0</button>
            <button className="button button_18">.</button>
            <button className="button button_19">Borrar</button>
            
            </div>
        );
    }
   
   }
   
   export default Botones;