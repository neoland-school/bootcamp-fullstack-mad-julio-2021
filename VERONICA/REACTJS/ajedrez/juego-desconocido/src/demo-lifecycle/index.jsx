import React from 'react';



class DemoLifeCycle extends React.Component{

    constructor(){
        super();
        alert('CONSTRUCTOR');
        this.state = {
            demo: 'Texto de prueba'
        }
    }

    componentDidMount(){
        alert('COMPONENT DID MOUNT');
    }

    componentDidUpdate(){
        alert('COMPONENT DID UPDATE');
    }

    componentWillUnmount(){
        alert('COMPONENT WILL UNMOUNT');
    }

    componentDidCatch(){
        alert('COMPONENT DID CATCH');
    }

    shouldComponentUpdate(){
        alert('COMPONENT SHOULD UPDATE');
        return false;
    }


    render(){
        alert('RENDER');
        return (
          <div>
            <button onClick={() => this.setState({demo:'Demo Actualizado'})}>Actualizame</button>
            <p>{this.state.demo}</p>
          </div>
        )
    }

}


export default DemoLifeCycle;