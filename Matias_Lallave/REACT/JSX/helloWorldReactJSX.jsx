//MI CODIGO DE REACT

'use strict';

//Creamos un componente React de Clase.
//Es de clase porque se utiliza una claseJS para crearlo
//Este componente representa un boton de Like

class HelloButton extends React.Component {
    // Los componentes de clase siempre extienden de React.Component
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    Hello JSX
                </p>
                <a href="www.google.com">Ir a Google</a>
            </div>
        );
    }
}

//Cojo el contenedor que yo quiero utilizar para React
const domContainer = document.getElementById('MY_FIRST_REACT_APP');
//Llamo a la funcion render de ReactDOM,
//Necesito el nombre de la clase del componente a renderizar
//necesito el nodo del DOM contenedor donde lo quiero pintar
ReactDOM.render(React.createElement(HelloButton), domContainer);