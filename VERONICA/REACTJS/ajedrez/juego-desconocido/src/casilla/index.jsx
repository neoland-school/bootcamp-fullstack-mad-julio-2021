import './style.css';
import React from 'react';

class Casilla extends React.Component{
  

    render(){
    
    return (<div className='clase_css_casilla' style={{backgroundColor: this.props.backgroundColor}}></div>);
    }
}


export default Casilla;