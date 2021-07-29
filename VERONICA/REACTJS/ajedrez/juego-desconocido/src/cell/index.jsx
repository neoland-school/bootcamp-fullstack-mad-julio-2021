import React from 'react';
import './style.css';

class Cell extends React.Component{

    render(){
        const inlineStyles = {
            backgroundColor:this.props.bgColor,
        };
        return (
            <div 
                id={this.props.id} 
                className="cell"
                style={inlineStyles}>
               <img src={this.props.img}></img>
            </div>
        );
    }

}

export default Cell;